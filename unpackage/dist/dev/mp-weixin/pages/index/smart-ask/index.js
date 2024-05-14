"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_index_smartAsk_chat = require("./chat.js");
if (!Math) {
  (Guidance + common_vendor.unref(AIMsg))();
}
const Guidance = () => "./guidance.js";
const AIMsg = () => "./ai-msg.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    var _a;
    const { session, onUserInput } = pages_index_smartAsk_chat.useSession();
    const userInput = common_vendor.ref();
    const toView = common_vendor.ref();
    function setUserInput(text) {
      userInput.value = text;
    }
    const isLoading = common_vendor.ref(false);
    const context = common_vendor.ref([]);
    if (context.value.length === 0 && ((_a = session.value.messages.at(0)) == null ? void 0 : _a.content) !== pages_index_smartAsk_chat.BOT_HELLO.content) {
      const copiedHello = Object.assign({}, pages_index_smartAsk_chat.BOT_HELLO);
      context.value.push(copiedHello);
    }
    const messages = common_vendor.computed(() => {
      return context.value.concat(session.value.messages);
    });
    function onInput(e) {
      const value = e.detail.value;
      userInput.value = value;
    }
    function doSubmit(userInput2) {
      if (userInput2.trim() === "")
        return;
      isLoading.value = true;
      onUserInput(userInput2).then((botMessage) => {
        isLoading.value = false;
      });
      common_vendor.nextTick$1(() => {
        toView.value = messages.value[messages.value.length - 1].id;
        console.log(toView.value);
      });
      setUserInput("");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(messages.value, (message, index, i0) => {
          return {
            a: message.id,
            b: message.id,
            c: "53671299-1-" + i0,
            d: common_vendor.p({
              id: message.id,
              message,
              ["action-date"]: index < context.value.length ? "预设提示词" : message.date.toLocaleString(),
              ["show-cursor"]: true
            })
          };
        }),
        b: toView.value,
        c: userInput.value,
        d: -1,
        e: common_vendor.o(onInput),
        f: common_vendor.o(($event) => doSubmit(userInput.value))
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53671299"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/smart-ask/index.vue"]]);
wx.createPage(MiniProgramPage);
