"use strict";
const common_vendor = require("../../../common/vendor.js");
function createEmptySession() {
  return {
    id: "1",
    topic: "新的聊天",
    messages: [],
    lastUpdate: Date.now(),
    lastSummarizeIndex: 0
  };
}
function useSession() {
  const session = common_vendor.ref(createEmptySession());
  return {
    session
  };
}
exports.useSession = useSession;
