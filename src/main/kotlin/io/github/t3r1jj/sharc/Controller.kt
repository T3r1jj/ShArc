package io.github.t3r1jj.sharc

class Controller : ArrayList<Calculator>() {

    val MAX_SIZE = 8

    @JsName("addCalculator")
    fun addCalculator(element: Calculator): Boolean = super.add(element)

    @JsName("calculateArcs")
    fun calculateArcs(callback: () -> Unit) {
        this
                .filterNot { it.hasData() }
                .forEach { it.calculateArcs() }
        callback()
    }

}