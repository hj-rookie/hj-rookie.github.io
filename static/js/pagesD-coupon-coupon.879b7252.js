(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesD-coupon-coupon"],{"0bea":function(t,a,e){"use strict";var n=e("48e1"),i=e.n(n);i.a},1062:function(t,a,e){"use strict";var n=e("4ea4");e("7db0"),e("d81d"),e("d3b7"),e("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),o=n(e("5530")),r=e("26cb"),s=n(e("0a34")),u=n(e("7d4c")),d=e("8e55"),c=n(e("b48b")),l=(0,r.createNamespacedHelpers)("loan"),p=l.mapState,f=(l.mapGetters,l.mapActions),v=(l.mapMutations,{data:function(){return{tabList:[{status:"1",type:"used",text:"已使用"},{status:"2",type:"hasExpired",text:"已失效"}],pageType:{status:"1",type:"used"},PICTURE_URL:d.PICTURE_URL,scrollHeight:null}},components:{noData:c.default},filters:{formatFloatNumber:function(t){var a=(100*t/10).toFixed(4);return 1*a}},computed:(0,o.default)((0,o.default)({},p(["couponData"])),{},{couponList:function(){var t=[];return u.default.find(this.couponData.discountList,(function(a){"0"!==a.disStatus&&t.push(a)})),t},couponDisStatus:function(){var t=[];return u.default.find(this.couponData.discountList,(function(a){"0"!==a.disStatus&&t.push(a.disStatus)})),t}}),onLoad:function(){var t=uni.getSystemInfoSync();this.scrollHeight=t.windowHeight-t.statusBarHeight-56-44-10},onShow:function(){this.getCouponData()},methods:(0,o.default)((0,o.default)({},f(["userGetCoupon"])),{},{getCouponData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.userGetCoupon();case 3:e=a.sent,n=e.data,s.default.log(n),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})))()},onChangeUse:function(t){var a=this,e=this.tabList,n=t.currentTarget.dataset.status.toString();u.default.map(e,(function(t){t.status===n&&(a.pageType.type=t.type,a.pageType.status=t.status)}))}})});a.default=v},2845:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.mt-22[data-v-8aa7bdf2]{margin-top:%?22?%}.prl-34[data-v-8aa7bdf2]{padding:0 %?40?%}.prl-36[data-v-8aa7bdf2]{padding:0 %?36?%}.border-dash[data-v-8aa7bdf2]{width:92%;border-top:%?2?% dashed #e0e1e6;margin-left:%?28?%}.nav[data-v-8aa7bdf2]{background-color:#fff}.nav .nav-item[data-v-8aa7bdf2]{margin-left:%?60?%;height:%?112?%;text-align:center;font-size:%?30?%;color:#999;line-height:%?112?%;letter-spacing:%?2.84?%}.nav-item-ac[data-v-8aa7bdf2]{color:#f05146!important;position:relative}.nav-item-ac[data-v-8aa7bdf2]::after{content:"";width:%?40?%;background-color:#f05146;position:absolute;bottom:0;left:25%;height:%?6?%;border-radius:%?3?%;margin-bottom:%?6?%}.coupon-item[data-v-8aa7bdf2]{height:%?234?%;margin:%?40?%;background-color:#fff;box-shadow:0 1px 10px 0 hsla(0,9.8%,90%,.5);border-radius:%?16?%}.coupon-item .img[data-v-8aa7bdf2]{display:none}.coupon-item .title[data-v-8aa7bdf2]{color:#000}.coupon-item .type-name[data-v-8aa7bdf2]{background:linear-gradient(90deg,#fc514b,#f98479);-webkit-background-clip:text;background-clip:text;letter-spacing:%?2.84?%;color:transparent;font-size:%?68?%;margin-top:%?16?%;font-weight:700}.coupon-item.used .type-name[data-v-8aa7bdf2],\r\n.coupon-item.hasExpired .type-name[data-v-8aa7bdf2],\r\n.coupon-item.used .title[data-v-8aa7bdf2],\r\n.coupon-item.hasExpired .title[data-v-8aa7bdf2]{color:#c0c3c9}.coupon-item.used .type-name[data-v-8aa7bdf2],\r\n.coupon-item.hasExpired .type-name[data-v-8aa7bdf2]{background:linear-gradient(90deg,#dadadc,#ecedef);background-clip:text;-webkit-background-clip:text;color:transparent}.coupon-item.used uni-image.used-img[data-v-8aa7bdf2],\r\n.coupon-item.hasExpired uni-image.hasExpired-img[data-v-8aa7bdf2]{display:inline-block}.used[data-v-8aa7bdf2],\r\n.hasExpired[data-v-8aa7bdf2]{background:#fff;opacity:.8;z-index:10}.coupon-item .coupon-item-top[data-v-8aa7bdf2]{height:%?156?%;padding-top:%?28?%}.coupon-item-top .coupon-item-detail[data-v-8aa7bdf2]{margin-top:%?19?%}.coupon-item-period[data-v-8aa7bdf2]{height:%?76?%;position:relative}.coupon-item-period.used[data-v-8aa7bdf2],\r\n.coupon-item-period.hasExpired[data-v-8aa7bdf2]{color:#c1c3c9}.coupon-item-period .radius[data-v-8aa7bdf2]{width:%?13?%;height:%?24?%;background-color:#f5f5f5;position:absolute;top:%?-12?%}.radius-lt[data-v-8aa7bdf2]{border-radius:0 %?12?% %?12?% 0;border-right:%?1?% solid #e8e8e8;left:%?-1?%}.radius-rt[data-v-8aa7bdf2]{border-radius:%?12?% 0 0 %?12?%;border-left:%?1?% solid #e8e8e8;right:%?-1?%}.coupon-item-period .already[data-v-8aa7bdf2]{z-index:1;position:absolute;bottom:%?20?%;right:%?47?%;width:%?120?%;height:%?120?%}.loading-all[data-v-8aa7bdf2]{text-align:center;color:#d8d8d8;margin-top:%?12?%}.notused-text[data-v-8aa7bdf2]{color:#9d9ea6;margin:%?40?% 0 %?28?%}.card-voucher-used-text[data-v-8aa7bdf2]{position:fixed;bottom:%?92?%;width:100%;text-align:center;font-size:%?26?%;color:#999}',""]),t.exports=a},"46c6":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.empty-container[data-v-d030de94]{padding-top:%?140?%;text-align:center}.empty-container uni-view[data-v-d030de94]{margin-top:%?26?%;color:#9fa3ad}',""]),t.exports=a},"48e1":function(t,a,e){var n=e("46c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("83131202",n,!0,{sourceMap:!1,shadowMode:!1})},"4e45":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={navBar:e("b560").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container",staticStyle:{"padding-bottom":"36rpx"}},[e("nav-bar",{attrs:{title:"优惠券"}}),e("v-uni-view",{staticClass:"nav flex-box fs-32"},t._l(t.tabList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"nav-item",class:t.pageType.status===a.status?"nav-item-ac":"",attrs:{"data-status":n+1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onChangeUse.apply(void 0,arguments)}}},[t._v(t._s(a.text))])})),1),t.couponData.discountList&&t.couponData.discountList.length?e("v-uni-view",{style:{"overflow-y":"scroll",width:"100%",height:t.scrollHeight+"px"}},[!t.couponList||!t.couponList.length||t.couponDisStatus.indexOf(t.pageType.status)<0?[e("no-data",{attrs:{srcImg:t.PICTURE_URL+"coupon-img.png",describe:"暂无优惠券",width:"508rpx",height:"312rpx"}})]:t._l(t.couponList,(function(a,n){return a.disStatus===t.pageType.status?e("v-uni-view",{key:n,staticClass:"coupon-item",class:t.pageType.type},[e("v-uni-view",{staticClass:"coupon-item-top prl-36 flex-box justify-between"},[e("v-uni-view",[e("v-uni-view",{staticClass:"fs-32 title"},[t._v(t._s(a.discountName))]),e("v-uni-view",{staticClass:"coupon-item-detail flex-box justify-between"},[e("v-uni-view",{staticClass:"flex-box flex-column fs-24",staticStyle:{color:"#C1C3C9"}},[e("v-uni-text",[t._v("有效期："+t._s(a.effectDate)+" - "+t._s(a.expiresDate))]),"02"===a.discountType?e("v-uni-text",[t._v("免息范围：前"+t._s(a.discountTerms)+"期")]):t._e()],1)],1)],1),"01"===a.discountType?e("v-uni-view",{staticClass:"type-name"},[t._v(t._s(a.discountDays)+"天")]):"02"===a.discountType?e("v-uni-view",{staticClass:"type-name",style:{fontSize:a.discountRate&&(1*(10*a.discountRate).toFixed(4)+"").length>=4?"58rpx":"68rpx"}},[t._v(t._s(t._f("formatFloatNumber")(a.discountRate))+"折")]):e("v-uni-view",{staticClass:"fs-40 type-name"})],1),e("v-uni-view",{staticClass:"border-dash"}),e("v-uni-view",{staticClass:"coupon-item-period flex-box align-center prl-34"},[a.minAmount&&"0.00"!==a.minAmount&&a.maxAmount&&"0.00"!==a.maxAmount?e("v-uni-view",{staticClass:"fs-24",staticStyle:{color:"#C1C3C9"}},[t._v("使用门槛：借款\n\t\t\t\t\t\t"+t._s(t._f("formatMoney")(a.minAmount))+"-"+t._s(t._f("formatMoney")(a.maxAmount))+"元，"),a.allowLoanTenor?e("v-uni-text",[t._v("分"+t._s(a.allowLoanTenor)+"期")]):e("v-uni-text",[t._v("全部期数可用")])],1):a.minAmount&&"0.00"!==a.minAmount?e("v-uni-view",{staticClass:"fs-24",staticStyle:{color:"#C1C3C9"}},[t._v("使用门槛：借款\n\t\t\t\t\t\t"+t._s(t._f("formatMoney")(a.minAmount))+"元以上，"),a.allowLoanTenor?e("v-uni-text",[t._v("分"+t._s(a.allowLoanTenor)+"期")]):e("v-uni-text",[t._v("全部期数可用")])],1):a.maxAmount&&"0.00"!==a.maxAmount?e("v-uni-view",{staticClass:"fs-24",staticStyle:{color:"#C1C3C9"}},[t._v("使用门槛：借款\n\t\t\t\t\t\t"+t._s(t._f("formatMoney")(a.maxAmount))+"元以下，"),a.allowLoanTenor?e("v-uni-text",[t._v("分"+t._s(a.allowLoanTenor)+"期")]):e("v-uni-text",[t._v("全部期数可用")])],1):"0.00"!==a.minAmount&&a.minAmount||"0.00"!==a.maxAmount&&a.maxAmount||!a.allowLoanTenor?e("v-uni-view",{staticClass:"fs-24",staticStyle:{color:"#C1C3C9"}},[t._v("无门槛优惠劵")]):e("v-uni-view",{staticClass:"fs-24",staticStyle:{color:"#C1C3C9"}},[t._v("使用门槛：不限制借款金额，"),a.allowLoanTenor?e("v-uni-text",[t._v("分"+t._s(a.allowLoanTenor)+"期")]):e("v-uni-text",[t._v("全部期数可用")])],1),e("v-uni-view",{staticClass:"radius radius-lt"}),e("v-uni-view",{staticClass:"radius radius-rt"}),e("v-uni-view",{staticClass:"already"},[e("v-uni-image",{staticClass:"img used-img",attrs:{src:t.PICTURE_URL+"alr-type-1.png"}}),e("v-uni-image",{staticClass:"img hasExpired-img",attrs:{src:t.PICTURE_URL+"alr-type-2.png"}})],1)],1)],1):t._e()}))],2):[e("no-data",{attrs:{srcImg:t.PICTURE_URL+"coupon-img.png",describe:"暂无优惠券",width:"508rpx",height:"312rpx"}})]],2)},o=[]},"62ce":function(t,a,e){"use strict";e.r(a);var n=e("1062"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},9037:function(t,a,e){"use strict";e.r(a);var n=e("d4df"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"9a16":function(t,a,e){"use strict";var n=e("c2d2"),i=e.n(n);i.a},a24c:function(t,a,e){"use strict";e.r(a);var n=e("4e45"),i=e("62ce");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("9a16");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"8aa7bdf2",null,!1,n["a"],r);a["default"]=u.exports},b48b:function(t,a,e){"use strict";e.r(a);var n=e("bb08"),i=e("9037");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("0bea");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"d030de94",null,!1,n["a"],r);a["default"]=u.exports},bb08:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"empty-container"},[e("v-uni-image",{style:{height:t.height,width:t.width},attrs:{src:t.srcImg}}),e("v-uni-view",{staticClass:"fs-28"},[t._v(t._s(t.describe))])],1)},o=[]},c2d2:function(t,a,e){var n=e("2845");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("22295d35",n,!0,{sourceMap:!1,shadowMode:!1})},d4df:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},props:{srcImg:{type:String,default:""},describe:{type:String,default:""},width:{type:String,default:"300rpx"},height:{type:String,default:"200rpx"}},methods:{}};a.default=n}}]);