require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{"867a":function(t,a,s){"use strict";var i=s("Dd8w"),e=s.n(i),n=s("NYxO");a.a={data:function(){return{search:""}},computed:e()({},Object(n.c)({myInfo:function(t){return t.user.myInfo}})),methods:{logout:function(){this.$store.dispatch("resetStore"),wx.$app.logout(),wx.hideLoading(),wx.reLaunch({url:"../login/main"})}}}},GwLa:function(t,a){},PpMG:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("5nAL"),e=s.n(i),n=s("nVT/");new e.a(n.a).$mount()},"nVT/":function(t,a,s){"use strict";var i=s("867a"),e=s("pfgv");var n=function(t){s("GwLa")},c=s("GbJU")(i.a,e.a,n,null,null);a.a=c.exports},pfgv:function(t,a,s){"use strict";var i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"info-card"},[s("image",{staticClass:"avatar",attrs:{src:t.myInfo.avatar||"/static/images/avatar.png"}}),t._v(" "),s("div",{staticClass:"basic"},[s("div",{staticClass:"username"},[t._v(t._s(t.myInfo.nick||"未设置"))]),t._v(" "),s("div",{staticClass:"user-id"},[t._v("用户ID："+t._s(t.myInfo.userID))])])]),t._v(" "),s("i-cell-group",{attrs:{"i-class":"cell-group",mpcomid:"1"}},[s("i-cell",{attrs:{title:"个性签名",mpcomid:"0"}},[s("div",{staticClass:"signature",slot:"footer"},[t._v("\n        "+t._s(t.myInfo.selfSignature||"暂无")+"\n      ")])])],1),t._v(" "),s("i-cell-group",{attrs:{"i-class":"cell-group",mpcomid:"4"}},[s("i-cell",{attrs:{title:"修改资料","is-link":"",url:"../profile/main",mpcomid:"2"}}),t._v(" "),s("i-cell",{attrs:{title:"退出登录","i-class":"logout",eventid:"0",mpcomid:"3"},on:{click:t.logout}})],1)],1)},staticRenderFns:[]};a.a=i}},["PpMG"]);