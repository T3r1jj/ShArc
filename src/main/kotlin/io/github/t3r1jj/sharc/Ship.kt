package io.github.t3r1jj.sharc

import kotlin.js.Math

class Ship constructor(val id: String, val name: String, val tier: Int) {
    val shellCalculators = HashMap<Shell, Calculator>()
    val hullArtilleryShells: HashMap<Hull, HashMap<String, Array<Shell>?>> = HashMap()
    val fireControls: HashMap<String, Double?> = HashMap()
    var isPremium = false
    var isDemo = false

    fun initCalculators() {
        var maxRange = 0.0
        for (fireControl in fireControls) {
            maxRange = Math.max(fireControl.value!!)
        }
        hullArtilleryShells.forEach { (hull, artilleryShells) ->
            artilleryShells.forEach { artilleryShell ->
                var maxArtilleryRange = 0.0
                RangeMod.values().map { rangeMod -> rangeMod.modifyRange(maxRange, artilleryShells.values.first()!!.first()) }.forEach { range -> maxArtilleryRange = Math.max(maxArtilleryRange, range) }
                artilleryShell.value!!.forEach { shell ->
                    val previousCalculator = shellCalculators.put(shell, Calculator(shell, maxArtilleryRange))
                    previousCalculator?.let {
                        aggregateShellInfo(shell, previousCalculator.shell, hull)
                    }
                }
            }
        }
    }

    private fun aggregateShellInfo(shell: Shell, previousShell: Shell, hull: Hull) {
        shell.info.hulls = previousShell.info.hulls
        if (!shell.info.hulls.contains(hull)) {
            shell.info.hulls.add(hull)
        }
        shell.info.types = previousShell.info.types
        if (!shell.info.types.contains(previousShell.type!!)) {
            shell.info.types.add(previousShell.type!!)
        }
    }

    fun isInitialized(): Boolean = !shellCalculators.isEmpty()

    fun isLoaded(): Boolean = isArtilleryLoaded() && isFireControlsLoaded()

    fun isArtilleryLoaded(): Boolean = !hullArtilleryShells.flatMap { artilleryShells -> artilleryShells.value.values }.contains(null)

    fun isFireControlsLoaded(): Boolean = !fireControls.values.contains(null)

    var icon: String? = null
    var nation: String? = null

    fun getMaxRange(): Double = fireControls.maxBy { fireControl -> fireControl.value!! }!!.value!!

    fun getNation(): Nation = Nation.getEnum(nation!!)

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

    enum class RangeMod(private val modifier: Double) {
        AFT(1.2),
        SPOTTING_AIRCRAFT(1.2) {
            override fun modifyRange(range: Double, shell: Shell): Double {
                return if (shell.D <= 0.139) {
                    super.modifyRange(range, shell)
                } else {
                    range
                }
            }
        };

        internal open fun modifyRange(range: Double, shell: Shell): Double = range * modifier

    }

    enum class Nation {
        GERMANY, UK, OTHER;

        companion object {
            fun getEnum(id: String): Nation = when (id) {
                "germany" -> GERMANY
                "uk" -> UK
                else -> OTHER
            }
        }
    }
}