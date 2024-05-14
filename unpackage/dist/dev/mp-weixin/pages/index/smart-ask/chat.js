"use strict";
const pages_index_smartAsk_markdown_text = require("./markdown_text.js");
const common_vendor = require("../../../common/vendor.js");
const utils_uuid = require("../../../utils/uuid.js");
const BOT_HELLO = createMessage({
  role: "assistant",
  content: pages_index_smartAsk_markdown_text.markdownText
});
function getMessageTextContent(message) {
  if (typeof message.content === "string") {
    return message.content;
  }
  for (const c of message.content) {
    if (c.type === "text") {
      return c.text ?? "";
    }
  }
  return "";
}
function createEmptySession() {
  return {
    id: utils_uuid.uuid(),
    topic: "新的聊天",
    messages: [],
    lastUpdate: Date.now(),
    lastSummarizeIndex: 0
  };
}
function createMessage(override) {
  return {
    id: utils_uuid.uuid(),
    date: (/* @__PURE__ */ new Date()).toLocaleString(),
    role: "user",
    content: "",
    ...override
  };
}
function useSession() {
  const session = common_vendor.ref(createEmptySession());
  function updateSession(updater) {
    updater(session.value);
  }
  async function onUserInput(content) {
    const userContent = content;
    console.log("[User Input] after template: ", userContent);
    let mContent = userContent;
    let userMessage = common_vendor.reactive(createMessage({
      role: "user",
      content: mContent
    }));
    const botMessage = common_vendor.reactive(createMessage({
      role: "assistant",
      streaming: true,
      model: "gpt-3.5-turbo"
    }));
    const recentMessages = session.value.messages;
    recentMessages.concat(userMessage);
    updateSession((session2) => {
      userMessage.content = mContent;
      session2.messages = session2.messages.concat([
        userMessage,
        botMessage
      ]);
    });
    console.log(session.value.messages);
    function delay() {
      return new Promise((r) => {
        setTimeout(() => {
          r(pages_index_smartAsk_markdown_text.markdownText);
        }, 2e3);
      });
    }
    const res = await delay();
    botMessage.content = res;
    return botMessage;
  }
  return {
    session,
    updateSession,
    onUserInput
  };
}
exports.BOT_HELLO = BOT_HELLO;
exports.getMessageTextContent = getMessageTextContent;
exports.useSession = useSession;
