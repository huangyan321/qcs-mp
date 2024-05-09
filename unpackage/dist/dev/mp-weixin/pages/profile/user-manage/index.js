"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2 + _easycom_uni_icons2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section + _easycom_uni_icons)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    async function setDefault(data) {
      const res = await common_vendor.index.showModal({
        title: "确认修改" + data.name + "为默认就诊人吗？"
      });
      if (res.confirm) {
        common_vendor.index.showLoading({
          title: "请稍后"
        });
        setTimeout(() => {
          mockData.value.forEach((item) => {
            item.isDefault = false;
          });
          data.isDefault = true;
          common_vendor.index.hideLoading();
        }, 500);
      }
    }
    const mockData = common_vendor.ref([
      {
        id: 1,
        name: "肖俊鑫",
        tel: "133****2424",
        idNumber: "23235235235235",
        cardNumber: "3523523525",
        isDefault: true
      },
      {
        id: 2,
        name: "刘志斌",
        tel: "133****2424",
        idNumber: "23235235235235",
        cardNumber: "3523523525",
        isDefault: false
      }
    ]);
    async function unbound() {
      const res = await common_vendor.index.showModal({
        title: "提示",
        content: "确认解绑该就诊人？"
      });
      if (res.confirm)
        ;
    }
    function addCard() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/user-manage/add-card"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(mockData.value, (data, k0, i0) => {
          return common_vendor.e({
            a: data.isDefault
          }, data.isDefault ? {} : {}, {
            b: "efb33a1f-2-" + i0 + "," + ("efb33a1f-1-" + i0),
            c: common_vendor.p({
              title: "电话",
              rightText: data.tel
            }),
            d: "efb33a1f-3-" + i0 + "," + ("efb33a1f-1-" + i0),
            e: common_vendor.p({
              title: "身份证号",
              rightText: data.idNumber
            }),
            f: "efb33a1f-4-" + i0 + "," + ("efb33a1f-1-" + i0),
            g: common_vendor.p({
              title: "就诊卡号",
              rightText: data.cardNumber
            }),
            h: data.isDefault
          }, data.isDefault ? {
            i: data.name
          } : {
            j: data.name,
            k: common_vendor.o(($event) => setDefault(data), data.id)
          }, {
            l: common_vendor.o(unbound, data.id),
            m: "efb33a1f-5-" + i0 + "," + ("efb33a1f-1-" + i0),
            n: "efb33a1f-1-" + i0 + "," + ("efb33a1f-0-" + i0),
            o: "efb33a1f-0-" + i0,
            p: common_vendor.p({
              title: data.name
            }),
            q: data.id
          });
        }),
        b: common_vendor.p({
          type: "plusempty",
          size: "22",
          color: "#FFFFFF"
        }),
        c: common_vendor.o(addCard)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efb33a1f"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/user-manage/index.vue"]]);
wx.createPage(MiniProgramPage);
