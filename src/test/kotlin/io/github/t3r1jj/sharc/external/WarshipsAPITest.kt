package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.Ship
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class WarshipsAPITest {

    private val api = WarshipsAPI()

    @Test
    fun loadBasicInfo() {
        api.loadBasicInfo {
            assertFalse(api.gameVersion.isNullOrBlank(), "Game version should be loaded")
            assertFalse(api.shipNations == null, "Ship nations should be loaded")
            assertFalse(api.shipTypes == null, "Ship types should be loaded")
            assertFalse(api.shipTiers.isEmpty(), "Tiers should be loaded")
        }
    }

    @Test
    fun loadShips() {
        api.loadBasicInfo { }
        val shipsSelection = WarshipsAPI.ShipsSelection("usa", "Destroyer")
        api.loadShips(shipsSelection, {
            assertFalse(api.ships[shipsSelection] == null || api.ships[shipsSelection]!!.isEmpty(), "Selected ships should be loaded")
        })
    }

    @Test
    fun loadShipModules() {
        val ship = Ship("4179572528", "Großer Kurfürst", 10)
        ship.fireControls.put("3339104048", null)
        api.loadShipModules(listOf(ship), {
            assertTrue(ship.fireControls.isNotEmpty(), "Fire controls should not be empty")
            ship.fireControls.forEach { fc -> assertFalse(fc.value == null, "Ranges should be loaded") }
        })
    }

    @Test
    fun loadShipArtillery() {
        val ship = Ship("4179572528", "Großer Kurfürst", 10)
        ship.artilleryShells.put("3336548144", null)
        ship.artilleryShells.put("3337596720", null)
        api.loadShipArtillery(ship, {
            assertTrue(ship.artilleryShells.isNotEmpty(), "Artillery should not be empty")
            ship.artilleryShells.forEach { fc -> assertFalse(fc.value == null, "Ship artillery shells should be loaded") }
            ship.artilleryShells.forEach { fc -> fc.value!!.forEach { shell -> assertFalse(shell.type == null, "Shell types should be loaded") } }
        })
    }
}