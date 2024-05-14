"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const valiFormData = common_vendor.ref({
      name: "",
      contact: "",
      suggestion: ""
    });
    const valiForm = common_vendor.ref();
    const rules = {
      name: {
        rules: [{
          required: true,
          errorMessage: "姓名不能为空"
        }]
      },
      contact: {
        rules: [{
          required: true,
          errorMessage: "联系方式不能为空"
        }]
      },
      suggestion: {
        rules: [{
          required: true,
          errorMessage: "内容不能为空"
        }]
      }
    };
    function submit() {
      console.log(valiFormData);
      valiForm.value.validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
        common_vendor.index.redirectTo({
          url: "/pages/profile/feedback/result"
        });
      }).catch((err) => {
        console.log("err", err);
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => valiFormData.value.name = $event),
        b: common_vendor.p({
          placeholder: "请输入姓名",
          modelValue: valiFormData.value.name
        }),
        c: common_vendor.p({
          ["label-width"]: "160rpx",
          label: "姓名",
          required: true,
          name: "name"
        }),
        d: common_vendor.o(($event) => valiFormData.value.contact = $event),
        e: common_vendor.p({
          placeholder: "请输入联系方式",
          modelValue: valiFormData.value.contact
        }),
        f: common_vendor.p({
          ["label-width"]: "160rpx",
          label: "联系方式",
          required: true,
          name: "contact"
        }),
        g: common_vendor.o(($event) => valiFormData.value.suggestion = $event),
        h: common_vendor.p({
          type: "textarea",
          autoHeight: true,
          maxlength: 400,
          placeholder: "请输入您宝贵的意见",
          modelValue: valiFormData.value.suggestion
        }),
        i: common_vendor.p({
          name: "suggestion"
        }),
        j: common_vendor.sr(valiForm, "2a985f44-0", {
          "k": "valiForm"
        }),
        k: common_vendor.p({
          rules,
          modelValue: valiFormData.value
        }),
        l: common_vendor.o(submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2a985f44"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/profile/feedback/index.vue"]]);
wx.createPage(MiniProgramPage);
