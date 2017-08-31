package io.github.t3r1jj.sharc.controller

import io.github.t3r1jj.sharc.external.Plotly
import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import kotlin.js.json

class ArcsChartController(private val chartDivId: String) : ChartController {
    companion object {
        private const val CHART_TYPE = "line"
        private val CHART_LAYOUT = json("xaxis" to json("title" to "Distance [m]", "hoverformat" to ",f"),
                "yaxis" to json("title" to "Height [m]", "hoverformat" to ",f"))
    }
    private var range: Double = 0.0

    override fun prepareChartTrace(ship: Ship, shell: Shell, calculator: Calculator): dynamic {
        return json("x" to calculator.getXCoordinates(range),
                "y" to calculator.getYCoordinates(range),
                "name" to shell.toString(),
                "type" to CHART_TYPE)
    }

    override fun reloadChart(ships: Collection<Ship>, range: Double) {
        this.range = range
        val data = ArrayList<dynamic>()
        ships.forEach { ship ->
            ship.shellCalculators.forEach { (shell, calculator) ->
                data.add(prepareChartTrace(ship, shell, calculator))
            }
        }
        Plotly.newPlot(chartDivId, data.toTypedArray(), CHART_LAYOUT)
    }
}