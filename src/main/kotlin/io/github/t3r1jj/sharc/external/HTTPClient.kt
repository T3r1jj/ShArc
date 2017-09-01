package io.github.t3r1jj.sharc.external

import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.window
import kotlin.js.Date
import kotlin.js.json

class HTTPClient(private val maxRequestsPerSec: Int) {
    private val pendingRequests = ArrayList<Request>(maxRequestsPerSec)

    fun get(url: String, callback: (dynamic) -> Unit) {
        clearQueue()
        if (pendingRequests.size >= maxRequestsPerSec) {
            window.setTimeout({
                get(url, callback)
            }, 1000)
        } else {
            val request = Request(url, callback)
            pendingRequests.add(request)
            doGet(request)
        }
    }

    private fun clearQueue() {
        pendingRequests.removeAll { request ->
            if (request.endTime != null) {
                (Date().getTime().toLong() - request.endTime!!) > 1000
            } else {
                false
            }
        }
    }

    private fun doGet(request: Request) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.onload = {
            request.endTime = Date().getTime().toLong()
            request.callback(JSON.parse(xmlHttp.responseText))
        }
        xmlHttp.ontimeout = {
            request.endTime = Date().getTime().toLong()
            request.callback(json("error" to "timeout"))
        }
        xmlHttp.onerror = {
            request.endTime = Date().getTime().toLong()
            request.callback(json("error" to xmlHttp.statusText))
        }
        xmlHttp.open("GET", request.url, true)
        xmlHttp.send(null)
    }

    private data class Request(val url: String, val callback: (dynamic) -> Unit) {
        var endTime: Long? = null
    }
}