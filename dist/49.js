/*! NutUI v1.2.1 Fri May 11 2018 18:28:18 GMT+0800 (中国标准时间) */
webpackJsonpnutui([49],{1070:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"数字或状态标记，一般展示在按钮或文字旁。",showQrCode:!0}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("h6",[t._v("默认用法")]),t._v(" "),v("nut-badge",{staticClass:"item",attrs:{value:12}},[v("button",[t._v("普通模式")])]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),v("h6",[t._v("Max用法")]),t._v(" "),v("nut-badge",{staticClass:"item",attrs:{value:200,max:99}},[v("button",[t._v("max模式")])]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),v("h6",[t._v("文字用法")]),t._v(" "),v("nut-badge",{staticClass:"item",attrs:{value:"new"}},[v("button",[t._v("文字用法")])]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),v("h6",[t._v("小圆点")]),t._v(" "),v("nut-badge",{staticClass:"item",attrs:{isDot:!0}},[v("button",[t._v("小圆点")])]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo4}}),t._v(" "),v("h6",[t._v("文字内容")]),t._v(" "),v("nut-badge",{staticClass:"item",attrs:{isDot:!0}},[t._v("文字内容")]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo5}}),t._v(" "),v("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("显示值")]),t._v(" "),v("td",[t._v("String,Number")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("max")]),t._v(" "),v("td",[t._v("最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("isDot")]),t._v(" "),v("td",[t._v("小圆点")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("hidden")]),t._v(" "),v("td",[t._v("隐藏 badge")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("false")])])])])])}]}},1164:function(t,e,v){var a=v(972);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);v(3)("2827e8b8",a,!0,{})},831:function(t,e,v){function a(t){v(1164)}var _=v(1)(v(922),v(1070),a,null,null);t.exports=_.exports},922:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-badge :value="1"><div>我是按钮</div></nut-badge>',demo2:'<nut-badge :value="200" :max="99" class="item"><button>max模式</button></nut-badge>',demo3:'<nut-badge value="new" class="item"><button>文字用法</button></nut-badge>',demo4:'<nut-badge :isDot="true" class="item"><button>小圆点</button></nut-badge>',demo5:'<nut-badge :isDot="true" class="item">文字内容</nut-badge>'}},methods:{showMask:function(){this.maskShow=!0},hideMask:function(){this.maskShow=!1}}}},972:function(t,e,v){e=t.exports=v(2)(),e.push([t.i,".item{display:inline-block}",""])}});