package io.github.t3r1jj.sharc.utils

class About {
    companion object {
        const val VERSION = "1.0.0-RC"
        const val VERSION_HTML = "Version: <a href=\"https://github.com/T3r1jj/Sharc\">$VERSION</a>"
        const val AUTHOR_URL = "https://t3r1jj.github.io"
        const val PROJECT_URL = "https://github.com/T3r1jj/Sharc"
        const val BUG_URL = "https://github.com/T3r1jj/Sharc/issues"
        const val SUPPORT_URL = "https://t3r1jj.github.io/support.html"
        const val COPYRIGHT_HTML = "<span>Thanks to " +
                "<a href=\"https://wargaming.net\">Wargaming API</a>, " +
                "<a href=\"https://kotlinlang.org/\">Kotlin [Apache 2.0]</a>, " +
                "<a href=\"https://plot.ly/\">plotly.js [MIT]</a>" +
                "</span>"
        const val DESCRIPTION = "Sharc is a comparison tool for different ships shell arcs and fly times, based on World of Warships data"
        const val INFO = "Each vessel range is additionally increased by 20% due to possibility of having AFT or spotting aircraft. Default properties are set in place of internal data (shell drag / krupp values)."
        const val FIRE_CONTROL_SYSTEM = "Max Fire Control System range without captain skills or consumables"
    }
}