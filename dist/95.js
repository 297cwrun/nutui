/*! NutUI v1.2.1 Fri May 11 2018 18:28:18 GMT+0800 (中国标准时间) */
webpackJsonpnutui([95],{1038:function(n,o,t){o=n.exports=t(2)(),o.push([n.i,"",""])},1137:function(n,o){n.exports={render:function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("nut-demoheader",{attrs:{name:n.$route.name}}),n._v(" "),t("h5",[n._v("示例")]),n._v(" "),t("p",[n._v("默认用法")]),n._v(" "),t("nut-advertisemask",{attrs:{imgSrc:"/asset/img/advertising/adver.png",linkHref:"https://m.jd.com/",picWidth:5,picHeight:6,clickMask:!0,showClose:!0,closeTop:3,closeRight:.8,closeScale:1.2,circleShow:!0,initShow:n.initShow},on:{"update:initShow":function(o){n.initShow=o},jumpTo:n.jumpToFun,closeMask:n.closeMaskFun,maskClose:n.maskClose,maskOpen:n.maskOpen}}),n._v(" "),t("button",{staticClass:"button button-primary",on:{click:n.clickMe}},[n._v("点击出现广告蒙层")])],1)},staticRenderFns:[]}},1230:function(n,o,t){var e=t(1038);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t(3)("36496ca6",e,!0,{})},784:function(n,o,t){function e(n){t(1230)}var i=t(1)(t(874),t(1137),e,null,null);n.exports=i.exports},874:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=t(20);!function(n){n&&n.__esModule}(e);o.default={data:function(){return{initShow:!0,initCeshi:1,demo1:""}},components:{},methods:{jumpToFun:function(){console.log("点击了跳转")},closeMaskFun:function(){console.log("点击了关闭按钮")},maskClose:function(){console.log("关闭了蒙层")},maskOpen:function(){console.log("打开了蒙层")},clickMe:function(){this.initShow=!0}}}}});