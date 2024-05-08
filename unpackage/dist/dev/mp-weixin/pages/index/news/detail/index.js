"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "eye",
      size: "22",
      color: "#09244B"
    }),
    b: common_vendor.p({
      type: "star",
      size: "22",
      color: "#09244B"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1244d9c3"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/news/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
