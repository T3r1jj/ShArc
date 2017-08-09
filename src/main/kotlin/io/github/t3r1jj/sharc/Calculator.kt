package io.github.t3r1jj.sharc

import kotlin.js.Math

class Calculator(private val shell: Shell) {

    companion object {
        val g = 9.81
        val T = 288
        val L = 0.0065
        val p = 101325
        val R = 8.31447
        val M = 0.0289644
        val TIME_SCALE = 3.0
    }

    private val xCoordinates = ArrayList<Double>()
    @JsName("getXCoordinates")
    fun getXCoordinates(distance: Number): Array<Double> = xAngleCoordinates[findClosestIndex(distance.toDouble())]

    private val yCoordinates = ArrayList<Double>()
    @JsName("getYCoordinates")
    fun getYCoordinates(distance: Number): Array<Double> = yAngleCoordinates[findClosestIndex(distance.toDouble())]

    @JsName("getCalculatedDistance")
    fun getCalculatedDistance(distance: Number): Double {
        val xCoordinates = xAngleCoordinates[findClosestIndex(distance.toDouble())]
        return xCoordinates[xCoordinates.lastIndex]
    }

    private val time = ArrayList<Double>()
    @JsName("getTime")
    fun getTime(distance: Number): Array<Double> = angleTimes[findClosestIndex(distance.toDouble())]

    private val dt = 0.1

    private val xAngleCoordinates = ArrayList<Array<Double>>()
    private val yAngleCoordinates = ArrayList<Array<Double>>()
    private val angleTimes = ArrayList<Array<Double>>()

    private fun findClosestIndex(distance: Double): Int {
        var closestIndex = 0
        var minError = distance
        for (index in 0..xAngleCoordinates.lastIndex) {
            val xCoordinates = xAngleCoordinates[index]
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
        xAngleCoordinates.clear()
        yAngleCoordinates.clear()
        angleTimes.clear()
        val maxAngle = 30
        val degreeIterations = 100
        val maxAngleEntries = maxAngle * degreeIterations
        for (angle in 0..maxAngleEntries) {
            val alpha = (angle.toDouble() / degreeIterations) * Math.PI / 180
            calculateArc(alpha)
            xAngleCoordinates.add(xCoordinates.toTypedArray())
            yAngleCoordinates.add(yCoordinates.toTypedArray())
            angleTimes.add(time.toTypedArray())
        }
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
        }
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
            error = distance.toDouble() - innerCalculator.xCoordinates[innerCalculator.xAngleCoordinates.lastIndex]
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

}