"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const __default__ = {
  options: {
    styleIsolation: "shared",
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "list",
  props: {
    listData: {}
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function popCheck() {
      console.log("popCheck");
      emit("toggle");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.listData, (data, k0, i0) => {
          return {
            a: common_vendor.t(data.name),
            b: common_vendor.t(data.professional),
            c: common_vendor.t(data.profile),
            d: common_vendor.t(data.restCount <= 0 ? "约满" : `余号${data.restCount}`),
            e: data.restCount <= 0 ? 1 : "",
            f: data.restCount <= 0,
            g: "078cb3e7-1-" + i0 + ",078cb3e7-0"
          };
        }),
        b: common_vendor.o(popCheck),
        c: common_vendor.p({
          thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          ["thumb-size"]: "lg"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-078cb3e7"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/registration/list-doctor/list.vue"]]);
wx.createComponent(Component);
