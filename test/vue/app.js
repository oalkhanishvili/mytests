var __vueify_style__ = require("vueify-insert-css").insert("\n.red {\n  color: #f00;\n}\n/* always present */\n.expand-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  overflow: hidden;\n}\n/* .expand-enter defines the starting state for entering */\n/* .expand-leave defines the ending state for leaving */\n.expand-enter {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n.expand-leave{\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./components/header.vue');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      effect: false,
      msg: 'Hello world!',
      descroption: 'Test demplate for do'
    };
  },

  components: {
    HeaderComponent: _header2.default
  },
  ready: function ready() {
    console.log('compiled');
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<header-component></header-component>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <button @click=\"effect = !effect\">agasg</button>\n      <div class=\"notification\" v-if=\"effect\" transition=\"expand\">\n        some text\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </div>\n</div>\n<h1 class=\"red\">{{msg}}</h1>\n<h2>title helper text</h2>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/otura/gulp/test/vue/components/app.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n.red {\n  color: #f00;\n}\n/* always present */\n.expand-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  overflow: hidden;\n}\n/* .expand-enter defines the starting state for entering */\n/* .expand-leave defines the ending state for leaving */\n.expand-enter {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n.expand-leave{\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}