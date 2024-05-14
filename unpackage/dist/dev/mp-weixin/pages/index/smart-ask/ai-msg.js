"use strict";
const lib_markdownIt_min = require("../../../lib/markdown-it.min.js");
const lib_highlight_highlightUni_min = require("../../../lib/highlight/highlight-uni.min.js");
const common_vendor = require("../../../common/vendor.js");
const pages_index_smartAsk_chat = require("./chat.js");
const markdownIt = lib_markdownIt_min.mt({
  // 在源码中启用 HTML 标签
  html: true,
  // 如果结果以 <pre ... 开头，内部包装器则会跳过。
  highlight: function(str, lang) {
    let preCode = "";
    try {
      preCode = lib_highlight_highlightUni_min.$e.highlightAuto(str).value;
    } catch (err) {
      preCode = markdownIt.utils.escapeHtml(str);
    }
    const lines = preCode.split(/\n/).slice(0, -1);
    let html = lines.map((item, index) => {
      if (item == "") {
        return "";
      }
      return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + "</li>";
    }).join("");
    html = '<ol style="padding: 0px 30px;">' + html + "</ol>";
    let htmlCode = `<div style="background:#0d1117;margin-top: 5px;color: #888;padding:5px 0;border-radius: 5px;">`;
    htmlCode += `<pre class="hljs" style="padding:0 8px;margin-bottom:5px;overflow: auto;display: block;border-radius: 5px;"><code>${html}</code></pre>`;
    htmlCode += "</div>";
    return htmlCode;
  }
});
const _sfc_main = common_vendor.defineComponent({
  props: {
    actionDate: String,
    message: Object,
    id: String,
    // 是否显示鼠标闪烁的效果
    showCursor: {
      type: [Boolean, Number],
      default() {
        return false;
      }
    },
    isLastMsg: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  setup(props) {
    const msgContent = common_vendor.computed(() => pages_index_smartAsk_chat.getMessageTextContent(props.message));
    const nodes = common_vendor.computed(() => {
      if (!msgContent.value) {
        return;
      }
      let htmlString = "";
      if (msgContent.value.split("```").length % 2) {
        let _msgContent = msgContent.value;
        if (msgContent[msgContent.value.length - 1] != "\n") {
          _msgContent += "\n";
        }
        _msgContent += ' <span class="cursor">|</span>';
        htmlString = markdownIt.render(_msgContent);
      } else {
        htmlString = markdownIt.render(msgContent.value) + ' \n <span class="cursor">|</span>';
      }
      return htmlString;
    });
    function isUser(message) {
      return message.role === "user";
    }
    function isShowTyping(message) {
      return message.preview || message.streaming;
    }
    return {
      isUser,
      isShowTyping,
      getMessageTextContent: pages_index_smartAsk_chat.getMessageTextContent,
      nodes,
      msgContent
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.isUser(_ctx.message)
  }, !_ctx.isUser(_ctx.message) ? {} : {}, {
    b: (_ctx.message.preview || _ctx.message.streaming) && _ctx.message.content.length === 0 && !_ctx.isUser(_ctx.message)
  }, (_ctx.message.preview || _ctx.message.streaming) && _ctx.message.content.length === 0 && !_ctx.isUser(_ctx.message) ? {} : common_vendor.e({
    c: !_ctx.isUser(_ctx.message)
  }, !_ctx.isUser(_ctx.message) ? common_vendor.e({
    d: _ctx.nodes && _ctx.nodes.length
  }, _ctx.nodes && _ctx.nodes.length ? {
    e: _ctx.nodes
  } : {}, {
    f: _ctx.showCursor ? 1 : ""
  }) : {
    g: common_vendor.t(_ctx.msgContent)
  }), {
    h: common_vendor.t(_ctx.actionDate),
    i: common_vendor.n(_ctx.isUser(_ctx.message) ? "chat-message-user" : "chat-message"),
    j: _ctx.id
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/smart-ask/ai-msg.vue"]]);
wx.createComponent(Component);
