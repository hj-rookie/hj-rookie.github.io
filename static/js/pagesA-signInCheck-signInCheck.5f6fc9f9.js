(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-signInCheck-signInCheck"],{"0c46":function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-0c4ab162]{background-color:#fff}.container[data-v-0c4ab162]  .uni-navbar__content{border:0 none!important}.container .login-top-right[data-v-0c4ab162]{height:%?334?%;position:fixed;right:0;top:0;z-index:3333;width:%?316?%}.container[data-v-0c4ab162]  .input-pl-hd{font-family:SourceHanSansCN-Regular;font-size:%?36?%;color:#c2c2c2;letter-spacing:0;text-align:center;font-weight:400}.top[data-v-0c4ab162]{margin-left:%?46?%;margin-top:%?156?%;font-size:%?48?%;font-weight:500;color:#232220}.majority[data-v-0c4ab162]{margin-top:%?178?%;margin-left:%?46?%}.inputContainer[data-v-0c4ab162]{border-radius:%?53?%;background-color:#f9f9f8;margin-bottom:%?56?%;width:%?658?%;display:flex;flex-direction:row}.inputMobile[data-v-0c4ab162]{height:%?104?%;border-radius:%?53?%;background-color:#f9f9f8;text-align:center;font-size:%?36?%;color:#333;font-weight:400;flex:1;padding-left:%?100?%}.clear[data-v-0c4ab162]{height:%?60?%;width:%?90?%;align-self:center;display:flex;align-items:center;justify-content:center}.clearIcon[data-v-0c4ab162]{width:%?32?%;height:%?32?%}.verifyDisable[data-v-0c4ab162]{width:%?658?%;height:%?92?%;line-height:%?92?%;border-radius:%?53?%;font-size:%?32?%;margin:0;background-image:linear-gradient(90deg,#fb6e4d,#f83b2b)}.buttonOpacity[data-v-0c4ab162]{opacity:.5}.change-mobile[data-v-0c4ab162]{width:100%;display:flex;justify-content:center;position:fixed;bottom:%?100?%;color:#9d9ea6;font-size:%?26?%}',""]),e.exports=n},"330a":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.faceTimeTrack=n.replenish=n.activeDetailPages=n.pageObj=n.repayOverdueDetails=n.repaymentDetails=n.identityAuthentication=n.loadingStatic=n.faceFlags=n.queryValidMobile=n.querySubmitSuccess=n.queryWebview=n.querySignInCheck=void 0;var a={mobileNo:"mobileNo",appCertNo:"appCertNo",appCode:"appCode"};n.querySignInCheck=a;var i={src:"src",title:"title"};n.queryWebview=i;var o={pageType:{types:{email:"email",download:"download"},typeName:"pageType"},emailAddress:"emailAddress"};n.querySubmitSuccess=o;var c={query:{type:"type",fromType:"fromType",mtype:"mtype",clearDataType:"clearDataType"},clearDataType:{reChangeMobile:"reChangeMobile",back:"back"},type:{changeMobile:"changeMobile",resetTradePwd:"resetTradePwd"},fromTypeValue:{transfer:"transfer",forget1:"forget1",forget:"forget",collect:"collect",payForPwd:"payForPwd",cancelPhone:"cancelPhone",changeFail:"changeFail"}};n.queryValidMobile=c;var r={fromType:"fromType",fromTypeValue:{credit:"credit",loan:"loan",bindCard:"bindCard",changeMobile:"changeMobile",resetTradePassword:"resetTradePassword",ocr:"ocr",unbindCard:"unbindCard",login:"login"},pageFlagsName:"pageFlagsName",pageFlags:{credit:"credit",faceUploadLoading:"faceUploadLoading"},errorMsgFlags:{ocr:"ocr",three:"three"}};n.faceFlags=r;var s={pageFlags:"pageFlags",name:{otherSignIn:"otherSignIn",signIn:"signIn"}};n.pageObj=s;var l={face_time_h5:"face_time_h5"};n.faceTimeTrack=l;var p={urlName:"urlName",urlNameValue:{index:"index",my:"my"}};n.identityAuthentication=p;var g={process:"process",finish:"finish",fail:"fail",credit_fail:"credit_fail",location_get_fail:"location_get_fail",network_timeout:"network_timeout",identity_info_fail:"identity_info_fail",creditFailThree:"creditFailThree",creditNotFit:"creditNotFit",creditFail:"creditFail"};n.loadingStatic=g;var u={isOverdue:"isOverdue",repaymentDate:"repaymentDate"};n.repaymentDetails=u;var d={loanId:"loanId",TABINDEX:"TABINDEX",loanAmount:"loanAmount",loanDate:"loanDate"};n.repayOverdueDetails=d;var _={fromFlags:"fromFlags",fromValue:{replenishOldUser:"replenishOldUser",replenishNewUser:"replenishNewUser"}};n.replenish=_;var f={bannerIndex:"bannerIndex"};n.activeDetailPages=f},"4f85":function(e,n,t){"use strict";t.r(n);var a=t("ebd2"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},"57e6":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var a={navBar:t("b560").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"container"},[e.loginLogo?t("v-uni-image",{staticClass:"login-top-right",attrs:{src:e.loginLogo,mode:"aspectFit"}}):e._e(),t("nav-bar",{attrs:{customLeftEvent:!0,openAppLeft:e.openAppLeftNav},on:{clickLeft:function(n){arguments[0]=n=e.$handleEvent(n),e.clickLeft.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"top"},[t("v-uni-view",{staticClass:"hello"},[e._v("你好,")]),t("v-uni-view",{staticClass:"welcome",staticStyle:{"font-weight":"500"}},[e._v("欢迎登录"+e._s(e.appName))])],1),t("v-uni-view",{staticClass:"majority"},[t("v-uni-view",{staticClass:"inputContainer"},[t("v-uni-input",{staticClass:"inputMobile",attrs:{type:"number",maxlength:"11",value:e.inputData.inputValue,placeholder:"请输入手机号","placeholder-class":"input-pl-hd"},on:{input:function(n){arguments[0]=n=e.$handleEvent(n),e.inputChange.apply(void 0,arguments)},blur:function(n){arguments[0]=n=e.$handleEvent(n),e.mobileInputBlur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=e.$handleEvent(n),e.mobileInputFocus.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"clear",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.inputClear.apply(void 0,arguments)}}},[t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.inputData.inputValue,expression:"inputData.inputValue"}],staticClass:"clearIcon",attrs:{src:e.img_signInCheck.clear_icon}})],1)],1),t("v-uni-button",{class:["verifyDisable",e.verifyDisable?"buttonOpacity":""],attrs:{type:"warn",disabled:e.loading,loading:e.loading},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onGetVerify.apply(void 0,arguments)}}},[e._v("获取验证码")])],1),e.changeMobileBtn?t("v-uni-view",{staticClass:"change-mobile",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.phoneNumVerify.apply(void 0,arguments)}}},[e._v("更换手机号")]):e._e()],1)},o=[]},"7fa8":function(e,n,t){"use strict";t.r(n);var a=t("57e6"),i=t("4f85");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("b782");var c,r=t("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"0c4ab162",null,!1,a["a"],c);n["default"]=s.exports},8865:function(e,n,t){"use strict";var a=t("8e55"),i="".concat(a.PICTURE_URL,"close.png"),o=("".concat(a.PICTURE_URL,"close_loan.png"),"../../static/img/home/"),c="".concat(o,"home_gl_bg.png"),r="".concat(o,"home_icon_gl.png"),s="".concat(o,"home_icon_gg.png"),l="".concat(o,"home_icon_sbyy.png"),p="".concat(o,"home_img_fpxz.png"),g="".concat(o,"home_img_jkgl.png"),u="".concat(o,"home_img_xhed.png"),d="".concat(o,"home_shsb_icon_sbyy.png"),_="".concat(o,"home_tc_top_fxts.png"),f="".concat(o,"home_top_img_shsb.png"),h="".concat(o,"home_top_img_shz.png"),m="".concat(o,"home_img_hkgl.png"),b="".concat(o,"home_yyq.png"),v="".concat(o,"hk_about.png"),y="".concat(o,"jqqd_img_wkf.png"),k="".concat(o,"jml_tc_btn.png"),w="".concat(o,"jml_tc_img.png"),C="".concat(o,"tc_close.png"),j="".concat(o,"gjj_icon_dwmc.png"),I="".concat(o,"gjj_icon_sbjcs.png"),x="".concat(o,"jg_img_spz.png"),T="".concat(o,"process.png"),D="".concat(o,"fail.png"),S="".concat(o,"bd_icon_dz.png"),M="".concat(o,"bdyhk_icon_yz.png"),N="".concat(o,"card_camera.png"),P="".concat(a.PICTURE_URL,"backspace.png"),R="".concat(a.PICTURE_URL,"right-arrow.png"),E="".concat(a.PICTURE_URL,"bottom-arrow.png"),L="".concat(a.PICTURE_URL,"search.png"),A="".concat(a.PICTURE_URL,"select.png"),F=("".concat(a.PICTURE_URL,"wxz@2x.png"),"../../static/img/other/"),U="".concat(F,"jkgl_top_bg.png"),V="".concat(F,"jkgl_top_img_jb.png"),z="".concat(F,"loan_01.png"),q="".concat(F,"loan_02.png"),B="".concat(F,"jkgl_icon_sfrz.png"),$="".concat(F,"jkgl_icon_rlsb.png"),O="".concat(F,"jkgl_icon_fksh.png"),G="".concat(F,"jkgl_icon_jksq.png"),H="".concat(F,"jkgl_icon_jkdz.png"),K="".concat(F,"hkgl_top_bg.png"),Q="".concat(F,"top_img_pig.png"),W="".concat(F,"wyjk_fs2_img01.png"),J="".concat(F,"hkgl_bz_icon_q.png"),X="".concat(F,"wyjk_fs1_img02.png"),Y="".concat(F,"wyjk_fs1_img03.png"),Z="".concat(F,"wyjk_fs1_img04.png"),ee="../../static/img/tempimg/",ne="".concat(a.PICTURE_URL,"process.png"),te="".concat(a.PICTURE_URL,"fail.png"),ae={login_top_right:"".concat(ee,"login_top_right.png"),clear_icon:"".concat(ee,"clear_icon.png")},ie="../../static/img/none/",oe="".concat(ie,"tc_icon_mkf@2x.png");e.exports={fail:D,search:L,loan_01:z,loan_02:q,process:T,tc_close:C,home_yyq:b,hk_about:v,backspace:P,top_img_pig:Q,rightArrow:R,bd_icon_dz:S,result_fail:te,jg_img_spz:x,jml_tc_btn:k,jml_tc_img:w,home_gl_bg:c,jkgl_top_bg:U,hkgl_top_bg:K,card_camera:N,bottomArrow:E,mycd_select:A,record_auth:oe,jqqd_img_wkf:y,home_icon_gl:r,home_icon_gg:s,hkgl_bz_icon_q:J,bdyhk_icon_yz:M,gjj_icon_dwmc:j,home_img_hkgl:m,home_img_fpxz:p,home_img_jkgl:g,home_img_xhed:u,wyjk_fs2_img01:W,wyjk_fs1_img02:X,wyjk_fs1_img03:Y,result_process:ne,wyjk_fs1_img04:Z,jkgl_icon_sfrz:B,jkgl_icon_jksq:G,jkgl_icon_jkdz:H,jkgl_icon_rlsb:$,jkgl_icon_fksh:O,gjj_icon_sbjcs:I,home_icon_sbyy:l,jkgl_top_img_jb:V,home_top_img_shz:h,home_tc_top_fxts:_,home_top_img_shsb:f,home_shsb_icon_sbyy:d,img_signInCheck:ae,close:i}},"9cf5":function(e,n,t){var a=t("0c46");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("7191b7b2",a,!0,{sourceMap:!1,shadowMode:!1})},b782:function(e,n,t){"use strict";var a=t("9cf5"),i=t.n(a);i.a},ebd0:function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.appInterMixin=void 0;var i=a(t("0a34")),o=t("677a"),c={data:function(){return{sceneMap:o.scene,currScene:"",currSceneType:"",sceneInfo:"",fromPage:"",wxScene:""}},computed:{toIndexPage:function(){var e=this.currSceneType&&"1"===this.currSceneType;return e},fromMy:function(){return this.fromPage===o.sceneQuery.fromMap.my},openAppLeftNav:function(){var e=i.default.wxSceneMap.appToMiniProgram,n=!this.toIndexPage&&this.wxScene==e,t=n&&!this.fromMy;return t}},onLoad:function(e){e&&(this.fromPage=e[o.sceneQuery.fromPage]);var n=uni.getStorageSync(this.sceneMap.sceneFlagKey);n&&(this.currScene=n);var t=uni.getStorageSync(this.sceneMap.sceneDataKey);t&&(this.currSceneType=t.sceneType,this.sceneInfo=t)},onShow:function(){var e=i.default.getCurrWxScene();this.wxScene=e},methods:{launchAppError:function(e){},launchappSuccess:function(){},updateLocalSceneData:function(){},navigateBySceneType:function(e){"1"===e?uni.switchTab({url:"/pages/index/index"}):"2"===e?uni.reLaunch({url:"/pagesB/loanRecord/loanRecord"}):"3"===e&&uni.reLaunch({url:"/pagesB/repaymentRecord/repaymentRecord"})},clickLeft:function(){"1069"!=this.wxScene?this.currScene===this.sceneMap.value.EQGO_H5?uni.reLaunch({url:"/pages/index/index"}):i.default.navigateBackMPH5():this.toIndexPage||this.fromMy?window.history.back():this.onBackToApp()},onBackToApp:function(){for(var e in o.scene)"value"!==e&&uni.removeStorageSync(o.scene[e])}}};n.appInterMixin=c},ebd2:function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("ade3"));t("96cf");var o=a(t("1da1")),c=a(t("5530")),r=a(t("0a34")),s=t("26cb"),l=t("4d46"),p=t("8865"),g=a(t("8e55")),u=t("330a"),d=t("ebd0"),_=(0,s.createNamespacedHelpers)("signIn"),f=_.mapActions,h=_.mapMutations,m=(0,s.createNamespacedHelpers)("register"),b=(0,s.createNamespacedHelpers)("home"),v={mixins:[d.appInterMixin],data:function(){return{img_signInCheck:p.img_signInCheck,inputData:{inputValue:""},bank_mark:g.default.BANK_MP,loading:!1,changeMobileBtn:!0}},computed:(0,c.default)((0,c.default)({},b.mapState(["configData"])),{},{appName:function(){return this.configData.productName||""},verifyDisable:function(){return this.inputData.inputValue&&11!==this.inputData.inputValue.length},loginLogo:function(){return this.configData.loginLogo}}),onLoad:function(e){e&&(this.inputData.inputValue=e[u.querySignInCheck.mobileNo]),this.sceneInfo&&(this.sceneInfo.appCertNo&&(this.inputData.appCertNo=this.sceneInfo.appCertNo),this.sceneInfo.appCode&&(this.inputData.appCode=this.sceneInfo.appCode))},methods:(0,c.default)((0,c.default)((0,c.default)((0,c.default)({},f(["checkMobile"])),h(["updateSignInData"])),m.mapMutations(["updateRegisterData"])),{},{mobileInputBlur:function(){var e=this;setTimeout((function(){e.changeMobileBtn=!0}),500),this.$handleTrackBlur("oneclick_login_otherphone_intime")},mobileInputFocus:function(){this.changeMobileBtn=!1,this.$handleTrackFocus("oneclick_login_otherphone_intime")},inputChange:function(e){var n=e.detail.value;this.inputData.inputValue=n,this.$handleTrackChange(e,this.$trackParams.login.oneclick_login_otherphone_incode)},inputClear:function(){e.log("asdfasdfas"),this.$set(this.inputData,"inputValue","")},onGetVerify:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var t,a,o,c,s,l,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.loading){n.next=2;break}return n.abrupt("return");case 2:if(e.loading=!0,t=e.inputData,a=t.inputValue,e.checkReqData()){n.next=8;break}return e.loading=!1,n.abrupt("return");case 8:return o={mobileNo:t.inputValue},t.appCertNo&&(o.appCertNo=t.appCertNo),t.appCode&&(o.appCode=t.appCode),n.next=13,e.checkMobile(o);case 13:c=n.sent,e.loading=!1,s=e.$trackParams.login.mobile_isrigister,c&&"1000"===c.code&&(l=c.data,p=l.regFlag,l.pwdFlag,"1"===p?(e.$track.setData((0,i.default)({},s.name,s.rigister)),e.updateSignInData({mobileNumber:a}),r.default.navigateTo(e.PAGE_NAMES.otherSignIn.path,{subcontract:!0})):(e.$track.setData((0,i.default)({},s.name,s.unRigister)),e.updateRegisterData({mobileNumber:a}),r.default.navigateTo(e.PAGE_NAMES.otherRegister.path,{subcontract:!0})));case 17:case"end":return n.stop()}}),n)})))()},checkReqData:function(){return this.inputData.inputValue?!!(0,l.isMobile)(this.inputData.inputValue)||(r.default.toast("您输入的手机号码有误"),!1):(r.default.toast("请输入手机号"),!1)},phoneNumVerify:function(){r.default.navigateTo(this.PAGE_NAMES.phoneNumberVerify.path,{subcontract:"A"})}})};n.default=v}).call(this,t("5a52")["default"])}}]);