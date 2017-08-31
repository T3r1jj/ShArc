package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.external.Plotly
import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import kotlin.js.json

class TimeChartPresenter(chartDiv: UI) : ChartPresenter(chartDiv) {
    companion object {
        private const val CHART_TYPE = "line"
        private val CHART_LAYOUT = json("xaxis" to json("title" to "Distance [m]", "hoverformat" to ",f"),
                "yaxis" to json("title" to "Time [s]", "hoverformat" to ".2f"))
    }

    private var range: Double = 0.0

    override fun reloadView(ships: Collection<Ship>, range: Double) {
        this.range = range
        val data = ArrayList<dynamic>()
        ships.forEach { ship ->
            ship.shellCalculators.forEach { (shell, calculator) ->
                data.add(prepareChartTrace(shell, calculator))
            }
        }
        Plotly.newPlot(chartDiv.id, data.toTypedArray(), CHART_LAYOUT)
    }

    private fun prepareChartTrace(shell: Shell, calculator: Calculator): dynamic {
        return json("x" to calculator.getXCoordinates(range),
                "y" to calculator.getTime(range),
                "name" to shell.toString(),
                "type" to CHART_TYPE)
    }
}