(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-loanRecord-loanRecord"],{"03c6":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("fb6a"),n("ac1f"),n("5319"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ade3")),r=a(n("2909"));n("96cf");var c=a(n("1da1")),i=a(n("5530")),s=n("26cb"),l=a(n("0a34")),u=n("ebd0"),d=n("8865"),p=n("f49f"),g=a(n("7ec2")),f=a(n("6a7d")),_=a(n("dd53")),m=(0,s.createNamespacedHelpers)("loan"),h=m.mapState,v=(m.mapGetters,m.mapActions),y=m.mapMutations,b=(0,s.createNamespacedHelpers)("card"),w=(0,s.createNamespacedHelpers)("target"),k={mixins:[u.appInterMixin,_.default],data:function(){return{showNoData:!1,isFilterShow:!1,isOtherList:!1,rightArrow:d.rightArrow,totalCount:0,statusBarHeight:null,loanData:[],downOption:{auto:!1,inOffsetRate:.5},upOption:{auto:!0,textNoMore:"",noMoreSize:1,empty:{use:!1}}}},components:{noData:g.default,MescrollBodyDiy:f.default},filters:{repayResult:function(t){var e={0:"借款处理中",1:"使用中",4:"已逾期"};return e[t]},dateFormat:function(t){if(t){var e=t.replace(/\//g,""),n=e.substring(0,4),a=e.substring(4,6),o=e.substring(6,8);return n+"年"+a+"月"+o+"日"}}},computed:(0,i.default)((0,i.default)((0,i.default)({},h(["loanList"])),b.mapGetters(["defaultPayCard"])),{},{pageHeight:function(){return this.isFilterShow?"calc(100vh - 44px - 41px - ".concat(this.statusBarHeight,"px)"):"calc(100vh - 44px - ".concat(this.statusBarHeight,"px)")}}),onLoad:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getSystemInfoSync(),t.statusBarHeight=n.statusBarHeight,e.next=4,t.queryBindingBankList();case 4:t.pageInit();case 5:case"end":return e.stop()}}),e)})))()},onUnload:function(){this.updateLoanList([])},methods:(0,i.default)((0,i.default)((0,i.default)((0,i.default)((0,i.default)({},v(["getLoanList"])),y(["updateLoanList"])),w.mapMutations(["updateTargetData"])),b.mapActions(["queryBindingBankList"])),{},{pageInit:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getLoanList({flag:"1"});case 2:n=e.sent,n&&"1000"===n.code&&n.data.loanList.length>0&&t.updateValue("isOtherList",!0);case 4:case"end":return e.stop()}}),e)})))()},downCallback:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.mescroll.resetUpScroll(!1);case 1:case"end":return e.stop()}}),e)})))()},upCallback:function(t){var e=this;return(0,c.default)(regeneratorRuntime.mark((function n(){var a,o,c,i,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(1!=t.num){n.next=7;break}return n.next=3,e.getLoanList({flag:"0"});case 3:a=n.sent,a&&"1000"===a.code&&(e.loanData=e.loanList,e.totalCount=a.data.totalNum,e.loanData.length<=0?e.updateValue("showNoData",!0):e.updateValue("isFilterShow",!0)),n.next=12;break;case 7:return o={pageNum:t.num,flag:"0"},n.next=10,e.getLoanList(o);case 10:a=n.sent,a&&a.data&&(e.loanData=[].concat((0,r.default)(e.loanData),(0,r.default)(a.data.loanList)));case 12:c=a.data.totalNum,i=a.data.loanList,s=i.length,l=s<=0,l||e.mescroll.showNoMore(),e.mescroll.endBySize(s,c),e.mescroll.endSuccess(s);case 19:case"end":return n.stop()}}),n)})))()},updateValue:function(t,e){this[t]=e},otherLoanRecord:function(){l.default.navigateTo("otherLoanRecord",{subcontract:"B"})},detailTo:function(t,e){return(0,c.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l.default.checkNetwork();case 2:if(a=n.sent,a){n.next=5;break}return n.abrupt("return");case 5:uni.navigateTo({url:"../../pagesA/loanDetail/loanDetail?orderId=".concat(t,"&loanType=").concat(e)});case 6:case"end":return n.stop()}}),n)})))()},nextPage:function(t){var e,n="",a="",r={0:"loanResult&B",1:"loanDetail&B",4:"loanDetail&B"},c=r[t.loanState].split("&");n=c[0],a=c[1];var i=this.defaultPayCard.cardNo.slice(-4);l.default.navigateTo(n,(e={subcontract:a},(0,o.default)(e,p.newLoan.query.loanTime,"".concat(t.loanDate," ").concat(t.loanTime)),(0,o.default)(e,p.newLoan.query.loanAmount,"".concat(t.loanAmnt,"元")),(0,o.default)(e,p.newLoan.query.loanAccount,"".concat(this.defaultPayCard.bankName," 尾号(").concat(i,")")),(0,o.default)(e,p.newLoan.query.orderId,t.loanId),(0,o.default)(e,p.newLoan.query.loanType,t.busType),(0,o.default)(e,p.newLoan.query.loanPageFlag.flagName,p.newLoan.query.loanPageFlag.flagValue.loanRecord),(0,o.default)(e,"params",JSON.stringify(t)),e))}})};e.default=k},5240:function(t,e,n){"use strict";var a=n("fe83"),o=n.n(a);o.a},8865:function(t,e,n){"use strict";var a=n("8e55"),o="".concat(a.PICTURE_URL,"close.png"),r=("".concat(a.PICTURE_URL,"close_loan.png"),"../../static/img/home/"),c="".concat(r,"home_gl_bg.png"),i="".concat(r,"home_icon_gl.png"),s="".concat(r,"home_icon_gg.png"),l="".concat(r,"home_icon_sbyy.png"),u="".concat(r,"home_img_fpxz.png"),d="".concat(r,"home_img_jkgl.png"),p="".concat(r,"home_img_xhed.png"),g="".concat(r,"home_shsb_icon_sbyy.png"),f="".concat(r,"home_tc_top_fxts.png"),_="".concat(r,"home_top_img_shsb.png"),m="".concat(r,"home_top_img_shz.png"),h="".concat(r,"home_img_hkgl.png"),v="".concat(r,"home_yyq.png"),y="".concat(r,"hk_about.png"),b="".concat(r,"jqqd_img_wkf.png"),w="".concat(r,"jml_tc_btn.png"),k="".concat(r,"jml_tc_img.png"),x="".concat(r,"tc_close.png"),j="".concat(r,"gjj_icon_dwmc.png"),L="".concat(r,"gjj_icon_sbjcs.png"),R="".concat(r,"jg_img_spz.png"),S="".concat(r,"process.png"),T="".concat(r,"fail.png"),C="".concat(r,"bd_icon_dz.png"),P="".concat(r,"bdyhk_icon_yz.png"),I="".concat(r,"card_camera.png"),z="".concat(a.PICTURE_URL,"backspace.png"),A="".concat(a.PICTURE_URL,"right-arrow.png"),M="".concat(a.PICTURE_URL,"bottom-arrow.png"),N="".concat(a.PICTURE_URL,"search.png"),q="".concat(a.PICTURE_URL,"select.png"),B=("".concat(a.PICTURE_URL,"wxz@2x.png"),"../../static/img/other/"),D="".concat(B,"jkgl_top_bg.png"),U="".concat(B,"jkgl_top_img_jb.png"),E="".concat(B,"loan_01.png"),F="".concat(B,"loan_02.png"),O="".concat(B,"jkgl_icon_sfrz.png"),H="".concat(B,"jkgl_icon_rlsb.png"),V="".concat(B,"jkgl_icon_fksh.png"),$="".concat(B,"jkgl_icon_jksq.png"),G="".concat(B,"jkgl_icon_jkdz.png"),J="".concat(B,"hkgl_top_bg.png"),Q="".concat(B,"top_img_pig.png"),K="".concat(B,"wyjk_fs2_img01.png"),W="".concat(B,"hkgl_bz_icon_q.png"),X="".concat(B,"wyjk_fs1_img02.png"),Y="".concat(B,"wyjk_fs1_img03.png"),Z="".concat(B,"wyjk_fs1_img04.png"),tt="../../static/img/tempimg/",et="".concat(a.PICTURE_URL,"process.png"),nt="".concat(a.PICTURE_URL,"fail.png"),at={login_top_right:"".concat(tt,"login_top_right.png"),clear_icon:"".concat(tt,"clear_icon.png")},ot="../../static/img/none/",rt="".concat(ot,"tc_icon_mkf@2x.png");t.exports={fail:T,search:N,loan_01:E,loan_02:F,process:S,tc_close:x,home_yyq:v,hk_about:y,backspace:z,top_img_pig:Q,rightArrow:A,bd_icon_dz:C,result_fail:nt,jg_img_spz:R,jml_tc_btn:w,jml_tc_img:k,home_gl_bg:c,jkgl_top_bg:D,hkgl_top_bg:J,card_camera:I,bottomArrow:M,mycd_select:q,record_auth:rt,jqqd_img_wkf:b,home_icon_gl:i,home_icon_gg:s,hkgl_bz_icon_q:W,bdyhk_icon_yz:P,gjj_icon_dwmc:j,home_img_hkgl:h,home_img_fpxz:u,home_img_jkgl:d,home_img_xhed:p,wyjk_fs2_img01:K,wyjk_fs1_img02:X,wyjk_fs1_img03:Y,result_process:et,wyjk_fs1_img04:Z,jkgl_icon_sfrz:O,jkgl_icon_jksq:$,jkgl_icon_jkdz:G,jkgl_icon_rlsb:H,jkgl_icon_fksh:V,gjj_icon_sbjcs:L,home_icon_sbyy:l,jkgl_top_img_jb:U,home_top_img_shz:m,home_tc_top_fxts:f,home_top_img_shsb:_,home_shsb_icon_sbyy:g,img_signInCheck:at,close:o}},"9e3d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={navBar:n("b560").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"containers",style:{backgroundColor:t.showNoData?"#ffffff":"#f5f5f5"}},[n("v-uni-view",{staticClass:"navi-con"},[n("nav-bar",{attrs:{title:"借款记录",customLeftEvent:!0,openAppLeft:t.openAppLeftNav},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}}),t.isFilterShow||t.isOtherList?n("v-uni-view",{staticClass:"record-filter",style:{backgroundColor:t.showNoData?"#ffffff":"#f5f5f5"}},[n("v-uni-view",{staticClass:"filter-count"},[t._v("共"+t._s(t.totalCount)+"笔")]),n("v-uni-view",{staticClass:"filter-state",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.otherLoanRecord.apply(void 0,arguments)}}},[t._v("查看其他借款记录>")])],1):t._e()],1),n("mescroll-body-diy",{ref:"mescrollRef",attrs:{down:t.downOption,height:"80%",up:t.upOption,fixed:!1,topbar:!0},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[t.showNoData?[n("no-data",{attrs:{srcImg:"jkjl_icon_zwjk.png",describe:"暂无数据"}})]:[n("v-uni-view",{staticClass:"record-content"},[n("v-uni-view",{staticClass:"record-lists"},t._l(t.loanData,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.nextPage(e)}}},[n("v-uni-view",{staticClass:"items"},[n("v-uni-view",{staticClass:"item-left"},[n("v-uni-view",{staticClass:"left-amount"},[t._v(t._s(t._f("formatMoneyStr")(e.loanAmnt))+"元")]),n("v-uni-view",{staticClass:"left-date-type"},[n("v-uni-text",[t._v(t._s(t._f("dateFormat")(e.loanDate)))])],1)],1),n("v-uni-view",{staticClass:"item-right"},[n("v-uni-text",[t._v(t._s(t._f("repayResult")(e.loanState)))]),n("v-uni-image",{staticClass:"right-arr",attrs:{src:t.rightArrow,mode:""}})],1)],1),n("v-uni-view",{class:t.loanList.length-1===a?"displayNone":"",staticStyle:{width:"636rpx",height:"2rpx","background-color":"#F2F2F2",position:"absolute",bottom:"0"}})],1)})),1)],1)]],2)],1)],1)},r=[]},ab09:function(t,e,n){"use strict";n.r(e);var a=n("03c6"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},d77a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navi-con[data-v-4a528bc7]{position:fixed!important;left:0;right:0;top:0;z-index:10}.containers[data-v-4a528bc7]{background-color:#f5f5f5;height:99vh;padding-top:22%;overflow:hidden}.containersWx[data-v-4a528bc7]{height:100vh}.record-filter[data-v-4a528bc7]{height:%?80?%;display:flex;justify-content:space-between;align-items:flex-end;background-color:#f5f5f5}.record-filter .state-list[data-v-4a528bc7]{width:100%;height:%?376?%;position:absolute;top:%?104?%;background-color:#fff;z-index:1}.record-filter .state-list .state-item[data-v-4a528bc7]{padding-left:%?32?%;line-height:%?94?%;height:%?94?%;font-size:%?30?%;color:#333}.record-filter .filter-count[data-v-4a528bc7]{padding-left:%?32?%;font-size:%?30?%;color:#333}.record-filter .filter-state[data-v-4a528bc7]{padding-right:%?32?%;display:flex;font-size:%?30?%;color:#9d9ea6}.record-filter .filter-state .icon-arr[data-v-4a528bc7]{margin-left:%?10?%}.record-content[data-v-4a528bc7]{background-color:#f5f5f5}.record-content .record-lists[data-v-4a528bc7]{margin-top:%?32?%;padding:0 %?32?%}.record-content .record-lists .list-item[data-v-4a528bc7]{height:%?120?%;padding:0 %?30?%;display:flex;flex-direction:column;justify-content:center;background-color:#fff;position:relative}.record-content .record-lists .list-item .items[data-v-4a528bc7]{display:flex;align-items:center;justify-content:space-between}.record-content .record-lists .list-item .item-left .left-amount[data-v-4a528bc7]{font-family:SourceHanSansCN-Medium;font-size:%?32?%;color:#333;font-weight:700}.record-content .record-lists .list-item .item-left .left-date-type uni-text[data-v-4a528bc7]{font-size:%?24?%;color:#999}.record-content .record-lists .list-item .item-right uni-text[data-v-4a528bc7]{margin-right:%?10?%;font-size:%?30?%;color:#999}.record-content .record-lists .list-item .item-right .right-arr[data-v-4a528bc7]{width:%?16?%;height:%?24?%}.list-item[data-v-4a528bc7]:first-child{border-top:none;border-top-left-radius:8px;border-top-right-radius:8px}.list-item[data-v-4a528bc7]:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.displayNone[data-v-4a528bc7]{display:none}.rotate[data-v-4a528bc7]{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}',""]),t.exports=e},ebd0:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.appInterMixin=void 0;var o=a(n("0a34")),r=n("677a"),c={data:function(){return{sceneMap:r.scene,currScene:"",currSceneType:"",sceneInfo:"",fromPage:"",wxScene:""}},computed:{toIndexPage:function(){var t=this.currSceneType&&"1"===this.currSceneType;return t},fromMy:function(){return this.fromPage===r.sceneQuery.fromMap.my},openAppLeftNav:function(){var t=o.default.wxSceneMap.appToMiniProgram,e=!this.toIndexPage&&this.wxScene==t,n=e&&!this.fromMy;return n}},onLoad:function(t){t&&(this.fromPage=t[r.sceneQuery.fromPage]);var e=uni.getStorageSync(this.sceneMap.sceneFlagKey);e&&(this.currScene=e);var n=uni.getStorageSync(this.sceneMap.sceneDataKey);n&&(this.currSceneType=n.sceneType,this.sceneInfo=n)},onShow:function(){var t=o.default.getCurrWxScene();this.wxScene=t},methods:{launchAppError:function(t){},launchappSuccess:function(){},updateLocalSceneData:function(){},navigateBySceneType:function(t){"1"===t?uni.switchTab({url:"/pages/index/index"}):"2"===t?uni.reLaunch({url:"/pagesB/loanRecord/loanRecord"}):"3"===t&&uni.reLaunch({url:"/pagesB/repaymentRecord/repaymentRecord"})},clickLeft:function(){"1069"!=this.wxScene?this.currScene===this.sceneMap.value.EQGO_H5?uni.reLaunch({url:"/pages/index/index"}):o.default.navigateBackMPH5():this.toIndexPage||this.fromMy?window.history.back():this.onBackToApp()},onBackToApp:function(){for(var t in r.scene)"value"!==t&&uni.removeStorageSync(r.scene[t])}}};e.appInterMixin=c},f2f3:function(t,e,n){"use strict";n.r(e);var a=n("9e3d"),o=n("ab09");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("5240");var c,i=n("f0c5"),s=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"4a528bc7",null,!1,a["a"],c);e["default"]=s.exports},f49f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.repay=e.loanDetail=e.newLoan=void 0;var a={query:{loanTime:"loanTime",loanAmount:"loanAmount",loanAccount:"loanAccount",loanResult:"loanResult",orderId:"orderId",loanType:"loanType",loanPageFlag:{flagName:"loanPageFlag",flagValue:{loanRecord:"loanRecord"}}}};e.newLoan=a;var o={query:{orderId:"orderId",loanType:"loanType"}};e.loanDetail=o;var r={query:{repayTime:"repayTime",repayAmount:"repayAmount",repayAccount:"repayAccount",repayResult:"repayResult",repayPageFlag:{flagName:"repayPageFlag",flagValue:{repaymentRecord:"repaymentRecord"}},repayType:"repayType",paymentSeqNo:"paymentSeqNo"}};e.repay=r},fe83:function(t,e,n){var a=n("d77a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("531437b3",a,!0,{sourceMap:!1,shadowMode:!1})}}]);