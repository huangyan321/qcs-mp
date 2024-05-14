"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(HeadBar) + common_vendor.unref(PatientCard) + common_vendor.unref(FunctionalBox) + common_vendor.unref(News))();
}
const HeadBar = () => "./head-bar.js";
const PatientCard = () => "./patient-card.js";
const FunctionalBox = () => "./functinal-box.js";
const News = () => "./news.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function navigate(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navigate)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
