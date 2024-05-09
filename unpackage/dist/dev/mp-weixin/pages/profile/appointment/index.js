"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.ref(true);
    const mockData = common_vendor.ref([
      {
        id: 1,
        name: "肖俊鑫",
        doctor: "刘医生",
        number: "1",
        dept: "心外科",
        date: "2024-02-11 上午",
        status: "1"
        // 状态 1: 待就诊 2: 已超时  3. 已取消
      },
      {
        id: 2,
        name: "肖俊鑫",
        doctor: "刘医生",
        number: "1",
        dept: "心外科",
        status: "2"
        // 状态 1: 待就诊 2: 已超时  3. 已取消
      },
      {
        id: 3,
        name: "肖俊鑫",
        doctor: "刘医生",
        number: "1",
        dept: "心外科",
        status: "3"
        // 状态 1: 待就诊 2: 已超时  3. 已取消
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(mockData.value, (data, k0, i0) => {
          return {
            a: common_vendor.t(data.status === "1" ? "待就诊" : data.status === "2" ? "已超时" : "已取消"),
            b: data.status === "1" ? "#3DBEDF" : data.status === "2" ? "#FF4D4D" : "#C6CBD3",
            c: "2f4543f1-2-" + i0 + "," + ("2f4543f1-1-" + i0),
            d: common_vendor.p({
              title: "科室",
              rightText: data.dept
            }),
            e: "2f4543f1-3-" + i0 + "," + ("2f4543f1-1-" + i0),
            f: common_vendor.p({
              title: "医生",
              rightText: data.doctor
            }),
            g: "2f4543f1-4-" + i0 + "," + ("2f4543f1-1-" + i0),
            h: common_vendor.p({
              title: "就诊人",
              rightText: data.name
            }),
            i: "2f4543f1-5-" + i0 + "," + ("2f4543f1-1-" + i0),
            j: common_vendor.p({
              title: "号序",
              rightText: data.number
            }),
            k: "2f4543f1-1-" + i0 + "," + ("2f4543f1-0-" + i0),
            l: "2f4543f1-0-" + i0,
            m: common_vendor.p({
              title: data.date
            }),
            n: data.id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f4543f1"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/appointment/index.vue"]]);
wx.createPage(MiniProgramPage);
