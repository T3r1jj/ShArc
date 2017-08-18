package io.github.t3r1jj.sharc

import kotlin.js.Math

class Ship constructor(val id: String, val name: String, val tier: Int) {
    val shellCalculators = HashMap<Shell, Calculator>()

    val artilleryShells: HashMap<String, Array<Shell>?> = HashMap()
    val fireControls: HashMap<String, Double?> = HashMap()
    fun initCalculators() {
        var maxRange = 0.0
        for (fireControl in fireControls) {
            maxRange = Math.max(fireControl.value!!)
        }
        artilleryShells.forEach { artilleryShell ->
            var maxArtilleryRange = 0.0
            RangeMod.values().map { rangeMod -> rangeMod.modifyRange(maxRange, artilleryShells.values.first()!!.first()) }.forEach { range -> maxArtilleryRange = Math.max(maxArtilleryRange, range) }
            artilleryShell.value!!.forEach { shell ->
                shellCalculators.put(shell, Calculator(shell, maxArtilleryRange))
            }
        }
    }

    fun isInitialized(): Boolean = !shellCalculators.isEmpty()

    fun isLoaded(): Boolean = isArtilleryLoaded() && isFireControlsLoaded()

    fun isArtilleryLoaded(): Boolean = !artilleryShells.values.contains(null)

    fun isFireControlsLoaded(): Boolean = !fireControls.values.contains(null)

    var icon: String? = null
    var nation: String? = null

    fun getNation(): Nation = Nation.getEnum(nation!!)

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

