package io.github.t3r1jj.sharc.external

external class Plotly {
    companion object {
        val Plots: dynamic
        val Fx: dynamic

        fun newPlot(chart : String, data: Array<dynamic>)
        fun newPlot(chart : String, data: Array<dynamic>, layout: dynamic)
        fun newPlot(chart : String, data: Array<dynamic>, layout: dynamic, options: dynamic)
    }
}