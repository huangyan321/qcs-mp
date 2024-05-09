"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const questions = [
      {
        question: "医院环境",
        answers: [
          {
            value: "1",
            name: "满意",
            checked: "true"
          },
          {
            value: "2",
            name: "比较满意"
          },
          {
            value: "3",
            name: "不满意"
          }
        ]
      },
      {
        question: "医院服务",
        answers: [
          {
            value: "1",
            name: "满意",
            checked: "true"
          },
          {
            value: "2",
            name: "比较满意"
          },
          {
            value: "3",
            name: "不满意"
          }
        ]
      },
      {
        question: "医院医德",
        answers: [
          {
            value: "1",
            name: "满意",
            checked: "true"
          },
          {
            value: "2",
            name: "比较满意"
          },
          {
            value: "3",
            name: "不满意"
          }
        ]
      }
    ];
    function radioChange() {
    }
    function submit() {
      common_vendor.index.redirectTo({
        url: "/pages/profile/survey/result"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(questions, (question, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(question.question),
            c: common_vendor.f(question.answers, (item, index2, i1) => {
              return {
                a: item.value,
                b: index2 === _ctx.current,
                c: common_vendor.t(item.name),
                d: item.value
              };
            })
          };
        }),
        b: common_vendor.o(radioChange, _ctx.item),
        c: _ctx.item,
        d: common_vendor.o(submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d8ecfa81"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/survey/index.vue"]]);
wx.createPage(MiniProgramPage);
