"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function gotoPatientInfo() {
    }
    async function checkIn() {
      const res = await common_vendor.index.showModal({
        title: "提示",
        content: "请确认是否已到达科室位置，提前签到可能导致过号。是否继续签到？"
      });
      if (res.confirm) {
        common_vendor.index.reLaunch({
          url: "/pages/index/check-in/result?query=" + encodeURIComponent(JSON.stringify({ status: "1" }))
        });
      }
    }
    const detailInfo = common_vendor.ref();
    async function load(queryStr) {
      var p = decodeURIComponent(queryStr);
      try {
        detailInfo.value = JSON.parse(p);
      } catch (error) {
        detailInfo.value = JSON.parse(p);
      }
      common_vendor.index.showToast({
        icon: "loading",
        title: "获取中...",
        mask: true
      });
      await common_vendor.index.setNavigationBarTitle({
        title: detailInfo.value.name
      });
      common_vendor.index.hideToast();
    }
    common_vendor.onLoad((event) => {
      load(event.query);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          size: "22",
          color: "#ffffff"
        }),
        b: common_vendor.o(gotoPatientInfo),
        c: common_vendor.p({
          title: "科室",
          rightText: "普通内科"
        }),
        d: common_vendor.p({
          title: "医生",
          rightText: "刘医生"
        }),
        e: common_vendor.p({
          title: "就诊日期",
          rightText: "2024-02-11 上午"
        }),
        f: common_vendor.o(checkIn),
        g: common_vendor.p({
          title: "预约信息",
          type: "line"
        }),
        h: common_vendor.p({
          title: "科室",
          rightText: "普通内科"
        }),
        i: common_vendor.p({
          title: "医生",
          rightText: "刘医生"
        }),
        j: common_vendor.p({
          title: "就诊日期",
          rightText: "2024-02-11 上午"
        }),
        k: common_vendor.o(checkIn),
        l: common_vendor.p({
          title: "预约信息",
          type: "line"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ceb5243d"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/check-in/index.vue"]]);
wx.createPage(MiniProgramPage);
