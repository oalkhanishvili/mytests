var __vueify_style__ = require("vueify-insert-css").insert("\nbody{\n}\n")
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
            msg: 'hello vue'
        };
    },

    components: {
        HeaderComponent: HeaderComponent
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<header-component></header-component>\n<div class=\"media\" v-for=\"n in 5\">\n    <div class=\"media-left\">\n        <a href=\"#\">\n            <img class=\"media-object\" src=\"https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=150%C3%97150&amp;w=150&amp;h=150\" alt=\"...\">\n        </a>\n    </div>\n    <div class=\"media-body\">\n        <h4 class=\"media-heading\">Media heading</h4>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis deserunt dignissimos ducimus eum explicabo ipsa maiores modi non odio porro possimus quia quos reprehenderit rerum, sapiente totam ullam unde!\n    </div>\n</div>\n<!--<other-component/>-->\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/otura/gulp/test/vue/components/list.vue"
  module.hot.dispose(function () {
    require("vueify-insert-css").cache["\nbody{\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}