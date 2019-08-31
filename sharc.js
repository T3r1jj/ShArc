if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sharc'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sharc'.");
}
var sharc = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var reversedArray = Kotlin.kotlin.collections.reversedArray_4b5429$;
  var asIterable = Kotlin.kotlin.collections.asIterable_us0mfu$;
  var Throwable = Error;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var last = Kotlin.kotlin.collections.last_us0mfu$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  UI.prototype = Object.create(Enum.prototype);
  UI.prototype.constructor = UI;
  Shell$Type.prototype = Object.create(Enum.prototype);
  Shell$Type.prototype.constructor = Shell$Type;
  ArcsChartPresenter.prototype = Object.create(ChartPresenter.prototype);
  ArcsChartPresenter.prototype.constructor = ArcsChartPresenter;
  MainPresenter.prototype = Object.create(ArrayList.prototype);
  MainPresenter.prototype.constructor = MainPresenter;
  TimeChartPresenter.prototype = Object.create(ChartPresenter.prototype);
  TimeChartPresenter.prototype.constructor = TimeChartPresenter;
  function UI(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UI_initFields() {
    UI_initFields = function () {
    };
    UI$TITLE_HEADER_instance = new UI('TITLE_HEADER', 0, 'title-header');
    UI$ALERT_DIV_instance = new UI('ALERT_DIV', 1, 'alert');
    UI$NATION_SELECT_instance = new UI('NATION_SELECT', 2, 'nation-select');
    UI$TYPE_SELECT_instance = new UI('TYPE_SELECT', 3, 'type-select');
    UI$SHIP_SELECT_instance = new UI('SHIP_SELECT', 4, 'ship-select');
    UI$SHIP_ADD_BUTTON_instance = new UI('SHIP_ADD_BUTTON', 5, 'ship-add');
    UI$SELECTED_SHIPS_LIST_instance = new UI('SELECTED_SHIPS_LIST', 6, 'selected-ships-list');
    UI$INFO_TABLE_instance = new UI('INFO_TABLE', 7, 'info-table');
    UI$CHART_DIV_instance = new UI('CHART_DIV', 8, 'chart-div');
    UI$RANGE_SLIDER_instance = new UI('RANGE_SLIDER', 9, 'range-slider');
    UI$RANGE_INPUT_instance = new UI('RANGE_INPUT', 10, 'range-input');
    UI$MAX_RANGE_LABEL_instance = new UI('MAX_RANGE_LABEL', 11, 'max-range-label');
    UI$SHELL_ARCS_CHART_instance = new UI('SHELL_ARCS_CHART', 12, 'shell-arcs-chart');
    UI$SHELL_TIME_CHART_instance = new UI('SHELL_TIME_CHART', 13, 'shell-time-chart');
    UI$ABOUT_FOOTER_instance = new UI('ABOUT_FOOTER', 14, 'about-footer');
    UI$RANGE_FOOTER_instance = new UI('RANGE_FOOTER', 15, 'range-footer');
  }
  var UI$TITLE_HEADER_instance;
  function UI$TITLE_HEADER_getInstance() {
    UI_initFields();
    return UI$TITLE_HEADER_instance;
  }
  var UI$ALERT_DIV_instance;
  function UI$ALERT_DIV_getInstance() {
    UI_initFields();
    return UI$ALERT_DIV_instance;
  }
  var UI$NATION_SELECT_instance;
  function UI$NATION_SELECT_getInstance() {
    UI_initFields();
    return UI$NATION_SELECT_instance;
  }
  var UI$TYPE_SELECT_instance;
  function UI$TYPE_SELECT_getInstance() {
    UI_initFields();
    return UI$TYPE_SELECT_instance;
  }
  var UI$SHIP_SELECT_instance;
  function UI$SHIP_SELECT_getInstance() {
    UI_initFields();
    return UI$SHIP_SELECT_instance;
  }
  var UI$SHIP_ADD_BUTTON_instance;
  function UI$SHIP_ADD_BUTTON_getInstance() {
    UI_initFields();
    return UI$SHIP_ADD_BUTTON_instance;
  }
  var UI$SELECTED_SHIPS_LIST_instance;
  function UI$SELECTED_SHIPS_LIST_getInstance() {
    UI_initFields();
    return UI$SELECTED_SHIPS_LIST_instance;
  }
  var UI$INFO_TABLE_instance;
  function UI$INFO_TABLE_getInstance() {
    UI_initFields();
    return UI$INFO_TABLE_instance;
  }
  var UI$CHART_DIV_instance;
  function UI$CHART_DIV_getInstance() {
    UI_initFields();
    return UI$CHART_DIV_instance;
  }
  var UI$RANGE_SLIDER_instance;
  function UI$RANGE_SLIDER_getInstance() {
    UI_initFields();
    return UI$RANGE_SLIDER_instance;
  }
  var UI$RANGE_INPUT_instance;
  function UI$RANGE_INPUT_getInstance() {
    UI_initFields();
    return UI$RANGE_INPUT_instance;
  }
  var UI$MAX_RANGE_LABEL_instance;
  function UI$MAX_RANGE_LABEL_getInstance() {
    UI_initFields();
    return UI$MAX_RANGE_LABEL_instance;
  }
  var UI$SHELL_ARCS_CHART_instance;
  function UI$SHELL_ARCS_CHART_getInstance() {
    UI_initFields();
    return UI$SHELL_ARCS_CHART_instance;
  }
  var UI$SHELL_TIME_CHART_instance;
  function UI$SHELL_TIME_CHART_getInstance() {
    UI_initFields();
    return UI$SHELL_TIME_CHART_instance;
  }
  var UI$ABOUT_FOOTER_instance;
  function UI$ABOUT_FOOTER_getInstance() {
    UI_initFields();
    return UI$ABOUT_FOOTER_instance;
  }
  var UI$RANGE_FOOTER_instance;
  function UI$RANGE_FOOTER_getInstance() {
    UI_initFields();
    return UI$RANGE_FOOTER_instance;
  }
  UI.prototype.getElement = function () {
    return document.getElementById(this.id);
  };
  UI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UI',
    interfaces: [Enum]
  };
  function UI$values() {
    return [UI$TITLE_HEADER_getInstance(), UI$ALERT_DIV_getInstance(), UI$NATION_SELECT_getInstance(), UI$TYPE_SELECT_getInstance(), UI$SHIP_SELECT_getInstance(), UI$SHIP_ADD_BUTTON_getInstance(), UI$SELECTED_SHIPS_LIST_getInstance(), UI$INFO_TABLE_getInstance(), UI$CHART_DIV_getInstance(), UI$RANGE_SLIDER_getInstance(), UI$RANGE_INPUT_getInstance(), UI$MAX_RANGE_LABEL_getInstance(), UI$SHELL_ARCS_CHART_getInstance(), UI$SHELL_TIME_CHART_getInstance(), UI$ABOUT_FOOTER_getInstance(), UI$RANGE_FOOTER_getInstance()];
  }
  UI.values = UI$values;
  function UI$valueOf(name) {
    switch (name) {
      case 'TITLE_HEADER':
        return UI$TITLE_HEADER_getInstance();
      case 'ALERT_DIV':
        return UI$ALERT_DIV_getInstance();
      case 'NATION_SELECT':
        return UI$NATION_SELECT_getInstance();
      case 'TYPE_SELECT':
        return UI$TYPE_SELECT_getInstance();
      case 'SHIP_SELECT':
        return UI$SHIP_SELECT_getInstance();
      case 'SHIP_ADD_BUTTON':
        return UI$SHIP_ADD_BUTTON_getInstance();
      case 'SELECTED_SHIPS_LIST':
        return UI$SELECTED_SHIPS_LIST_getInstance();
      case 'INFO_TABLE':
        return UI$INFO_TABLE_getInstance();
      case 'CHART_DIV':
        return UI$CHART_DIV_getInstance();
      case 'RANGE_SLIDER':
        return UI$RANGE_SLIDER_getInstance();
      case 'RANGE_INPUT':
        return UI$RANGE_INPUT_getInstance();
      case 'MAX_RANGE_LABEL':
        return UI$MAX_RANGE_LABEL_getInstance();
      case 'SHELL_ARCS_CHART':
        return UI$SHELL_ARCS_CHART_getInstance();
      case 'SHELL_TIME_CHART':
        return UI$SHELL_TIME_CHART_getInstance();
      case 'ABOUT_FOOTER':
        return UI$ABOUT_FOOTER_getInstance();
      case 'RANGE_FOOTER':
        return UI$RANGE_FOOTER_getInstance();
      default:Kotlin.throwISE('No enum constant io.github.t3r1jj.sharc.UI.' + name);
    }
  }
  UI.valueOf_61zpoe$ = UI$valueOf;
  function HTTPClient(maxRequestsPerSec) {
    this.maxRequestsPerSec_0 = maxRequestsPerSec;
    this.pendingRequests_0 = ArrayList_init(this.maxRequestsPerSec_0);
  }
  function HTTPClient$get$lambda(closure$url, closure$callback, this$HTTPClient) {
    return function () {
      this$HTTPClient.get_a1vqyy$(closure$url, closure$callback);
    };
  }
  HTTPClient.prototype.get_a1vqyy$ = function (url, callback) {
    this.clearQueue_0();
    if (this.pendingRequests_0.size >= this.maxRequestsPerSec_0) {
      window.setTimeout(HTTPClient$get$lambda(url, callback, this), 1000);
    }
     else {
      var request = new HTTPClient$Request(url, callback);
      this.pendingRequests_0.add_11rb$(request);
      this.doGet_0(request);
    }
  };
  function HTTPClient$clearQueue$lambda(request) {
    var tmp$;
    if (request.endTime != null) {
      return Kotlin.Long.fromNumber((new Date()).getTime()).subtract((tmp$ = request.endTime) != null ? tmp$ : Kotlin.throwNPE()).compareTo_11rb$(Kotlin.Long.fromInt(1000)) > 0;
    }
     else {
      return false;
    }
  }
  HTTPClient.prototype.clearQueue_0 = function () {
    removeAll(this.pendingRequests_0, HTTPClient$clearQueue$lambda);
  };
  function HTTPClient$doGet$lambda(closure$request, closure$xmlHttp) {
    return function (it) {
      closure$request.endTime = Kotlin.Long.fromNumber((new Date()).getTime());
      closure$request.callback(JSON.parse(closure$xmlHttp.responseText));
    };
  }
  function HTTPClient$doGet$lambda_0(closure$request) {
    return function (it) {
      closure$request.endTime = Kotlin.Long.fromNumber((new Date()).getTime());
      closure$request.callback(json([to('error', 'timeout')]));
    };
  }
  function HTTPClient$doGet$lambda_1(closure$request, closure$xmlHttp) {
    return function (it) {
      closure$request.endTime = Kotlin.Long.fromNumber((new Date()).getTime());
      closure$request.callback(json([to('error', closure$xmlHttp.statusText)]));
    };
  }
  HTTPClient.prototype.doGet_0 = function (request) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = HTTPClient$doGet$lambda(request, xmlHttp);
    xmlHttp.ontimeout = HTTPClient$doGet$lambda_0(request);
    xmlHttp.onerror = HTTPClient$doGet$lambda_1(request, xmlHttp);
    xmlHttp.open('GET', request.url, true);
    xmlHttp.send(null);
  };
  function HTTPClient$Request(url, callback) {
    this.url = url;
    this.callback = callback;
    this.endTime = null;
  }
  HTTPClient$Request.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Request',
    interfaces: []
  };
  HTTPClient$Request.prototype.component1 = function () {
    return this.url;
  };
  HTTPClient$Request.prototype.component2 = function () {
    return this.callback;
  };
  HTTPClient$Request.prototype.copy_a1vqyy$ = function (url, callback) {
    return new HTTPClient$Request(url === void 0 ? this.url : url, callback === void 0 ? this.callback : callback);
  };
  HTTPClient$Request.prototype.toString = function () {
    return 'Request(url=' + Kotlin.toString(this.url) + (', callback=' + Kotlin.toString(this.callback)) + ')';
  };
  HTTPClient$Request.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.callback) | 0;
    return result;
  };
  HTTPClient$Request.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.callback, other.callback)))));
  };
  HTTPClient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HTTPClient',
    interfaces: []
  };
  function ShipParser(shipNations) {
    this.shipNations_0 = shipNations;
    this.ship_0 = this.ship_0;
    this.artilleryIds_0 = this.artilleryIds_0;
  }
  ShipParser.prototype.parseShip_2v2adg$ = function (id, shipData, shipsSelection) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this.ship_0 = new Ship(id, shipData.name, shipData.tier);
    this.ship_0.nation = this.shipNations_0[shipsSelection.nation];
    this.ship_0.icon = shipData.images.small;
    this.ship_0.isPremium = shipData.is_premium;
    this.ship_0.isDemo = shipData.has_demo_profile;
    this.ship_0.icon = shipData.images.small;
    this.artilleryIds_0 = Array.isArray(tmp$ = shipData.modules.artillery) ? tmp$ : Kotlin.throwCCE();
    tmp$_1 = Array.isArray(tmp$_0 = shipData.modules.fire_control) ? tmp$_0 : Kotlin.throwCCE();
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var fireControl = tmp$_1[tmp$_2];
      this.ship_0.fireControls.put_xwzc9p$(fireControl.toString(), null);
    }
    tmp$_4 = Array.isArray(tmp$_3 = shipData.modules.hull) ? tmp$_3 : Kotlin.throwCCE();
    for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var hull = tmp$_4[tmp$_5];
      this.ship_0.hullArtilleryShells.put_xwzc9p$(new Hull(hull.toString()), HashMap_init());
    }
    this.parseDefaultArtHull_0(shipData);
    this.parseHullUpgrToArt_0(shipData);
    this.parseArtUpgrToArt_0(shipData);
    this.parseHullUpgrToHull_0(shipData);
    this.parseArtUpgrToHull_0(shipData);
    return this.ship_0;
  };
  ShipParser.prototype.parseDefaultArtHull_0 = function (shipData) {
    var tmp$;
    tmp$ = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var moduleId = tmp$_0.key;
      var moduleData = tmp$_0.value;
      var $receiver = this.artilleryIds_0;
      var firstOrNull_sfx99b$result;
      firstOrNull_sfx99b$break: do {
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
          var element = $receiver[tmp$_1];
          if (Kotlin.equals(element.toString(), moduleId)) {
            firstOrNull_sfx99b$result = element;
            break firstOrNull_sfx99b$break;
          }
        }
        firstOrNull_sfx99b$result = null;
      }
       while (false);
      var artilleryId = firstOrNull_sfx99b$result;
      if (artilleryId != null) {
        var tmp$_2, tmp$_3;
        if (typeof (tmp$_2 = moduleData.is_default) === 'boolean' ? tmp$_2 : Kotlin.throwCCE()) {
          tmp$_3 = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
          while (tmp$_3.hasNext()) {
            var tmp$_4 = tmp$_3.next();
            var moduleId2 = tmp$_4.key;
            var moduleData2 = tmp$_4.value;
            var $receiver_0 = this.ship_0.hullArtilleryShells.keys;
            var firstOrNull_6jwkkr$result;
            firstOrNull_6jwkkr$break: do {
              var tmp$_5;
              tmp$_5 = $receiver_0.iterator();
              while (tmp$_5.hasNext()) {
                var element_0 = tmp$_5.next();
                var hull = element_0.component1();
                if (Kotlin.equals(hull, moduleId2)) {
                  firstOrNull_6jwkkr$result = element_0;
                  break firstOrNull_6jwkkr$break;
                }
              }
              firstOrNull_6jwkkr$result = null;
            }
             while (false);
            var hull_0 = firstOrNull_6jwkkr$result;
            if (hull_0 != null) {
              var tmp$_6, tmp$_7;
              if (typeof (tmp$_6 = moduleData2.is_default) === 'boolean' ? tmp$_6 : Kotlin.throwCCE()) {
                ((tmp$_7 = this.ship_0.hullArtilleryShells.get_11rb$(hull_0)) != null ? tmp$_7 : Kotlin.throwNPE()).put_xwzc9p$(artilleryId.toString(), null);
              }
            }
          }
        }
      }
    }
  };
  ShipParser.prototype.parseHullUpgrToArt_0 = function (shipData) {
    var tmp$;
    tmp$ = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var moduleId = tmp$_0.key;
      var moduleData = tmp$_0.value;
      var $receiver = this.ship_0.hullArtilleryShells.keys;
      var firstOrNull_6jwkkr$result;
      firstOrNull_6jwkkr$break: do {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var hull = element.component1();
          if (Kotlin.equals(hull, moduleId)) {
            firstOrNull_6jwkkr$result = element;
            break firstOrNull_6jwkkr$break;
          }
        }
        firstOrNull_6jwkkr$result = null;
      }
       while (false);
      var hull_0 = firstOrNull_6jwkkr$result;
      if (hull_0 != null) {
        var tmp$_2;
        if (moduleData.next_modules != null) {
          var $receiver_0 = Array.isArray(tmp$_2 = moduleData.next_modules) ? tmp$_2 : Kotlin.throwCCE();
          var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
            var element_0 = $receiver_0[tmp$_3];
            if (contains(this.artilleryIds_0, element_0))
              destination.add_11rb$(element_0);
          }
          var tmp$_4;
          tmp$_4 = destination.iterator();
          while (tmp$_4.hasNext()) {
            var element_1 = tmp$_4.next();
            var tmp$_5;
            (tmp$_5 = this.ship_0.hullArtilleryShells.get_11rb$(hull_0)) != null ? tmp$_5.put_xwzc9p$(element_1.toString(), null) : null;
          }
        }
      }
    }
  };
  ShipParser.prototype.parseArtUpgrToArt_0 = function (shipData) {
    var tmp$;
    tmp$ = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var moduleId = tmp$_0.key;
      var moduleData = tmp$_0.value;
      var $receiver = this.artilleryIds_0;
      var firstOrNull_sfx99b$result;
      firstOrNull_sfx99b$break: do {
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
          var element = $receiver[tmp$_1];
          if (Kotlin.equals(element.toString(), moduleId)) {
            firstOrNull_sfx99b$result = element;
            break firstOrNull_sfx99b$break;
          }
        }
        firstOrNull_sfx99b$result = null;
      }
       while (false);
      var artilleryId = firstOrNull_sfx99b$result;
      if (artilleryId != null) {
        var tmp$_2;
        if (moduleData.next_modules != null) {
          var $receiver_0 = Array.isArray(tmp$_2 = moduleData.next_modules) ? tmp$_2 : Kotlin.throwCCE();
          var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
            var element_0 = $receiver_0[tmp$_3];
            if (contains(this.artilleryIds_0, element_0))
              destination.add_11rb$(element_0);
          }
          var tmp$_4;
          tmp$_4 = destination.iterator();
          while (tmp$_4.hasNext()) {
            var element_1 = tmp$_4.next();
            var tmp$_5, tmp$_6;
            var $receiver_1 = this.ship_0.hullArtilleryShells.entries;
            var firstOrNull_6jwkkr$result;
            firstOrNull_6jwkkr$break: do {
              var tmp$_7;
              tmp$_7 = $receiver_1.iterator();
              while (tmp$_7.hasNext()) {
                var element_2 = tmp$_7.next();
                if (element_2.value.keys.contains_11rb$(artilleryId.toString())) {
                  firstOrNull_6jwkkr$result = element_2;
                  break firstOrNull_6jwkkr$break;
                }
              }
              firstOrNull_6jwkkr$result = null;
            }
             while (false);
            (tmp$_6 = (tmp$_5 = firstOrNull_6jwkkr$result) != null ? tmp$_5.value : null) != null ? tmp$_6.put_xwzc9p$(element_1.toString(), null) : null;
          }
        }
      }
    }
  };
  ShipParser.prototype.parseHullUpgrToHull_0 = function (shipData) {
    var tmp$;
    tmp$ = this.ship_0.hullArtilleryShells.keys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_1 = tmp$_0.next();
        var moduleId = tmp$_1.key;
        var moduleData = tmp$_1.value;
        var $receiver = this.ship_0.hullArtilleryShells.keys;
        var firstOrNull_6jwkkr$result;
        firstOrNull_6jwkkr$break: do {
          var tmp$_2;
          tmp$_2 = $receiver.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            var hull = element_0.component1();
            if (Kotlin.equals(hull, moduleId)) {
              firstOrNull_6jwkkr$result = element_0;
              break firstOrNull_6jwkkr$break;
            }
          }
          firstOrNull_6jwkkr$result = null;
        }
         while (false);
        var hull_0 = firstOrNull_6jwkkr$result;
        if (hull_0 != null) {
          var tmp$_3;
          if (moduleData.next_modules != null) {
            var $receiver_0 = Array.isArray(tmp$_3 = moduleData.next_modules) ? tmp$_3 : Kotlin.throwCCE();
            var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            var tmp$_4;
            for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
              var element_1 = $receiver_0[tmp$_4];
              var $receiver_1 = this.ship_0.hullArtilleryShells.entries;
              var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
              var tmp$_5;
              tmp$_5 = $receiver_1.iterator();
              while (tmp$_5.hasNext()) {
                var element_2 = tmp$_5.next();
                if (Kotlin.equals(element_2.key.id, element_1.toString()))
                  destination_0.add_11rb$(element_2);
              }
              var list = destination_0;
              Kotlin.kotlin.collections.addAll_ipc267$(destination, list);
            }
            var tmp$_6;
            tmp$_6 = destination.iterator();
            while (tmp$_6.hasNext()) {
              var element_3 = tmp$_6.next();
              var tmp$_7;
              element_3.value.putAll_a2k3zr$((tmp$_7 = this.ship_0.hullArtilleryShells.get_11rb$(hull_0)) != null ? tmp$_7 : Kotlin.throwNPE());
            }
          }
          hull_0.name = moduleData.name;
        }
      }
    }
  };
  ShipParser.prototype.parseArtUpgrToHull_0 = function (shipData) {
    var tmp$;
    tmp$ = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(shipData.modules_tree).entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var moduleId = tmp$_0.key;
      var moduleData = tmp$_0.value;
      var $receiver = this.artilleryIds_0;
      var firstOrNull_sfx99b$result;
      firstOrNull_sfx99b$break: do {
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
          var element = $receiver[tmp$_1];
          if (Kotlin.equals(element.toString(), moduleId)) {
            firstOrNull_sfx99b$result = element;
            break firstOrNull_sfx99b$break;
          }
        }
        firstOrNull_sfx99b$result = null;
      }
       while (false);
      var artilleryId = firstOrNull_sfx99b$result;
      if (artilleryId != null) {
        var tmp$_2;
        if (moduleData.next_modules != null) {
          var $receiver_0 = Array.isArray(tmp$_2 = moduleData.next_modules) ? tmp$_2 : Kotlin.throwCCE();
          var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          var tmp$_3;
          for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
            var element_0 = $receiver_0[tmp$_3];
            var $receiver_1 = this.ship_0.hullArtilleryShells.entries;
            var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            var tmp$_4;
            tmp$_4 = $receiver_1.iterator();
            while (tmp$_4.hasNext()) {
              var element_1 = tmp$_4.next();
              if (Kotlin.equals(element_1.key.id, element_0.toString()))
                destination_0.add_11rb$(element_1);
            }
            var list = destination_0;
            Kotlin.kotlin.collections.addAll_ipc267$(destination, list);
          }
          var tmp$_5;
          tmp$_5 = destination.iterator();
          while (tmp$_5.hasNext()) {
            var element_2 = tmp$_5.next();
            element_2.value.put_xwzc9p$(artilleryId.toString(), null);
          }
        }
      }
    }
  };
  ShipParser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShipParser',
    interfaces: []
  };
  function WarshipsAPI() {
    WarshipsAPI$Companion_getInstance();
    this.APP_ID_0 = '14f8896369d75d00facabd7efb875317';
    this.ROOT_URL_0 = 'https://api.worldofwarships.eu/wows';
    this.BASIC_INFO_ENDPOINT_0 = 'https://api.worldofwarships.eu/wows/encyclopedia/info/?application_id=14f8896369d75d00facabd7efb875317&fields=ship_types%2Cship_nations%2Cgame_version';
    this.gameVersion = '';
    this.shipTypes = null;
    this.shipNations = null;
    this.ships = HashMap_init();
  }
  function WarshipsAPI$Companion() {
    WarshipsAPI$Companion_instance = this;
    this.HTTP_CLIENT_0 = new HTTPClient(10);
  }
  WarshipsAPI$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WarshipsAPI$Companion_instance = null;
  function WarshipsAPI$Companion_getInstance() {
    if (WarshipsAPI$Companion_instance === null) {
      new WarshipsAPI$Companion();
    }
    return WarshipsAPI$Companion_instance;
  }
  WarshipsAPI.prototype.WARSHIP_NAMES_ENPOINT_0 = function (nation, type) {
    return this.ROOT_URL_0 + '/encyclopedia/ships/?application_id=' + this.APP_ID_0 + '&fields=name%2Ctier%2Cmodules.hull%2Cimages.small%2Cmodules.artillery%2Cmodules.hull%2Cmodules.fire_control%2Cmodules_tree.is_default%2Cmodules_tree.name%2Cmodules_tree.next_modules%2Cis_premium%2Chas_demo_profile%2Cimages.small&type=' + type + '&nation=' + nation;
  };
  WarshipsAPI.prototype.WARSHIP_MODULES_ENDPOINT_0 = function (moduleIds) {
    var tmp$;
    var endpoint = 'https://api.worldofwarships.eu/wows/encyclopedia/modules/?application_id=14f8896369d75d00facabd7efb875317';
    var modulesParam = '&module_id=';
    var prefix = '';
    tmp$ = moduleIds.iterator();
    while (tmp$.hasNext()) {
      var moduleId = tmp$.next();
      modulesParam += prefix + moduleId;
      prefix = ',';
    }
    return endpoint + modulesParam;
  };
  WarshipsAPI.prototype.WARSHIP_ARTILLERY_ENDPOINT_0 = function (shipId, hullId, artilleryId) {
    return this.ROOT_URL_0 + '/encyclopedia/shipprofile/?application_id=' + this.APP_ID_0 + '&ship_id=' + shipId + '&hull_id=' + hullId + '&artillery_id=' + artilleryId + '&fields=artillery.shells.name%2Cartillery.slots.name%2Cartillery.shells.bullet_speed%2Cartillery.shells.bullet_mass%2Cartillery.shells.type';
  };
  function WarshipsAPI$getShipNations$lambda(f) {
    var value = f.component2();
    return value;
  }
  WarshipsAPI.prototype.getShipNations = function () {
    var $receiver = toList(JsonUtils$Companion_getInstance().jsonToMap_qk3xy8$(this.shipNations));
    return toMap(reversed(Kotlin.kotlin.collections.sortedWith_eknfly$($receiver, new Kotlin.kotlin.Comparator_x4fedy$$f(Kotlin.kotlin.comparisons.compareBy$f(WarshipsAPI$getShipNations$lambda)))));
  };
  function WarshipsAPI$getShipTypes$lambda(f) {
    var value = f.component2();
    return value;
  }
  WarshipsAPI.prototype.getShipTypes = function () {
    var $receiver = toList(JsonUtils$Companion_getInstance().jsonToMap_qk3xy8$(this.shipTypes));
    var $receiver_0 = toMap(reversed(Kotlin.kotlin.collections.sortedWith_eknfly$($receiver, new Kotlin.kotlin.Comparator_x4fedy$$f(Kotlin.kotlin.comparisons.compareBy$f(WarshipsAPI$getShipTypes$lambda)))));
    var destination = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!contains_0(element.key, 'Submarine')) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return destination;
  };
  WarshipsAPI.prototype.getShips_r67gg3$ = function (shipsSelection) {
    var tmp$;
    return reversedArray((tmp$ = this.ships.get_11rb$(shipsSelection)) != null ? tmp$ : Kotlin.throwNPE());
  };
  WarshipsAPI.prototype.getShip_61zpoe$ = function (id) {
    var $receiver = this.ships.values;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = asIterable(element);
      Kotlin.kotlin.collections.addAll_ipc267$(destination, list);
    }
    var tmp$result;
    tmp$break: do {
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Kotlin.equals(element_0.id, id)) {
          tmp$result = element_0;
          break tmp$break;
        }
      }
      throw new Kotlin.kotlin.NoSuchElementException('Collection contains no element matching the predicate.');
    }
     while (false);
    return tmp$result;
  };
  function WarshipsAPI$loadBasicInfo$lambda(this$WarshipsAPI, closure$callback) {
    return function (json) {
      try {
        this$WarshipsAPI.parseBasicInfo_0(json);
        closure$callback(null);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$callback(e);
        }
         else
          throw e;
      }
    };
  }
  WarshipsAPI.prototype.loadBasicInfo_f05bi3$ = function (callback) {
    WarshipsAPI$Companion_getInstance().HTTP_CLIENT_0.get_a1vqyy$(this.BASIC_INFO_ENDPOINT_0, WarshipsAPI$loadBasicInfo$lambda(this, callback));
  };
  WarshipsAPI.prototype.parseBasicInfo_0 = function (json) {
    this.gameVersion = json.data.game_version;
    this.shipTypes = json.data.ship_types;
    this.shipNations = json.data.ship_nations;
  };
  function WarshipsAPI$loadShips$lambda(closure$shipsSelection, this$WarshipsAPI, closure$callback) {
    return function (json) {
      try {
        this$WarshipsAPI.parseShips_0(json, closure$shipsSelection);
        closure$callback(null);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$callback(e);
        }
         else
          throw e;
      }
    };
  }
  WarshipsAPI.prototype.loadShips_w5p1fw$ = function (shipsSelection, callback) {
    if (this.ships.get_11rb$(shipsSelection) != null) {
      callback(null);
      return;
    }
    WarshipsAPI$Companion_getInstance().HTTP_CLIENT_0.get_a1vqyy$(this.WARSHIP_NAMES_ENPOINT_0(shipsSelection.nation, shipsSelection.type), WarshipsAPI$loadShips$lambda(shipsSelection, this, callback));
  };
  function WarshipsAPI$parseShips$lambda(ship) {
    return ship.tier;
  }
  WarshipsAPI.prototype.parseShips_0 = function (json, shipsSelection) {
    var tmp$;
    var loadedShips = ArrayList_init();
    tmp$ = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(json.data).entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var id = tmp$_0.key;
      var shipData = tmp$_0.value;
      var ship = (new ShipParser(this.shipNations)).parseShip_2v2adg$(id, shipData, shipsSelection);
      loadedShips.add_11rb$(ship);
    }
    if (loadedShips.size > 1) {
      Kotlin.kotlin.collections.sortWith_nqfjgj$(loadedShips, new Kotlin.kotlin.Comparator_x4fedy$$f(Kotlin.kotlin.comparisons.compareBy$f(WarshipsAPI$parseShips$lambda)));
    }
    this.ships.put_xwzc9p$(shipsSelection, Kotlin.kotlin.collections.copyToArray(loadedShips));
  };
  function WarshipsAPI$loadShip$lambda(closure$callback, closure$ship) {
    return function (e) {
      if (e != null) {
        closure$callback(e);
      }
       else if (closure$ship.isLoaded()) {
        closure$callback(null);
      }
    };
  }
  function WarshipsAPI$loadShip$lambda_0(closure$callback, closure$ship) {
    return function (e) {
      if (e != null) {
        closure$callback(e);
      }
       else if (closure$ship.isLoaded()) {
        closure$callback(null);
      }
    };
  }
  WarshipsAPI.prototype.loadShip_man966$ = function (ship, callback) {
    if (ship.isLoaded()) {
      callback(null);
      return;
    }
    this.loadShipModules_ly8ytb$(listOf(ship), WarshipsAPI$loadShip$lambda(callback, ship));
    this.loadShipArtillery_man966$(ship, WarshipsAPI$loadShip$lambda_0(callback, ship));
  };
  function WarshipsAPI$loadShipArtillery$lambda(closure$ship, closure$artilleryId, closure$artilleryShells, this$WarshipsAPI, closure$callback, closure$hull) {
    return function (json) {
      try {
        this$WarshipsAPI.parseShipArtillery_0(json, closure$ship.id, closure$artilleryId, closure$artilleryShells);
        if (closure$ship.isArtilleryLoaded()) {
          closure$callback(null);
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.log('hull: ' + Kotlin.toString(closure$hull));
          console.log('art: ' + closure$artilleryId);
          console.log('ship: ' + closure$ship.id);
          closure$callback(e);
        }
         else
          throw e;
      }
    };
  }
  WarshipsAPI.prototype.loadShipArtillery_man966$ = function (ship, callback) {
    var tmp$, tmp$_0;
    if (ship.isArtilleryLoaded()) {
      callback(null);
      return;
    }
    tmp$ = ship.hullArtilleryShells.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var hull = tmp$_1.key;
      var artilleryShells = tmp$_1.value;
      tmp$_0 = artilleryShells.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var artilleryId = tmp$_2.key;
        var shells = tmp$_2.value;
        if (shells == null) {
          WarshipsAPI$Companion_getInstance().HTTP_CLIENT_0.get_a1vqyy$(this.WARSHIP_ARTILLERY_ENDPOINT_0(ship.id, hull.id, artilleryId), WarshipsAPI$loadShipArtillery$lambda(ship, artilleryId, artilleryShells, this, callback, hull));
        }
      }
    }
  };
  WarshipsAPI.prototype.parseShipArtillery_0 = function (json, shipId, artilleryId, artilleryShells) {
    var tmp$;
    var artillery = json.data[shipId].artillery;
    var shellsJson = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(artillery.shells);
    var shells = ArrayList_init();
    tmp$ = shellsJson.entries.iterator();
    while (tmp$.hasNext()) {
      var shellJson = tmp$.next();
      var shellArt = artillery.slots['0'].name;
      var shell = new Shell(toDouble(split(shellArt.toString(), [' ']).get_za3lpa$(0)) / 1000, shellJson.value.bullet_mass, shellJson.value.bullet_speed);
      shell.type = shellJson.value.type;
      shell.art = shellArt;
      shell.name = shellJson.value.name;
      shells.add_11rb$(shell);
    }
    artilleryShells.put_xwzc9p$(artillery.slots['0'].name, Kotlin.kotlin.collections.copyToArray(shells));
    artilleryShells.remove_11rb$(artilleryId);
  };
  function WarshipsAPI$loadShipModules$lambda(closure$ships, this$WarshipsAPI, closure$callback) {
    return function (json) {
      try {
        this$WarshipsAPI.parseShipModules_0(json, closure$ships);
        closure$callback(null);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$callback(e);
        }
         else
          throw e;
      }
    };
  }
  WarshipsAPI.prototype.loadShipModules_ly8ytb$ = function (ships, callback) {
    var tmp$, tmp$_0;
    var moduleIds = ArrayList_init();
    tmp$ = ships.iterator();
    while (tmp$.hasNext()) {
      var ship = tmp$.next();
      tmp$_0 = ship.fireControls.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_1 = tmp$_0.next();
        var moduleId = tmp$_1.key;
        var value = tmp$_1.value;
        if (value == null) {
          moduleIds.add_11rb$(moduleId);
        }
      }
    }
    if (moduleIds.isEmpty()) {
      callback(null);
      return;
    }
    WarshipsAPI$Companion_getInstance().HTTP_CLIENT_0.get_a1vqyy$(this.WARSHIP_MODULES_ENDPOINT_0(moduleIds), WarshipsAPI$loadShipModules$lambda(ships, this, callback));
  };
  WarshipsAPI.prototype.parseShipModules_0 = function (json, ships) {
    var tmp$, tmp$_0, tmp$_1;
    var data = JsonUtils$Companion_getInstance().jsonToDynamicMap_qk3xy8$(json.data);
    tmp$ = ships.iterator();
    while (tmp$.hasNext()) {
      var ship = tmp$.next();
      tmp$_0 = ship.fireControls.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var moduleId = tmp$_2.key;
        var value = tmp$_2.value;
        if (value == null) {
          var module_0 = data.get_11rb$(moduleId);
          ship.fireControls.put_xwzc9p$(module_0.name.toString(), (typeof (tmp$_1 = module_0.profile.fire_control.distance) === 'number' ? tmp$_1 : Kotlin.throwCCE()) * 1000);
          ship.fireControls.remove_11rb$(moduleId);
        }
      }
    }
  };
  function WarshipsAPI$ShipsSelection(nation, type) {
    this.nation = nation;
    this.type = type;
  }
  WarshipsAPI$ShipsSelection.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShipsSelection',
    interfaces: []
  };
  WarshipsAPI$ShipsSelection.prototype.component1 = function () {
    return this.nation;
  };
  WarshipsAPI$ShipsSelection.prototype.component2 = function () {
    return this.type;
  };
  WarshipsAPI$ShipsSelection.prototype.copy_puj7f4$ = function (nation, type) {
    return new WarshipsAPI$ShipsSelection(nation === void 0 ? this.nation : nation, type === void 0 ? this.type : type);
  };
  WarshipsAPI$ShipsSelection.prototype.toString = function () {
    return 'ShipsSelection(nation=' + Kotlin.toString(this.nation) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  WarshipsAPI$ShipsSelection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nation) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  WarshipsAPI$ShipsSelection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nation, other.nation) && Kotlin.equals(this.type, other.type)))));
  };
  WarshipsAPI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WarshipsAPI',
    interfaces: []
  };
  function Calculator(shell) {
    Calculator$Companion_getInstance();
    this.shell_8be2vx$ = shell;
    this.range = DoubleCompanionObject.POSITIVE_INFINITY;
    this.angleOverRange = false;
    this.xCoordinates_0 = ArrayList_init();
    this.yCoordinates_0 = ArrayList_init();
    this.time_0 = ArrayList_init();
    this.impactAngle_0 = 0.0;
    this.deckArmor_0 = 0.0;
    this.beltArmor_0 = 0.0;
    this.xAngleCoordinates = null;
    this.yAngleCoordinates = null;
    this.angleTimes = null;
    this.impactAngles = null;
    this.deckArmors = null;
    this.beltArmors = null;
  }
  function Calculator$Companion() {
    Calculator$Companion_instance = this;
    this.g_0 = 9.81;
    this.T_0 = 288;
    this.L_0 = 0.0065;
    this.p_0 = 101325;
    this.R_0 = 8.31447;
    this.M_0 = 0.0289644;
    this.dt_0 = 0.1;
    this.TIME_SCALE_0 = 3.0;
  }
  Calculator$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Calculator$Companion_instance = null;
  function Calculator$Companion_getInstance() {
    if (Calculator$Companion_instance === null) {
      new Calculator$Companion();
    }
    return Calculator$Companion_instance;
  }
  Calculator.prototype.getXCoordinates = function (distance) {
    var tmp$;
    return ((tmp$ = this.xAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.getYCoordinates = function (distance) {
    var tmp$;
    return ((tmp$ = this.yAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.getCalculatedDistance = function (distance) {
    var tmp$;
    var xCoordinates = ((tmp$ = this.xAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
    return xCoordinates[get_lastIndex(xCoordinates)];
  };
  Calculator.prototype.getTime = function (distance) {
    var tmp$;
    return ((tmp$ = this.angleTimes) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.getImpactAngle = function (distance) {
    var tmp$;
    return ((tmp$ = this.impactAngles) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.getDeckArmor = function (distance) {
    var tmp$;
    return ((tmp$ = this.deckArmors) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.getBeltArmor = function (distance) {
    var tmp$;
    return ((tmp$ = this.beltArmors) != null ? tmp$ : Kotlin.throwNPE())[this.findClosestAngleIndex_0(Kotlin.numberToDouble(distance))];
  };
  Calculator.prototype.hasData = function () {
    return this.xAngleCoordinates != null;
  };
  Calculator.prototype.findClosestAngleIndex_0 = function (range) {
    var tmp$, tmp$_0, tmp$_1;
    var closestIndex = 0;
    var minError = range;
    tmp$_0 = get_lastIndex((tmp$ = this.xAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE());
    for (var index = 0; index <= tmp$_0; index++) {
      var xCoordinates = ((tmp$_1 = this.xAngleCoordinates) != null ? tmp$_1 : Kotlin.throwNPE())[index];
      var angleDistance = xCoordinates[get_lastIndex(xCoordinates)];
      var currentError = Math.abs(angleDistance - range);
      if (currentError < minError) {
        minError = currentError;
        closestIndex = index;
      }
    }
    closestIndex = this.normalizeDataIndex_0(closestIndex);
    return closestIndex;
  };
  Calculator.prototype.findClosestAngleXIndex_lu1900$ = function (range, distance) {
    var tmp$;
    var xCoordinates = this.getXCoordinates(range);
    var closestIndex = 0;
    var minError = distance;
    tmp$ = get_lastIndex(xCoordinates);
    for (var index = 0; index <= tmp$; index++) {
      var xCoordinate = xCoordinates[index];
      var currentError = Math.abs(xCoordinate - distance);
      if (currentError < minError) {
        minError = currentError;
        closestIndex = index;
      }
    }
    closestIndex = this.normalizeDataIndex_0(closestIndex);
    return closestIndex;
  };
  Calculator.prototype.normalizeDataIndex_0 = function (closestIndex) {
    var tmp$;
    if (closestIndex === 0 && closestIndex !== get_lastIndex((tmp$ = this.xAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE())) {
      return 1;
    }
    return closestIndex;
  };
  Calculator.prototype.calculateArcs = function () {
    this.angleOverRange = false;
    var xAngleCoordinates = ArrayList_init();
    var yAngleCoordinates = ArrayList_init();
    var angleTimes = ArrayList_init();
    var impactAngles = ArrayList_init();
    var deckArmors = ArrayList_init();
    var beltArmors = ArrayList_init();
    var maxAngle = 30;
    var degreeIterations = 100;
    var maxAngleEntries = Kotlin.imul(maxAngle, degreeIterations);
    for (var angle = 0; angle <= maxAngleEntries; angle++) {
      if (this.angleOverRange) {
        break;
      }
      this.calculateArc(angle / degreeIterations);
      var $receiver = this.xCoordinates_0;
      xAngleCoordinates.add_11rb$(Kotlin.kotlin.collections.copyToArray($receiver));
      var $receiver_0 = this.yCoordinates_0;
      yAngleCoordinates.add_11rb$(Kotlin.kotlin.collections.copyToArray($receiver_0));
      var $receiver_1 = this.time_0;
      angleTimes.add_11rb$(Kotlin.kotlin.collections.copyToArray($receiver_1));
      impactAngles.add_11rb$(this.impactAngle_0);
      deckArmors.add_11rb$(this.deckArmor_0);
      beltArmors.add_11rb$(this.beltArmor_0);
    }
    this.xAngleCoordinates = Kotlin.kotlin.collections.copyToArray(xAngleCoordinates);
    this.yAngleCoordinates = Kotlin.kotlin.collections.copyToArray(yAngleCoordinates);
    this.angleTimes = Kotlin.kotlin.collections.copyToArray(angleTimes);
    this.impactAngles = Kotlin.kotlin.collections.copyToArray(impactAngles);
    this.deckArmors = Kotlin.kotlin.collections.copyToArray(deckArmors);
    this.beltArmors = Kotlin.kotlin.collections.copyToArray(beltArmors);
  };
  Calculator.prototype.calculateArc = function (angle) {
    var alpha = Kotlin.numberToDouble(angle) * Math.PI / 180;
    this.xCoordinates_0.clear();
    this.yCoordinates_0.clear();
    this.time_0.clear();
    var vX = Math.cos(alpha) * this.shell_8be2vx$.vInit;
    var vY = Math.sin(alpha) * this.shell_8be2vx$.vInit;
    var y = 0.0;
    var x = 0.0;
    var t = 0.0;
    var dt = this.getSmoothedDt_0(angle);
    this.xCoordinates_0.add_11rb$(x);
    this.yCoordinates_0.add_11rb$(y);
    this.time_0.add_11rb$(t);
    while (y >= 0) {
      x += dt * vX;
      y += dt * vY;
      var rho = this.p_0(y) * Calculator$Companion_getInstance().M_0 / (Calculator$Companion_getInstance().R_0 * this.T_0(y));
      vX -= dt * this.shell_8be2vx$.k * rho * (this.shell_8be2vx$.cwQuad * vX * vX + this.shell_8be2vx$.cwLin * vX);
      vY -= dt * Calculator$Companion_getInstance().g_0 - dt * this.shell_8be2vx$.k * rho * (this.shell_8be2vx$.cwQuad * vY * vY + this.shell_8be2vx$.cwLin * Math.abs(vY)) * this.sign_0(vY);
      t += dt;
      this.xCoordinates_0.add_11rb$(x);
      this.yCoordinates_0.add_11rb$(y);
      this.time_0.add_11rb$(t / Calculator$Companion_getInstance().TIME_SCALE_0);
      if (x > this.range) {
        this.angleOverRange = true;
      }
    }
    var v = Math.sqrt(vY * vY + vX * vX);
    var hitPen = this.shell_8be2vx$.pen * Math.pow(v, 1.1) * Math.pow(this.shell_8be2vx$.m, 0.55) / Math.pow(this.shell_8be2vx$.D * 1000, 0.65);
    this.impactAngle_0 = Math.atan(Math.abs(vY) / Math.abs(vX));
    this.beltArmor_0 = Math.sin(this.impactAngle_0) * hitPen;
    this.deckArmor_0 = Math.cos(this.impactAngle_0) * hitPen;
  };
  Calculator.prototype.getSmoothedDt_0 = function (angle) {
    var tmp$;
    tmp$ = Kotlin.numberToInt(angle) * 10 | 0;
    if (tmp$ >= 0 && tmp$ <= 5)
      return Calculator$Companion_getInstance().dt_0 / 100;
    else if (tmp$ >= 6 && tmp$ <= 10)
      return Calculator$Companion_getInstance().dt_0 / 50;
    else if (tmp$ >= 11 && tmp$ <= 15)
      return Calculator$Companion_getInstance().dt_0 / 25;
    else if (tmp$ >= 16 && tmp$ <= 20)
      return Calculator$Companion_getInstance().dt_0 / 5;
    else
      return Calculator$Companion_getInstance().dt_0;
  };
  Calculator.prototype.T_0 = function (y) {
    return Calculator$Companion_getInstance().T_0 - Calculator$Companion_getInstance().L_0 * y;
  };
  Calculator.prototype.p_0 = function (y) {
    return Calculator$Companion_getInstance().p_0 * Math.pow(1 - Calculator$Companion_getInstance().L_0 * y / Calculator$Companion_getInstance().T_0, Calculator$Companion_getInstance().g_0 * Calculator$Companion_getInstance().M_0 / (Calculator$Companion_getInstance().R_0 * Calculator$Companion_getInstance().L_0));
  };
  Calculator.prototype.calculateAngle = function (distance) {
    var tmp$;
    var angle = this.calculateAngleOfReach_0(distance);
    var maxError = 1.0;
    var lastError;
    var error = Kotlin.numberToDouble(distance);
    do {
      lastError = error;
      var innerCalculator = new Calculator(this.shell_8be2vx$);
      innerCalculator.calculateArc(angle);
      error = Kotlin.numberToDouble(distance) - innerCalculator.xCoordinates_0.get_za3lpa$(get_lastIndex((tmp$ = innerCalculator.xAngleCoordinates) != null ? tmp$ : Kotlin.throwNPE()));
      if (error < -maxError) {
        angle -= angle / 2;
      }
       else if (error > maxError) {
        angle += angle / 2;
      }
    }
     while (Math.abs(error) > maxError && Math.abs(lastError) > Math.abs(error));
    return angle;
  };
  Calculator.prototype.calculateAngleOfReach_0 = function (distance) {
    return 0.5 * Math.asin(Calculator$Companion_getInstance().g_0 * Kotlin.numberToDouble(distance) / (this.shell_8be2vx$.vInit * this.shell_8be2vx$.vInit));
  };
  Calculator.prototype.sign_0 = function (x) {
    if (x > 0)
      return 1.0;
    else if (x < 0)
      return -1.0;
    else
      return 0.0;
  };
  Calculator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Calculator',
    interfaces: []
  };
  function Calculator_init(shell, range, $this) {
    $this = $this || Object.create(Calculator.prototype);
    Calculator.call($this, shell);
    $this.range = range;
    return $this;
  }
  function Hull(id) {
    this.id = id;
    this.name = this.name;
  }
  Hull.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hull',
    interfaces: []
  };
  Hull.prototype.component1 = function () {
    return this.id;
  };
  Hull.prototype.copy_61zpoe$ = function (id) {
    return new Hull(id === void 0 ? this.id : id);
  };
  Hull.prototype.toString = function () {
    return 'Hull(id=' + Kotlin.toString(this.id) + ')';
  };
  Hull.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Hull.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function Shell(D, m, vInit) {
    Shell$Companion_getInstance();
    this.D = D;
    this.m = m;
    this.vInit = vInit;
    this.pen = 0.5561613 * Shell$Companion_getInstance().krupp / 2400;
    this.cwQuad = 1;
    this.cD = 0.321;
    this.cwLin = 100 + (1000 / 3 | 0) * this.D;
    this.k = 0.5 * this.cD * (this.D / 2) * (this.D / 2) * Math.PI / this.m;
    this.art = null;
    this.name = null;
    this.type = null;
    this.info = new Shell$ShellInfo();
  }
  function Shell$Companion() {
    Shell$Companion_instance = this;
    this.krupp = 2216;
  }
  Shell$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Shell$Companion_instance = null;
  function Shell$Companion_getInstance() {
    if (Shell$Companion_instance === null) {
      new Shell$Companion();
    }
    return Shell$Companion_instance;
  }
  Shell.prototype.toString = function () {
    return this.info.toString() + ' (' + this.art + ')';
  };
  Shell.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !Kotlin.equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Shell) ? tmp$ : Kotlin.throwCCE();
    if (this.D !== other.D)
      return false;
    if (this.m !== other.m)
      return false;
    if (this.vInit !== other.vInit)
      return false;
    if (this.pen !== other.pen)
      return false;
    if (this.cwQuad !== other.cwQuad)
      return false;
    if (this.cD !== other.cD)
      return false;
    if (this.cwLin !== other.cwLin)
      return false;
    if (this.k !== other.k)
      return false;
    return true;
  };
  Shell.prototype.hashCode = function () {
    var result = Kotlin.hashCode(this.D);
    result = (31 * result | 0) + Kotlin.hashCode(this.m) | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.vInit) | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.pen) | 0;
    result = (31 * result | 0) + this.cwQuad | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.cD) | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.cwLin) | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.k) | 0;
    return result;
  };
  function Shell$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Shell$Type_initFields() {
    Shell$Type_initFields = function () {
    };
    Shell$Type$AP_instance = new Shell$Type('AP', 0);
    Shell$Type$HE_instance = new Shell$Type('HE', 1);
  }
  var Shell$Type$AP_instance;
  function Shell$Type$AP_getInstance() {
    Shell$Type_initFields();
    return Shell$Type$AP_instance;
  }
  var Shell$Type$HE_instance;
  function Shell$Type$HE_getInstance() {
    Shell$Type_initFields();
    return Shell$Type$HE_instance;
  }
  Shell$Type.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Shell$Type$values() {
    return [Shell$Type$AP_getInstance(), Shell$Type$HE_getInstance()];
  }
  Shell$Type.values = Shell$Type$values;
  function Shell$Type$valueOf(name) {
    switch (name) {
      case 'AP':
        return Shell$Type$AP_getInstance();
      case 'HE':
        return Shell$Type$HE_getInstance();
      default:Kotlin.throwISE('No enum constant io.github.t3r1jj.sharc.model.Shell.Type.' + name);
    }
  }
  Shell$Type.valueOf_61zpoe$ = Shell$Type$valueOf;
  function Shell$ShellInfo() {
    this.hulls = HashSet_init();
    this.types = HashSet_init();
  }
  Shell$ShellInfo.prototype.toString = function () {
    var stringBuilder = new StringBuilder(' ');
    var prefix = {v: '['};
    var tmp$;
    tmp$ = this.hulls.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      stringBuilder.append_gw00v9$(prefix.v).append_gw00v9$(element.name);
      prefix.v = ', ';
    }
    stringBuilder.append_gw00v9$(']');
    prefix.v = ' ';
    var tmp$_0;
    tmp$_0 = this.types.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      stringBuilder.append_gw00v9$(prefix.v).append_s8jyv4$(element_0);
      prefix.v = '+';
    }
    return stringBuilder.toString();
  };
  Shell$ShellInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShellInfo',
    interfaces: []
  };
  Shell.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Shell',
    interfaces: []
  };
  function Ship(id, name, tier) {
    this.id = id;
    this.name = name;
    this.tier = tier;
    this.shellCalculators = HashMap_init();
    this.hullArtilleryShells = HashMap_init();
    this.fireControls = HashMap_init();
    this.isPremium = false;
    this.isDemo = false;
    this.icon = null;
    this.nation = null;
    this.maxRange = 0.0;
    this.fireControlsRange = 0.0;
  }
  Ship.prototype.initCalculators = function () {
    var tmp$, tmp$_0;
    if (this.isInitialized_0()) {
      return;
    }
    tmp$ = this.fireControls.entries.iterator();
    while (tmp$.hasNext()) {
      var fireControl = tmp$.next();
      this.fireControlsRange = Math.max(this.fireControlsRange, (tmp$_0 = fireControl.value) != null ? tmp$_0 : 0.0);
    }
    this.maxRange = this.fireControlsRange * 1.2;
    var tmp$_1;
    tmp$_1 = this.hullArtilleryShells.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var hull = element.key;
      var artilleryShells = element.value;
      var tmp$_2;
      tmp$_2 = artilleryShells.entries.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var tmp$_3;
        var $receiver = (tmp$_3 = element_0.value) != null ? tmp$_3 : Kotlin.throwNPE();
        var tmp$_4;
        for (tmp$_4 = 0; tmp$_4 !== $receiver.length; ++tmp$_4) {
          var element_1 = $receiver[tmp$_4];
          var tmp$_5;
          var previousCalculator = this.shellCalculators.put_xwzc9p$(element_1, Calculator_init(element_1, this.maxRange));
          if (previousCalculator != null) {
            this.aggregateShellInfo_0(element_1, previousCalculator.shell_8be2vx$);
          }
          element_1.info.hulls.add_11rb$(hull);
          element_1.info.types.add_11rb$((tmp$_5 = element_1.type) != null ? tmp$_5 : Kotlin.throwNPE());
        }
      }
    }
  };
  Ship.prototype.aggregateShellInfo_0 = function (shell, previousShell) {
    shell.info.hulls = previousShell.info.hulls;
    shell.info.types = previousShell.info.types;
  };
  Ship.prototype.isInitialized_0 = function () {
    return !this.shellCalculators.isEmpty();
  };
  Ship.prototype.isLoaded = function () {
    return this.isArtilleryLoaded() && this.isFireControlsLoaded();
  };
  Ship.prototype.isArtilleryLoaded = function () {
    var $receiver = this.hullArtilleryShells;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.value.values;
      Kotlin.kotlin.collections.addAll_ipc267$(destination, list);
    }
    return !destination.contains_11rb$(null);
  };
  Ship.prototype.isFireControlsLoaded = function () {
    return !this.fireControls.values.contains_11rb$(null);
  };
  Ship.prototype.getTier = function () {
    var tmp$;
    tmp$ = this.tier;
    if (tmp$ === 1)
      return 'I';
    else if (tmp$ === 2)
      return 'II';
    else if (tmp$ === 3)
      return 'III';
    else if (tmp$ === 4)
      return 'IV';
    else if (tmp$ === 5)
      return 'V';
    else if (tmp$ === 6)
      return 'VI';
    else if (tmp$ === 7)
      return 'VII';
    else if (tmp$ === 8)
      return 'VIII';
    else if (tmp$ === 9)
      return 'IX';
    else if (tmp$ === 10)
      return 'X';
    else
      return 'nulla';
  };
  Ship.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ship',
    interfaces: []
  };
  function ArcsChartPresenter(chartDiv) {
    ArcsChartPresenter$Companion_getInstance();
    ChartPresenter.call(this, chartDiv);
  }
  function ArcsChartPresenter$Companion() {
    ArcsChartPresenter$Companion_instance = this;
    this.CHART_LAYOUT_0 = json([to('xaxis', json([to('title', 'Distance [m]'), to('hoverformat', ',f')])), to('yaxis', json([to('title', 'Height [m]'), to('hoverformat', ',f')])), to('hovermode', 'closest')]);
  }
  ArcsChartPresenter$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArcsChartPresenter$Companion_instance = null;
  function ArcsChartPresenter$Companion_getInstance() {
    if (ArcsChartPresenter$Companion_instance === null) {
      new ArcsChartPresenter$Companion();
    }
    return ArcsChartPresenter$Companion_instance;
  }
  ArcsChartPresenter.prototype.prepareChartTrace_wy5msm$ = function (shell, calculator) {
    return json([to('x', calculator.getXCoordinates(this.range)), to('y', calculator.getYCoordinates(this.range)), to('name', shell.toString()), to('type', ChartPresenter$Companion_getInstance().CHART_TYPE_0)]);
  };
  ArcsChartPresenter.prototype.getChartLayout = function () {
    return ArcsChartPresenter$Companion_getInstance().CHART_LAYOUT_0;
  };
  ArcsChartPresenter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ArcsChartPresenter',
    interfaces: [ChartPresenter]
  };
  function ChartPresenter(chartDiv) {
    ChartPresenter$Companion_getInstance();
    this.chartDiv = chartDiv;
    this.range = 0.0;
    window.addEventListener('resize', ChartPresenter_init$lambda(this));
  }
  function ChartPresenter$Companion() {
    ChartPresenter$Companion_instance = this;
    this.CHART_TYPE_0 = 'line';
    this.OPTIONS_0 = json([to('modeBarButtonsToRemove', ['hoverClosestCartesian', 'hoverCompareCartesian'])]);
  }
  ChartPresenter$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChartPresenter$Companion_instance = null;
  function ChartPresenter$Companion_getInstance() {
    if (ChartPresenter$Companion_instance === null) {
      new ChartPresenter$Companion();
    }
    return ChartPresenter$Companion_instance;
  }
  ChartPresenter.prototype.reloadView_in72kc$ = function (ships, range) {
    this.range = range;
    var data = ArrayList_init();
    var tmp$;
    tmp$ = ships.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.shellCalculators.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var shell = element_0.key;
        var calculator = element_0.value;
        data.add_11rb$(this.prepareChartTrace_wy5msm$(shell, calculator));
      }
    }
    Plotly.newPlot(this.chartDiv.id, Kotlin.kotlin.collections.copyToArray(data), this.getChartLayout(), ChartPresenter$Companion_getInstance().OPTIONS_0);
    this.setUpCompareOnHover_vdcz60$_0(ships, range);
  };
  function ChartPresenter$setUpCompareOnHover$lambda(closure$ships, closure$range, this$ChartPresenter) {
    return function (eventdata) {
      var point = eventdata.points[0];
      var x = point.x;
      var i = {v: 0};
      var hoverData = ArrayList_init();
      var $receiver = closure$ships;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$range_0 = closure$range;
        var tmp$_0;
        tmp$_0 = element.shellCalculators.entries.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var calculator = element_0.value;
          var tmp$_1;
          hoverData.add_11rb$(json([to('curveNumber', (tmp$_1 = i.v, i.v = tmp$_1 + 1 | 0, tmp$_1)), to('pointNumber', calculator.findClosestAngleXIndex_lu1900$(closure$range_0, x))]));
        }
      }
      return Plotly.Fx.hover(this$ChartPresenter.chartDiv.id, Kotlin.kotlin.collections.copyToArray(hoverData));
    };
  }
  ChartPresenter.prototype.setUpCompareOnHover_vdcz60$_0 = function (ships, range) {
    this.chartDiv.getElement().on('plotly_hover', ChartPresenter$setUpCompareOnHover$lambda(ships, range, this));
  };
  function ChartPresenter_init$lambda(this$ChartPresenter) {
    return function (it) {
      var tmp$;
      if (typeof (tmp$ = !UI$CHART_DIV_getInstance().getElement().classList.contains('hidden')) === 'boolean' ? tmp$ : Kotlin.throwCCE()) {
        Plotly.Plots.resize(this$ChartPresenter.chartDiv.getElement());
      }
    };
  }
  ChartPresenter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ChartPresenter',
    interfaces: [Presenter]
  };
  function InfoPresenter(infoTable) {
    this.infoTableDiv_0 = infoTable.getElement();
  }
  InfoPresenter.prototype.reloadView_in72kc$ = function (ships, range) {
    this.infoTableDiv_0.innerHTML = '';
    this.infoTableDiv_0.append(this.prepareHeader_0());
    var tbody = document.createElement('tbody');
    var tmp$;
    tmp$ = ships.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.shellCalculators.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var shell = element_0.key;
        var calculator = element_0.value;
        var tr = document.createElement('tr');
        var tdShipConfig = document.createElement('td');
        tdShipConfig.textContent = shell.toString();
        var tdFireControlsRange = document.createElement('td');
        tdFireControlsRange.textContent = this.format_0(element.fireControlsRange / 1000.0);
        var tdFlyTime = document.createElement('td');
        tdFlyTime.textContent = this.format_0(last(calculator.getTime(range)));
        var tdHitBeltAngle = document.createElement('td');
        tdHitBeltAngle.textContent = this.format_0(90 - this.radToDeg_0(calculator.getImpactAngle(range)));
        var tdHitDeckAngle = document.createElement('td');
        tdHitDeckAngle.textContent = this.format_0(this.radToDeg_0(calculator.getImpactAngle(range)));
        var tdBeltArmor = document.createElement('td');
        tdBeltArmor.textContent = Math.round(calculator.getDeckArmor(range)).toString();
        var tdDeckArmor = document.createElement('td');
        tdDeckArmor.textContent = Math.round(calculator.getBeltArmor(range)).toString();
        tr.append(tdShipConfig);
        tr.append(tdFireControlsRange);
        tr.append(tdFlyTime);
        tr.append(tdHitBeltAngle);
        tr.append(tdHitDeckAngle);
        tr.append(tdBeltArmor);
        tr.append(tdDeckArmor);
        tbody.append(tr);
      }
    }
    this.infoTableDiv_0.append(tbody);
  };
  InfoPresenter.prototype.prepareHeader_0 = function () {
    var thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-inverse');
    var tr = document.createElement('tr');
    var thShipConfig = document.createElement('th');
    thShipConfig.textContent = 'Ship configs';
    var thFireControlsRange = document.createElement('th');
    thFireControlsRange.textContent = 'Fire controls range [km]';
    var thFlyTime = document.createElement('th');
    thFlyTime.textContent = 'Fly time [s]';
    var thHitBeltAngle = document.createElement('th');
    thHitBeltAngle.textContent = 'Belt hit angle [deg]';
    var thHitDeckAngle = document.createElement('th');
    thHitDeckAngle.textContent = 'Deck hit angle [deg]';
    var thBeltArmor = document.createElement('th');
    thBeltArmor.textContent = 'Belt armor pen [mm]';
    var thDeckArmor = document.createElement('th');
    thDeckArmor.textContent = 'Deck armor pen [mm]';
    tr.append(thShipConfig);
    tr.append(thFireControlsRange);
    tr.append(thFlyTime);
    tr.append(thHitBeltAngle);
    tr.append(thHitDeckAngle);
    tr.append(thBeltArmor);
    tr.append(thDeckArmor);
    thead.append(tr);
    return thead;
  };
  InfoPresenter.prototype.radToDeg_0 = function (rad) {
    return rad / Math.PI * 180;
  };
  InfoPresenter.prototype.format_0 = function ($receiver) {
    return (Math.round($receiver * 100) / 100.0).toFixed(2);
  };
  InfoPresenter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InfoPresenter',
    interfaces: [Presenter]
  };
  function MainPresenter(MAX_SIZE) {
    ArrayList_init(MAX_SIZE, this);
    this.MAX_SIZE_0 = MAX_SIZE;
    this.api_0 = new WarshipsAPI();
    this.nationSelect_0 = UI$NATION_SELECT_getInstance().getElement();
    this.typeSelect_0 = UI$TYPE_SELECT_getInstance().getElement();
    this.shipSelect_0 = UI$SHIP_SELECT_getInstance().getElement();
    this.shipAddButton_0 = UI$SHIP_ADD_BUTTON_getInstance().getElement();
    this.selectedShipsList_0 = UI$SELECTED_SHIPS_LIST_getInstance().getElement();
    this.rangeSlider_0 = UI$RANGE_SLIDER_getInstance().getElement();
    this.maxRangeLabel_0 = UI$MAX_RANGE_LABEL_getInstance().getElement();
    this.chartDiv_0 = UI$CHART_DIV_getInstance().getElement();
    this.alertDiv_0 = UI$ALERT_DIV_getInstance().getElement();
    this.titleHeader_0 = UI$TITLE_HEADER_getInstance().getElement();
    this.aboutFooter_0 = UI$ABOUT_FOOTER_getInstance().getElement();
    this.rangeInput_0 = UI$RANGE_INPUT_getInstance().getElement();
    this.rangeFooter_0 = UI$RANGE_FOOTER_getInstance().getElement();
    this.range_0 = 0.0;
    this.subPresenters_0 = [new InfoPresenter(UI$INFO_TABLE_getInstance()), new ArcsChartPresenter(UI$SHELL_ARCS_CHART_getInstance()), new TimeChartPresenter(UI$SHELL_TIME_CHART_getInstance())];
    this.blockUI_0(true);
    this.initializeBasicInfo_0(MainPresenter_init$lambda(this));
    this.nationSelect_0.onchange = MainPresenter_init$lambda_0(this);
    this.typeSelect_0.onchange = MainPresenter_init$lambda_1(this);
    this.shipAddButton_0.onclick = MainPresenter_init$lambda_2(this);
    this.rangeSlider_0.oninput = MainPresenter_init$lambda_3(this);
    this.rangeInput_0.oninput = MainPresenter_init$lambda_4(this);
  }
  MainPresenter.prototype.setVersion_0 = function () {
    var $receiver = this.api_0.gameVersion;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver)) {
      this.titleHeader_0.title += ' (v' + this.api_0.gameVersion + ')';
    }
     else {
      this.titleHeader_0.title += ' (unknown version, connection lost?)';
    }
  };
  MainPresenter.prototype.blockUI_0 = function (doBlock) {
    this.turnButtonLoading_0(doBlock);
    this.nationSelect_0.disabled = doBlock;
    this.typeSelect_0.disabled = doBlock;
    this.shipSelect_0.disabled = doBlock;
  };
  MainPresenter.prototype.turnButtonLoading_0 = function (on) {
    this.shipAddButton_0.disabled = on || this.size === this.MAX_SIZE_0 || this.getSelectedShip_0() == null;
    if (on) {
      this.shipAddButton_0.classList.add('btn-loading');
    }
     else {
      this.shipAddButton_0.classList.remove('btn-loading');
    }
  };
  function MainPresenter$loadShip$lambda(closure$callback, closure$selectedShip, this$MainPresenter) {
    return function (e) {
      if (e != null) {
        closure$callback(e);
      }
       else {
        this$MainPresenter.addShip_0(closure$selectedShip);
        closure$callback(null);
      }
    };
  }
  MainPresenter.prototype.loadShip_0 = function (callback) {
    var selectedShip = this.getSelectedShip_0();
    if (selectedShip != null && !this.contains_11rb$(selectedShip) && this.size < this.MAX_SIZE_0) {
      this.api_0.loadShip_man966$(selectedShip, MainPresenter$loadShip$lambda(callback, selectedShip, this));
    }
     else {
      callback(null);
    }
  };
  function MainPresenter$addShip$lambda(closure$selectedShip, this$MainPresenter) {
    return function () {
      this$MainPresenter.removeShip_0(closure$selectedShip.id);
    };
  }
  MainPresenter.prototype.addShip_0 = function (selectedShip) {
    var tmp$;
    var listItem = document.createElement('li');
    listItem.id = selectedShip.id;
    if (selectedShip.icon != null) {
      var tmp$_0;
      var img = document.createElement('img');
      img.setAttribute('src', (tmp$_0 = selectedShip.icon) != null ? tmp$_0 : Kotlin.throwNPE());
      img.setAttribute('alt', selectedShip.name + '-wows-wg-icon');
      img.setAttribute('height', '38px');
      listItem.appendChild(img);
    }
    listItem.innerHTML += this.formatShipListItemText_0(selectedShip);
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerText = 'X';
    removeButton.onclick = MainPresenter$addShip$lambda(selectedShip, this);
    listItem.appendChild(removeButton);
    this.selectedShipsList_0.appendChild(listItem);
    this.add_11rb$(selectedShip);
    selectedShip.initCalculators();
    this.calculateArcs_0();
    if (this.size === 1 && toDouble(typeof (tmp$ = this.rangeSlider_0.getAttribute('min')) === 'string' ? tmp$ : Kotlin.throwCCE()) === this.range_0) {
      this.reloadRangeView_0(this.getMaxRange_0());
    }
    this.reloadView_in72kc$(this, this.range_0);
  };
  MainPresenter.prototype.formatShipListItemText_0 = function (selectedShip) {
    return selectedShip.name + ' ' + selectedShip.nation + ' T' + Kotlin.toString(selectedShip.tier) + ' ';
  };
  MainPresenter.prototype.removeShip_0 = function (id) {
    var tmp$ = this.remove_11rb$;
    var first$result;
    first$break: do {
      var tmp$_0;
      tmp$_0 = this.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (Kotlin.equals(element.id, id)) {
          first$result = element;
          break first$break;
        }
      }
      throw new Kotlin.kotlin.NoSuchElementException('Collection contains no element matching the predicate.');
    }
     while (false);
    tmp$.call(this, first$result);
    this.selectedShipsList_0.removeChild(document.getElementById(id));
    this.reloadView_in72kc$(this, this.range_0);
  };
  MainPresenter.prototype.reloadView_in72kc$ = function (ships, range) {
    this.hideUI_0(this.isEmpty());
    if (!this.isEmpty()) {
      this.reloadRangeView_0(range);
      var $receiver = this.subPresenters_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        element.reloadView_in72kc$(this, range);
      }
    }
  };
  MainPresenter.prototype.getSliderRange_0 = function () {
    var tmp$;
    return toDouble(typeof (tmp$ = this.rangeSlider_0.value) === 'string' ? tmp$ : Kotlin.throwCCE());
  };
  MainPresenter.prototype.getInputRange_0 = function () {
    var tmp$;
    return toDouble(typeof (tmp$ = this.rangeInput_0.value) === 'string' ? tmp$ : Kotlin.throwCCE()) * 1000.0;
  };
  MainPresenter.prototype.hideUI_0 = function (hide) {
    var tmp$, tmp$_0;
    if (hide) {
      this.chartDiv_0.classList.add('hidden');
      this.rangeFooter_0.classList.add('hidden');
      this.aboutFooter_0.classList.remove('double-footer');
      ((tmp$ = document.getElementsByTagName('body')[0]) != null ? tmp$ : Kotlin.throwNPE()).classList.remove('double-footer');
    }
     else {
      this.chartDiv_0.classList.remove('hidden');
      this.rangeFooter_0.classList.remove('hidden');
      this.aboutFooter_0.classList.add('double-footer');
      ((tmp$_0 = document.getElementsByTagName('body')[0]) != null ? tmp$_0 : Kotlin.throwNPE()).classList.add('double-footer');
    }
  };
  MainPresenter.prototype.reloadRangeView_0 = function (range) {
    var maxRange = this.getMaxRange_0();
    this.range_0 = Math.min(range, maxRange);
    this.rangeSlider_0.setAttribute('max', maxRange);
    this.rangeInput_0.setAttribute('max', maxRange / 1000.0);
    this.rangeSlider_0.value = this.range_0;
    this.rangeInput_0.value = this.range_0 / 1000.0;
    this.maxRangeLabel_0.innerText = (maxRange / 1000).toString() + ' km';
  };
  MainPresenter.prototype.getMaxRange_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var maxBy$result;
    maxBy$break: do {
      var iterator = this.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem.maxRange;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e.maxRange;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    return (tmp$_1 = (tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.maxRange : null) != null ? tmp$_0 : 0.0) != null ? tmp$_1 : 0.0;
  };
  MainPresenter.prototype.getSelectedShip_0 = function () {
    var tmp$;
    try {
      tmp$ = this.api_0.getShip_61zpoe$(this.shipSelect_0.value);
    }
     catch (e) {
      if (Kotlin.isType(e, NoSuchElementException)) {
        tmp$ = null;
      }
       else
        throw e;
    }
    return tmp$;
  };
  function MainPresenter$initializeBasicInfo$lambda$lambda(closure$callback) {
    return function (it) {
      closure$callback(it);
    };
  }
  function MainPresenter$initializeBasicInfo$lambda(closure$callback, this$MainPresenter) {
    return function (e) {
      var tmp$, tmp$_0;
      if (e != null) {
        closure$callback(e);
      }
       else {
        var shipNations = this$MainPresenter.api_0.getShipNations();
        tmp$ = shipNations.entries.iterator();
        while (tmp$.hasNext()) {
          var tmp$_1 = tmp$.next();
          var nationId = tmp$_1.key;
          var nationText = tmp$_1.value;
          var option = document.createElement('option');
          option.value = nationId;
          option.text = nationText;
          this$MainPresenter.nationSelect_0.add(option);
        }
        var shipTypes = this$MainPresenter.api_0.getShipTypes();
        tmp$_0 = shipTypes.entries.iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_2 = tmp$_0.next();
          var typeId = tmp$_2.key;
          var typeText = tmp$_2.value;
          var option_0 = document.createElement('option');
          option_0.value = typeId;
          option_0.text = typeText;
          this$MainPresenter.typeSelect_0.add(option_0);
        }
        this$MainPresenter.loadShips_0(MainPresenter$initializeBasicInfo$lambda$lambda(closure$callback));
      }
    };
  }
  MainPresenter.prototype.initializeBasicInfo_0 = function (callback) {
    this.api_0.loadBasicInfo_f05bi3$(MainPresenter$initializeBasicInfo$lambda(callback, this));
  };
  MainPresenter.prototype.calculateArcs_0 = function () {
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.shellCalculators.values;
      Kotlin.kotlin.collections.addAll_ipc267$(destination, list);
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (!element_0.hasData())
        destination_0.add_11rb$(element_0);
    }
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      element_1.calculateArcs();
    }
  };
  MainPresenter.prototype.getShipsSelection_0 = function () {
    var tmp$, tmp$_0;
    var selectedNation = typeof (tmp$ = this.nationSelect_0.value) === 'string' ? tmp$ : Kotlin.throwCCE();
    var selectedType = typeof (tmp$_0 = this.typeSelect_0.value) === 'string' ? tmp$_0 : Kotlin.throwCCE();
    return new WarshipsAPI$ShipsSelection(selectedNation, selectedType);
  };
  function MainPresenter$loadShips$lambda(closure$callback, this$MainPresenter, closure$shipsSelection) {
    return function (e) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (e != null) {
        closure$callback(e);
      }
       else {
        var ships = this$MainPresenter.api_0.getShips_r67gg3$(closure$shipsSelection);
        this$MainPresenter.clearSelect_0(this$MainPresenter.shipSelect_0);
        tmp$ = until(0, ships.length);
        tmp$_0 = tmp$.first;
        tmp$_1 = tmp$.last;
        tmp$_2 = tmp$.step;
        for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
          var option = document.createElement('option');
          option.value = ships[i].id;
          option.text = ships[i].getTier() + '. ' + ships[i].name;
          if (ships[i].isPremium) {
            option.text += ' (P)';
          }
          if (ships[i].isDemo) {
            option.text += ' [Demo]';
          }
          this$MainPresenter.shipSelect_0.add(option);
        }
        closure$callback(null);
      }
    };
  }
  MainPresenter.prototype.loadShips_0 = function (callback) {
    var shipsSelection = this.getShipsSelection_0();
    this.api_0.loadShips_w5p1fw$(shipsSelection, MainPresenter$loadShips$lambda(callback, this, shipsSelection));
  };
  MainPresenter.prototype.clearSelect_0 = function (select) {
    var tmp$;
    while ((typeof (tmp$ = select.options.length) === 'number' ? tmp$ : Kotlin.throwCCE()) > 0) {
      select.remove(0);
    }
  };
  MainPresenter.prototype.handleResult_0 = function (e) {
    if (e != null) {
      console.error(e);
      this.alertDiv_0.classList.remove('hidden');
    }
     else {
      this.alertDiv_0.classList.add('hidden');
    }
    this.blockUI_0(false);
  };
  function MainPresenter_init$lambda(this$MainPresenter) {
    return function (it) {
      this$MainPresenter.setVersion_0();
      this$MainPresenter.handleResult_0(it);
    };
  }
  function MainPresenter_init$lambda$lambda(this$MainPresenter) {
    return function (it) {
      this$MainPresenter.handleResult_0(it);
    };
  }
  function MainPresenter_init$lambda_0(this$MainPresenter) {
    return function () {
      this$MainPresenter.blockUI_0(true);
      this$MainPresenter.loadShips_0(MainPresenter_init$lambda$lambda(this$MainPresenter));
    };
  }
  function MainPresenter_init$lambda$lambda_0(this$MainPresenter) {
    return function (it) {
      this$MainPresenter.handleResult_0(it);
    };
  }
  function MainPresenter_init$lambda_1(this$MainPresenter) {
    return function () {
      this$MainPresenter.blockUI_0(true);
      this$MainPresenter.loadShips_0(MainPresenter_init$lambda$lambda_0(this$MainPresenter));
    };
  }
  function MainPresenter_init$lambda$lambda_1(this$MainPresenter) {
    return function (it) {
      this$MainPresenter.handleResult_0(it);
    };
  }
  function MainPresenter_init$lambda_2(this$MainPresenter) {
    return function () {
      this$MainPresenter.blockUI_0(true);
      this$MainPresenter.loadShip_0(MainPresenter_init$lambda$lambda_1(this$MainPresenter));
    };
  }
  function MainPresenter_init$lambda_3(this$MainPresenter) {
    return function () {
      this$MainPresenter.range_0 = this$MainPresenter.getSliderRange_0();
      this$MainPresenter.reloadView_in72kc$(this$MainPresenter, this$MainPresenter.range_0);
    };
  }
  function MainPresenter_init$lambda_4(this$MainPresenter) {
    return function () {
      this$MainPresenter.range_0 = this$MainPresenter.getInputRange_0();
      this$MainPresenter.reloadView_in72kc$(this$MainPresenter, this$MainPresenter.range_0);
    };
  }
  MainPresenter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MainPresenter',
    interfaces: [Presenter, ArrayList]
  };
  function Presenter() {
  }
  Presenter.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function TimeChartPresenter(chartDiv) {
    TimeChartPresenter$Companion_getInstance();
    ChartPresenter.call(this, chartDiv);
  }
  function TimeChartPresenter$Companion() {
    TimeChartPresenter$Companion_instance = this;
    this.CHART_LAYOUT_0 = json([to('xaxis', json([to('title', 'Distance [m]'), to('hoverformat', ',f')])), to('yaxis', json([to('title', 'Time [s]'), to('hoverformat', '.2f')])), to('hovermode', 'closest')]);
  }
  TimeChartPresenter$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeChartPresenter$Companion_instance = null;
  function TimeChartPresenter$Companion_getInstance() {
    if (TimeChartPresenter$Companion_instance === null) {
      new TimeChartPresenter$Companion();
    }
    return TimeChartPresenter$Companion_instance;
  }
  TimeChartPresenter.prototype.prepareChartTrace_wy5msm$ = function (shell, calculator) {
    return json([to('x', calculator.getXCoordinates(this.range)), to('y', calculator.getTime(this.range)), to('name', shell.toString()), to('type', ChartPresenter$Companion_getInstance().CHART_TYPE_0)]);
  };
  TimeChartPresenter.prototype.getChartLayout = function () {
    return TimeChartPresenter$Companion_getInstance().CHART_LAYOUT_0;
  };
  TimeChartPresenter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TimeChartPresenter',
    interfaces: [ChartPresenter]
  };
  function About() {
    About$Companion_getInstance();
  }
  function About$Companion() {
    About$Companion_instance = this;
    this.VERSION = '1.0.1';
    this.VERSION_HTML = 'Version: <a href="https://github.com/T3r1jj/Sharc">1.0.1<\/a>';
    this.AUTHOR_URL = 'https://t3r1jj.github.io';
    this.PROJECT_URL = 'https://github.com/T3r1jj/Sharc';
    this.BUG_URL = 'https://github.com/T3r1jj/Sharc/issues';
    this.SUPPORT_URL = 'https://t3r1jj.github.io/support.html';
    this.COPYRIGHT_HTML = '<span>Thanks to ' + '<a href="https://wargaming.net">Wargaming API<\/a>, ' + '<a href="https://kotlinlang.org/">Kotlin [Apache 2.0]<\/a>, ' + '<a href="https://getbootstrap.com/">Bootstrap<\/a>, ' + '<a href="https://jquery.com/">jQuery<\/a> and' + '<a href="https://plot.ly/">plotly.js [MIT]<\/a>' + '<\/span>';
    this.DESCRIPTION = 'Sharc is a comparison tool for different ships shell arcs and fly times, based on World of Warships data';
    this.INFO = 'Each vessel range is additionally increased by 20% due to possibility of having AFT or spotting aircraft. Default properties are set in place of internal data (shell drag / krupp values).';
    this.FIRE_CONTROL_SYSTEM = 'Max Fire Control System range without captain skills or consumables';
  }
  About$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var About$Companion_instance = null;
  function About$Companion_getInstance() {
    if (About$Companion_instance === null) {
      new About$Companion();
    }
    return About$Companion_instance;
  }
  About.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'About',
    interfaces: []
  };
  function JsonUtils() {
    JsonUtils$Companion_getInstance();
  }
  function JsonUtils$Companion() {
    JsonUtils$Companion_instance = this;
  }
  JsonUtils$Companion.prototype.jsonToDynamicMap_qk3xy8$ = function (json) {
    var tmp$;
    var map = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    tmp$ = iterator(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      map.put_xwzc9p$(key, json[key]);
    }
    return map;
  };
  JsonUtils$Companion.prototype.jsonToMap_qk3xy8$ = function (json) {
    var tmp$, tmp$_0;
    var map = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    tmp$ = iterator(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      map.put_xwzc9p$(key, typeof (tmp$_0 = json[key]) === 'string' ? tmp$_0 : Kotlin.throwCCE());
    }
    return map;
  };
  JsonUtils$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonUtils$Companion_instance = null;
  function JsonUtils$Companion_getInstance() {
    if (JsonUtils$Companion_instance === null) {
      new JsonUtils$Companion();
    }
    return JsonUtils$Companion_instance;
  }
  JsonUtils.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsonUtils',
    interfaces: []
  };
  Object.defineProperty(UI, 'TITLE_HEADER', {
    get: UI$TITLE_HEADER_getInstance
  });
  Object.defineProperty(UI, 'ALERT_DIV', {
    get: UI$ALERT_DIV_getInstance
  });
  Object.defineProperty(UI, 'NATION_SELECT', {
    get: UI$NATION_SELECT_getInstance
  });
  Object.defineProperty(UI, 'TYPE_SELECT', {
    get: UI$TYPE_SELECT_getInstance
  });
  Object.defineProperty(UI, 'SHIP_SELECT', {
    get: UI$SHIP_SELECT_getInstance
  });
  Object.defineProperty(UI, 'SHIP_ADD_BUTTON', {
    get: UI$SHIP_ADD_BUTTON_getInstance
  });
  Object.defineProperty(UI, 'SELECTED_SHIPS_LIST', {
    get: UI$SELECTED_SHIPS_LIST_getInstance
  });
  Object.defineProperty(UI, 'INFO_TABLE', {
    get: UI$INFO_TABLE_getInstance
  });
  Object.defineProperty(UI, 'CHART_DIV', {
    get: UI$CHART_DIV_getInstance
  });
  Object.defineProperty(UI, 'RANGE_SLIDER', {
    get: UI$RANGE_SLIDER_getInstance
  });
  Object.defineProperty(UI, 'RANGE_INPUT', {
    get: UI$RANGE_INPUT_getInstance
  });
  Object.defineProperty(UI, 'MAX_RANGE_LABEL', {
    get: UI$MAX_RANGE_LABEL_getInstance
  });
  Object.defineProperty(UI, 'SHELL_ARCS_CHART', {
    get: UI$SHELL_ARCS_CHART_getInstance
  });
  Object.defineProperty(UI, 'SHELL_TIME_CHART', {
    get: UI$SHELL_TIME_CHART_getInstance
  });
  Object.defineProperty(UI, 'ABOUT_FOOTER', {
    get: UI$ABOUT_FOOTER_getInstance
  });
  Object.defineProperty(UI, 'RANGE_FOOTER', {
    get: UI$RANGE_FOOTER_getInstance
  });
  var package$io = _.io || (_.io = {});
  var package$github = package$io.github || (package$io.github = {});
  var package$t3r1jj = package$github.t3r1jj || (package$github.t3r1jj = {});
  var package$sharc = package$t3r1jj.sharc || (package$t3r1jj.sharc = {});
  package$sharc.UI = UI;
  var package$external = package$sharc.external || (package$sharc.external = {});
  package$external.HTTPClient = HTTPClient;
  package$external.ShipParser = ShipParser;
  Object.defineProperty(WarshipsAPI, 'Companion', {
    get: WarshipsAPI$Companion_getInstance
  });
  WarshipsAPI.ShipsSelection = WarshipsAPI$ShipsSelection;
  package$external.WarshipsAPI = WarshipsAPI;
  Object.defineProperty(Calculator, 'Companion', {
    get: Calculator$Companion_getInstance
  });
  var package$model = package$sharc.model || (package$sharc.model = {});
  package$model.Calculator_init_3zlao1$ = Calculator_init;
  package$model.Calculator = Calculator;
  package$model.Hull = Hull;
  Object.defineProperty(Shell, 'Companion', {
    get: Shell$Companion_getInstance
  });
  Object.defineProperty(Shell$Type, 'AP', {
    get: Shell$Type$AP_getInstance
  });
  Object.defineProperty(Shell$Type, 'HE', {
    get: Shell$Type$HE_getInstance
  });
  Shell.Type = Shell$Type;
  Shell.ShellInfo = Shell$ShellInfo;
  package$model.Shell = Shell;
  package$model.Ship = Ship;
  Object.defineProperty(ArcsChartPresenter, 'Companion', {
    get: ArcsChartPresenter$Companion_getInstance
  });
  var package$presenter = package$sharc.presenter || (package$sharc.presenter = {});
  package$presenter.ArcsChartPresenter = ArcsChartPresenter;
  Object.defineProperty(ChartPresenter, 'Companion', {
    get: ChartPresenter$Companion_getInstance
  });
  package$presenter.ChartPresenter = ChartPresenter;
  package$presenter.InfoPresenter = InfoPresenter;
  package$presenter.MainPresenter = MainPresenter;
  package$presenter.Presenter = Presenter;
  Object.defineProperty(TimeChartPresenter, 'Companion', {
    get: TimeChartPresenter$Companion_getInstance
  });
  package$presenter.TimeChartPresenter = TimeChartPresenter;
  Object.defineProperty(About, 'Companion', {
    get: About$Companion_getInstance
  });
  var package$utils = package$sharc.utils || (package$sharc.utils = {});
  package$utils.About = About;
  Object.defineProperty(JsonUtils, 'Companion', {
    get: JsonUtils$Companion_getInstance
  });
  package$utils.JsonUtils = JsonUtils;
  Kotlin.defineModule('sharc', _);
  return _;
}(typeof sharc === 'undefined' ? {} : sharc, kotlin);
