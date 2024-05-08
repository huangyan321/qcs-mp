"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "DeptSelectItem",
  options: {
    virtualHost: true
  },
  emits: ["click"],
  props: {
    icon: String,
    name: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.icon,
    b: common_vendor.t($props.name),
    c: common_vendor.o(($event) => _ctx.$emit("click", $props.name))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb3b24ef"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/registration/dept-select/dept-item.vue"]]);
wx.createComponent(Component);
