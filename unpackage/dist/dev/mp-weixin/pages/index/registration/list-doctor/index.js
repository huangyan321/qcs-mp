"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(DatePicker) + DoctorList + _easycom_uni_popup)();
}
const DoctorList = () => "./list.js";
const DatePicker = () => "./date-picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{
    name: "ListDoctor"
  },
  __name: "index",
  setup(__props) {
    const show = common_vendor.ref(false);
    const popup = common_vendor.ref();
    const banner = common_vendor.ref();
    common_vendor.ref();
    function filterList() {
    }
    const listData = common_vendor.ref([
      {
        id: 1,
        name: "杨亦为",
        professional: "副主任医师",
        profile: "医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介",
        restCount: 23
      },
      {
        id: 2,
        name: "杨亦为",
        professional: "副主任医师",
        profile: "医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介",
        restCount: 0
      }
    ]);
    function popupChange(e) {
      show.value = e.show;
    }
    function toggle() {
      console.log("toggle");
      popup.value.open("bottom");
    }
    function confirm() {
      common_vendor.index.navigateTo({
        url: "/pages/index/registration/detail/index?query=" + encodeURIComponent(JSON.stringify({ status: "1" }))
      });
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
        a: "overflow:" + (show.value ? "hidden" : "visible"),
        b: common_vendor.o(filterList),
        c: common_vendor.o(toggle),
        d: common_vendor.p({
          ["list-data"]: listData.value
        }),
        e: common_vendor.o(confirm),
        f: common_vendor.sr(popup, "81f8c34c-2", {
          "k": "popup"
        }),
        g: common_vendor.o(popupChange),
        h: common_vendor.p({
          ["border-radius"]: "10px 10px 0 0",
          ["background-color"]: "#fff"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81f8c34c"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/registration/list-doctor/index.vue"]]);
wx.createPage(MiniProgramPage);
