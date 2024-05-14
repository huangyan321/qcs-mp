"use strict";
function uuid() {
  var d = (/* @__PURE__ */ new Date()).getTime();
  var uuid2 = "QCS-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
exports.uuid = uuid;
