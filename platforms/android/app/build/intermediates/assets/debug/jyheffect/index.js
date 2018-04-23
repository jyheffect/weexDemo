// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntryUrl = getEntryUrl;
function getEntryUrl(name, root) {
  if (weex.config.env.platform === 'Web') {
    if (root) {
      return '/' + name + '.html';
    } else {
      return './' + name + '.html';
    }
  } else {
    var arr = weex.config.bundleUrl.split('/');
    if (root) {
      var domain = arr.slice(0, arr.length - 2);
      domain.push(name + '.js');
      return domain.join('/');
    } else {
      arr.pop();
      arr.push(name + '.js');
      return arr.join('/');
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/SOFTWARE/weex/test/src/components/jyheffect/component/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b167fb7c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/SOFTWARE/weex/test/src/components/jyheffect/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c73e2802"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footer = __webpack_require__(6);

var _footer2 = _interopRequireDefault(_footer);

var _main = __webpack_require__(10);

var _main2 = _interopRequireDefault(_main);

var _album = __webpack_require__(17);

var _album2 = _interopRequireDefault(_album);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Index',
  components: {
    main: _main2.default,
    album: _album2.default,
    footerWrap: _footer2.default
  },
  data: function data() {
    return {
      currentView: "main",
      songList: []
    };
  },

  methods: {
    setSongList: function setSongList(songList) {
      this.songList = songList;
    },
    changeCurView: function changeCurView(_value, _data) {
      this.currentView = _value ? _value : "main";
    },
    changeCurSong: function changeCurSong(song, index) {
      this.$refs.footerwrap.change(song, index);
    },
    changeSong: function changeSong(song, index) {
      this.$refs.viewWrap.changeSong(song, index);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/SOFTWARE/weex/test/src/components/jyheffect/component/footer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f3ccc360"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#ffffff",
    "fontSize": "50"
  },
  "footer-wrap": {
    "position": "absolute",
    "bottom": 0,
    "width": "750",
    "height": "100",
    "color": "#ffffff",
    "backgroundColor": "rgba(23,42,56,1)",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "mainContent": {
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "song-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "image": {
    "width": "70",
    "height": "70",
    "borderRadius": "70"
  },
  "text": {
    "color": "#ffffff"
  },
  "songName": {
    "fontSize": "30",
    "marginLeft": "10"
  },
  "video": {
    "width": "0",
    "height": "0"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');

exports.default = {
  name: 'footer',
  props: {
    songList: {
      type: Array,
      default: [],
      required: true
    }
  },
  data: function data() {
    return {
      pause: true,
      index: -1,
      songInfo: {}
    };
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
    });
  },

  methods: {
    videoEvent: function videoEvent() {
      this.pause = !this.pause;
    },
    onShow: function onShow() {
      var _this = this;

      storage.getItem('songInfo', function (e) {
        if (e.result === 'success') {
          _this.songInfo = JSON.parse(e.data);
        } else {
          _this.songInfo = {
            albumImg: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
            name: "navigation",
            src: "http://dl.stream.qqmusic.qq.com/C400004P31gu3jQKIB.m4a?vkey=A986AEB0501EA4C3514B6B9C5C68B94B3E0D8422936A31B2AE54CFAF8B3A993BE464F01ABECC2DD4C8CC8012DCB741E7EE99C3A1515DDE4C&guid=5120046175&uin=1748066164&fromtag=66"
          };
        }
      });
    },
    change: function change(song, index) {
      var _this2 = this;

      this.index = index;
      this.pause = true;
      this.songInfo = song;
      this.$nextTick(function () {
        _this2.pause = false;
      });
    },
    onpause: function onpause(event) {
      console.log("暂停");
    },
    onstart: function onstart(event) {
      console.log("开始");
    },
    onfail: function onfail(event) {
      console.log("出错");
      this.pause = true;
      modal.toast({
        message: '音频资源出错！',
        duration: 0.3
      });
    },
    onfinish: function onfinish(event) {
      console.log("结束");
      this.pause = true;
      if (this.index > -1 && this.index < this.songList.length - 1) {
        this.$emit("changeSong", this.songList[this.index + 1], this.index + 1);
      }
    }
  },
  created: function created() {
    if (weex.config.env.platform === 'Web') {
      this.onShow();
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footer-wrap"],
    on: {
      "viewappear": _vm.onShow
    }
  }, [_c('div', {
    staticClass: ["mainContent"]
  }, [_c('div', {
    staticClass: ["song-wrap"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.songInfo.albumImg
    }
  }), _c('text', {
    staticClass: ["text", "songName"]
  }, [_vm._v(_vm._s(_vm.songInfo.name))])]), _c('div', {
    staticClass: ["play-wrap"],
    on: {
      "click": _vm.videoEvent
    }
  }, [(_vm.pause) ? _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])]), _c('video', {
    ref: "video",
    staticClass: ["video"],
    attrs: {
      "playStatus": _vm.pause ? 'pause' : 'play',
      "src": _vm.songInfo.src
    },
    on: {
      "pause": _vm.onpause,
      "start": _vm.onstart,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/SOFTWARE/weex/test/src/components/jyheffect/component/main.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32a0f2ae"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#ffffff"
  },
  "list": {
    "position": "absolute",
    "top": 0,
    "bottom": "100",
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to right, #1d283a, #394951)"
  },
  "slider": {
    "width": "750",
    "height": "400"
  },
  "sliderImage": {
    "width": "750",
    "height": "400"
  },
  "indicator": {
    "width": "750",
    "height": "400",
    "itemColor": "#8f8f8f",
    "itemSelectedColor": "#ffffff",
    "itemSize": "16",
    "position": "absolute",
    "top": "160",
    "left": "0"
  },
  "albumInfo": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "imageInfo": {
    "width": "120",
    "height": "120",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "albumimage": {
    "width": "118",
    "height": "118"
  },
  "panel": {
    "width": "610",
    "height": "120",
    "borderBottomWidth": "2",
    "borderColor": "#4c5862",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "name": {
    "width": "570",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#ffffff"
  },
  "otherInfo": {
    "width": "570",
    "marginTop": "14",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "author": {
    "fontSize": "20",
    "color": "#969fa6"
  },
  "time": {
    "fontSize": "20",
    "color": "#969fa6",
    "marginLeft": "20"
  },
  "albumArrow": {
    "width": "40"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(1);

var _header2 = _interopRequireDefault(_header);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

exports.default = {
  name: 'Index',
  components: {
    headerWrap: _header2.default
  },
  data: function data() {
    return {
      imageList: [{ src: "https://wx1.sinaimg.cn/mw1024/005PtzOXgy1fhhi8mhsluj30qo0qoq6z.jpg" }, { src: "https://wx1.sinaimg.cn/mw1024/005PtzOXgy1fm0h2qic69j30v80ngn59.jpg" }, { src: "https://ww1.sinaimg.cn/mw1024/005PtzOXgw1fb80j8bebrj30qo0qon4e.jpg" }],
      albumList: [{
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
        name: "Summer Calling",
        author: "정용화 (郑容和)",
        time: "2017-08-09"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000Ikn053ABww3.jpg?max_age=2592000",
        name: "JUNG YONG HWA 1ST MINI ALBUM DO DISTURB",
        author: "정용화 (郑容和)",
        time: "2017-07-19"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002CohM03xLQKC.jpg?max_age=2592000",
        name: "교감 (交感)",
        author: "정용화 (郑容和)",
        time: "2016-01-15"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004duD260QXuXY.jpg?max_age=2592000",
        name: "JUNG YONG HWA 1st CONCERT in JAPAN “One Fine Day” Live at",
        author: "정용화 (郑容和)",
        time: "2016-06-24"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004T4NPI1ASIYb.jpg?max_age=2592000",
        name: "ある素敵な日 ~Japan Special Edition~ (美好的一天 ~日本特别版)",
        author: "정용화 (郑容和)",
        time: "2015-03-04"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003bSMFR0DY71W.jpg?max_age=2592000",
        name: "어느 멋진 날 (美好的一天)",
        author: "정용화 (郑容和)",
        time: "2015-01-20"
      }, {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003SO0Ip4OHb3w.jpg?max_age=2592000",
        name: "별, 그대 (星星, 你)",
        author: "정용화 (郑容和)",
        time: "2014-12-23"
      }]
    };
  },

  methods: {
    targetWeexUi: function targetWeexUi() {
      modal.alert({
        message: (0, _utils.getEntryUrl)('weexui/index', true),
        duration: 10000
      }, function () {
        navigator.push({
          url: (0, _utils.getEntryUrl)('weexui/index', true),
          animated: "true"
        });
      });
    },
    gotoAlbum: function gotoAlbum(album) {
      this.$emit("changeCurView", "album", album);
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
    });
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#ffffff"
  },
  "header-wrap": {
    "width": "750",
    "height": "100",
    "color": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "headerBg": {
    "backgroundImage": "linear-gradient(to right, #1d283a, #394951)"
  },
  "fixedHeader": {
    "position": "fixed",
    "top": 0,
    "left": 0
  },
  "title": {
    "color": "#ffffff",
    "fontSize": "36"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        titleText: {
            type: String,
            default: "音乐馆"
        },
        showBg: {
            type: Boolean,
            default: true
        },
        showBack: {
            type: Boolean,
            required: true
        },
        showGoto: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        goback: function goback() {
            this.$emit("changeView");
        }
    },
    beforeCreate: function beforeCreate() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
        });
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    class: ['header-wrap', _vm.showBg ? 'headerBg' : '']
  }, [(_vm.showBack) ? _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": _vm.goback
    }
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["iconfont"]
  }), _c('text', {
    staticClass: ["title", "text"]
  }, [_vm._v(_vm._s(_vm.titleText))]), (_vm.showGoto) ? _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["iconfont"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('header-wrap', {
    attrs: {
      "showBack": false,
      "showGoto": false
    }
  }), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"],
      on: {
        "click": _vm.targetWeexUi
      }
    }, [_c('image', {
      staticClass: ["sliderImage"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)]), _vm._l((_vm.albumList), function(album) {
    return _c('cell', {
      staticClass: ["albumList"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.gotoAlbum(album)
        }
      }
    }, [_c('div', {
      staticClass: ["albumInfo"]
    }, [_c('div', {
      staticClass: ["imageInfo"]
    }, [_c('image', {
      staticClass: ["albumimage"],
      attrs: {
        "resize": "cover",
        "src": album.img
      }
    })]), _c('div', {
      staticClass: ["panel"]
    }, [_c('div', {}, [_c('text', {
      staticClass: ["name"]
    }, [_vm._v(_vm._s(album.name))]), _c('div', {
      staticClass: ["otherInfo"]
    }, [_c('text', {
      staticClass: ["author"]
    }, [_vm._v(_vm._s(album.author))]), _c('text', {
      staticClass: ["time"]
    }, [_vm._v(_vm._s(album.time))])])]), _c('text', {
      staticClass: ["iconfont", "albumArrow"]
    }, [_vm._v("")])])])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/SOFTWARE/weex/test/src/components/jyheffect/component/album.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-41f27e4a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#ffffff"
  },
  "list": {
    "position": "absolute",
    "top": 0,
    "bottom": "100",
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to right, #1d283a, #394951)"
  },
  "basicWrap": {
    "position": "relative",
    "overflow": "hidden"
  },
  "bgImage": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750",
    "filter": "blur(40px)"
  },
  "bgCover": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "basicInfo": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "40",
    "paddingRight": "20",
    "paddingLeft": "20",
    "paddingBottom": "40"
  },
  "imageBox": {
    "width": "220",
    "height": "220"
  },
  "albumimage": {
    "width": "220",
    "height": "220"
  },
  "text": {
    "color": "#ffffff"
  },
  "otherInfo": {
    "width": "490",
    "height": "220",
    "marginLeft": "20",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "justifyContent": "center"
  },
  "authorInfo": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "marginTop": "20"
  },
  "authorImage": {
    "width": "60",
    "height": "60",
    "borderRadius": "60"
  },
  "authorName": {
    "height": "60",
    "lineHeight": "60",
    "fontSize": "20",
    "marginLeft": "10"
  },
  "description": {
    "marginTop": "40",
    "fontSize": "20",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "songList": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "index": {
    "width": "100",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderLeftWidth": "0",
    "borderLeftColor": "rgba(23,42,56,0.9)"
  },
  "checkindex": {
    "borderLeftWidth": "8",
    "borderLeftColor": "rgba(49,194,124,1)"
  },
  "songInfo": {
    "width": "670",
    "height": "120",
    "borderBottomWidth": "2",
    "borderColor": "#4c5862",
    "paddingTop": "20",
    "paddingBottom": "20",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "justifyContent": "center"
  },
  "name": {
    "width": "570",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#ffffff"
  },
  "author": {
    "marginTop": "10",
    "fontSize": "20",
    "color": "#969fa6"
  },
  "current": {
    "color": "#31c27c"
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _header = __webpack_require__(1);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage');

exports.default = {
  name: 'Album',
  components: {
    headerWrap: _header2.default
  },
  data: function data() {
    return {
      title: "专辑",
      curIndex: "",
      album: {
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000006K1vU1Wc4lM.jpg?max_age=2592000",
        name: "Summer Calling",
        author: "정용화 (郑容和)",
        authorFace: "https://wx1.sinaimg.cn/mw690/005PtzOXgy1fp13icx5naj30qo0zi14e.jpg",
        time: "2017-08-09",
        description: 'ジョン・ヨンファ(from CNBLUE)待望のJAPAN 2nd ソロアルバム「Summer Calling」が発売決定! !2015年3月に1stソロアルバムを発売してから約2年振りとなる今作のソロアルバムには最新曲 "Summer Dream"を含め、CNBLUEでのジョン・ヨンファとはまた一味違う魅力的な楽曲を収録!さらに、「Summer Calling」を引っ提げて、〝JUNG YONG HWA JAPAN CONCERT 2017 "Summer Calling"も決定! !"',
        songList: [{
          name: "Summer Dream",
          src: "http://dl.stream.qqmusic.qq.com/C400003qYKMl4JuKn6.m4a?vkey=9FC8E7D66EAEA45581D8E1CB85EF523130A40EBD6B83DE77917665690FE1262BF7396CDB43D7621BEFF9C457BB890F79643A39A4C29B13D4&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Closer",
          src: "http://dl.stream.qqmusic.qq.com/C400003PMORq2XPm0M.m4a?vkey=C11F27D792BF46554507D4BBEAAA3C7E79159239A7F2F62BF62485FBA58115D6DA2814C8909EF62F0EC03B2B2A9CE2FCD070832CF635E0F9&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Make You Mine",
          src: "http://dl.stream.qqmusic.qq.com/C4000024iTUE3yIzzR.m4a?vkey=B26F307029B1817FA09BF3671823FB1ADE0000EB067CDD572E1C58C5D95CD834629B0F69D95EA504A1A01A4B379428A9B466A182AC7F1885&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Life is a Party",
          src: "http://dl.stream.qqmusic.qq.com/C4000024AF5w2wt0kC.m4a?vkey=A14ACFEC80425FF8F6B29E04632B880364E553EE1AFD66744525817448CF0DFD6397D301C594481491248AFFB55BB2CA271AA75B05FA75A1&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Not Anymore",
          src: "http://dl.stream.qqmusic.qq.com/C400001Pm1iB0ec5Ib.m4a?vkey=38A94A4504B07050462E71FB9DD3AAB9A623CCEBF2440B50CB199DE813032E841C013DDB7871937D0CC467E2E4D3D0AFF1F2256928C876AE&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Password",
          src: "http://dl.stream.qqmusic.qq.com/C4000001UILD3mh2Kt.m4a?vkey=D3737F04283100E3106FD28A94FDC59E645F323CBAB57988AF7FFC3E27E6FC01F7EA7747D79DA8F88DE8E351AABA223466EE362455764E0B&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }, {
          name: "Navigation",
          src: "http://dl.stream.qqmusic.qq.com/C400004P31gu3jQKIB.m4a?vkey=A986AEB0501EA4C3514B6B9C5C68B94B3E0D8422936A31B2AE54CFAF8B3A993BE464F01ABECC2DD4C8CC8012DCB741E7EE99C3A1515DDE4C&guid=5120046175&uin=1748066164&fromtag=66",
          author: "정용화 (郑容和)"
        }]
      }
    };
  },

  methods: {
    changeSong: function changeSong(song, index) {
      this.curIndex = index;
      this.$emit("changeCurSong", song, index);
      storage.setItem('songInfo', JSON.stringify(song));
    },
    changeView: function changeView() {
      this.$emit("changeCurView", "main");
    },
    setIndex: function setIndex(index) {
      this.curIndex = index;
    },
    compare: function (_compare) {
      function compare(_x, _x2) {
        return _compare.apply(this, arguments);
      }

      compare.toString = function () {
        return _compare.toString();
      };

      return compare;
    }(function (obj1, obj2) {
      var state = true;
      for (var key in obj1) {
        if (typeof obj2[key] === 'undefined') {
          state = false;
        } else {
          if (_typeof(obj1[key]) === 'object') {
            compare(obj1[key], obj2[key]);
          } else {
            if (obj1[key] !== obj2[key]) {
              state = false;
            }
          }
        }
      }
      return state;
    }),
    onShow: function onShow() {
      var _this = this;

      var self = this;
      storage.getItem('songInfo', function (e) {
        var songInfo = null;
        if (e.result === 'success') {
          songInfo = JSON.parse(e.data);
        }
        for (var i = 0; i < self.album.songList.length; i++) {
          if (_this.compare(self.album.songList[i], songInfo)) {
            if (i > -1) {
              self.setIndex(i);
            }
          }
        }
      });
    }
  },
  mounted: function mounted() {
    for (var i = 0; i < this.album.songList.length; i++) {
      this.album.songList[i].albumImg = this.album.img;
    }
    this.$emit("setSongList", this.album.songList);
    this.onShow();
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_623452_bz2dxfqhmur6n7b9.ttf')"
    });
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('header-wrap', {
    attrs: {
      "showBg": true,
      "showBack": true,
      "titleText": _vm.title,
      "showGoto": false
    },
    on: {
      "changeView": _vm.changeView
    }
  }), _c('cell', {
    staticClass: ["basicWrap"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["bgImage"],
    attrs: {
      "resize": "cover",
      "src": _vm.album.img
    }
  }), _c('div', {
    staticClass: ["bgCover"]
  }), _c('div', {
    staticClass: ["basicInfo"]
  }, [_c('div', {
    staticClass: ["imageBox"]
  }, [_c('image', {
    staticClass: ["albumimage"],
    attrs: {
      "resize": "cover",
      "src": _vm.album.img
    }
  })]), _c('div', {
    staticClass: ["otherInfo"]
  }, [_c('text', {
    staticClass: ["text", "albumName"]
  }, [_vm._v(_vm._s(_vm.album.name))]), _c('div', {
    staticClass: ["authorInfo"]
  }, [_c('image', {
    staticClass: ["authorImage"],
    attrs: {
      "resize": "cover",
      "src": _vm.album.authorFace
    }
  }), _c('text', {
    staticClass: ["text", "authorName"]
  }, [_vm._v(_vm._s(_vm.album.author))])]), _c('text', {
    staticClass: ["text", "description"]
  }, [_vm._v("简介:" + _vm._s(_vm.album.description))])])])]), _vm._l((_vm.album.songList), function(song, index) {
    return _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.changeSong(song, index)
        }
      }
    }, [_c('div', {
      staticClass: ["songList"]
    }, [_c('div', {
      class: ['index', index == _vm.curIndex ? 'checkindex' : '']
    }, [_c('text', {
      class: ['text', index == _vm.curIndex ? 'current' : '']
    }, [_vm._v(_vm._s(index + 1))])]), _c('div', {
      staticClass: ["songInfo"]
    }, [_c('text', {
      class: ['name', index == _vm.curIndex ? 'current' : '']
    }, [_vm._v(_vm._s(song.name))]), _c('text', {
      class: ['author', index == _vm.curIndex ? 'current' : '']
    }, [_vm._v(_vm._s(song.author))])])])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrap"]
  }, [_c(_vm.currentView, {
    ref: "viewWrap",
    tag: "componentName",
    on: {
      "changeCurSong": _vm.changeCurSong,
      "setSongList": _vm.setSongList,
      "changeCurView": _vm.changeCurView
    }
  }), _c('footer-wrap', {
    ref: "footerwrap",
    attrs: {
      "songList": _vm.songList
    },
    on: {
      "changeSong": _vm.changeSong
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);