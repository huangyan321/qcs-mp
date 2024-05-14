"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_index_smartAsk_chat = require("./chat.js");
if (!Math) {
  Guidance();
}
const Guidance = () => "./guidance.js";
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
    function isUser(message) {
      return message.role === "user";
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(messages.value, (message, index, i0) => {
          return common_vendor.e({
            a: !isUser(message)
          }, !isUser(message) ? {} : {}, {
            b: (message.preview || message.streaming) && message.content.length === 0 && !isUser(message)
          }, (message.preview || message.streaming) && message.content.length === 0 && !isUser(message) ? {} : {
            c: common_vendor.t(common_vendor.unref(pages_index_smartAsk_chat.getMessageTextContent)(message))
          }, {
            d: common_vendor.t(index < context.value.length ? "预设提示词" : message.date.toLocaleString()),
            e: message.id,
            f: common_vendor.n(isUser(message) ? "chat-message-user" : "chat-message")
          });
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53671299"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/index/smart-ask/index.vue"]]);
wx.createPage(MiniProgramPage);
