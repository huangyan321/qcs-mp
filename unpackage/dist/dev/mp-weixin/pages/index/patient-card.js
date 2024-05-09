"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_SwitchUser2 = common_vendor.resolveComponent("SwitchUser");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_SwitchUser2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_SwitchUser = () => "../../components/SwitchUser/SwitchUser.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_SwitchUser + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "patient-card",
  setup(__props) {
    const switcher = common_vendor.ref();
    const popup = common_vendor.ref();
    function changeUser() {
      switcher.value.toggle();
    }
    function showQR() {
      popup.value.open("center");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(switcher, "010d5ad0-0", {
          "k": "switcher"
        }),
        b: common_vendor.p({
          ["hide-card"]: true
        }),
        c: common_vendor.p({
          type: "loop",
          size: "16",
          color: "#fff"
        }),
        d: common_vendor.o(changeUser),
        e: common_vendor.o(showQR),
        f: common_vendor.sr(popup, "010d5ad0-2", {
          "k": "popup"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-010d5ad0"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/patient-card.vue"]]);
wx.createComponent(Component);
