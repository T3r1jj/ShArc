package io.github.t3r1jj.sharc.model

import kotlin.js.Math

class Ship constructor(val id: String, val name: String, val tier: Int) {
    val shellCalculators = HashMap<Shell, Calculator>()
    val hullArtilleryShells: HashMap<Hull, HashMap<String, Array<Shell>?>> = HashMap()
    val fireControls: HashMap<String, Double?> = HashMap()
    var isPremium = false
    var isDemo = false

    fun initCalculators() {
        if (isInitialized()) {
            return
        }
        for (fireControl in fireControls) {
            fireControlsRange = Math.max(fireControlsRange, fireControl.value ?: 0.0)
        }
        maxRange = fireControlsRange * 1.2
        hullArtilleryShells.forEach { (hull, artilleryShells) ->
            artilleryShells.forEach { artilleryShell ->
                artilleryShell.value!!.forEach { shell ->
                    val previousCalculator = shellCalculators.put(shell, Calculator(shell, maxRange))
                    if (!shell.info.hulls.contains(hull)) {
                        shell.info.hulls.add(hull)
                    }
                    previousCalculator?.let {
                        aggregateShellInfo(shell, previousCalculator.shell, hull)
                    }
                }
            }
        }
    }

    private fun aggregateShellInfo(shell: Shell, previousShell: Shell, hull: Hull) {
        shell.info.hulls = previousShell.info.hulls
        shell.info.types = previousShell.info.types
        if (!shell.info.types.contains(previousShell.type!!)) {
            shell.info.types.add(previousShell.type!!)
        }
    }

    private fun isInitialized(): Boolean = !shellCalculators.isEmpty()

    fun isLoaded(): Boolean = isArtilleryLoaded() && isFireControlsLoaded()

    fun isArtilleryLoaded(): Boolean = !hullArtilleryShells.flatMap { artilleryShells -> artilleryShells.value.values }.contains(null)

    fun isFireControlsLoaded(): Boolean = !fireControls.values.contains(null)

    var icon: String? = null
    var nation: String? = null

    var maxRange: Double = 0.0
    var fireControlsRange: Double = 0.0

    fun getTier() = when (tier) {
        1 -> "I"
        2 -> "II"
        3 -> "III"
        4 -> "IV"
        5 -> "V"
        6 -> "VI"
        7 -> "VII"
        8 -> "VIII"
        9 -> "IX"
        10 -> "X"
        else -> "nulla"
    }

}