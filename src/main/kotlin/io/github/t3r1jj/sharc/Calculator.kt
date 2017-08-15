package io.github.t3r1jj.sharc

import kotlin.js.Math

class Calculator(private val shell: Shell) {

    var range = Double.POSITIVE_INFINITY
    var angleOverRange = false

    constructor(shell: Shell, range: Double) : this(shell) {
        this.range = range
    }

    companion object {
        private const val g = 9.81
        private const val T = 288
        private const val L = 0.0065
        private const val p = 101325
        private const val R = 8.31447
        private const val M = 0.0289644
        private const val dt = 0.1
        private const val TIME_SCALE = 3.0
    }

    private val xCoordinates = ArrayList<Double>()
    private val yCoordinates = ArrayList<Double>()
    private val time = ArrayList<Double>()
    private var impactAngle: Double = 0.0
    private var deckArmor: Double = 0.0
    private var beltArmor: Double = 0.0

    var xAngleCoordinates: Array<Array<Double>>? = null
    var yAngleCoordinates: Array<Array<Double>>? = null
    var angleTimes: Array<Array<Double>>? = null
    var impactAngles: Array<Double>? = null
    var deckArmors: Array<Double>? = null
    var beltArmors: Array<Double>? = null

    @JsName("getXCoordinates")
    fun getXCoordinates(distance: Number): Array<Double> = xAngleCoordinates!![findClosestIndex(distance.toDouble())]
    @JsName("getYCoordinates")
    fun getYCoordinates(distance: Number): Array<Double> = yAngleCoordinates!![findClosestIndex(distance.toDouble())]
    @JsName("getCalculatedDistance")
    fun getCalculatedDistance(distance: Number): Double {
        val xCoordinates = xAngleCoordinates!![findClosestIndex(distance.toDouble())]
        return xCoordinates[xCoordinates.lastIndex]
    }
    @JsName("getTime")
    fun getTime(distance: Number): Array<Double> = angleTimes!![findClosestIndex(distance.toDouble())]

    fun hasData(): Boolean = xAngleCoordinates != null

    private fun findClosestIndex(distance: Double): Int {
        var closestIndex = 0
        var minError = distance
        for (index in 0..xAngleCoordinates!!.lastIndex) {
            val xCoordinates = xAngleCoordinates!![index]
            val angleDistance = xCoordinates[xCoordinates.lastIndex]
            val currentError = Math.abs(angleDistance - distance)
            if (currentError < minError) {
                minError = currentError
                closestIndex = index
            }
        }
        return closestIndex
    }


    @JsName("calculateArcs")
    fun calculateArcs() {
        angleOverRange = false
        val xAngleCoordinates = ArrayList<Array<Double>>()
        val yAngleCoordinates = ArrayList<Array<Double>>()
        val angleTimes = ArrayList<Array<Double>>()
        val impactAngles = ArrayList<Double>()
        val deckArmors = ArrayList<Double>()
        val beltArmors = ArrayList<Double>()
        val maxAngle = 30
        val degreeIterations = 100
        val maxAngleEntries = maxAngle * degreeIterations
        for (angle in 0..maxAngleEntries) {
            if (angleOverRange) {
                break
            }
            val alpha = (angle.toDouble() / degreeIterations) * Math.PI / 180
            calculateArc(alpha)
            xAngleCoordinates.add(xCoordinates.toTypedArray())
            yAngleCoordinates.add(yCoordinates.toTypedArray())
            angleTimes.add(time.toTypedArray())
            impactAngles.add(impactAngle)
            deckArmors.add(deckArmor)
            beltArmors.add(beltArmor)
        }
        this.xAngleCoordinates = xAngleCoordinates.toTypedArray()
        this.yAngleCoordinates = yAngleCoordinates.toTypedArray()
        this.angleTimes = angleTimes.toTypedArray()
        this.impactAngles = impactAngles.toTypedArray()
        this.deckArmors = deckArmors.toTypedArray()
        this.beltArmors = beltArmors.toTypedArray()
    }

    @JsName("calculateArc")
    fun calculateArc(angle: Number) {
        xCoordinates.clear()
        yCoordinates.clear()
        time.clear()
        var vX = Math.cos(angle.toDouble()) * shell.vInit
        var vY = Math.sin(angle.toDouble()) * shell.vInit
        var y = 0.0
        var x = 0.0
        var t = 0.0

        xCoordinates.add(x)
        yCoordinates.add(y)
        time.add(t)

        while (y >= 0) {
            x += dt * vX
            y += dt * vY

            val rho = p(y) * M / (R * T(y))

            vX -= dt * shell.k * rho * (shell.cwQuad * vX * vX + shell.cwLin * vX)
            vY -= dt * g - dt * shell.k * rho * (shell.cwQuad * vY * vY + shell.cwLin * Math.abs(vY)) * sign(vY)

            t += dt

            xCoordinates.add(x)
            yCoordinates.add(y)
            time.add(t / TIME_SCALE)

            if (x > range) {
                angleOverRange = true
            }
        }
        val v = Math.sqrt(vY * vY + vX * vX)
        val hitPen = shell.pen * Math.pow(v, 1.1) * Math.pow(shell.m, 0.55) / Math.pow(shell.D * 1000, 0.65)
        impactAngle = Math.atan(Math.abs(vY) / Math.abs(vX))
        beltArmor = Math.cos(impactAngle) * hitPen
        deckArmor = Math.sin(impactAngle) * hitPen
    }

    private fun T(y: Double) = T - L * y

    private fun p(y: Double) = p * Math.pow(1 - L * y / T, g * M / (R * L))

    @JsName("calculateAngle")
    fun calculateAngle(distance: Number): Double {
        var angle = calculateAngleOfReach(distance)
        val maxError = 1.0
        var lastError: Double
        var error: Double = distance.toDouble()
        do {
            lastError = error
            val innerCalculator = Calculator(shell)
            innerCalculator.calculateArc(angle)
            error = distance.toDouble() - innerCalculator.xCoordinates[innerCalculator.xAngleCoordinates!!.lastIndex]
            if (error < -maxError) {
                angle -= angle / 2
            } else if (error > maxError) {
                angle += angle / 2
            }
        } while (Math.abs(error) > maxError && Math.abs(lastError) > Math.abs(error))
        return angle
    }

    private fun calculateAngleOfReach(distance: Number) =
            0.5 * Math.asin(g * distance.toDouble() / (shell.vInit * shell.vInit))


    private fun sign(x: Double): Double = when {
        x > 0 -> 1.0
        x < 0 -> -1.0
        else -> 0.0
    }

    @JsName("calculateArmorToActivateFuse")
    fun calculateArmorToActivateFuse(shell: Shell, ship: Ship) : Double = when (shell.type) {
        Shell.Type.AP -> when (ship.nation) {
            Ship.Nation.UK -> shell.D / 12
            else -> shell.D / 6
        }
        Shell.Type.HE -> when (ship.nation) {
            Ship.Nation.UK -> shell.D / 4
            Ship.Nation.GERMANY -> shell.D / 4
            else -> shell.D / 6
        }
        else -> 0.0
    }

}