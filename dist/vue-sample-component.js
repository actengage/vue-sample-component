(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.VueSampleComponent = {})));
}(this, (function (exports) { 'use strict';

    var SampleComponent = {
      render: function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c('div', [_c('span', {
          staticClass: "message",
          domProps: {
            "innerHTML": _vm._s(_vm.message)
          }
        })]);
      },
      staticRenderFns: [],
      name: "sample-component",
      props: {
        message: {
          type: String,
          required: true
        }
      }
    };

    exports.default = SampleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vue-sample-component.js.map
