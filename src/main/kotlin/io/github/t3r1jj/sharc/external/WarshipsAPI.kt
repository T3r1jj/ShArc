package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import io.github.t3r1jj.sharc.utils.JsonUtils
import org.w3c.xhr.XMLHttpRequest

class WarshipsAPI {
    private val APP_ID = "14f8896369d75d00facabd7efb875317"
    private val ROOT_URL = "https://api.worldofwarships.eu/wows"

    private val BASIC_INFO_ENDPOINT = "$ROOT_URL/encyclopedia/info/?application_id=$APP_ID&fields=ship_types%2Cship_nations%2Cgame_version"
    private fun WARSHIP_NAMES_ENPOINT(nation: String, type: String): String =
            "$ROOT_URL/encyclopedia/ships/?application_id=$APP_ID&fields=name%2Ctier%2Cmodules.hull%2Cimages.small%2Cmodules.artillery%2Cmodules.hull%2Cmodules.fire_control%2Cmodules_tree.is_default%2Cmodules_tree.name%2Cmodules_tree.next_modules%2Cis_premium%2Chas_demo_profile&type=$type&nation=$nation"

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

    fun getShipNations(): Map<String, String> = JsonUtils.jsonToMap(shipNations)
    fun getShipTypes(): Map<String, String> = JsonUtils.jsonToMap(shipTypes)
    var ships = HashMap<ShipsSelection, Array<Ship>>()

    fun getShips(shipsSelection: ShipsSelection): Array<Ship> = ships[shipsSelection]!!

    fun getShip(id: String): Ship =
            ships.values.flatMap { shipsArray -> shipsArray.asIterable() }.first { ship -> ship.id == id }

    private fun get(url: String, callback: (dynamic) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.onreadystatechange = {
            if (xmlHttp.readyState.equals(4) && xmlHttp.status.equals(200))
                callback(JSON.parse(xmlHttp.responseText))
        }
        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)
    }

    fun loadBasicInfo(callback: () -> Unit) {
        get(BASIC_INFO_ENDPOINT, { json ->
            gameVersion = json.data.game_version
            shipTypes = json.data.ship_types
            shipNations = json.data.ship_nations
            callback()
        })
    }

    fun loadShips(shipsSelection: ShipsSelection, callback: () -> Unit) {
        if (ships[shipsSelection] != null) {
            callback()
            return
        }
        get(WARSHIP_NAMES_ENPOINT(shipsSelection.nation, shipsSelection.type), { json ->
            console.log(json)
            val loadedShips = ArrayList<Ship>()
            for ((id, shipData) in JsonUtils.jsonToDynamicMap(json.data)) {
                val ship = ShipParser(shipNations).parseShip(id, shipData, shipsSelection)
                loadedShips.add(ship)
            }
            loadedShips.sortBy { ship -> ship.tier }
            ships.put(shipsSelection, loadedShips.toTypedArray())
            callback()
        })
    }



    fun loadShip(ship: Ship, callback: () -> Unit) {
        if (ship.isLoaded()) {
            callback()
            return
        }
        loadShipModules(listOf(ship), {
            if (ship.isLoaded()) {
                callback()
            }
        })
        loadShipArtillery(ship, {
            if (ship.isLoaded()) {
                callback()
            }
        })
    }


    fun loadShipArtillery(ship: Ship, callback: () -> Unit) {
        if (ship.isArtilleryLoaded()) {
            callback()
            return
        }
        for ((hull, artilleryShells) in ship.hullArtilleryShells) {
            for ((artilleryId, shells) in artilleryShells) {
                if (shells == null) {
                    get(WARSHIP_ARTILLERY_ENDPOINT(ship.id, hull.id, artilleryId), { json ->
                        val artillery = json.data[ship.id].artillery
                        val shellsJson = JsonUtils.jsonToDynamicMap(artillery.shells)
                        val shells = ArrayList<Shell>()
                        for (shellJson in shellsJson) {
                            val shellName = shellJson.value.name
                            val shell = Shell(artillery.slots["0"].name.toString().split(" ")[0].toDouble() / 1000, shellJson.value.bullet_mass, shellJson.value.bullet_speed)
                            shell.type = shellJson.value.type
                            shell.name = shellName
                            shells.add(shell)
                        }
                        artilleryShells.put(artillery.slots["0"].name, shells.toTypedArray())
                        artilleryShells.remove(artilleryId)
                        if (ship.isArtilleryLoaded()) {
                            ship.initCalculators()
                            callback()
                        }
                    })
                }
            }
        }
    }

    fun loadShipModules(ships: List<Ship>, callback: () -> Unit) {
        val moduleIds = ArrayList<String>()
        for (ship in ships) {
            for ((moduleId, value) in ship.fireControls) {
                if (value == null) {
                    moduleIds.add(moduleId)
                }
            }
        }
        if (moduleIds.isEmpty()) {
            callback()
            return
        }
        get(WARSHIP_MODULES_ENDPOINT(moduleIds), { json ->
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
            callback()
        })
    }

    data class ShipsSelection(val nation: String, val type: String)
}

