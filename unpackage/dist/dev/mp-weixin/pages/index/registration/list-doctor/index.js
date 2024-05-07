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
  (common_vendor.unref(DatePicker) + _easycom_uni_list_item + _easycom_uni_list)();
}
const DatePicker = () => "./date-picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{
    name: "ListDoctor"
  },
  __name: "index",
  setup(__props) {
    const banner = common_vendor.ref();
    common_vendor.ref();
    function popCheck() {
      common_vendor.index.showActionSheet({
        itemList: ["A", "B", "C"],
        success: function(res) {
          console.log("选中了第" + (res.tapIndex + 1) + "个按钮");
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    }
    function filterList() {
    }
    async function load(queryStr) {
      var p = decodeURIComponent(queryStr);
      try {
        banner.value = JSON.parse(p);
      } catch (error) {
        banner.value = JSON.parse(p);
      }
      common_vendor.index.showToast({
        icon: "loading",
        title: "获取中...",
        mask: true
      });
      await common_vendor.index.setNavigationBarTitle({
        title: banner.value.name
      });
      common_vendor.index.hideToast();
    }
    common_vendor.onLoad((event) => {
      load(event.query);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(filterList),
        b: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "81f8c34c-2-" + i0 + ",81f8c34c-1"
          };
        }),
        c: common_vendor.o(popCheck),
        d: common_vendor.p({
          thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          ["thumb-size"]: "lg"
        }),
        e: common_vendor.p({
          thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          ["thumb-size"]: "lg"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81f8c34c"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/registration/list-doctor/index.vue"]]);
wx.createPage(MiniProgramPage);
