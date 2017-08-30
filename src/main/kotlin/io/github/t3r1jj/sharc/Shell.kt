package io.github.t3r1jj.sharc

import kotlin.js.Math

class Shell(val D: Double, val m: Double, val vInit: Double) {

    companion object {
        const val krupp = 2216
    }

    val pen = 0.5561613 * krupp / 2400
    val cwQuad = 1
    val cD = 0.321
    val cwLin = 100 + 1000 / 3 * D
    val k = 0.5 * cD * (D / 2) * (D / 2) * Math.PI / m
    var name: String? = null
    var type: Type? = null
    val info: ShellInfo = ShellInfo()

    override fun toString() =
        info.toString() + " (" + name + ")"

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class.js != other::class.js) return false

        other as Shell

        if (D != other.D) return false
        if (m != other.m) return false
        if (vInit != other.vInit) return false
        if (pen != other.pen) return false
        if (cwQuad != other.cwQuad) return false
        if (cD != other.cD) return false
        if (cwLin != other.cwLin) return false
        if (k != other.k) return false

        return true
    }

    override fun hashCode(): Int {
        var result = D.hashCode()
        result = 31 * result + m.hashCode()
        result = 31 * result + vInit.hashCode()
        result = 31 * result + pen.hashCode()
        result = 31 * result + cwQuad
        result = 31 * result + cD.hashCode()
        result = 31 * result + cwLin.hashCode()
        result = 31 * result + k.hashCode()
        return result
    }

    enum class Type {
        AP, HE
    }

    class ShellInfo {
        var hulls = ArrayList<Hull>()
        var types = ArrayList<Type>()

        override fun toString(): String {
            val stringBuilder = StringBuilder(" ")
            var prefix = "["
            hulls.forEach {
                stringBuilder.append(prefix).append(it.name)
                prefix = ", "
            }
            stringBuilder.append("]")
            prefix = " "
            types.forEach {
                stringBuilder.append(prefix).append(it)
                prefix = "+"
            }
            return stringBuilder.toString()
        }
    }

}
