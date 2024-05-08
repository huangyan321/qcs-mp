"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const ucenterList = [
      [
        {
          "title": "就诊人",
          rightText: "肖浚鑫"
        },
        {
          "title": "科室",
          rightText: "普通内科"
        },
        {
          "title": "医生",
          rightText: "刘医生"
        },
        {
          "title": "科室位置",
          rightText: "门诊1号楼三楼"
        },
        {
          "title": "就诊日期",
          rightText: "2023-02-11"
        },
        {
          "title": "提交时间",
          rightText: "2024-02-11 15:09:33"
        }
      ]
    ];
    async function cancel() {
      const res = await common_vendor.index.showModal({
        title: "提示",
        content: "确定取消预约？"
      });
      if (res.confirm) {
        common_vendor.index.redirectTo({
          url: "/pages/index/registration/result/index?query=" + encodeURIComponent(JSON.stringify({ status: "0" }))
        });
      }
    }
    function goHome() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    const resultInfo = common_vendor.ref({
      status: "1"
      // 1： 预约成功 0： 预约失败
    });
    const isSuccess = common_vendor.computed(() => {
      return resultInfo.value.status === "1";
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
        b: common_vendor.t(isSuccess.value ? "预约成功" : "取消预约成功"),
        c: isSuccess.value
      }, isSuccess.value ? {} : {}, {
        d: common_vendor.f(ucenterList, (sublist, index, i0) => {
          return {
            a: common_vendor.f(sublist, (item, i, i1) => {
              return {
                a: common_vendor.t(item.rightText),
                b: i,
                c: "eb01fa73-1-" + i0 + "-" + i1 + "," + ("eb01fa73-0-" + i0),
                d: common_vendor.p({
                  title: item.title,
                  clickable: true,
                  to: item.to,
                  ["show-extra-icon"]: false
                })
              };
            }),
            b: index,
            c: "eb01fa73-0-" + i0
          };
        }),
        e: isSuccess.value
      }, isSuccess.value ? {
        f: common_vendor.o(cancel)
      } : {}, {
        g: common_vendor.o(goHome)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb01fa73"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/registration/result/index.vue"]]);
wx.createPage(MiniProgramPage);
