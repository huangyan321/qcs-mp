"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_SwitchUser2 = common_vendor.resolveComponent("SwitchUser");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_SwitchUser2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2)();
}
const _easycom_SwitchUser = () => "../../../components/SwitchUser/SwitchUser.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_SwitchUser + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (i, k0, i0) => {
          return {
            a: "290144be-3-" + i0 + "," + ("290144be-2-" + i0),
            b: "290144be-4-" + i0 + "," + ("290144be-2-" + i0),
            c: "290144be-5-" + i0 + "," + ("290144be-2-" + i0),
            d: "290144be-2-" + i0 + "," + ("290144be-1-" + i0),
            e: "290144be-1-" + i0
          };
        }),
        b: common_vendor.p({
          title: "科室",
          rightText: "普通内科"
        }),
        c: common_vendor.p({
          title: "医生",
          rightText: "刘医生"
        }),
        d: common_vendor.p({
          title: "序号",
          type: "line"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-290144be"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/queue/index.vue"]]);
wx.createPage(MiniProgramPage);
