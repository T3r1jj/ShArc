package io.github.t3r1jj.sharc.utils

import kotlin.js.Json

class JsonUtils {
    companion object {
        fun jsonToDynamicMap(json: Json): Map<String, dynamic> {
            val map: MutableMap<String, dynamic> = linkedMapOf()
            for (key in js("Object").keys(json)) {
                map.put(key, json[key])
            }
            return map
        }

        fun jsonToMap(json: Json): Map<String, String> {
            val map: MutableMap<String, String> = linkedMapOf()
            for (key in js("Object").keys(json)) {
                map.put(key, json[key] as String)
            }
            return map
        }
    }
}