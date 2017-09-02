package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import kotlin.js.json

class ArcsChartPresenter(chartDiv: UI) : ChartPresenter(chartDiv) {

    companion object {
        private val CHART_LAYOUT = json("xaxis" to json("title" to "Distance [m]", "hoverformat" to ",f"),
                "yaxis" to json("title" to "Height [m]", "hoverformat" to ",f"),
                "hovermode" to "closest")
    }

    override fun prepareChartTrace(shell: Shell, calculator: Calculator): dynamic {
        return json("x" to calculator.getXCoordinates(range),
                "y" to calculator.getYCoordinates(range),
                "name" to shell.toString(),
                "type" to CHART_TYPE)
    }

    override fun getChartLayout(): dynamic = CHART_LAYOUT
}