package io.github.t3r1jj.sharc

import io.github.t3r1jj.sharc.external.Chart
import io.github.t3r1jj.sharc.external.WarshipsAPI
import kotlin.browser.document
import kotlin.js.json

class Controller : ArrayList<Ship>() {

    val MAX_SIZE = 8
    var removeButtonClass = "btn btn-danger"
    private val api = WarshipsAPI()

    private var nationSelect: dynamic = UI.NATION_SELECT.getElement()
    private var typeSelect: dynamic = UI.TYPE_SELECT.getElement()
    private var shipSelect: dynamic = UI.SHIP_SELECT.getElement()
    private var shipAddButton: dynamic = UI.SHIP_ADD_BUTTON.getElement()
    private var selectedShipsList: dynamic = UI.SELECTED_SHIPS_LIST.getElement()
    private lateinit var shellArcsChart: Chart

    init {
        initializeBasicInfo()
        nationSelect.onchange = { loadShips {} }
        typeSelect.onchange = { loadShips {} }
        shipAddButton.onclick = { addShip {} }

        val setup: Any = json("type" to "line")
        shellArcsChart = Chart(UI.SHELL_ARCS_CHART.getElement().getContext("2d"), setup)
    }

    private fun addShip(callback: (Boolean) -> Unit) {
        val selectedShip = getSelectedShip()
        selectedShip?.let {
            if (!this.contains(selectedShip) && this.size < MAX_SIZE) {
                super.add(selectedShip)
                api.loadShip(selectedShip, {
                    loadShip(selectedShip, callback)
                })
            }
            callback(false)
        }
    }

    private fun loadShip(selectedShip: Ship, callback: (Boolean) -> Unit) {
        val listItem = document.createElement("li").asDynamic()
        listItem.id = selectedShip.id
        listItem.innerText = selectedShip.name + " " + selectedShip.nation + " T" + selectedShip.tier + " "
        val removeButton = document.createElement("button").asDynamic()
        removeButton.setAttribute("class", removeButtonClass)
        removeButton.innerText = "X"
        removeButton.onclick = { removeShip(selectedShip.id) }
        listItem.appendChild(removeButton)
        selectedShipsList.appendChild(listItem)
        selectedShip.initCalculators()
        calculateArcs()
        reloadShellArcsChart()
        callback(true)
    }

    private fun reloadShellArcsChart() {
        shellArcsChart.data.labels = arrayOf(1, 2, 3)
        shellArcsChart.data.datasets.push(json(
                "label" to "test label",
                "background color" to "#ff0000",
                "data" to arrayOf(1, 2, 3)
        ))
        shellArcsChart.update()
    }

    private fun removeShip(id: String) {
        this.remove(this.first { ship -> ship.id == id })
        selectedShipsList.removeChild(document.getElementById(id))
    }

    private fun getSelectedShip(): Ship? {
        return try {
            api.getShip(shipSelect.value)
        } catch (e: NoSuchElementException) {
            null
        }
    }

    private fun initializeBasicInfo() {
        api.loadBasicInfo({
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
            loadShips({})
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

    private fun loadShips(callback: () -> Unit) {
        val shipsSelection = getShipsSelection()
        api.loadShips(shipsSelection, {
            val ships = api.getShips(shipsSelection)
            clearSelect(shipSelect)
            for (i in 0 until ships.size) {
                val option = document.createElement("option").asDynamic()
                option.value = ships[i].id
                option.text = ships[i].name
                shipSelect.add(option)
            }
            callback()
        })
    }

    private fun clearSelect(select: dynamic) {
        while ((select.options.length as Int) > 0) {
            select.remove(0)
        }
    }

    enum class UI(private val id: String) {
        NATION_SELECT("nation-select"), TYPE_SELECT("type-select"), SHIP_SELECT("ship-select"),
        SHIP_ADD_BUTTON("ship-add"), SELECTED_SHIPS_LIST("selected-ships-list"), SHELL_ARCS_CHART("shell-arcs-chart");

        fun getElement(): dynamic = document.getElementById(id)
    }
}