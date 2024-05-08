"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LottieAnimation",
  props: {
    animationData: {},
    uid: {},
    width: { default: 300 },
    height: { default: 300 }
  },
  setup(__props, { expose: __expose }) {
    const vm = common_vendor.getCurrentInstance();
    const props = __props;
    let _inited = false;
    let ani = null;
    function init() {
      if (_inited)
        return;
      const query = common_vendor.index.createSelectorQuery().in(vm.proxy);
      query.select("#" + props.uid).node((res) => {
        const canvas = res.node;
        const context = canvas.getContext("2d");
        canvas.width = 300;
        canvas.height = 300;
        common_vendor.lottie.setup(canvas);
        ani = common_vendor.lottie.loadAnimation({
          loop: true,
          autoplay: true,
          animationData: props.animationData,
          rendererSettings: {
            context
          }
        });
        _inited = true;
      }).exec();
    }
    function play() {
      ani.play();
    }
    function pause() {
      ani.pause();
    }
    common_vendor.onMounted(() => {
      init();
    });
    __expose({
      play,
      pause
    });
    return (_ctx, _cache) => {
      return {
        a: _ctx.uid,
        b: _ctx.width + "rpx",
        c: _ctx.height + "rpx"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1517013b"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/components/LottieAnimation/LottieAnimation.vue"]]);
wx.createComponent(Component);
