package io.github.t3r1jj.sharc.utils

class About {
    companion object {
        const val VERSION = "1.0.0-SNAPSHOT"
        const val VERSION_HTML = "Version: <a href=\"https://github.com/T3r1jj/Sharc\">$VERSION</a>"
        const val AUTHOR_URL = "https://t3r1jj.github.io"
        const val BUG_URL = "https://github.com/T3r1jj/Sharc/issues"
        const val SUPPORT_URL = "https://t3r1jj.github.io/support"
        const val COPYRIGHT_HTML = "<span>Thanks to " +
                "<a href=\"https://wargaming.net\">Wargaming API</a>, " +
                "<a href=\"https://kotlinlang.org/\">Kotlin [Apache 2.0]</a>, " +
                "<a href=\"https://plot.ly/\">plotly.js [MIT]</a>" +
                "</span>"
        const val DESCRIPTION = "Sharc is a comparison tool for different ships shell arcs and fly times, based on World of Warships data."
        const val INFO = "AFT (based on caliber) and spotting aircraft (every ship) automatically included. Default properties in place of internal data (shell drag / krupp values)."
    }
}