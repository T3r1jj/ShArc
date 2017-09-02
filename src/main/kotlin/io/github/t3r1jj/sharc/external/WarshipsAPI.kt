package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import io.github.t3r1jj.sharc.utils.JsonUtils

class WarshipsAPI {
    companion object {
        private val HTTP_CLIENT = HTTPClient(10)
    }

    private val APP_ID = "14f8896369d75d00facabd7efb875317"
    private val ROOT_URL = "https://api.worldofwarships.eu/wows"

    private val BASIC_INFO_ENDPOINT = "$ROOT_URL/encyclopedia/info/?application_id=$APP_ID&fields=ship_types%2Cship_nations%2Cgame_version"
    private fun WARSHIP_NAMES_ENPOINT(nation: String, type: String): String =
            "$ROOT_URL/encyclopedia/ships/?application_id=$APP_ID&fields=name%2Ctier%2Cmodules.hull%2Cimages.small%2Cmodules.artillery%2Cmodules.hull%2Cmodules.fire_control%2Cmodules_tree.is_default%2Cmodules_tree.name%2Cmodules_tree.next_modules%2Cis_premium%2Chas_demo_profile%2Cimages.small&type=$type&nation=$nation"

    private fun WARSHIP_MODULES_ENDPOINT(moduleIds: List<String>): String {
        val endpoint = "$ROOT_URL/encyclopedia/modules/?application_id=$APP_ID"
        var modulesParam = "&module_id="
        var prefix = ""
        for (moduleId in moduleIds) {
            modulesParam += prefix + moduleId
            prefix = ","
        }
        return endpoint + modulesParam
    }

    private fun WARSHIP_ARTILLERY_ENDPOINT(shipId: String, hullId: String, artilleryId: String): String = "$ROOT_URL/encyclopedia/shipprofile/?application_id=$APP_ID&ship_id=$shipId&hull_id=$hullId&artillery_id=$artilleryId&fields=artillery.shells.name%2Cartillery.slots.name%2Cartillery.shells.bullet_speed%2Cartillery.shells.bullet_mass%2Cartillery.shells.type"

    var gameVersion: String = ""
    var shipTypes: dynamic = null
    var shipNations: dynamic = null

    fun getShipNations(): Map<String, String> = JsonUtils.jsonToMap(shipNations).toList().sortedBy { (_, value) -> value }.reversed().toMap()
    fun getShipTypes(): Map<String, String> = JsonUtils.jsonToMap(shipTypes).toList().sortedBy { (_, value) -> value }.reversed().toMap()
    var ships = HashMap<ShipsSelection, Array<Ship>>()

    fun getShips(shipsSelection: ShipsSelection): Array<Ship> = ships[shipsSelection]!!.reversedArray()

    fun getShip(id: String): Ship =
            ships.values.flatMap { shipsArray -> shipsArray.asIterable() }.first { ship -> ship.id == id }


    fun loadBasicInfo(callback: (Throwable?) -> Unit) {
        HTTP_CLIENT.get(BASIC_INFO_ENDPOINT, { json ->
            try {
                parseBasicInfo(json)
                callback(null)
            } catch (e: Throwable) {
                callback(e)
            }
        })
    }

    private fun parseBasicInfo(json: dynamic) {
        gameVersion = json.data.game_version
        shipTypes = json.data.ship_types
        shipNations = json.data.ship_nations
    }

    fun loadShips(shipsSelection: ShipsSelection, callback: (Throwable?) -> Unit) {
        if (ships[shipsSelection] != null) {
            callback(null)
            return
        }
        HTTP_CLIENT.get(WARSHIP_NAMES_ENPOINT(shipsSelection.nation, shipsSelection.type), { json ->
            try {
                parseShips(json, shipsSelection)
                callback(null)
            } catch (e: Throwable) {
                callback(e)
            }
        })
    }

    private fun parseShips(json: dynamic, shipsSelection: ShipsSelection) {
        val loadedShips = ArrayList<Ship>()
        for ((id, shipData) in JsonUtils.jsonToDynamicMap(json.data)) {
            val ship = ShipParser(shipNations).parseShip(id, shipData, shipsSelection)
            loadedShips.add(ship)
        }
        loadedShips.sortBy { ship -> ship.tier }
        ships.put(shipsSelection, loadedShips.toTypedArray())
    }


    fun loadShip(ship: Ship, callback: (Throwable?) -> Unit) {
        if (ship.isLoaded()) {
            callback(null)
            return
        }
        loadShipModules(listOf(ship), { e ->
            if (e != null) {
                callback(e)
            } else if (ship.isLoaded()) {
                callback(null)
            }
        })
        loadShipArtillery(ship, { e ->
            if (e != null) {
                callback(e)
            } else if (ship.isLoaded()) {
                callback(null)
            }
        })
    }


    fun loadShipArtillery(ship: Ship, callback: (Throwable?) -> Unit) {
        if (ship.isArtilleryLoaded()) {
            callback(null)
            return
        }
        for ((hull, artilleryShells) in ship.hullArtilleryShells) {
            for ((artilleryId, shells) in artilleryShells) {
                if (shells == null) {
                    HTTP_CLIENT.get(WARSHIP_ARTILLERY_ENDPOINT(ship.id, hull.id, artilleryId), { json ->
                        try {
                            parseShipArtillery(json, ship.id, artilleryId, artilleryShells)
                            if (ship.isArtilleryLoaded()) {
                                callback(null)
                            }
                        } catch (e: Throwable) {
                            console.log("hull: " + hull)
                            console.log("art: " + artilleryId)
                            console.log("ship: " + ship.id)
                            callback(e)
                        }
                    })
                }
            }
        }
    }

    private fun parseShipArtillery(json: dynamic, shipId: String, artilleryId: String, artilleryShells: HashMap<String, Array<Shell>?>) {
        val artillery = json.data[shipId].artillery
        val shellsJson = JsonUtils.jsonToDynamicMap(artillery.shells)
        val shells = ArrayList<Shell>()
        for (shellJson in shellsJson) {
            val shellArt = artillery.slots["0"].name
            val shell = Shell(shellArt.toString().split(" ")[0].toDouble() / 1000, shellJson.value.bullet_mass, shellJson.value.bullet_speed)
            shell.type = shellJson.value.type
            shell.art = shellArt
            shell.name = shellJson.value.name
            shells.add(shell)
        }
        artilleryShells.put(artillery.slots["0"].name, shells.toTypedArray())
        artilleryShells.remove(artilleryId)
    }

    fun loadShipModules(ships: List<Ship>, callback: (Throwable?) -> Unit) {
        val moduleIds = ArrayList<String>()
        for (ship in ships) {
            for ((moduleId, value) in ship.fireControls) {
                if (value == null) {
                    moduleIds.add(moduleId)
                }
            }
        }
        if (moduleIds.isEmpty()) {
            callback(null)
            return
        }
        HTTP_CLIENT.get(WARSHIP_MODULES_ENDPOINT(moduleIds), { json ->
            try {
                parseShipModules(json, ships)
                callback(null)
            } catch (e: Throwable) {
                callback(e)
            }
        })
    }

    private fun parseShipModules(json: dynamic, ships: List<Ship>) {
        val data = JsonUtils.jsonToDynamicMap(json.data)
        for (ship in ships) {
            for ((moduleId, value) in ship.fireControls) {
                if (value == null) {
                    val module = data[moduleId]
                    ship.fireControls.put(module.name.toString(), (module.profile.fire_control.distance as Double).times(1000))
                    ship.fireControls.remove(moduleId)
                }
            }
        }
    }

    data class ShipsSelection(val nation: String, val type: String)

}

