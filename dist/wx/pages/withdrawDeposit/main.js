require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{PUx0:function(e,n){},SmMY:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("5nAL"),o=a.n(t),s=a("l51A");o.a.config.errorHandler=function(e){console&&console.error&&console.error(e)},new o.a(s.a).$mount()},l51A:function(e,n,a){"use strict";var t=a("ubX0"),o=a("yLzL");var s=function(e){a("PUx0")},i=a("GbJU")(t.a,o.a,s,"data-v-1bbaf4d9",null);n.a=i.exports},ubX0:function(e,n,a){"use strict";n.a={data:function(){return{shouKuanRen:"",shouKuanHao:"",money:null}},created:function(){this.screenHeight=window.screenHeight},mounted:function(){},methods:{},computed:{},components:{}}},yLzL:function(e,n,a){"use strict";var t={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"withdrawDeposit"},[a("van-field",{staticStyle:{"margin-top":"15px"},attrs:{name:"收款人",label:"收款人",placeholder:"请输入收款人",rules:[{required:!0,message:"请输入收款人姓名"}],eventid:"0",mpcomid:"0"},model:{value:e.shouKuanRen,callback:function(n){e.shouKuanRen=n},expression:"shouKuanRen"}}),e._v(" "),a("van-field",{attrs:{name:"收款账号",label:"收款账号",placeholder:"请输入卡号",rules:[{required:!0,message:"请输入收款账号"}],eventid:"1",mpcomid:"1"},model:{value:e.shouKuanHao,callback:function(n){e.shouKuanHao=n},expression:"shouKuanHao"}}),e._v(" "),a("div",{staticClass:"moneyKa"},[a("div",[e._v("提现金额")]),e._v(" "),a("van-field",{staticClass:"moneyLie",attrs:{placeholder:"请输入金额","label-width":"22",type:"number",label:"￥",eventid:"2",mpcomid:"2"},model:{value:e.money,callback:function(n){e.money=n},expression:"money"}}),e._v(" "),a("div",{staticClass:"fenGeXian"}),e._v(" "),a("div",[e._v("可提现￥570")])],1),e._v(" "),a("div",{staticStyle:{margin:"16px"}},[a("button",{staticClass:"tiJiaoBut"},[e._v("\n                提交\n            ")])],1)],1)},staticRenderFns:[]};n.a=t}},["SmMY"]);