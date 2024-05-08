"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function goDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/index/news/detail/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "a74ddb1e-0-" + i0,
            b: item,
            c: common_vendor.o(goDetail, item)
          };
        }),
        b: common_vendor.p({
          type: "eye",
          size: "16"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a74ddb1e"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/news/index.vue"]]);
wx.createPage(MiniProgramPage);
