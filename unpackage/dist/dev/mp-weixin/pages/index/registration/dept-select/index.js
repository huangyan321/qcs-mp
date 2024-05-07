"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(SearchBar) + common_vendor.unref(DeptItem))();
}
const SearchBar = () => "./search-bar.js";
const DeptItem = () => "./dept-item.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...{
    name: "DeptSelect"
  },
  __name: "index",
  setup(__props) {
    function handleClick(name) {
      console.log("name", "/pages/index/registration/list-doctor/index?query=" + encodeURIComponent(JSON.stringify({ name })));
      common_vendor.index.navigateTo({
        url: `/pages/index/registration/list-doctor/index?query=` + encodeURIComponent(JSON.stringify({ name }))
      });
    }
    function showModal() {
      common_vendor.index.showModal({
        title: "预约须知",
        content: "预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容预约须知内容",
        showCancel: false,
        confirmText: "知道了",
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          }
        }
      });
    }
    const deptList = [
      {
        id: 1,
        icon: "/static/images/depts/yanke.png",
        name: "眼科"
      },
      {
        id: 2,
        icon: "/static/images/depts/fuke.png",
        name: "妇科"
      },
      {
        id: 3,
        icon: "/static/images/depts/huxike.png",
        name: "呼吸内科"
      },
      {
        id: 4,
        icon: "/static/images/depts/pifuke.png",
        name: "皮肤科"
      },
      {
        id: 5,
        icon: "/static/images/depts/guke.png",
        name: "骨科"
      },
      {
        id: 6,
        icon: "/static/images/depts/erbihouke.png",
        name: "耳鼻喉科"
      },
      {
        id: 7,
        icon: "/static/images/depts/shenjinwaike.png",
        name: "神经外科"
      },
      {
        id: 8,
        icon: "/static/images/depts/xiaohuaneike.png",
        name: "消化内科"
      },
      {
        id: 9,
        icon: "/static/images/depts/erke.png",
        name: "儿科"
      },
      {
        id: 10,
        icon: "/static/images/depts/shenjinneike.png",
        name: "神经内科"
      },
      {
        id: 11,
        icon: "/static/images/depts/zhongliuke.png",
        name: "肿瘤科"
      },
      {
        id: 12,
        icon: "/static/images/depts/biniaowaike.png",
        name: "泌尿外科"
      },
      {
        id: 13,
        icon: "/static/images/depts/xueyeke.png",
        name: "血液科"
      },
      {
        id: 14,
        icon: "/static/images/depts/yake.png",
        name: "牙科"
      },
      {
        id: 15,
        icon: "/static/images/depts/xinneike.png",
        name: "心内科"
      },
      {
        id: 16,
        icon: "/static/images/depts/chuanranke.png",
        name: "传染科"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(showModal),
        b: common_vendor.f(deptList, (dept, k0, i0) => {
          return {
            a: dept.id,
            b: common_vendor.o(handleClick, dept.id),
            c: "ce922264-1-" + i0,
            d: common_vendor.p({
              icon: dept.icon,
              name: dept.name
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ce922264"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/qcs-mp/pages/index/registration/dept-select/index.vue"]]);
wx.createPage(MiniProgramPage);
