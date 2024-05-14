"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (common_vendor.unref(MessageCard) + _easycom_uni_load_more)();
}
const MessageCard = () => "./msg-card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const mockList = common_vendor.ref([]);
    const loading = common_vendor.ref(true);
    common_vendor.ref("fade");
    common_vendor.ref(true);
    common_vendor.onLoad(() => {
      setTimeout(() => {
        mockList.value = [
          {
            id: 1,
            type: "fail",
            title: "预约取消",
            date: "2024-02-11 14:09:22",
            message: "肖俊鑫，你好，你的预约已取消！",
            tableData: [
              {
                label: "科室",
                value: "心外科"
              },
              {
                label: "医生",
                value: "刘医生"
              },
              {
                label: "就诊日期",
                value: "2024-02-11 上午"
              }
            ]
          },
          {
            id: 2,
            type: "success",
            title: "预约成功",
            date: "2024-02-10 14:09:22",
            message: "具体就诊信息如下，你可在首页进行在线签到、取消预约等操作！",
            tableData: [
              {
                label: "就诊人",
                value: "晓君姐"
              },
              {
                label: "科室",
                value: "心外科"
              },
              {
                label: "医生",
                value: "刘医生"
              },
              {
                label: "科室位置",
                value: "门诊一号楼3楼"
              },
              {
                label: "就诊日期",
                value: "2024-02-11 上午 第23号"
              }
            ]
          }
        ];
        loading.value = false;
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: mockList.value.length && !loading.value
      }, mockList.value.length && !loading.value ? {
        b: common_vendor.f(mockList.value, (data, k0, i0) => {
          return {
            a: data.id,
            b: "780fc0ad-0-" + i0,
            c: common_vendor.p({
              data
            })
          };
        })
      } : loading.value ? {
        d: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: loading.value
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-780fc0ad"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/message/index.vue"]]);
wx.createPage(MiniProgramPage);
