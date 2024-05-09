"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const hasLogin = common_vendor.ref(false);
    const gridList = [
      {
        "text": "就诊人管理",
        "icon": "/static/images/profile/record.png"
      },
      {
        "text": "预约记录",
        "icon": "/static/images/profile/sign.png"
      },
      {
        "text": "就诊记录",
        "icon": "/static/images/profile/service.png"
      }
    ];
    const ucenterList = [
      [
        {
          "title": "我的收藏",
          "to": "/pages/ucenter/favorite/index",
          "icon": "star"
        },
        {
          "title": "满意度调查",
          "to": "/pages/ucenter/survey/index",
          "icon": "flag"
        },
        {
          "title": "意见反馈",
          "to": "/pages/ucenter/feedback/index",
          "icon": "email"
        }
      ]
    ];
    function tapGrid(index) {
      console.log(index);
      if (index === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/profile/user-manage/index"
        });
      } else if (index === 1) {
        common_vendor.index.navigateTo({
          url: "/pages/profile/appointment/index"
        });
      } else if (index === 2) {
        common_vendor.index.navigateTo({
          url: "/pages/profile/outpatient-record/index"
        });
      }
    }
    async function signOut() {
      const res = await common_vendor.index.showModal({
        title: "提示",
        content: "确定退出登陆吗?"
      });
      if (res.confirm) {
        common_vendor.index.showToast({
          title: "退出登录"
        });
      }
    }
    function ucenterListClick(item) {
      common_vendor.index.navigateTo({
        url: item.to
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          color: "#ffffff",
          size: "40",
          type: "person-filled"
        }),
        b: hasLogin.value
      }, hasLogin.value ? {
        c: common_vendor.t(_ctx.userInfo.nickname || _ctx.userInfo.username || _ctx.userInfo.mobile)
      } : {}, {
        d: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.toUserInfo && _ctx.toUserInfo(...args)
        ),
        e: common_vendor.f(gridList, (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.text),
            c: common_vendor.o(($event) => tapGrid(index), index),
            d: index,
            e: "201c0da5-2-" + i0 + ",201c0da5-1"
          };
        }),
        f: common_vendor.p({
          column: 3,
          showBorder: false,
          square: true
        }),
        g: common_vendor.f(ucenterList, (sublist, index, i0) => {
          return {
            a: common_vendor.f(sublist, (item, i, i1) => {
              return common_vendor.e({
                a: item.showBadge
              }, item.showBadge ? {
                b: common_vendor.t(item.rightText)
              } : {}, {
                c: i,
                d: common_vendor.o(($event) => ucenterListClick(item), i),
                e: "201c0da5-4-" + i0 + "-" + i1 + "," + ("201c0da5-3-" + i0),
                f: common_vendor.p({
                  title: item.title,
                  link: true,
                  rightText: item.rightText,
                  clickable: true,
                  to: item.to,
                  ["show-extra-icon"]: true,
                  extraIcon: {
                    type: item.icon,
                    color: "#999"
                  }
                })
              });
            }),
            b: index,
            c: "201c0da5-3-" + i0
          };
        }),
        h: common_vendor.o(signOut)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-201c0da5"], ["__file", "C:/Users/16045/Desktop/code/my-project/miniPrograms/qcs-mp/pages/profile/index.vue"]]);
wx.createPage(MiniProgramPage);
