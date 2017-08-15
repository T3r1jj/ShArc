package io.github.t3r1jj.sharc

class Controller : ArrayList<Ship>() {

    val MAX_SIZE = 8

    @JsName("addCalculator")
    fun addCalculator(element: Ship): Boolean = super.add(element)

    @JsName("calculateArcs")
    fun calculateArcs(callback: () -> Unit) {
        this
                .flatMap { it.shellCalculators.values }
                .filterNot { it.hasData() }
                .forEach { it.calculateArcs() }
        callback()
    }

}