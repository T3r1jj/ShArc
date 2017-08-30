package io.github.t3r1jj.sharc.external

external class Plotly {
    companion object {
        fun newPlot(chart : String, data: Array<dynamic>)
        fun newPlot(chart : String, data: Array<dynamic>, layout: dynamic)
    }
}