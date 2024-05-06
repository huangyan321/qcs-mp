"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_template = common_vendor.resolveComponent("template");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _component_template + _easycom_uni_section2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (common_vendor.unref(HeadBar) + common_vendor.unref(PatientCard) + common_vendor.unref(FunctionalBox) + _easycom_uni_icons + _easycom_uni_section)();
}
const HeadBar = () => "./head-bar.js";
const PatientCard = () => "./patient-card.js";
const FunctionalBox = () => "./functinal-box.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          size: "16"
        }),
        b: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "1cf27b2a-5-" + i0 + ",1cf27b2a-3"
          };
        }),
        c: common_vendor.p({
          type: "eye",
          size: "16"
        }),
        d: common_vendor.p({
          title: "健康咨询"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
