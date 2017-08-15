package io.github.t3r1jj.sharc

import kotlin.js.Math

class Shell (val D: Double, val m: Double, val vInit: Double) {
    val cD = 0.321
    val cwQuad = 1
    val cwLin = 100+1000/3*D
    val k = 0.5 * cD * (D/2) * (D/2) * Math.PI / m
    var name : String? = null
    var type : Type? = null

    enum class Type {
        AP, HE
    }
}