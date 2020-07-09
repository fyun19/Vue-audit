/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";
import { routerMode } from "@/config/settings";

Vue.use(VueRouter);
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },

  {
    path: "/",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "/configurationNav",
        name: "Index",
        component: () => import("@/views/configurationNav/index"),
        meta: {
          title: "配置向导",
          icon: "indent",
          affix: true,
        },
      },
    ],
  },

  {
    path: "/",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "comprehensiveTable",
        name: "comprehensiveTable",
        component: () => import("@/views/auditInterface/index"),
        meta: {
          title: "审计接口",
          icon: "code-branch",
          affix: true,
        },
      },
    ],
  },

  {
    path: "/networkAudit",
    component: Layout,
    redirect: "noRedirect",
    name: "networkAudit",
    alwaysShow: true,
    meta: { title: "网络审计", icon: "globe" },
    children: [
      {
        path: "auditSwitch",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "AuditSwitch",
        meta: {
          title: "审计开关",
          permissions: ["admin"],
        },
        children: [
          {
            path: "trafficStatistic",
            name: "TrafficStatistic",
            component: () =>
              import("@/views/networkAudit/auditSwitch/trafficStatistic"),
            meta: { title: "流量统计" },
          },
          {
            path: "trafficClear",
            name: "TrafficClear",
            component: () =>
              import("@/views/networkAudit/auditSwitch/trafficClear"),
            meta: { title: "流量清理" },
          },
          {
            path: "networkHealth",
            name: "NetworkHealth",
            component: () =>
              import("@/views/networkAudit/auditSwitch/networkHealth"),
            meta: { title: "网络健康" },
          },
        ],
      },
      {
        path: "protocolDictionary",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "ProtocolDictionary",
        meta: {
          title: "协议字典",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/networkAudit/protocolDictionary/index"),
            meta: { title: "协议字典" },
          },
        ],
      },
      {
        path: "protocolRules",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "ProtocolRules",
        meta: {
          title: "协议规则",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/networkAudit/protocolDictionary/index"),
            meta: { title: "协议规则" },
          },
        ],
      },

      {
        path: "communicationRelations",
        name: "CommunicationRelations",
        component: () =>
          import("@/views/networkAudit/communicationRelations/index"),
        meta: { title: "通讯关系", permissions: ["admin"] },
      },

      {
        path: "networkHealth",
        name: "NetworkHealth",
        component: () => import("@/views/networkAudit/networkHealth/index"),
        meta: { title: "网络健康", permissions: ["admin"] },
      },
    ],
  },

  {
    path: "/assetManage",
    component: Layout,
    redirect: "noRedirect",
    name: "AssetManage",
    alwaysShow: true,
    meta: { title: "资产管理", icon: "yen-sign" },
    children: [
      {
        path: "assetInfo",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "AssetInfo",
        meta: {
          title: "资产信息",
          permissions: ["admin"],
        },
        children: [
          {
            path: "trafficConf",
            name: "TrafficConf",
            component: () =>
              import("@/views/assetManage/assetInfo/trafficConf/index"),
            meta: { title: "流量配置", permissions: ["admin"] },
          },
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/assetManage/assetInfo/hostList/index"),
            meta: { title: "主机列表" },
          },
        ],
      },
      {
        path: "gatewayInfo",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "GatewayInfo",
        meta: {
          title: "网关信息",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/assetManage/gatewayInfo/index"),
            meta: { title: "网关信息" },
          },
        ],
      },
      {
        path: "internetHost",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "InternetHost",
        meta: {
          title: "外网主机",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/assetManage/internetHost/index"),
            meta: { title: "外网主机" },
          },
        ],
      },
      {
        path: "intranetSegment",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "IntranetSegment",
        meta: {
          title: "内网网段",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/assetManage/intranetSegment/index"),
            meta: { title: "内网网段" },
          },
        ],
      },
      {
        path: "assetClass",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "AssetClass",
        meta: {
          title: "资产类别",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/assetManage/assetClass/index"),
            meta: { title: "资产类别" },
          },
        ],
      },
    ],
  },

  {
    path: "/businessConf",
    component: Layout,
    redirect: "noRedirect",
    name: "BusinessConf",
    alwaysShow: true,
    meta: { title: "业务配置", icon: "file-alt" },
    children: [
      {
        path: "pointTable",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "PointTable",
        meta: {
          title: "点表规划",
          permissions: ["admin"],
        },
        children: [
          {
            path: "rulePolicyconf",
            name: "RulePolicyconf",
            component: () =>
              import("@/views/businessConf/pointTable/rulePolicyconf/index"),
            meta: { title: "规则策略配置", permissions: ["admin"] },
          },
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/businessConf/pointTable/hostList/index"),
            meta: { title: "主机列表" },
          },
        ],
      },
      {
        path: "industrialPlan",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "IndustrialPlan",
        meta: {
          title: "工业规划",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () =>
              import("@/views/businessConf/industrialPlan/index"),
            meta: { title: "工业规划" },
          },
        ],
      },
      {
        path: "addressDetection",
        name: "AddressDetection",
        component: () => import("@/views/businessConf/addressDetection/index"),
        meta: { title: "地址探测规则", permissions: ["admin"] },
      },
    ],
  },

  {
    path: "/",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "/recordStrategy",
        name: "Index",
        component: () => import("@/views/recordStrategy/index"),
        meta: {
          title: "录波策略",
          icon: "lock-open",
          affix: true,
        },
      },
    ],
  },

  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "noRedirect",
  //   children: [
  //     {
  //       path: "/networkAudit",
  //       name: "Index",
  //       component: () => import("@/views/networkAudit/index"),
  //       meta: {
  //         title: "网络审计",
  //         icon: "globe",
  //         affix: true,
  //       },
  //       children: [
  //         {
  //           path: "userManagement",
  //           name: "UserManagement",
  //           component: () =>
  //             import("@/views/personnelManagement/userManagement/index"),
  //           meta: { title: "流量统计" },
  //         },
  //         {
  //           path: "roleManagement",
  //           name: "RoleManagement",
  //           component: () =>
  //             import("@/views/personnelManagement/roleManagement/index"),
  //           meta: { title: "流量清理" },
  //         },
  //         {
  //           path: "roleManagement",
  //           name: "RoleManagement",
  //           component: () =>
  //             import("@/views/personnelManagement/roleManagement/index"),
  //           meta: { title: "网络健康" },
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   path: "/personalCenter",
  //   component: Layout,
  //   hidden: true,
  //   redirect: "personalCenter",
  //   children: [
  //     {
  //       path: "personalCenter",
  //       name: "PersonalCenter",
  //       component: () => import("@/views/personalCenter/index"),
  //       meta: {
  //         title: "个人中心",
  //       },
  //     },
  //   ],
  // },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin"],
        },
      },
    ],
  }, */
  {
    path: "/personnelManagement",
    component: Layout,
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "用户管理", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () =>
          import("@/views/personnelManagement/userManagement/index"),
        meta: { title: "用户管理" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () =>
          import("@/views/personnelManagement/roleManagement/index"),
        meta: { title: "角色管理" },
      },
    ],
  },

  {
    path: "/vab",
    component: Layout,
    redirect: "noRedirect",
    name: "Vab",
    alwaysShow: true,
    meta: { title: "组件", icon: "cloud" },
    children: [
      {
        path: "permissions",
        name: "Permission",
        component: () => import("@/views/vab/permissions/index"),
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor"],
          badge: "New",
        },
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "图标",
          permissions: ["admin"],
        },
        children: [
          {
            path: "awesomeIcon",
            name: "AwesomeIcon",
            component: () => import("@/views/vab/icon/index"),
            meta: { title: "常规图标" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/vab/icon/remixIcon"),
            meta: { title: "小清新图标" },
          },
          {
            path: "colorfulIcon",
            name: "ColorfulIcon",
            component: () => import("@/views/vab/icon/colorfulIcon"),
            meta: { title: "多彩图标" },
          },
        ],
      },
      {
        path: "table",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Table",
        meta: {
          title: "表格",
          permissions: ["admin"],
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/vab/table/index"),
            meta: { title: "综合表格" },
          },
          {
            path: "inlineEditTable",
            name: "InlineEditTable",
            component: () => import("@/views/vab/table/inlineEditTable"),
            meta: { title: "行内编辑" },
          },
        ],
      },
      {
        path: "map",
        name: "Map",
        component: () => import("@/views/vab/map/index"),
        meta: { title: "地图", permissions: ["admin"], badge: "Pro" },
      },
      {
        path: "webSocket",
        name: "WebSocket",
        component: () => import("@/views/vab/webSocket/index"),
        meta: { title: "webSocket", permissions: ["admin"] },
      },
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/vab/form/index"),
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: () => import("@/views/vab/element/index"),
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/vab/tree/index"),
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: () => import("@/views/vab/card/index"),
        meta: { title: "卡片", permissions: ["admin"] },
      },

      {
        path: "betterScroll",
        name: "BetterScroll",
        component: () => import("@/views/vab/betterScroll/index"),
        meta: {
          title: "滚动侦测",
          permissions: ["admin"],
        },
      },
      {
        path: "verify",
        name: "Verify",
        component: () => import("@/views/vab/verify/index"),
        meta: { title: "验证码", permissions: ["admin"] },
      },
      {
        path: "menu1",
        component: () => import("@/views/vab/nested/menu1/index"),
        name: "Menu1",
        alwaysShow: true,
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        children: [
          {
            path: "menu1-1",
            name: "Menu1-1",
            alwaysShow: true,
            meta: { title: "嵌套路由 1-1" },
            component: () => import("@/views/vab/nested/menu1/menu1-1/index"),

            children: [
              {
                path: "menu1-1-1",
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
                component: () =>
                  import("@/views/vab/nested/menu1/menu1-1/menu1-1-1/index"),
              },
            ],
          },
        ],
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: () => import("@/views/vab/magnifier/index"),
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: () => import("@/views/vab/echarts/index"),
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/vab/loading/index"),
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: () => import("@/views/vab/player/index"),
        meta: { title: "视频播放器", permissions: ["admin"] },
      },
      {
        path: "markdownEditor",
        name: "MarkdownEditor",
        component: () => import("@/views/vab/markdownEditor/index"),
        meta: { title: "markdown编辑器", permissions: ["admin"] },
      },
      {
        path: "editor",
        name: "Editor",
        component: () => import("@/views/vab/editor/index"),
        meta: { title: "富文本编辑器", permissions: ["admin"], badge: "New" },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: () => import("@/views/vab/qrCode/index"),
        meta: { title: "二维码", permissions: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: () => import("@/views/vab/backToTop/index"),
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: () => import("@/views/vab/lodash/index"),
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: () => import("@/views/vab/imgComparison/index"),
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: () => import("@/views/vab/codeGenerator/index"),
        meta: { title: "代码生成机", permissions: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () => import("@/views/vab/markdown/index"),
        meta: { title: "markdown阅读器", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: () => import("@/views/vab/smallComponents/index"),
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/vab/upload/index"),
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "excel",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Excel",
        meta: {
          title: "Excel",
          permissions: ["admin"],
        },
        children: [
          {
            path: "exportExcel",
            component: () => import("@/views/vab/excel/exportExcel"),
            name: "ExportExcel",
            meta: { title: "导出Excel" },
          },
          {
            path: "exportSelectedExcel",
            component: () => import("@/views/vab/excel/exportSelectExcel"),
            name: "ExportSelectedExcel",
            meta: { title: "导出选中行" },
          },
          {
            path: "exportMergeHeaderExcel",
            component: () => import("@/views/vab/excel/exportMergeHeaderExcel"),
            name: "ExportMergeHeaderExcel",
            meta: { title: "导出合并" },
          },
          {
            path: "uploadExcel",
            component: () => import("@/views/vab/excel/uploadExcel"),
            name: "UploadExcel",
            meta: { title: "上传Excel" },
          },
        ],
      },
      {
        path: "sticky",
        name: "Sticky",
        component: () => import("@/views/vab/sticky/index"),
        meta: { title: "sticky吸附", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: () => import("@/views/vab/errorLog/index"),
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: () => import("@/views/vab/more/index"),
        meta: { title: "更多组件", permissions: ["admin"] },
      },
    ],
  },
  // {
  //   path: "/mall",
  //   component: Layout,
  //   redirect: "noRedirect",
  //   name: "Mall",
  //   meta: {
  //     title: "商城",
  //     icon: "shopping-cart",
  //     permissions: ["admin"],
  //   },

  //   children: [
  //     {
  //       path: "pay",
  //       name: "Pay",
  //       component: () => import("@/views/mall/pay/index"),
  //       meta: {
  //         title: "支付",
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //     {
  //       path: "goodsList",
  //       name: "GoodsList",
  //       component: () => import("@/views/mall/goodsList/index"),
  //       meta: {
  //         title: "商品列表",
  //       },
  //     },
  //     {
  //       path: "goodsDetail",
  //       name: "GoodsDetail",
  //       component: () => import("@/views/mall/goodsDetail/index"),
  //       meta: {
  //         title: "商品详情",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/error",
  //   component: EmptyLayout,
  //   redirect: "noRedirect",
  //   name: "Error",
  //   meta: { title: "错误页", icon: "bug" },
  //   children: [
  //     {
  //       path: "401",
  //       name: "Error401",
  //       component: () => import("@/views/401"),
  //       meta: { title: "401" },
  //     },
  //     {
  //       path: "404",
  //       name: "Error404",
  //       component: () => import("@/views/404"),
  //       meta: { title: "404" },
  //     },
  //   ],
  // },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
/*const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};*/

export function resetRouter() {
  router.matcher = new VueRouter({
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
