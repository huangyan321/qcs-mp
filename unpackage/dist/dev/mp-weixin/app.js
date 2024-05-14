"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./polyfill.js");
if (!Math) {
  "./pages/index/smart-ask/index.js";
  "./pages/index/index.js";
  "./pages/profile/feedback/index.js";
  "./pages/profile/feedback/result.js";
  "./pages/profile/survey/result.js";
  "./pages/profile/survey/index.js";
  "./pages/profile/favorite/index.js";
  "./pages/profile/outpatient-record/index.js";
  "./pages/profile/appointment/index.js";
  "./pages/profile/user-manage/add-card.js";
  "./pages/profile/user-manage/index.js";
  "./pages/index/news/detail/index.js";
  "./pages/index/news/index.js";
  "./pages/index/report/detail.js";
  "./pages/index/report/index.js";
  "./pages/index/queue/index.js";
  "./pages/index/check-in/index.js";
  "./pages/index/check-in/result.js";
  "./pages/index/registration/detail/index.js";
  "./pages/index/registration/result/index.js";
  "./pages/index/registration/list-doctor/index.js";
  "./pages/index/registration/dept-select/index.js";
  "./pages/message/index.js";
  "./pages/profile/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(function() {
      console.log("App Launch");
    });
    common_vendor.onShow(function() {
      console.log("App Show");
    });
    common_vendor.onHide(function() {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
