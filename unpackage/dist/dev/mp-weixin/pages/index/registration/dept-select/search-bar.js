"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{
    name: "DeptSelectSearchBar"
  },
  __name: "search-bar",
  setup(__props) {
    const searchText = common_vendor.ref();
    const showClearIcon = common_vendor.ref(false);
    function confirmInput() {
    }
    function changeInput() {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "search",
          color: "#999"
        }),
        b: searchText.value,
        c: common_vendor.o(confirmInput),
        d: common_vendor.o(changeInput),
        e: showClearIcon.value
      }, showClearIcon.value ? {
        f: common_vendor.o(changeInput),
        g: common_vendor.p({
          type: "close",
          size: "22",
          color: "#333"
        })
      } : {}, {
        h: common_vendor.o(($event) => _ctx.$emit("toast"))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b842d0a6"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/registration/dept-select/search-bar.vue"]]);
wx.createComponent(Component);
