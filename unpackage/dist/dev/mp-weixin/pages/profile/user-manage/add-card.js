"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "add-card",
  setup(__props) {
    const valiFormData = common_vendor.ref({
      name: "",
      age: ""
    });
    const valiForm = common_vendor.ref();
    const rules = {
      idNumber: {
        rules: [{
          required: true,
          errorMessage: "身份证号不能为空"
        }, {
          format: "number",
          errorMessage: "身份证号只能输入数字"
        }]
      },
      cardNumber: {
        rules: [{
          required: true,
          errorMessage: "就诊卡号不能为空"
        }, {
          format: "number",
          errorMessage: "就诊卡号只能输入数字"
        }]
      },
      telNumber: {
        rules: [{
          required: true,
          errorMessage: "联系电话不能为空"
        }, {
          format: "number",
          errorMessage: "联系电话只能输入数字"
        }]
      }
    };
    function submit(ref2) {
      valiForm.value.validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
      }).catch((err) => {
        console.log("err", err);
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => valiFormData.value.idNumber = $event),
        b: common_vendor.p({
          placeholder: "请输入身份证号",
          modelValue: valiFormData.value.idNumber
        }),
        c: common_vendor.p({
          required: true,
          name: "idNumber"
        }),
        d: common_vendor.o(($event) => valiFormData.value.cardNumber = $event),
        e: common_vendor.p({
          placeholder: "请输入就诊卡号",
          modelValue: valiFormData.value.cardNumber
        }),
        f: common_vendor.p({
          required: true,
          name: "cardNumber"
        }),
        g: common_vendor.o(($event) => valiFormData.value.telNumber = $event),
        h: common_vendor.p({
          placeholder: "请输入联系电话",
          modelValue: valiFormData.value.telNumber
        }),
        i: common_vendor.p({
          name: "telNumber"
        }),
        j: common_vendor.sr(valiForm, "41770176-1,41770176-0", {
          "k": "valiForm"
        }),
        k: common_vendor.p({
          rules,
          modelValue: valiFormData.value
        }),
        l: common_vendor.p({
          title: "请填写就诊人身份信息"
        }),
        m: common_vendor.o(submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41770176"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/user-manage/add-card.vue"]]);
wx.createPage(MiniProgramPage);
