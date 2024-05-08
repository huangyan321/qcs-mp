"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "result",
  setup(__props) {
    async function queryQueue() {
    }
    function goHome() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    const resultInfo = common_vendor.ref({
      status: "1"
      // 1： 签到成功 0：签到失败
    });
    const isSuccess = common_vendor.computed(() => {
      return resultInfo.value.status === "0";
    });
    async function load(queryStr) {
      var p = decodeURIComponent(queryStr);
      try {
        resultInfo.value = JSON.parse(p);
      } catch (error) {
        resultInfo.value = JSON.parse(p);
      }
    }
    common_vendor.onLoad((event) => {
      load(event.query);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isSuccess.value
      }, isSuccess.value ? {} : {}, {
        b: common_vendor.t(isSuccess.value ? "签到成功！" : "签到失败！"),
        c: isSuccess.value
      }, isSuccess.value ? {} : {}, {
        d: isSuccess.value
      }, isSuccess.value ? {
        e: common_vendor.o(queryQueue)
      } : {}, {
        f: common_vendor.o(goHome)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-470ccc9c"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/check-in/result.vue"]]);
wx.createPage(MiniProgramPage);
