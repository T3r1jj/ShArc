package io.github.t3r1jj.sharc

import kotlin.browser.document

enum class UI(val id: String) {
    TITLE_HEADER("title-header"), ALERT_DIV("alert"), NATION_SELECT("nation-select"), TYPE_SELECT("type-select"),
    SHIP_SELECT("ship-select"), SHIP_ADD_BUTTON("ship-add"), SELECTED_SHIPS_LIST("selected-ships-list"),
    INFO_TABLE("info-table"), CHART_DIV("chart-div"), RANGE_SLIDER("range-slider"), RANGE_INPUT("range-input"),
    MAX_RANGE_LABEL("max-range-label"), SHELL_ARCS_CHART("shell-arcs-chart"), SHELL_TIME_CHART("shell-time-chart"),
    ABOUT_FOOTER("about-footer"), RANGE_FOOTER("range-footer");

    fun getElement(): dynamic = document.getElementById(id)
}