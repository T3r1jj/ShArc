package io.github.t3r1jj.sharc

import kotlin.browser.document

enum class UI(val id: String) {
    NATION_SELECT("nation-select"), TYPE_SELECT("type-select"), SHIP_SELECT("ship-select"),
    SHIP_ADD_BUTTON("ship-add"), SELECTED_SHIPS_LIST("selected-ships-list"), SHELL_ARCS_CHART("shell-arcs-chart"),
    SHELL_TIME_CHART("shell-time-chart"), INFO_TABLE("info-table"),
    RANGE_SLIDER("range-slider"), RANGE_LABEL("range-label"), MAX_RANGE_LABEL("max-range-label"), CHART_DIV("chart-div");

    fun getElement(): dynamic = document.getElementById(id)
}