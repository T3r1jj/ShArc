package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.Shell
import io.github.t3r1jj.sharc.Ship
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json

class WarshipsAPI {
    private val APP_ID = "14f8896369d75d00facabd7efb875317"
    private val ROOT_URL = "https://api.worldofwarships.eu/wows"

    private val BASIC_INFO_ENDPOINT = "$ROOT_URL/encyclopedia/info/?application_id=$APP_ID&fields=ship_types%2Cship_nations%2Cgame_version"
    private fun WARSHIP_NAMES_ENPOINT(nation: String, type: String): String =
            "$ROOT_URL/encyclopedia/ships/?application_id=$APP_ID&fields=name%2C+tier%2Cimages.small%2Cmodules.artillery%2Cmodules.fire_control&type=$type&nation=$nation"

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

    private fun WARSHIP_ARTILLERY_ENDPOINT(shipId: String, artilleryId: String): String = "$ROOT_URL/encyclopedia/shipprofile/?application_id=$APP_ID&ship_id=$shipId&artillery_id=$artilleryId&fields=artillery.shells.name%2C+artillery.slots.name%2C+artillery.shells.bullet_speed%2C+artillery.shells.bullet_mass%2C+artillery.shells.type"

    var gameVersion: String = ""
    var shipTypes: dynamic = null
    var shipNations: dynamic = null

    fun getShipNations(): Map<String, String> = jsonToMap(shipNations)
    fun getShipTypes(): Map<String, String> = jsonToMap(shipTypes)
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
            return
        }
        get(WARSHIP_NAMES_ENPOINT(shipsSelection.nation, shipsSelection.type), { json ->
            val loadedShips = ArrayList<Ship>()
            for ((id, shipData) in jsonToDynamicMap(json.data)) {
                val ship = Ship(id, shipData.name, shipData.tier)
                ship.nation = shipNations[shipsSelection.nation]
                ship.icon = shipData.images.small
                for (artillery in shipData.modules.artillery as Array<Long>) {
                    ship.artilleryShells.put(artillery.toString(), null)
                }
                for (fireControl in shipData.modules.fire_control as Array<Long>) {
                    ship.fireControls.put(fireControl.toString(), null)
                }
                loadedShips.add(ship)
            }
            ships.put(shipsSelection, loadedShips.toTypedArray())
            callback()
        })
    }

    fun loadShip(ship: Ship, callback: () -> Unit) {
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
        for ((artilleryId, value) in ship.artilleryShells) {
            if (value == null) {
                get(WARSHIP_ARTILLERY_ENDPOINT(ship.id, artilleryId), { json ->
                    val artillery = json.data[ship.id].artillery
                    val shellsJson = jsonToDynamicMap(artillery.shells)
                    val shells = ArrayList<Shell>()
                    for (shellJson in shellsJson) {
                        val shellName = shellJson.value.name
                        val shell = Shell(artillery.slots["0"].name.toString().split(" ")[0].toDouble() / 1000, shellJson.value.bullet_mass, shellJson.value.bullet_speed)
                        shell.type = shellJson.value.type
                        shell.name = shellName
                        shells.add(shell)
                    }
                    ship.artilleryShells.put(artillery.slots["0"].name, shells.toTypedArray())
                    ship.artilleryShells.remove(artilleryId)
                    if (ship.isArtilleryLoaded()) {
                        ship.initCalculators()
                        callback()
                    }
                })
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
            val data = jsonToDynamicMap(json.data)
            for (ship in ships) {
                for ((moduleId, value) in ship.fireControls) {
                    if (value == null) {
                        val module = data[moduleId]
                        ship.fireControls.put(module.name.toString(), module.profile.fire_control.distance)
                        ship.fireControls.remove(moduleId)
                    }
                }
            }
            callback()
        })
    }

    private fun jsonToDynamicMap(json: Json): Map<String, dynamic> {
        val map: MutableMap<String, dynamic> = linkedMapOf()
        for (key in js("Object").keys(json)) {
            map.put(key, json[key])
        }
        return map
    }

    private fun jsonToMap(json: Json): Map<String, String> {
        val map: MutableMap<String, String> = linkedMapOf()
        for (key in js("Object").keys(json)) {
            map.put(key, json[key] as String)
        }
        return map
    }

    data class ShipsSelection(val nation: String, val type: String)
}