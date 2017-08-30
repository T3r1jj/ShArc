package io.github.t3r1jj.sharc.external

import io.github.t3r1jj.sharc.model.Hull
import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class WarshipsAPITest {

    @Test
    fun loadBasicInfo() {
        val api = WarshipsAPI()
        api.loadBasicInfo {
            assertFalse(api.gameVersion.isBlank(), "Game version should be loaded")
            assertFalse(api.shipNations == null, "Ship nations should be loaded")
            assertFalse(api.shipTypes == null, "Ship types should be loaded")
        }
    }

    @Test
    fun loadShips() {
        val api = WarshipsAPI()
        api.loadBasicInfo {
            val shipsSelection = WarshipsAPI.ShipsSelection("usa", "Destroyer")
            api.loadShips(shipsSelection, {
                assertFalse(api.ships[shipsSelection] == null || api.ships[shipsSelection]!!.isEmpty(), "Selected ships should be loaded")
            })
        }
    }

    @Test
    fun loadShipModules() {
        val api = WarshipsAPI()
        val ship = Ship("4179572528", "Großer Kurfürst", 10)
        ship.fireControls.put("3339104048", null)
        api.loadShipModules(listOf(ship), {
            assertTrue(ship.fireControls.isNotEmpty(), "Fire controls should not be empty")
            ship.fireControls.forEach { fc -> assertFalse(fc.value == null, "Ranges should be loaded") }
        })
    }

    @Test
    fun loadShipArtillery() {
        val api = WarshipsAPI()
        val ship = Ship("4179572528", "Großer Kurfürst", 10)
        val artilleryShells = HashMap<String, Array<Shell>?>()
        artilleryShells.put("3336548144", null)
        artilleryShells.put("3337596720", null)
        ship.hullArtilleryShells.put(Hull("3339464496"), artilleryShells)
        api.loadShipArtillery(ship, {
            assertTrue(artilleryShells.isNotEmpty(), "Artillery should not be empty")
            artilleryShells.forEach { fc -> assertFalse(fc.value == null, "Ship artillery shells should be loaded") }
            artilleryShells.forEach { fc -> fc.value!!.forEach { shell -> assertFalse(shell.type == null, "Shell types should be loaded") } }
        })
    }
}