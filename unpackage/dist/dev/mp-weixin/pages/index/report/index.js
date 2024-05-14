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
    function goDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/index/report/detail"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f([1, 2], (i, k0, i0) => {
          return {
            a: "0ba3802e-3-" + i0 + "," + ("0ba3802e-2-" + i0),
            b: "0ba3802e-4-" + i0 + "," + ("0ba3802e-2-" + i0),
            c: "0ba3802e-5-" + i0 + "," + ("0ba3802e-2-" + i0),
            d: "0ba3802e-6-" + i0 + "," + ("0ba3802e-2-" + i0),
            e: "0ba3802e-7-" + i0 + "," + ("0ba3802e-2-" + i0),
            f: "0ba3802e-8-" + i0 + "," + ("0ba3802e-2-" + i0),
            g: common_vendor.o(goDetail, i),
            h: "0ba3802e-9-" + i0 + "," + ("0ba3802e-2-" + i0),
            i: "0ba3802e-2-" + i0 + "," + ("0ba3802e-1-" + i0),
            j: "0ba3802e-1-" + i0,
            k: i
          };
        }),
        b: common_vendor.p({
          title: "项目",
          rightText: "xxxx"
        }),
        c: common_vendor.p({
          title: "流水号",
          rightText: "092934"
        }),
        d: common_vendor.p({
          title: "科室",
          rightText: "心外科"
        }),
        e: common_vendor.p({
          title: "医生",
          rightText: "刘医生"
        }),
        f: common_vendor.p({
          title: "申请时间",
          rightText: "2024-02-11 15:03:22"
        }),
        g: common_vendor.p({
          title: "报告时间",
          rightText: "2024-02-11 15:03:22"
        }),
        h: common_vendor.p({
          title: "报告单号",
          type: "line"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0ba3802e"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/report/index.vue"]]);
wx.createPage(MiniProgramPage);
