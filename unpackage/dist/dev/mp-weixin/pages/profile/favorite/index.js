"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function bindClick() {
      common_vendor.index.showToast({
        title: "取消收藏"
      });
    }
    function actionChange() {
      console.log("改变");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "48d0a09a-2-" + i0 + "," + ("48d0a09a-1-" + i0),
            b: common_vendor.o(($event) => bindClick(), i),
            c: i,
            d: common_vendor.o(bindClick, i),
            e: common_vendor.o(actionChange, i),
            f: "48d0a09a-1-" + i0 + ",48d0a09a-0"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-48d0a09a"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/favorite/index.vue"]]);
wx.createPage(MiniProgramPage);
