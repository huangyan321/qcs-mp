"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "head-bar",
  setup(__props) {
    const statusHeight = common_vendor.ref(40);
    const menuButtonHeight = common_vendor.ref(40);
    const marginRight = common_vendor.ref(0);
    function initStatusBarHeight() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      console.log(systemInfo.devicePixelRatio);
      statusHeight.value = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      menuButtonHeight.value = menuButtonInfo.height * 2;
      marginRight.value = menuButtonInfo.width * 2;
      statusHeight.value = menuButtonInfo.top * 2;
    }
    common_vendor.onLoad(() => {
      initStatusBarHeight();
    });
    return (_ctx, _cache) => {
      return {
        a: statusHeight.value + "rpx",
        b: menuButtonHeight.value + "rpx",
        c: marginRight.value + "rpx",
        d: menuButtonHeight.value + statusHeight.value + "rpx"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8251da79"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/head-bar.vue"]]);
wx.createComponent(Component);
