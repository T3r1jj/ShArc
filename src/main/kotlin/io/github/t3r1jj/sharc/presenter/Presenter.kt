package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.model.Ship

interface Presenter {
    fun reloadView(ships: Collection<Ship>, range: Double)
}