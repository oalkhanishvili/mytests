var __vueify_style__ = require("vueify-insert-css").insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            msg: 'hello vue'
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"jumbotron\">\n    <h1>Hello, world!</h1>\n    <p>...</p>\n</div>\n<h1>Test Page</h1>\n\n    <h1>Hello App!</h1>\n    <p>\n        <!-- use v-link directive for navigation. -->\n        <a v-link=\"{ path: '/' }\"><button class=\"btn-default\">Home</button></a>\n        <a v-link=\"{ path: '/foo' }\"><button class=\"btn-hot\">Foo</button></a>\n        <a v-link=\"{ path: '/bar' }\"><button class=\"btn-cool\">Bar</button></a>\n    </p>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/otura/gulp/test/vue/components/header.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}