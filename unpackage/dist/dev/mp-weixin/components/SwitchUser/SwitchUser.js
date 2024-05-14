"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const __default__ = {
  options: {
    styleIsolation: "shared",
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "SwitchUser",
  props: {
    hideCard: { type: Boolean, default: true }
  },
  emits: ["cancel"],
  setup(__props, { expose: __expose }) {
    const show = common_vendor.ref(false);
    const popup = common_vendor.ref();
    function popupChange(e) {
      show.value = e.show;
    }
    function toggle() {
      popup.value.open("bottom");
    }
    function cancel() {
      popup.value.close();
    }
    __expose({
      toggle
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !_ctx.hideCard
      }, !_ctx.hideCard ? {
        b: common_vendor.p({
          type: "right",
          size: "22",
          color: "#ffffff"
        }),
        c: common_vendor.o(toggle)
      } : {}, {
        d: common_vendor.o(cancel),
        e: common_vendor.sr(popup, "02b969f8-1", {
          "k": "popup"
        }),
        f: common_vendor.o(popupChange),
        g: common_vendor.p({
          ["border-radius"]: "10px 10px 0 0",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02b969f8"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/components/SwitchUser/SwitchUser.vue"]]);
wx.createComponent(Component);
