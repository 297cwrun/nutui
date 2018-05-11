/*! NutUI v1.2.1 Fri May 11 2018 18:28:18 GMT+0800 (中国标准时间) */
webpackJsonpnutui([23],{1057:function(t,v,_){v=t.exports=_(2)(),v.push([t.i,"",""])},1156:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"搜索栏。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("h6",[t._v("默认用法")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1,imgUrl:["../asset/img/demo/searchBar1.png"]}}),t._v(" "),_("h6",[t._v("右侧搜索按钮可根据需要进行配置")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/searchBar2.png"]}}),t._v(" "),_("h6",[t._v("可配置输入框前面是否显示搜索图标（图标可配置）、输入框高度、右侧是否显示文字按钮以及文字按钮宽度、显示文字、文字颜色")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/searchBar3.png"]}}),t._v(" "),_("h6",[t._v("可配置获取输入框焦点事件、输入事件、失去焦点事件、默认提交事件")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo4,imgUrl:["../asset/img/demo/searchBar1.png"]}}),t._v(" "),_("nut-codebox",{attrs:{code:t.demo5}}),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("输入框的高度，单位为rem")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'0.6'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("右侧搜索按钮的宽度，单位为rem")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'0.6'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("右侧文字搜索按钮字体颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'#222'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("textInfo")]),t._v(" "),_("td",[t._v("右侧文字搜索按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'搜索'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("icon")]),t._v(" "),_("td",[t._v("输入框前面icon及右侧图标搜索按钮icon链接")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("hasIcon")]),t._v(" "),_("td",[t._v("是否显示输入框前面的icon")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("placeText")]),t._v(" "),_("td",[t._v("输入框placeholder内容")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'请输入内容...'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("hasSearchButton")]),t._v(" "),_("td",[t._v("是否显示右侧搜索按钮")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("hasTextButton")]),t._v(" "),_("td",[t._v("右侧搜索按钮是否为文字按钮")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("--")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("focus")]),t._v(" "),_("td",[t._v("输入框获取焦点时触发事件")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("input")]),t._v(" "),_("td",[t._v("输入框输入内容时触发事件")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("blur")]),t._v(" "),_("td",[t._v("输入框失去焦点时触发事件")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("submit")]),t._v(" "),_("td",[t._v("默认提交事件")]),t._v(" "),_("td",[t._v("--")])])])])])}]}},1249:function(t,v,_){var n=_(1057);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);_(3)("483626a6",n,!0,{})},857:function(t,v,_){function n(t){_(1249)}var e=_(1)(_(951),_(1156),n,null,null);t.exports=e.exports},951:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo1:'<nut-searchbar  placeText="请输入自定义文案"></nut-searchbar>',demo2:'<nut-searchbar\n  placeText="请输入自定义文案"\n  :hasSearchButton="false"\n></nut-searchbar>',demo3:'<nut-searchbar\n  placeText="ERP/姓名/邮箱"\n  :hasIcon="true"\n  :hasTextButton="true"\n  textInfo="搜索"\n  width="1"\n  height="1"\n  color="#f23030"\n></nut-searchbar>',demo4:'<nut-searchbar\n  placeText="请输入自定义文案"\n  @focus="focusFun"\n  @input="inputFun"\n  @blur="blurFun"\n  @submit="submitFun"\n></nut-searchbar>',demo5:"export default {\n    methods: {\n        focusFun() {\n            console.log('获取焦点操作！');\n        },\n        inputFun() {\n            alert('您正在输入...');\n        },\n        blurFun() {\n            console.log('您已失去焦点！');\n        },\n        submitFun() {\n            console.log('默认提交操作！');\n        }\n    }\n}"}},methods:{focusFun:function(){console.log("获取焦点操作！")},inputFun:function(){alert("您正在输入...")},blurFun:function(){console.log("您已失去焦点！")},submitFun:function(){console.log("默认提交操作！")}}}}});