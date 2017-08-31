package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.external.Plotly
import kotlin.browser.window

abstract class ChartPresenter(protected val chartDiv: UI) : Presenter {
    init {
        window.addEventListener("resize", {
            Plotly.Plots.resize(chartDiv.getElement())
        })
    }
}