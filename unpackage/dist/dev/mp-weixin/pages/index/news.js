"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_template = common_vendor.resolveComponent("template");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _component_template + _easycom_uni_section2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "right",
      size: "16"
    }),
    b: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: "d298a916-2-" + i0 + ",d298a916-0"
      };
    }),
    c: common_vendor.p({
      type: "eye",
      size: "16"
    }),
    d: common_vendor.p({
      title: "健康咨询"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d298a916"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/news.vue"]]);
wx.createComponent(Component);
