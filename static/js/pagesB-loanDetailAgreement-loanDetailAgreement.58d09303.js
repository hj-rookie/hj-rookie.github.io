(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-loanDetailAgreement-loanDetailAgreement"],{2800:function(e,t,n){"use strict";n.r(t);var a=n("beab"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"357e":function(e,t,n){"use strict";n.r(t);var a=n("9c39"),r=n("2800");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("e115");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"5961baf0",null,!1,a["a"],o);t["default"]=s.exports},"9c39":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={navBar:n("b560").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("nav-bar",{attrs:{fontSize:e.titleFontSize,title:e.name}}),e.loading?n("v-uni-view",{staticClass:"loading-wrap"},[n("v-uni-view",{staticClass:"loading-box"},[n("v-uni-view",{staticClass:"loading icon-timer"})],1)],1):n("v-uni-view",{staticClass:"agreement"},[e.agContent?n("v-uni-rich-text",{staticClass:"ag-content-node",attrs:{nodes:e.agContent}}):n("v-uni-text",{staticClass:"fs-32"},[e._v("协议获取失败")])],1)],1)},i=[]},bdb6:function(e,t,n){var a=n("fbf9");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("5909175a",a,!0,{sourceMap:!1,shadowMode:!1})},beab:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("5530"));n("96cf");var i,o=a(n("1da1")),u=a(n("eed6")),s=n("2771"),c={data:function(){return{agContent:"",loading:!0,name:""}},computed:{userInfo:function(){return i||(i=uni.getStorageSync("userInfo")),i},titleFontSize:function(){return this.name&&this.name.length>12?"26rpx":"34rpx"}},onLoad:function(e){var t=e.requestType;e.name&&(this.name=e.name),"A001"===t?this.getAgContentTouserAgreeQuery({type:e.type,loanId:e.curOrderId}):this.getAgContent({type:e.type,loanId:e.curOrderId})},methods:{getAgContent:function(e){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=t.userInfo,e.mobileNo=a.mobile,n.next=5,u.default.post(s.agreementApi,{data:(0,r.default)((0,r.default)({},e),{},{busType:"0"})});case 5:i=n.sent,i&&i.data&&(t.agContent=i.data.content||0),n.next=11;break;case 9:n.prev=9,n.t0=n["catch"](0);case 11:t.loading=!1;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},getAgContentTouserAgreeQuery:function(e){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=t.userInfo,e.mobileNo=a.mobile,n.next=5,u.default.post("agreeService/userAgreeQuery",{data:e});case 5:r=n.sent,r&&r.data&&(r.data.file?t.agContent=r.data.file||0:t.agContent=r.data.contentFile||0),n.next=11;break;case 9:n.prev=9,n.t0=n["catch"](0);case 11:t.loading=!1;case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}}};t.default=c},e115:function(e,t,n){"use strict";var a=n("bdb6"),r=n.n(a);r.a},fbf9:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".container[data-v-5961baf0]{background-color:#fff}.agreement[data-v-5961baf0]{padding:%?10?% %?35?%;line-height:1.6}.title[data-v-5961baf0]{margin:%?40?% 0 %?10?%}.content[data-v-5961baf0]{color:#4d4d4d}",""]),e.exports=t}}]);