(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-passwordReset-passwordReset"],{1467:function(e,a,t){"use strict";var n=t("9806"),i=t.n(n);i.a},"2f69":function(e,a,t){"use strict";t.r(a);var n=t("fdc3"),i=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,(function(){return n[e]}))}(r);a["default"]=i.a},"330a":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.faceTimeTrack=a.replenish=a.activeDetailPages=a.pageObj=a.repayOverdueDetails=a.repaymentDetails=a.identityAuthentication=a.loadingStatic=a.faceFlags=a.queryValidMobile=a.querySubmitSuccess=a.queryWebview=a.querySignInCheck=void 0;var n={mobileNo:"mobileNo",appCertNo:"appCertNo",appCode:"appCode"};a.querySignInCheck=n;var i={src:"src",title:"title"};a.queryWebview=i;var r={pageType:{types:{email:"email",download:"download"},typeName:"pageType"},emailAddress:"emailAddress"};a.querySubmitSuccess=r;var o={query:{type:"type",fromType:"fromType",mtype:"mtype",clearDataType:"clearDataType"},clearDataType:{reChangeMobile:"reChangeMobile",back:"back"},type:{changeMobile:"changeMobile",resetTradePwd:"resetTradePwd"},fromTypeValue:{transfer:"transfer",forget1:"forget1",forget:"forget",collect:"collect",payForPwd:"payForPwd",cancelPhone:"cancelPhone",changeFail:"changeFail"}};a.queryValidMobile=o;var s={fromType:"fromType",fromTypeValue:{credit:"credit",loan:"loan",bindCard:"bindCard",changeMobile:"changeMobile",resetTradePassword:"resetTradePassword",ocr:"ocr",unbindCard:"unbindCard",login:"login"},pageFlagsName:"pageFlagsName",pageFlags:{credit:"credit",faceUploadLoading:"faceUploadLoading"},errorMsgFlags:{ocr:"ocr",three:"three"}};a.faceFlags=s;var d={pageFlags:"pageFlags",name:{otherSignIn:"otherSignIn",signIn:"signIn"}};a.pageObj=d;var l={face_time_h5:"face_time_h5"};a.faceTimeTrack=l;var u={urlName:"urlName",urlNameValue:{index:"index",my:"my"}};a.identityAuthentication=u;var c={process:"process",finish:"finish",fail:"fail",credit_fail:"credit_fail",location_get_fail:"location_get_fail",network_timeout:"network_timeout",identity_info_fail:"identity_info_fail",creditFailThree:"creditFailThree",creditNotFit:"creditNotFit",creditFail:"creditFail"};a.loadingStatic=c;var p={isOverdue:"isOverdue",repaymentDate:"repaymentDate"};a.repaymentDetails=p;var f={loanId:"loanId",TABINDEX:"TABINDEX",loanAmount:"loanAmount",loanDate:"loanDate"};a.repayOverdueDetails=f;var h={fromFlags:"fromFlags",fromValue:{replenishOldUser:"replenishOldUser",replenishNewUser:"replenishNewUser"}};a.replenish=h;var v={bannerIndex:"bannerIndex"};a.activeDetailPages=v},"5d26":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return n}));var n={navBar:t("b560").default},i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"container"},[t("nav-bar",{attrs:{customLeftEvent:!0,title:"设置新交易密码"},on:{clickLeft:function(a){arguments[0]=a=e.$handleEvent(a),e.handlePageBack.apply(void 0,arguments)}}}),t("v-uni-view",{staticStyle:{"margin-bottom":"20upx"}}),e.pageLoding?t("v-uni-view",[e.KBSWITCH&&"beinongshang"===e.bank_mark?t("v-uni-view",[t("v-uni-view",{staticClass:"form-control lr"},[t("v-uni-view",{staticClass:"form-item",staticStyle:{"border-bottom":"1px solid #ececec"}},[t("v-uni-view",{staticClass:"label"},[e._v("设置交易密码")]),t("v-uni-view",{staticClass:"value",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.bnsShowKeyboard("pwd")}}},[t("v-uni-view",{class:["input-title",e.pwdInfo.hasValue||e.pwdInfo.hasCursor?"hideView":""]},[e._v("输入6位交易密码")]),t("v-uni-view",{class:["key-input-board",e.pwdInfo.hasValue||e.pwdInfo.hasCursor?"showView":""]},[t("v-uni-view",{staticClass:"input-text"},e._l(e.pwdInfo.inputVal,(function(e,a){return t("v-uni-text",{key:a,staticClass:"text-rec"})})),1),t("v-uni-view",{class:["key-input",e.pwdInfo.hasCursor?"showView":"hideView"],staticStyle:{right:"0px"}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"form-control lr"},[t("v-uni-view",{staticClass:"form-item"},[t("v-uni-view",{staticClass:"label"},[e._v("重复交易密码")]),t("v-uni-view",{staticClass:"value",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.bnsShowKeyboard("repwd")}}},[t("v-uni-view",{class:["input-title",e.repwdInfo.hasValue||e.repwdInfo.hasCursor?"hideView":""]},[e._v("输入6位交易密码")]),t("v-uni-view",{class:["key-input-board",e.repwdInfo.hasValue||e.repwdInfo.hasCursor?"showView":""]},[t("v-uni-view",{staticClass:"input-text"},e._l(e.repwdInfo.inputVal,(function(e,a){return t("v-uni-text",{key:a,staticClass:"text-rec"})})),1),t("v-uni-view",{class:["key-input",e.repwdInfo.hasCursor?"showView":"hideView"],staticStyle:{right:"0px"}})],1)],1)],1)],1),t("bns-safekeyboard",{ref:"bnskeyboard",on:{confirmNumber:function(a){arguments[0]=a=e.$handleEvent(a),e.confirmNumber.apply(void 0,arguments)},showKeyboard:function(a){arguments[0]=a=e.$handleEvent(a),e.showKeyboard.apply(void 0,arguments)},onInput:function(a){arguments[0]=a=e.$handleEvent(a),e.onInput.apply(void 0,arguments)},onInputSencond:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputSencond.apply(void 0,arguments)},show_bnsKeyboard_sencond:function(a){arguments[0]=a=e.$handleEvent(a),e.show_bnsKeyboard_sencond.apply(void 0,arguments)},show_bnsKeyboard:function(a){arguments[0]=a=e.$handleEvent(a),e.show_bnsKeyboard.apply(void 0,arguments)},getEncryptParam:function(a){arguments[0]=a=e.$handleEvent(a),e.getEncryptParam.apply(void 0,arguments)}}})],1):e.KBSWITCH&&"chengde"===e.bank_mark?t("v-uni-view",[t("safe-board",{ref:"skb1",attrs:{type:"rest",id:"skb1",keyboardType:"number",label:e.label,keyboardNumber:"2",placeholder:"6位数字密码组合"},on:{onDone:function(a){arguments[0]=a=e.$handleEvent(a),e.onDone.apply(void 0,arguments)},show:function(a){arguments[0]=a=e.$handleEvent(a),e.show.apply(void 0,arguments)},hide:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputBlur.apply(void 0,arguments)}}})],1):"taian"===e.bank_mark?t("v-uni-view",{staticClass:"form-control lr"},[t("v-uni-view",{staticClass:"form-item"},[t("v-uni-view",{staticClass:"label"},[e._v(e._s(e.label(1)))]),t("v-uni-view",{staticClass:"value"},[t("v-uni-view",{staticClass:"flex-box align-center justify-end"},[t("v-uni-view",["taian"===e.bank_mark?t("taian-safekeyboard",{ref:"taiankeyboardRef",attrs:{sktype:"1",index:1},on:{close:function(a){arguments[0]=a=e.$handleEvent(a),e.onClose.apply(void 0,arguments)},change:function(a){arguments[0]=a=e.$handleEvent(a),e.onPwChange.apply(void 0,arguments)}}}):e._e(),t("v-uni-view",{staticClass:"input-item pwd-input flex-box align-center input-class"},[t("v-uni-input",{attrs:{disabled:!0,password:!0,type:"text",maxlength:"6",value:e.p1,placeholder:"输入6位交易密码","placeholder-class":"input-placeholder"},on:{blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputBlur.apply(void 0,arguments)},focus:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputFocus.apply(void 0,arguments)},input:function(a){arguments[0]=a=e.$handleEvent(a),e.handleInputChange(a,e.item)},click:function(a){arguments[0]=a=e.$handleEvent(a),e.taianShowKeyboard.apply(void 0,arguments)}}})],1)],1)],1)],1)],1),t("v-uni-view",{staticClass:"form-item"},[t("v-uni-view",{staticClass:"label"},[e._v(e._s(e.label(2)))]),t("v-uni-view",{staticClass:"value"},[t("v-uni-view",{staticClass:"flex-box align-center justify-end"},[t("v-uni-view",["taian"===e.bank_mark?t("taian-safekeyboard",{ref:"taiankeyboard",attrs:{sktype:"1",index:2},on:{close:function(a){arguments[0]=a=e.$handleEvent(a),e.onClose.apply(void 0,arguments)},change:function(a){arguments[0]=a=e.$handleEvent(a),e.onPwChange.apply(void 0,arguments)}}}):e._e(),t("v-uni-view",{staticClass:"input-item pwd-input flex-box align-center input-class"},[t("v-uni-input",{attrs:{disabled:!0,password:!0,type:"text",maxlength:"6",value:e.p2,placeholder:"输入6位交易密码","placeholder-class":"input-placeholder"},on:{blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputBlur.apply(void 0,arguments)},focus:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputFocus.apply(void 0,arguments)},input:function(a){arguments[0]=a=e.$handleEvent(a),e.handleInputChange(a,e.item)},click:function(a){arguments[0]=a=e.$handleEvent(a),e.taianShowKeyboard1.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)],1):t("v-uni-view",{staticClass:"form-control lr",staticStyle:{"margin-top":"80upx"}},e._l(e.inputList,(function(a){return t("v-uni-view",{key:a,staticClass:"form-item"},[t("v-uni-view",{staticClass:"label"},[e._v(e._s(e.label(a)))]),t("v-uni-view",{staticClass:"value"},[t("v-uni-view",{staticClass:"flex-box align-center justify-end"},[t("v-uni-view",[t("v-uni-view",{staticClass:"input-item pwd-input flex-box align-center input-class"},[t("v-uni-input",{attrs:{password:!0,type:"number",maxlength:"6",value:e.password(a),placeholder:"输入6位交易密码","placeholder-class":"input-placeholder"},on:{blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputBlur.apply(void 0,arguments)},focus:function(a){arguments[0]=a=e.$handleEvent(a),e.onInputFocus.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleInputChange(t,a)}}})],1)],1)],1)],1)],1)})),1),t("v-uni-view",{staticClass:"submit-btn-wrap page-space"},[t("v-uni-button",{staticClass:"button block-button",class:[e.unClickable?"":"button-can"],attrs:{loading:e.loading,disabled:e.unClickable},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleSubmit.apply(void 0,arguments)}}},[e._v("完成")])],1)],1):e._e()],1)},r=[]},9806:function(e,a,t){var n=t("b5892");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("5a2ae2b5",n,!0,{sourceMap:!1,shadowMode:!1})},b5892:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,".key-input-box[data-v-1763270a]{\r\n\t/* border: 1px solid #ddd; */border-radius:5px;position:relative;height:50px}.input-title[data-v-1763270a]{padding-left:%?14?%;font-size:14px;color:#b2b2b2;line-height:50px;height:50px}.key-form-line[data-v-1763270a]{\r\n\t/* margin: 30rpx; */}.key-input-board[data-v-1763270a]{display:none;position:relative;border-radius:5px;background:#fff;height:50px}.key-input[data-v-1763270a]{position:absolute;\r\n\t/* left: 10px; */top:15px;width:1px;height:20px;background:#000;animation:inputfocus-data-v-1763270a 1s infinite;-webkit-animation:inputfocus-data-v-1763270a 1s infinite}.input-text[data-v-1763270a]{margin-left:10px;height:50px;line-height:50px}.input-text .text-rec[data-v-1763270a]{display:inline-block;margin:3px;width:6px;height:6px;border-radius:86px;background:#000}.showView[data-v-1763270a]{display:block}.hideView[data-v-1763270a]{display:none}@-webkit-keyframes inputfocus-data-v-1763270a{0%{opacity:1}30%{opacity:1}70%{opacity:0}100%{opacity:0}}@keyframes inputfocus-data-v-1763270a{0%{opacity:1}30%{opacity:1}70%{opacity:0}100%{opacity:0}}.trade-top[data-v-1763270a]{height:%?480?%}.submit-btn-wrap[data-v-1763270a]{margin-top:%?134?%}.tp-input[data-v-1763270a]{width:%?476?%!important}",""]),e.exports=a},b777:function(e,a,t){"use strict";t.r(a);var n=t("5d26"),i=t("2f69");for(var r in i)"default"!==r&&function(e){t.d(a,e,(function(){return i[e]}))}(r);t("1467");var o,s=t("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1763270a",null,!1,n["a"],o);a["default"]=d.exports},fdc3:function(e,a,t){"use strict";(function(e){var n=t("4ea4");t("99af"),t("d3b7"),t("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("ade3"));t("96cf");var r=n(t("1da1")),o=n(t("5530")),s=t("26cb"),d=n(t("0a34")),l=(n(t("eed6")),n(t("8e55"))),u=n(t("8be5")),c=n(t("6388")),p=t("330a"),f=(0,s.createNamespacedHelpers)("user"),h=(0,s.createNamespacedHelpers)("verify"),v=((0,s.createNamespacedHelpers)("factor"),(0,s.createNamespacedHelpers)("password")),b="",y="",w={forTradePwd:{pageId:"tran_pwd_forget_change",pageName:"我忘记交易密码"},remTradePwd:{pageId:"tran_pwd_remember_change",pageName:"我记得交易密码"}},g="",m="",k={},_={components:{"taian-safekeyboard":u.default,bnsSafekeyboard:c.default},data:function(){return{repwdInfo:{},pwdInfo:{},type:"",fromType:"",inputList:["1","2"],pageFrom:"",plarrjy:["输入6位交易密码","输入6位交易密码"],loading:!1,KBSWITCH:l.default.KBSWITCH,pageLoding:!1,bank_mark:l.default.BANK_KB,p1:"",p2:"",base64EncryptedData:"",base64EncryptedRc:"",isConfirm:!1}},computed:(0,o.default)((0,o.default)((0,o.default)((0,o.default)({},h.mapState(["verifyData"])),f.mapState(["base64ServerRandom"])),v.mapState(["tradePassword"])),{},{homeData:function(){return this.$store.getters.homeData()},isTencentFace:function(){if("{}"!==JSON.stringify(this.homeData))return!(!this.homeData||!this.homeData.biopsyType)&&"3"===this.homeData.biopsyType},password:function(){var e=this;return function(a){return e.tradePassword.reset["p"+a]}},label:function(){return function(e){var a="交易";return[a,1==e?"密码":"密码确认"].join("")}},unClickable:function(){if("tradePwd"===this.type)if(this.KBSWITCH&&"beinongshang"===this.bank_mark){if(this.isConfirm&&this.pwdInfo.inputVal&&this.pwdInfo.inputVal.toString()&&this.repwdInfo.inputVal&&this.repwdInfo.inputVal.toString())return!1}else if(this.KBSWITCH&&"chengde"===this.bank_mark){if(this.base64EncryptedData&&-3!==this.base64EncryptedData)return!1}else if("taian"===this.bank_mark&&(""!==this.p1||""!==this.p2))return!1;return!0}}),mounted:function(){"beinongshang"===this.bank_mark&&this.initKeyboard()},onLoad:function(e){d.default.log("接收参数-----",e),this.type=e.type||"",b=w[e.pwdType].pageId,y=w[e.pwdType].pageName,g=e.pwdType,this.fromType=e.fromType||"",this.mobile=e.mobile||"",m=e.pageFlags,this.pageLoding=!0},onShow:function(){this.$track.applyCacheData("resetPwd")},methods:(0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},v.mapActions(["updateLoginPassword","setTradePassword"])),f.mapActions(["getKeyboardNumber"])),v.mapMutations(["updatePassword"])),h.mapMutations(["clearVerifyData"])),{},{initKeyboard:function(){var e=this.$refs.bnskeyboard;e.randomOffset(),e.setKeyLayout(),e.sendDrawInfo()},bnsShowKeyboard:function(e){var a=this.$refs.bnskeyboard;a.showkeybox(e)},onInput:function(e){this.pwdInfo=e},onInputSencond:function(e){this.repwdInfo=e},show_bnsKeyboard:function(a){this.$set(this.pwdInfo,"hasCursor",a),this.pwdInfo.hasCursor=a,e.log(this.pwdInfo)},show_bnsKeyboard_sencond:function(e){this.$set(this.repwdInfo,"hasCursor",e),this.repwdInfo.hasCursor=e},confirmNumber:function(e){"pwd"===e.inputType?this.pwdInfo=e:(this.repwdInfo=e,this.isConfirm=!0,this.$refs.bnskeyboard.submitKeyBox())},getEncryptParam:function(e){e&&(k=e)},show:function(e){this.cb=e,this.getRandom(),this.$handleTrackBlur("resetloginpwd_trade_intime")},onDone:function(e){this.base64EncryptedData=e.value,this.base64EncryptedRc=e.encryptRandomData},onChange:function(e,a,t){this.logData="\n输入ID".concat(e,"输入类型").concat(a,"输入长度").concat(t,"\n").concat(this.logData)},myevent:function(e){var a=this;return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.getRandom();case 2:e.detail();case 3:case"end":return t.stop()}}),t)})))()},onPasswordChange:function(e){this.base64EncryptedData=e.detail.value,this.base64EncryptedRc=e.detail.random},taianShowKeyboard:function(){this.$refs.taiankeyboardRef.safekey_open()},taianShowKeyboard1:function(){this.$refs.taiankeyboard.safekey_open()},onPwChange:function(e){var a="trade";1===e.index?(this.updatePassword({type:a,key:"reset",value:{p1:e.uuid}}),this.p1=e.pwd):(this.updatePassword({type:a,key:"reset",value:{p2:e.uuid}}),this.p2=e.pwd)},onClose:function(e){var a="trade";1===e.index?(this.updatePassword({type:a,key:"reset",value:{p1:""}}),this.p1=""):(this.updatePassword({type:a,key:"reset",value:{p2:""}}),this.p2="")},clearTnPw:function(){if("taian"===this.bank_mark){this.$refs.taiankeyboardRef.safekey_bindCancle(),this.$refs.taiankeyboard.safekey_bindCancle();var e="trade";this.updatePassword({type:e,key:"reset",value:{p1:"",p2:""}}),this.p1="",this.p2=""}},clearBnsPw:function(){"beinongshang"===this.bank_mark&&(this.$refs.bnskeyboard.defaultInput(),this.repwdInfo={},this.pwdInfo={})},getRandom:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.getKeyboardNumber({busType:"1"});case 3:t=a.sent,t&&e.cb&&e.cb(t.data.pwdCode),a.next=9;break;case 7:a.prev=7,a.t0=a["catch"](0);case 9:return a.prev=9,e.loading=!1,uni.hideLoading(),a.finish(9);case 13:case"end":return a.stop()}}),a,null,[[0,7,9,13]])})))()},showKeybaoard:function(){this.$handleTrackBlur("resetloginpwd_trade_intime")},onInputBlur:function(e){this.$handleTrackBlur("resetloginpwd_trade_intime")},onInputFocus:function(e){this.$handleTrackFocus("resetloginpwd_loginpwd_intime")},getTrackData:function(){return{resource_type:"submit",event_code:"sbt_changepwd",resource_uri:"form_pwd",page_id:b,page_name:y}},checkMustData:function(){this.tradePassword.isVerify||uni.reLaunch({url:"/pages/index/index"})},handleSubmit:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var t,n,i,r,s,l,u,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.getTrackData(),"tradePwd"!==e.type){a.next=23;break}if(n="",e.KBSWITCH&&"chengde"===e.bank_mark?e.base64EncryptedData&&-3!==e.base64EncryptedData?e.base64EncryptedData&&-1!==e.base64EncryptedData?e.base64EncryptedData&&-4!==e.base64EncryptedData?-2===e.base64EncryptedData&&(n="两次密码输入不一致，请重新输入",e.$refs.skb1.clear(),e.loading=!1,e.base64EncryptedData="",e.base64EncryptedRc=""):(n="密码强度弱请重新输入",e.$refs.skb1.clear(),e.loading=!1,e.base64EncryptedData="",e.base64EncryptedRc=""):n="请输入6位数字密码":n="请输入交易密码":"taian"===e.bank_mark?""===e.p1||""===e.p2?n="请输入交易密码":(e.p1.length<6||e.p2.length<6)&&(n="请输入6位数字密码"):"beinongshang"===e.bank_mark&&(""===e.pwdInfo.inputVal.toString()||""===e.repwdInfo.inputVal.toString()?n="请输入交易密码":e.pwdInfo.inputVal.toString()!=e.repwdInfo.inputVal.toString()?n="两次密码不一致":(e.pwdInfo.inputVal.length<6||e.repwdInfo.inputVal<6)&&(n="请输入6位数字密码")),!n){a.next=7;break}return d.default.alert({content:n}),a.abrupt("return");case 7:return e.loading=!0,i="fail",r={},r="beinongshang"===e.bank_mark?(0,o.default)({},k):{base64EncryptedData:e.base64EncryptedData,base64EncryptedRc:e.base64EncryptedRc},a.next=13,e.setTradePassword((0,o.default)({type:"reset"},r));case 13:s=a.sent,"beinongshang"===e.bank_mark&&(e.clearBnsPw(),e.initKeyboard(),e.repwdInfo={},e.pwdInfo={}),s&&(s.isError?d.default.toast(s.message):"1000"===s.code?(i="success",uni.showToast({title:"交易密码重置成功",mask:!0,icon:"none"}),e.clearVerifyData(),setTimeout((function(){if("loanConfirm"===e.fromType||"transfer"===e.fromType)d.default.navigateBackMPH5();else if("remTradePwd"===g)d.default.navigateBackMPH5();else if("forTradePwd"===g){if(e.isTencentFace)return void d.default.navigateBackMPH5(2);"verifyTradePs"===m?d.default.navigateBack("verifyTradePs"):"newLoan"===m?d.default.navigateBack("newLoan"):"repaymentSubmit"===m?d.default.navigateBack("repaymentSubmit"):"validPassword"===m?d.default.navigateBack("myCard"):d.default.navigateBack("systemSetup")}else uni.reLaunch({url:"/pages/index/index"})}),1500)):"2040"===s.code?d.default.alert({content:"操作超时，请重试",onSuccess:function(){e.operationFn()}}):e.clearTnPw()),t.event_result=i,l=wx.getStorageSync("userInfo"),u={org_id:"12345",eventType:"06",mobile:l.mobile?l.mobile:e.mobile,uuid:l.uuid,id_umber:l.idNumber,name:l.name},u.event_code="sbt_changepwd",u.resource_value="sbt_changepwd",u.resource_type="submit",e.$track.dmActionPost((0,o.default)((0,o.default)({},u),t));case 23:c=e,setTimeout((function(){c.KBSWITCH&&"chengde"===c.bank_mark&&(c.$refs.skb1.clear(),c.loading=!1,c.base64EncryptedData="",c.base64EncryptedRc=""),e.clearTnPw()}),500),e.loading=!1;case 26:case"end":return a.stop()}}),a)})))()},operationFn:function(){"remTradePwd"===g?d.default.navigateTo("validPassword",(0,i.default)({subcontract:"A",type:"trade"},p.faceFlags.fromType,p.faceFlags.fromTypeValue.resetTradePassword),!0):"forTradePwd"===g&&d.default.navigateTo("faceRecordStart",(0,i.default)({subcontract:"A"},p.faceFlags.fromType,p.faceFlags.fromTypeValue.resetTradePassword),!0)},handleInputChange:function(e,a){var t="p"+a,n="trade";this.updatePassword({type:n,key:"reset",value:(0,i.default)({},t,e.detail.value)}),this.$handleTrackChange(e,"resetloginpwd_loginpwd_inmode")},handlePageBack:function(){if("forTradePwd"===g){if(this.isTencentFace)return void d.default.navigateBackMPH5();d.default.navigateTo("faceRecordStart",(0,i.default)({subcontract:"A"},p.faceFlags.fromType,p.faceFlags.fromTypeValue.resetTradePassword),!0)}else d.default.navigateBackMPH5()}})};a.default=_}).call(this,t("5a52")["default"])}}]);