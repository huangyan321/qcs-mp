"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "msg-card",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(_ctx.data.date),
        b: _ctx.data.type === "success"
      }, _ctx.data.type === "success" ? {} : {}, {
        c: common_vendor.t(_ctx.data.title),
        d: _ctx.data.type === "success" ? "#33D853" : "#FF5656",
        e: common_vendor.t(_ctx.data.message),
        f: common_vendor.f(_ctx.data.tableData, (info, k0, i0) => {
          return {
            a: common_vendor.t(info.label),
            b: common_vendor.t(info.value)
          };
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e4d7138"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/message/msg-card.vue"]]);
wx.createComponent(Component);
