package io.github.t3r1jj.sharc.presenter

import io.github.t3r1jj.sharc.UI
import io.github.t3r1jj.sharc.external.WarshipsAPI
import io.github.t3r1jj.sharc.model.Ship
import kotlin.browser.document
import kotlin.js.Math

class MainPresenter(private val MAX_SIZE: Int) : ArrayList<Ship>(MAX_SIZE), Presenter {
    private val api = WarshipsAPI()

    private var nationSelect: dynamic = UI.NATION_SELECT.getElement()
    private var typeSelect: dynamic = UI.TYPE_SELECT.getElement()
    private var shipSelect: dynamic = UI.SHIP_SELECT.getElement()
    private var shipAddButton: dynamic = UI.SHIP_ADD_BUTTON.getElement()
    private var selectedShipsList: dynamic = UI.SELECTED_SHIPS_LIST.getElement()
    private var rangeSlider: dynamic = UI.RANGE_SLIDER.getElement()
    private var maxRangeLabel: dynamic = UI.MAX_RANGE_LABEL.getElement()
    private var chartDiv: dynamic = UI.CHART_DIV.getElement()
    private var alertDiv: dynamic = UI.ALERT_DIV.getElement()
    private var titleHeader: dynamic = UI.TITLE_HEADER.getElement()
    private var rangeInput: dynamic = UI.RANGE_INPUT.getElement()
    private var range = 0.0

    private val subPresenters = arrayOf(
            InfoPresenter(UI.INFO_TABLE),
            ArcsChartPresenter(UI.SHELL_ARCS_CHART),
            TimeChartPresenter(UI.SHELL_TIME_CHART))

    init {
        blockUI(true)
        initializeBasicInfo {
            setVersion()
            handleResult(it)
        }
        nationSelect.onchange = {
            blockUI(true)
            loadShips { handleResult(it) }
        }
        typeSelect.onchange = {
            blockUI(true)
            loadShips { handleResult(it) }
        }
        shipAddButton.onclick = {
            blockUI(true)
            loadShip { handleResult(it) }
        }
        rangeSlider.oninput = {
            range = getSliderRange()
            reloadView(this, range)
        }
        rangeInput.oninput = {
            range = getInputRange()
            reloadView(this, range)
        }
    }

    private fun setVersion() {
        if (api.gameVersion.isNotBlank()) {
            titleHeader.title += " (v" + api.gameVersion + ")"
        } else {
            titleHeader.title += " (unknown version, connection lost?)"
        }
    }

    private fun blockUI(doBlock: Boolean) {
        turnButtonLoading(doBlock)
        nationSelect.disabled = doBlock
        typeSelect.disabled = doBlock
        shipSelect.disabled = doBlock
    }

    private fun turnButtonLoading(on: Boolean) {
        shipAddButton.disabled = on || this.size == MAX_SIZE || getSelectedShip() == null
        if (on) {
            shipAddButton.classList.add("btn-loading")
        } else {
            shipAddButton.classList.remove("btn-loading")
        }
    }

    private fun loadShip(callback: (Throwable?) -> Unit) {
        val selectedShip = getSelectedShip()
        if (selectedShip != null && !this.contains(selectedShip) && this.size < MAX_SIZE) {
            api.loadShip(selectedShip, { e ->
                if (e != null) {
                    callback(e)
                } else {
                    addShip(selectedShip)
                    callback(null)
                }
            })
        } else {
            callback(null)
        }
    }

    private fun addShip(selectedShip: Ship) {
        val listItem = document.createElement("li").asDynamic()
        listItem.id = selectedShip.id
        selectedShip.icon?.let {
            val img = document.createElement("img");
            img.setAttribute("src", selectedShip.icon!!)
            img.setAttribute("alt", selectedShip.name + "-wows-wg-icon")
            img.setAttribute("height", "38px")
            listItem.appendChild(img)
        }
        listItem.innerHTML += formatShipListItemText(selectedShip)
        val removeButton = document.createElement("button").asDynamic()
        removeButton.setAttribute("class", "btn btn-danger")
        removeButton.innerText = "X"
        removeButton.onclick = { removeShip(selectedShip.id) }
        listItem.appendChild(removeButton)
        selectedShipsList.appendChild(listItem)
        this.add(selectedShip)
        selectedShip.initCalculators()
        calculateArcs()
        if (this.size == 1 && (rangeSlider.getAttribute("min") as String).toDouble() == range) {
            reloadRangeView(getMaxRange())
        }
        reloadView(this, range)
    }

    private fun formatShipListItemText(selectedShip: Ship) =
            selectedShip.name + " " + selectedShip.nation + " T" + selectedShip.tier + " "

    private fun removeShip(id: String) {
        this.remove(this.first { ship -> ship.id == id })
        selectedShipsList.removeChild(document.getElementById(id))
        reloadView(this, range)
    }

    override fun reloadView(ships: Collection<Ship>, range: Double) {
        hideChartDiv(this.isEmpty())
        if (!this.isEmpty()) {
            reloadRangeView(range)
            subPresenters.forEach { it.reloadView(this, range) }
        }
    }

    private fun getSliderRange() =
            (rangeSlider.value as String).toDouble()

    private fun getInputRange() =
            (rangeInput.value as String).toDouble() * 1000.0

    private fun hideChartDiv(hide: Boolean) {
        if (hide) {
            chartDiv.classList.add("hidden")
        } else {
            chartDiv.classList.remove("hidden")
        }
    }

    private fun reloadRangeView(range: Double) {
        val maxRange = getMaxRange()
        this.range = Math.min(range, maxRange)
        console.log(getMaxRange())
        rangeSlider.setAttribute("max", maxRange)
        rangeInput.setAttribute("max", maxRange / 1000.0)
        rangeSlider.value = this.range
        rangeInput.value = this.range.div(1000.0)
        maxRangeLabel.innerText = maxRange.div(1000).toString() + " km"
    }

    private fun getMaxRange(): Double = this.maxBy { ship -> ship.maxRange }?.maxRange ?: 0.0 ?: 0.0

    private fun getSelectedShip(): Ship? {
        return try {
            api.getShip(shipSelect.value)
        } catch (e: NoSuchElementException) {
            null
        }
    }

    private fun initializeBasicInfo(callback: (Throwable?) -> Unit) {
        api.loadBasicInfo({ e ->
            if (e != null) {
                callback(e)
            } else {
                val shipNations = api.getShipNations()
                for ((nationId, nationText) in shipNations) {
                    val option = document.createElement("option").asDynamic()
                    option.value = nationId
                    option.text = nationText
                    nationSelect.add(option)
                }
                val shipTypes = api.getShipTypes()
                for ((typeId, typeText) in shipTypes) {
                    val option = document.createElement("option").asDynamic()
                    option.value = typeId
                    option.text = typeText
                    typeSelect.add(option)
                }
                loadShips({ callback(it) })
            }
        })
    }

    private fun calculateArcs() {
        this
                .flatMap { it.shellCalculators.values }
                .filterNot { it.hasData() }
                .forEach { it.calculateArcs() }
    }

    private fun getShipsSelection(): WarshipsAPI.ShipsSelection {
        val selectedNation = nationSelect.value as String
        val selectedType = typeSelect.value as String
        return WarshipsAPI.ShipsSelection(selectedNation, selectedType)
    }

    private fun loadShips(callback: (Throwable?) -> Unit) {
        val shipsSelection = getShipsSelection()
        api.loadShips(shipsSelection, { e ->
            if (e != null) {
                callback(e)
            } else {
                val ships = api.getShips(shipsSelection)
                clearSelect(shipSelect)
                for (i in 0 until ships.size) {
                    val option = document.createElement("option").asDynamic()
                    option.value = ships[i].id
                    option.text = ships[i].getTier() + ". " + ships[i].name
                    if (ships[i].isPremium) {
                        option.text += " (P)"
                    }
                    if (ships[i].isDemo) {
                        option.text += " [Demo]"
                    }
                    shipSelect.add(option)
                }
                callback(null)
            }
        })
    }

    private fun clearSelect(select: dynamic) {
        while ((select.options.length as Int) > 0) {
            select.remove(0)
        }
    }

    private fun handleResult(e: Throwable?) {
        if (e != null) {
            console.error(e)
            alertDiv.classList.remove("hidden")
        } else {
            alertDiv.classList.add("hidden")
        }
        blockUI(false)
    }

}