(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-cancelPhone-cancelPhone"],{"02df":function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.img-box[data-v-01a36053]{width:%?334?%;height:%?232?%;margin-top:%?88?%}.words[data-v-01a36053]{font-family:PingFangSC-Regular;font-size:%?30?%;color:#8c8ea0;font-weight:400;width:%?566?%;height:%?46?%;text-align:center;padding-top:%?54?%;padding-bottom:%?48?%;margin:auto;line-height:%?46?%}uni-button[data-v-01a36053]{width:%?658?%;height:%?92?%;border:#ee1710 %?2?% solid;margin-top:%?48?%;font-family:SourceHanSansCN-Regular;font-size:%?32?%;color:#ee1710;letter-spacing:0;text-align:center;font-weight:400;background-color:#fff}',""]),e.exports=a},"03f1":function(e,a,t){"use strict";t.r(a);var r=t("1e41"),n=t("f5a2");for(var i in n)"default"!==i&&function(e){t.d(a,e,(function(){return n[e]}))}(i);t("e894");var o,l=t("f0c5"),c=Object(l["a"])(n["default"],r["b"],r["c"],!1,null,"01a36053",null,!1,r["a"],o);a["default"]=c.exports},"1e41":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return r}));var r={navBar:t("b560").default},n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-uni-view",[r("nav-bar",{attrs:{title:"注销成功",customLeftEvent:!0},on:{clickLeft:function(a){arguments[0]=a=e.$handleEvent(a),e.onPageGo.apply(void 0,arguments)}}}),r("v-uni-view",{staticClass:"flex-box flex-column justify-center align-center"},[r("v-uni-view",{staticClass:"img-box"},[r("v-uni-image",{attrs:{src:t("8016"),mode:""}})],1),r("v-uni-view",{staticClass:"words"},[r("v-uni-text",[e._v("注销成功")])],1),r("v-uni-button",{attrs:{type:"default"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onPageGo.apply(void 0,arguments)}}},[e._v("返回")])],1)],1)},i=[]},"330a":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.faceTimeTrack=a.replenish=a.activeDetailPages=a.pageObj=a.repayOverdueDetails=a.repaymentDetails=a.identityAuthentication=a.loadingStatic=a.faceFlags=a.queryValidMobile=a.querySubmitSuccess=a.queryWebview=a.querySignInCheck=void 0;var r={mobileNo:"mobileNo",appCertNo:"appCertNo",appCode:"appCode"};a.querySignInCheck=r;var n={src:"src",title:"title"};a.queryWebview=n;var i={pageType:{types:{email:"email",download:"download"},typeName:"pageType"},emailAddress:"emailAddress"};a.querySubmitSuccess=i;var o={query:{type:"type",fromType:"fromType",mtype:"mtype",clearDataType:"clearDataType"},clearDataType:{reChangeMobile:"reChangeMobile",back:"back"},type:{changeMobile:"changeMobile",resetTradePwd:"resetTradePwd"},fromTypeValue:{transfer:"transfer",forget1:"forget1",forget:"forget",collect:"collect",payForPwd:"payForPwd",cancelPhone:"cancelPhone",changeFail:"changeFail"}};a.queryValidMobile=o;var l={fromType:"fromType",fromTypeValue:{credit:"credit",loan:"loan",bindCard:"bindCard",changeMobile:"changeMobile",resetTradePassword:"resetTradePassword",ocr:"ocr",unbindCard:"unbindCard",login:"login"},pageFlagsName:"pageFlagsName",pageFlags:{credit:"credit",faceUploadLoading:"faceUploadLoading"},errorMsgFlags:{ocr:"ocr",three:"three"}};a.faceFlags=l;var c={pageFlags:"pageFlags",name:{otherSignIn:"otherSignIn",signIn:"signIn"}};a.pageObj=c;var d={face_time_h5:"face_time_h5"};a.faceTimeTrack=d;var s={urlName:"urlName",urlNameValue:{index:"index",my:"my"}};a.identityAuthentication=s;var u={process:"process",finish:"finish",fail:"fail",credit_fail:"credit_fail",location_get_fail:"location_get_fail",network_timeout:"network_timeout",identity_info_fail:"identity_info_fail",creditFailThree:"creditFailThree",creditNotFit:"creditNotFit",creditFail:"creditFail"};a.loadingStatic=u;var f={isOverdue:"isOverdue",repaymentDate:"repaymentDate"};a.repaymentDetails=f;var p={loanId:"loanId",TABINDEX:"TABINDEX",loanAmount:"loanAmount",loanDate:"loanDate"};a.repayOverdueDetails=p;var g={fromFlags:"fromFlags",fromValue:{replenishOldUser:"replenishOldUser",replenishNewUser:"replenishNewUser"}};a.replenish=g;var v={bannerIndex:"bannerIndex"};a.activeDetailPages=v},8016:function(e,a,t){e.exports=t.p+"static/img/ghsj_icon_zxcg@3x.0bae8096.png"},a34c:function(e,a,t){var r=t("02df");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("1d0cb3dc",r,!0,{sourceMap:!1,shadowMode:!1})},bccb:function(e,a,t){"use strict";var r=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("ade3")),i=r(t("0a34")),o=t("330a"),l=(t("26cb"),{data:function(){return{}},methods:{onPageGo:function(){var e;i.default.navigateTo("validMobile",(e={subcontract:!0,type:"changeMobile"},(0,n.default)(e,o.queryValidMobile.query.clearDataType,o.queryValidMobile.clearDataType.reChangeMobile),(0,n.default)(e,o.queryValidMobile.query.fromType,o.queryValidMobile.fromTypeValue.cancelPhone),e),!0)}}});a.default=l},e894:function(e,a,t){"use strict";var r=t("a34c"),n=t.n(r);n.a},f5a2:function(e,a,t){"use strict";t.r(a);var r=t("bccb"),n=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(a,e,(function(){return r[e]}))}(i);a["default"]=n.a}}]);