package io.github.t3r1jj.sharc

import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import org.w3c.dom.MessageEvent
import org.w3c.dom.Worker
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import kotlin.js.Date
import kotlin.test.Test
import kotlin.test.assertTrue

class AsyncTest {

    private var textToWorker = "Text to the web worker"

    private fun getScript(): String {
        return URL.createObjectURL(
                Blob(arrayOf("onmessage = function(e) { console.log(e.data); self.postMessage('Text from the web worker'); }")))
    }

    @Test
    fun testAsync() {
        val worker1 = Worker(getScript())
        worker1.onmessage = { e ->
            println((e as MessageEvent).data)
        }
        worker1.postMessage(textToWorker)
    }

    @Test
    fun testControllerWebWorkersCalculation() {
        val kievCalculator = Calculator(Shell(0.130, 33.4, 870.0))
        val yamatoCalculator = Calculator(Shell(0.460, 1460.0, 780.0))
        val akizukiCalculator = Calculator(Shell(0.1, 13.0, 1000.0))
        val syncStartTime = Date().getTime()
        kievCalculator.calculateArcs()
        akizukiCalculator.calculateArcs()
        yamatoCalculator.calculateArcs()
        val syncEndTime = Date().getTime()
        val syncDiffTime = syncEndTime - syncStartTime
        val controller = ControllerStub()
        controller.add(Shell(0.130, 33.4, 870.0))
        controller.add(Shell(0.460, 1460.0, 780.0))
        controller.add(Shell(0.1, 13.0, 1000.0))
        val asyncStartTime = Date().getTime()
        controller.calculateArcs({
            val asyncEndTime = Date().getTime()
            val asyncDiffTime = asyncEndTime - asyncStartTime
            assertTrue(asyncDiffTime > syncDiffTime, "Asserting if sync call (" + syncDiffTime + "ms) takes less time than the one based on concurrent web workers (" + asyncDiffTime + "ms)")
        })
    }

    class ControllerStub : ArrayList<Shell>() {

        private val calculators = ArrayList<Calculator>()
        private val workers = ArrayList<Worker>()

        fun initWorkers() {
            val workerScript = "var xAngleCoordinates = [];\n" +
                    "var yAngleCoordinates = [];\n" +
                    "var angleTimes = [];\n" +
                    "var xCoordinates = [];\n" +
                    "var yCoordinates = [];\n" +
                    "var time = [];\n" +
                    "var shell = null;\n" +
                    "\n" +
                    "self.onmessage = function (e) {\n" +
                    "    shell = e.data;\n" +
                    "    calculateArcs();\n" +
                    "    self.postMessage({\n" +
                    "        \"xAngleCoordinates\": xAngleCoordinates,\n" +
                    "        \"yAngleCoordinates\": yAngleCoordinates,\n" +
                    "        \"angleTimes\": angleTimes\n" +
                    "    });\n" +
                    "};\n" +
                    "\n" +
                    "var g = 9.81;\n" +
                    "var T = 288;\n" +
                    "var L = 0.0065;\n" +
                    "var p = 101325;\n" +
                    "var R = 8.31447;\n" +
                    "var M = 0.0289644;\n" +
                    "var TIME_SCALE = 3.0;\n" +
                    "var dt = 0.1;\n" +
                    "\n" +
                    "\n" +
                    "function funT(y) {\n" +
                    "    return T - L * y\n" +
                    "}\n" +
                    "\n" +
                    "function funP(y) {\n" +
                    "    return p * Math.pow(1 - L * y / T, g * M / (R * L))\n" +
                    "}\n" +
                    "\n" +
                    "function calculateArc(angle) {\n" +
                    "    xCoordinates = [];\n" +
                    "    yCoordinates = [];\n" +
                    "    time = [];\n" +
                    "    var vX = Math.cos(angle) * shell.vInit;\n" +
                    "    var vY = Math.sin(angle) * shell.vInit;\n" +
                    "    var y = 0.0;\n" +
                    "    var x = 0.0;\n" +
                    "    var t = 0.0;\n" +
                    "\n" +
                    "    xCoordinates.push(x);\n" +
                    "    yCoordinates.push(y);\n" +
                    "    time.push(t);\n" +
                    "\n" +
                    "    while (y >= 0) {\n" +
                    "        x += dt * vX;\n" +
                    "        y += dt * vY;\n" +
                    "\n" +
                    "        var rho = funP(y) * M / (R * funT(y));\n" +
                    "\n" +
                    "        vX -= dt * shell.k * rho * (shell.cwQuad * vX * vX + shell.cwLin * vX);\n" +
                    "        vY -= dt * g - dt * shell.k * rho * (shell.cwQuad * vY * vY + shell.cwLin * Math.abs(vY)) * sign(vY);\n" +
                    "\n" +
                    "        t += dt;\n" +
                    "\n" +
                    "        xCoordinates.push(x);\n" +
                    "        yCoordinates.push(y);\n" +
                    "        time.push(t / TIME_SCALE)\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "function sign(vY) {\n" +
                    "    if (vY > 0) return 1.0;\n" +
                    "    else if (vY < 0) return -1.0;\n" +
                    "    else return 0.0\n" +
                    "}\n" +
                    "\n" +
                    "function calculateArcs() {\n" +
                    "    var maxAngle = 30;\n" +
                    "    var degreeIterations = 100;\n" +
                    "    var maxAngleEntries = maxAngle * degreeIterations;\n" +
                    "    for (var angle = 0; angle <= maxAngleEntries; angle++) {\n" +
                    "        var alpha = (angle / degreeIterations) * Math.PI / 180;\n" +
                    "        calculateArc(alpha);\n" +
                    "        xAngleCoordinates.push(xCoordinates);\n" +
                    "        yAngleCoordinates.push(yCoordinates);\n" +
                    "        angleTimes.push(time)\n" +
                    "    }\n" +
                    "}"
            for (i in 0 until this.size) {
                workers.add(Worker(URL.createObjectURL(Blob(arrayOf(workerScript)))))
            }
        }

        fun calculateArcs(callback: () -> Unit) {
            initWorkers()
            calculators.clear()
            for ((i, shell) in this.withIndex()) {
                workers[i].onmessage = { e ->
                    val data : dynamic = (e as MessageEvent).data
                    val calculator = Calculator(shell)
                    calculator.xAngleCoordinates = data.xAngleCoordinates
                    calculator.yAngleCoordinates = data.yAngleCoordinates
                    calculator.angleTimes = data.angleTimes
                    calculators.add(calculator)
                    if (finishedCalculating()) {
                        callback()
                    }
                    workers[i].terminate()
                }
                workers[i].postMessage(shell)
            }
        }

        private fun finishedCalculating() = calculators.size == this.size
    }

}