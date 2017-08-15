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
            artilleryShell.value!!.forEach { shell ->
                shellCalculators.put(shell, Calculator(shell, maxRange)) }
        }
    }

    var icon: String? = null


}

