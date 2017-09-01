package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.model.Ship
import kotlin.browser.document
import kotlin.js.Math

class InfoPresenter(infoTable: UI) : Presenter {

    private val infoTableDiv = infoTable.getElement()

    override fun reloadView(ships: Collection<Ship>, range: Double) {
        infoTableDiv.innerHTML = ""
        infoTableDiv.append(prepareHeader())
        val tbody = document.createElement("tbody")
        ships.forEach { ship ->
            ship.shellCalculators.forEach { (shell, calculator) ->
                val tr = document.createElement("tr")
                val tdShipConfig = document.createElement("td")
                tdShipConfig.textContent = shell.toString()
                val tdFireControlsRange = document.createElement("td")
                tdFireControlsRange.textContent = (ship.fireControlsRange / 1000.0).format()
                val tdFlyTime = document.createElement("td")
                tdFlyTime.textContent = calculator.getTime(range).last().format()
                val tdHitBeltAngle = document.createElement("td")
                tdHitBeltAngle.textContent = (90 - radToDeg(calculator.getImpactAngle(range))).format()
                val tdHitDeckAngle = document.createElement("td")
                tdHitDeckAngle.textContent = radToDeg(calculator.getImpactAngle(range)).format()
                val tdBeltArmor = document.createElement("td")
                tdBeltArmor.textContent = Math.round(calculator.getDeckArmor(range)).toString()
                val tdDeckArmor = document.createElement("td")
                tdDeckArmor.textContent = Math.round(calculator.getBeltArmor(range)).toString()
                tr.append(tdShipConfig)
                tr.append(tdFireControlsRange)
                tr.append(tdFlyTime)
                tr.append(tdHitBeltAngle)
                tr.append(tdHitDeckAngle)
                tr.append(tdBeltArmor)
                tr.append(tdDeckArmor)
                tbody.append(tr)
            }
        }
        infoTableDiv.append(tbody)
    }

    private fun prepareHeader(): dynamic {
        val thead = document.createElement("thead")
        thead.setAttribute("class", "thead-inverse")
        val tr = document.createElement("tr")
        val thShipConfig = document.createElement("th")
        thShipConfig.textContent = "Ship configs"
        val thFireControlsRange = document.createElement("th")
        thFireControlsRange.textContent = "Fire controls range [km]"
        val thFlyTime = document.createElement("th")
        thFlyTime.textContent = "Fly time [s]"
        val thHitBeltAngle = document.createElement("th")
        thHitBeltAngle.textContent = "Belt hit angle [deg]"
        val thHitDeckAngle = document.createElement("th")
        thHitDeckAngle.textContent = "Deck hit angle [deg]"
        val thBeltArmor = document.createElement("th")
        thBeltArmor.textContent = "Belt armor pen [mm]"
        val thDeckArmor = document.createElement("th")
        thDeckArmor.textContent = "Deck armor pen [mm]"
        tr.append(thShipConfig)
        tr.append(thFireControlsRange)
        tr.append(thFlyTime)
        tr.append(thHitBeltAngle)
        tr.append(thHitDeckAngle)
        tr.append(thBeltArmor)
        tr.append(thDeckArmor)
        thead.append(tr)
        return thead
    }

    private fun radToDeg(rad: Double): Double = rad / Math.PI * 180
    private fun Double.format() = (Math.round(this * 100) / 100.0).asDynamic().toFixed(2)
}