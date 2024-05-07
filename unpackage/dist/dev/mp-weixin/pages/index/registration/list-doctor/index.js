"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(DatePicker)();
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
        a: common_vendor.o(filterList)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81f8c34c"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/registration/list-doctor/index.vue"]]);
wx.createPage(MiniProgramPage);
