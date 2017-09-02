package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.external.Plotly
import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship
import kotlin.browser.window
import kotlin.js.json

abstract class ChartPresenter(protected val chartDiv: UI) : Presenter {
    companion object {
        protected const val CHART_TYPE = "line"
        protected val OPTIONS = json("modeBarButtonsToRemove" to arrayOf("hoverClosestCartesian", "hoverCompareCartesian"))
    }

    protected var range: Double = 0.0

    init {
        window.addEventListener("resize", {
            if (!UI.CHART_DIV.getElement().classList.contains("hidden") as Boolean) {
                Plotly.Plots.resize(chartDiv.getElement())
            }
        })
    }

    override fun reloadView(ships: Collection<Ship>, range: Double) {
        this.range = range
        val data = ArrayList<dynamic>()
        ships.forEach { ship ->
            ship.shellCalculators.forEach { (shell, calculator) ->
                data.add(prepareChartTrace(shell, calculator))
            }
        }
        Plotly.newPlot(chartDiv.id, data.toTypedArray(), getChartLayout(), OPTIONS)
        setUpCompareOnHover(ships, range)
    }

    abstract protected fun prepareChartTrace(shell: Shell, calculator: Calculator): dynamic

    abstract protected fun getChartLayout(): dynamic

    private fun setUpCompareOnHover(ships: Collection<Ship>, range: Double) {
        chartDiv.getElement().on("plotly_hover", { eventdata: dynamic ->
            val point = eventdata.points[0]
            val x = point.x

            var i = 0
            val hoverData = ArrayList<dynamic>()
            ships.forEach { ship ->
                ship.shellCalculators.forEach { (_, calculator) ->
                    hoverData.add(json("curveNumber" to i++, "pointNumber" to calculator.findClosestAngleXIndex(range, x)))
                }
            }

            Plotly.Fx.hover(chartDiv.id, hoverData.toTypedArray())
        })
    }

}