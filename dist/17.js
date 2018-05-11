/*! NutUI v1.2.1 Fri May 11 2018 18:28:18 GMT+0800 (中国标准时间) */
webpackJsonpnutui([17],{1021:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"",""])},1120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"轮播组件，支持滑动。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("h6",[t._v("横向切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),n("h6",[t._v("纵向切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),n("h6",[t._v("无缝切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),n("h6",[t._v("循环切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo4}}),t._v(" "),n("h6",[t._v("自动切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo5}}),t._v(" "),n("h6",[t._v("懒加载切换")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo6}}),t._v(" "),n("h6",[t._v("事件")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demoEvent}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Methods")]),t._v(" "),t._m(1),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("direction")]),t._v(" "),n("td",[t._v("swiper滑动方向")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v('"vertical"')]),t._v(" "),n("td",[t._v('"vertical"/"horizontal"')])]),t._v(" "),n("tr",[n("td",[t._v("paginationVisible")]),t._v(" "),n("td",[t._v("分页显示与否")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("paginationClickable")]),t._v(" "),n("td",[t._v("分页是否可以点击")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("loop")]),t._v(" "),n("td",[t._v("是否循环")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("speed")]),t._v(" "),n("td",[t._v("过渡动画执行时间")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("500")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("autoPlay")]),t._v(" "),n("td",[t._v("自动轮播，轮播默认是循环模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("lazyLoad")]),t._v(" "),n("td",[t._v("图片是否支持lazyload加载，默认是 不lazyload")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("flase/true")])]),t._v(" "),n("tr",[n("td",[t._v("lazyLoadingurl")]),t._v(" "),n("td",[t._v("loading图片url")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'STATIC/loading.gif'")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("lazyLoaderrorUrl")]),t._v(" "),n("td",[t._v("loading图片出错时候垫底图")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("''")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("freeMode")]),t._v(" "),n("td",[t._v("自由切换模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("flase/true")])]),t._v(" "),n("tr",[n("td",[t._v("initPage")]),t._v(" "),n("td",[t._v("设置初始时候显示的页")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("切换的模式，单个切换，还是自由切换（自动贴合）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'single'")]),t._v(" "),n("td",[t._v("'single/multiple'")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("方法名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("next")]),t._v(" "),n("td",[t._v("去下一页")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("prev")]),t._v(" "),n("td",[t._v("去上一页")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("setPage")]),t._v(" "),n("td",[t._v("设置显示当前页码页")]),t._v(" "),n("td",[t._v("pageNumber")])]),t._v(" "),n("tr",[n("td",[t._v("updateSlidesBindEvent")]),t._v(" "),n("td",[t._v('如果动态更新slides，可以重新调用updateSlidesEvent 绑定事件,在异步函数赋值之后，重新绑定，绑定的方法：在nut-swiper上加一个ref="demo1",在函数中用this.$refs.demo1.updateSlidesBindEvent(pageSize) 重新绑定事件 ,pageSize 可以在更新bind后，重新设置pageSize')]),t._v(" "),n("td",[t._v("pageSize")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("slideChangeStart")]),t._v(" "),n("td",[t._v("改变页开始时回调函数")]),t._v(" "),n("td",[t._v("pageNumber,el")])]),t._v(" "),n("tr",[n("td",[t._v("slideChangeEnd")]),t._v(" "),n("td",[t._v("改变页时回调函数")]),t._v(" "),n("td",[t._v("pageNumber,el")])]),t._v(" "),n("tr",[n("td",[t._v("slideRevertStart")]),t._v(" "),n("td",[t._v("拖动没有改变页时开始时回调函数")]),t._v(" "),n("td",[t._v("pageNumber,el")])]),t._v(" "),n("tr",[n("td",[t._v("slideRevertEnd")]),t._v(" "),n("td",[t._v("拖动没有改变页结束时回调函数")]),t._v(" "),n("td",[t._v("pageNumber,el")])]),t._v(" "),n("tr",[n("td",[t._v("slideMove")]),t._v(" "),n("td",[t._v("拖动过程中的回调函数")]),t._v(" "),n("td",[t._v("offset,el")])])])])])}]}},1213:function(t,e,n){var d=n(1021);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);n(3)("fd3c20d8",d,!0,{})},864:function(t,e,n){function d(t){n(1213)}var v=n(1)(n(958),n(1120),d,null,null);t.exports=v.exports},958:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-swiper\n   :pagination-visible="true"\n   direction="horizontal"\n   :performanceMode="true"\n   ref="demo1"\n   @slideChangeEnd="slideChangeEnd">\n    <div v-for="item in dataItem" class="nut-swiper-silde"><span>page{{item.name}}</span></div>\n</nut-swiper>',demo2:'<nut-swiper\n    :pagination-visible="false"\n    :performanceMode="true"\n    direction="vertical">\n    <div class="nut-swiper-silde"><span>page 1</span></div>\n    <div class="nut-swiper-silde"><span>page 2</span></div>\n    <div class="nut-swiper-silde"><span>page 3</span></div>\n</nut-swiper>',demo3:'<nut-swiper\n    :pagination-visible="true"\n    @slideChangeEnd="slideChangeEnd"\n    @slideChangeStart="slideChangeStart"\n    direction="horizontal">\n    <div class="nut-swiper-silde"><span>page 1</span></div>\n    <div class="nut-swiper-silde"><span>page 2</span></div>\n    <div class="nut-swiper-silde"><span>page 3</span></div>\n</nut-swiper>',demo4:'<nut-swiper\n    :pagination-visible="true"\n    :loop="true"\n    direction="horizontal">\n    <div class="nut-swiper-silde"><span>page 1</span></div>\n    <div class="nut-swiper-silde"><span>page 2</span></div>\n    <div class="nut-swiper-silde"><span>page 3</span></div>\n</nut-swiper>',demo5:'<nut-swiper\n    :pagination-visible="false"\n    :autoPlay="1000"\n    direction="vertical">\n    <div class="nut-swiper-silde"><span>page 1</span></div>\n    <div class="nut-swiper-silde"><span>page 2</span></div>\n    <div class="nut-swiper-silde"><span>page 3</span></div>\n</nut-swiper>',demo6:'<nut-swiper\n    :pagination-visible="false"\n    direction="horizontal"\n    id="nutSwiperLazyLoad"\n    :lazyLoad="true"\n    lazyLoadingUrl="//static.360buyimg.com/exploit/mplus/2.1.81/css/i/loading.gif"\n    lazyLoaderrorUrl="">\n    <div class="nut-swiper-silde">\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t2029/269/1342378600/94347/c088416b/56581d53Ne97b6442.jpg" class="nut-swiper-lazyload"/>\n        <p>牙膏牙膏吃牙膏</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t5944/284/7637282290/291307/34ae9129/597ed721N4d9a0e73.jpg" class="nut-swiper-lazyload"/>\n        <p>纯正白砂糖，味甜</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t9604/129/1427755970/357543/ba77f0be/59e071fcN4a3e077d.jpg" class="nut-swiper-lazyload"/>\n        <p>妙洁 保鲜袋背心型食品袋中号200只装 可提携易打结</p>\n      </div>\n    </div>\n    <div class="nut-swiper-silde">\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t3826/185/3277282028/320781/8fbf1015/587c2fcaNc3741a59.jpg" class="nut-swiper-lazyload"/>\n        <p>全棉灭菌免换洗</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t6028/28/1573357626/422743/9b98f679/5934c6c9N03afe631.jpg" class="nut-swiper-lazyload"/>\n        <p>锁定厨房油污0</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t4792/130/2443359129/122816/5f47cbd2/58ff20ecN49be8a01.jpg" class="nut-swiper-lazyload"/>\n        <p>训练宝宝咀嚼力</p>\n      </div>\n    </div>\n    <div class="nut-swiper-silde">\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t13924/18/765396019/118800/71bda7ea/5a13878fN35292d9b.jpg" class="nut-swiper-lazyload"/>\n        <p>得力(deli)S01黑色0.5mm经典办公按动中性笔水性笔子弹头签字笔 12支/盒</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t4231/114/1373063995/311341/1feeaaad/58c1000cN5c448e8d.jpg" class="nut-swiper-lazyload"/>\n        <p>台湾蛋黄味糙米卷</p>\n      </div>\n      <div>\n        <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t2005/197/1846980340/247407/fcdbd278/56e0ceffN1d106bdb.jpg" class="nut-swiper-lazyload"/>\n        <p>柔韧耐用，保鲜安全</p>\n      </div>\n    </div>\n\n</nut-swiper>',demoEvent:'export default {\n    data(){\n        return{\n         dataItem:null,\n         move:1,\n        }\n    },\n    methods:{\n     slideChangeStart:function(currentPage,el,type){\n      console.log(type);\n\n     },\n     slideChangeEnd:function(currentPage,el){\n        console.log(currentPage);\n     },\n\n    },\n    mounted:function(){\n\n      setTimeout(()=>{\n        this.dataItem=[{"name":1},{"name":2},{"name":3},{"name":4},{"name":5},{"name":6}];\n        this.$refs.demo1.updateSlidesBindEvent(2);\n      },300);\n    }\n}'}},methods:{},mounted:function(){}}}});