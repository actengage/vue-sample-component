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

export default SampleComponent;
//# sourceMappingURL=vue-sample-component.es.js.map
