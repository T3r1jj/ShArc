package io.github.t3r1jj.sharc.controller

import io.github.t3r1jj.sharc.model.Calculator
import io.github.t3r1jj.sharc.model.Shell
import io.github.t3r1jj.sharc.model.Ship

interface ChartController {
    fun prepareChartTrace(ship: Ship, shell: Shell, calculator: Calculator): dynamic
    fun reloadChart(ships: Collection<Ship>, range: Double)
}