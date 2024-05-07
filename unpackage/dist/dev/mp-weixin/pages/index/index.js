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
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
