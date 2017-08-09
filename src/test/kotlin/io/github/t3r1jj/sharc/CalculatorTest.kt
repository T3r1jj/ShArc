package io.github.t3r1jj.sharc

import kotlin.js.Math
import kotlin.test.Test
import kotlin.test.assertTrue

class CalculatorTest {
    private companion object {
        private val kievCalculator = Calculator(Shell(0.130, 33.4, 870.0))
        private val yamatoCalculator = Calculator(Shell(0.460, 1460.0, 780.0))
        private val akizukiCalculator = Calculator(Shell(0.1, 13.0, 1000.0))

        private val testedDistances = arrayOf(8000.0, 4000.0, 2000.0)
        private val error = 0.05
        private val initialize: Boolean by lazy {
            kievCalculator.calculateArcs()
            akizukiCalculator.calculateArcs()
            yamatoCalculator.calculateArcs()
            true
        }
    }

    init {
        initialize
    }

    @Test
    fun calculateArcsApproximateDistances() {
        for (testedDistance in testedDistances) {
            calculateArcsApproximateDistances(testedDistance)
        }
    }

    private fun calculateArcsApproximateDistances(expectedDistance: Double) {
        val distances = getApproximateDistances(expectedDistance)
        for (i in 0..distances.lastIndex) {
            val scaledError = expectedDistance * error
            assertTrue(Math.abs(distances[i] - expectedDistance) < scaledError, "The difference between distances of "
                    + expectedDistance + "m (expected) and " + distances[i] + "m (actual) should be less than " + scaledError + "m (" + (error * 100) + "%)")
        }
    }


    @Test
    fun calculateArcsRelativeTimes() {
        for (testedDistance in testedDistances) {
            calculateArcsRelativeTimes(testedDistance)
        }
    }

    private fun calculateArcsRelativeTimes(distance: Double) {
        val ascendingTimes = getAscendingTimes(distance)
        var previousTime: Map.Entry<String, Double>? = null
        for (time in ascendingTimes) {
            previousTime?.let {
                assertTrue(time.value >= previousTime!!.value, "The time for " + time.key + " (" + time.value
                        + "s) should be higher than the one for " + previousTime!!.key + " (" + previousTime!!.value + "s) for the distance of: " + distance)
            }
            previousTime = time
        }
    }

    private fun getApproximateDistances(expectedDistance: Double): Array<Double> =
            arrayOf(yamatoCalculator.getCalculatedDistance(expectedDistance), kievCalculator.getCalculatedDistance(expectedDistance), akizukiCalculator.getCalculatedDistance(expectedDistance))

    private fun getAscendingTimes(distance: Double): LinkedHashMap<String, Double> {
        val yamatoTime = yamatoCalculator.getTime(distance)
        val akizukiTime = akizukiCalculator.getTime(distance)
        val kievTime = kievCalculator.getTime(distance)
        return when {
            distance == testedDistances[0] -> linkedMapOf("Yamato" to yamatoTime[yamatoTime.lastIndex], "Kiev" to kievTime[kievTime.lastIndex], "Akizuki" to akizukiTime[akizukiTime.lastIndex])
            distance == testedDistances[1] -> linkedMapOf("Akizuki" to akizukiTime[akizukiTime.lastIndex], "Yamato" to yamatoTime[yamatoTime.lastIndex], "Kiev" to kievTime[kievTime.lastIndex])
            else -> linkedMapOf("Akizuki" to akizukiTime[akizukiTime.lastIndex], "Kiev" to kievTime[kievTime.lastIndex], "Yamato" to yamatoTime[yamatoTime.lastIndex])
        }
    }
}

