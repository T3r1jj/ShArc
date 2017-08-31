package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.model.Hull
import io.github.t3r1jj.sharc.model.Ship
import io.github.t3r1jj.sharc.utils.JsonUtils

class ShipParser(private val shipNations: dynamic) {

    private lateinit var ship: Ship
    private lateinit var artilleryIds: Array<Long>

    fun parseShip(id: String, shipData: dynamic, shipsSelection: WarshipsAPI.ShipsSelection): Ship {
        ship = Ship(id, shipData.name, shipData.tier)
        ship.nation = shipNations[shipsSelection.nation]
        ship.icon = shipData.images.small
        ship.isPremium = shipData.is_premium
        ship.isDemo = shipData.has_demo_profile
        ship.icon = shipData.images.small
        artilleryIds = shipData.modules.artillery as Array<Long>
        for (fireControl in shipData.modules.fire_control as Array<Long>) {
            ship.fireControls.put(fireControl.toString(), null)
        }
        for (hull in shipData.modules.hull as Array<Long>) {
            ship.hullArtilleryShells.put(Hull(hull.toString()), HashMap())
        }
        parseDefaultArt(shipData)
        parseHullUpgrToArt(shipData)
        parseArtUpgrToArt(shipData)
        parseHullUpgrToHull(shipData)
        return ship
    }

    private fun parseArtUpgrToArt(shipData: dynamic) {
        for ((moduleId, moduleData) in JsonUtils.jsonToDynamicMap(shipData.modules_tree)) {
            val artilleryId = artilleryIds.find { artilleryId -> artilleryId.toString() == moduleId }
            artilleryId?.let {
                if (moduleData.next_modules != null) {
                    (moduleData.next_modules as Array<Long>)
                            .filter { artilleryIds.contains(it) }
                            .forEach { upgrId -> ship.hullArtilleryShells.entries.find { it.value.keys.contains(artilleryId.toString()) }?.value?.put(upgrId.toString(), null) }
                }
            }
        }
    }

    private fun parseHullUpgrToArt(shipData: dynamic) {
        for ((moduleId, moduleData) in JsonUtils.jsonToDynamicMap(shipData.modules_tree)) {
            val hull = ship.hullArtilleryShells.keys.find { (hull) -> hull == moduleId }
            hull?.let {
                if (moduleData.next_modules != null) {
                    (moduleData.next_modules as Array<Long>)
                            .filter { artilleryIds.contains(it) }
                            .forEach { ship.hullArtilleryShells[hull]?.put(it.toString(), null) }
                }
            }
        }
    }

    private fun parseDefaultArt(shipData: dynamic) {
        for ((moduleId, moduleData) in JsonUtils.jsonToDynamicMap(shipData.modules_tree)) {
            val artilleryId = artilleryIds.find { artilleryId -> artilleryId.toString() == moduleId }
            artilleryId?.let {
                if (moduleData.is_default as Boolean) {
                    ship.hullArtilleryShells.entries.forEach { (_, artilleryShells) -> artilleryShells.put(artilleryId.toString(), null) }
                }
            }
        }
    }

    private fun parseHullUpgrToHull(shipData: dynamic) {
        ship.hullArtilleryShells.keys.forEach {
            for ((moduleId, moduleData) in JsonUtils.jsonToDynamicMap(shipData.modules_tree)) {
                val hull = ship.hullArtilleryShells.keys.find { (hull) -> hull == moduleId }
                hull?.let {
                    if (moduleData.next_modules != null) {
                        (moduleData.next_modules as Array<Long>)
                                .flatMap { ship.hullArtilleryShells.entries.filter { hullEntry -> hullEntry.key.id == it.toString() } }
                                .forEach { upgrHull ->
                                    upgrHull.value.putAll(ship.hullArtilleryShells[hull]!!)
                                }
                    }
                    hull.name = moduleData.name
                }
            }
        }
    }
}