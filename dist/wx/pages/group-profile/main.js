require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{"2OUe":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("5nAL"),r=i.n(o),n=i("OnQO");new r.a(n.a).$mount()},JsRP:function(e,t,i){"use strict";var o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.groupProfile?i("div",{staticClass:"group-detail-wrapper"},[i("div",{staticClass:"header"},[e._l(e.memberList,function(t,o){return[i("div",{key:t.userID,staticClass:"member",attrs:{eventid:"0_"+o},on:{click:function(i){e.toUserProfile(t)}}},[i("i-avatar",{attrs:{"i-class":"avatar",src:t.avatar||"/static/images/avatar.png",defaultAvatar:"'/static/images/avatar.png'",shape:"square",mpcomid:"0_"+o}}),e._v(" "),i("div",{staticClass:"name"},[e._v("\n          "+e._s(t.nameCard||t.nick||t.userID)+"\n        ")])],1)]}),e._v(" "),i("div",{staticClass:"show-more-btn",attrs:{eventid:"1"},on:{click:e.toAllMemberList}},[i("icon",{attrs:{size:40,src:"/static/images/show-more.png"}}),e._v(" "),i("div",{staticClass:"name"},[e._v("\n        查看全部\n      ")])],1),e._v(" "),e.addMemberButtonVisible?i("div",{staticClass:"add-member-btn",attrs:{eventid:"2"},on:{click:function(t){e.addMemberModalVisible=!0}}},[i("icon",{attrs:{size:40,src:"/static/images/add-group-member.png"}}),e._v(" "),i("div",{staticClass:"name"},[e._v("\n        添加\n      ")])],1):e._e()],2),e._v(" "),i("i-cell-group",{attrs:{mpcomid:"6"}},[i("i-cell",{attrs:{title:"群ID","value-class":"cell-value",value:e.groupProfile.groupID,mpcomid:"2"}}),e._v(" "),i("i-cell",{attrs:{title:"群名称","value-class":"cell-value","is-link":e.canIEditGroupProfile,value:e.groupProfile.name,url:"../update-profile/main?type=group&key=name&groupID="+e.groupProfile.groupID,mpcomid:"3"}}),e._v(" "),i("i-cell",{attrs:{title:"群公告","value-class":"cell-value","is-link":e.canIEditGroupProfile,value:e.groupProfile.notification,url:"../update-profile/main?type=group&key=notification&groupID="+e.groupProfile.groupID,mpcomid:"4"}}),e._v(" "),i("i-cell",{attrs:{title:"我在本群的昵称","value-class":"cell-value","is-link":"",value:e.groupProfile.selfInfo.nameCard,url:"../update-profile/main?type=group&key=nameCard&groupID="+e.groupProfile.groupID,mpcomid:"5"}})],1),e._v(" "),i("i-cell-group",{attrs:{"i-class":"group-action",mpcomid:"8"}},[i("i-cell",{attrs:{title:"全体禁言",mpcomid:"7"}},[i("switch",{attrs:{color:"#006fff",disabled:!e.isAdminOrOwner,eventid:"3"},on:{change:e.handleMuteSwitch,click:e.handleClick},slot:"footer"})])],1),e._v(" "),i("i-cell-group",{attrs:{"i-class":"group-action",mpcomid:"10"}},[i("i-cell",{attrs:{"i-class":"quit",title:e.quitText,"is-link":"",eventid:"4",mpcomid:"9"},on:{click:e.handleQuit}})],1),e._v(" "),i("i-modal",{attrs:{"i-class":e.inputFocus?"add-member-modal-on-focus add-member-modal":"add-member-modal",title:"添加群成员",visible:e.addMemberModalVisible,eventid:"6",mpcomid:"11"},on:{ok:e.handleOk,cancel:function(t){e.addMemberModalVisible=!1}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userID,expression:"userID"}],staticClass:"user-id-input",attrs:{focus:e.addMemberModalVisible,placeholder:"请输入 userID",eventid:"5"},domProps:{value:e.userID},on:{focus:function(t){e.inputFocus=!0},blur:function(t){e.inputFocus=!1},input:function(t){t.target.composing||(e.userID=t.target.value)}}})])],1):e._e()},staticRenderFns:[]};t.a=o},OnQO:function(e,t,i){"use strict";var o=i("Xt0b"),r=i("JsRP");var n=function(e){i("ytbH")},s=i("GbJU")(o.a,r.a,n,null,null);t.a=s.exports},Xt0b:function(e,t,i){"use strict";var o=i("Dd8w"),r=i.n(o),n=i("NYxO");t.a={data:function(){return{addMemberModalVisible:!1,inputFocus:!1,userID:""}},onLoad:function(){var e=this;wx.$app.getGroupMemberList({groupID:this.groupProfile.groupID}).then(function(t){var i=t.data.memberList;e.$store.commit("updateCurrentGroupMemberList",i)})},onUnload:function(){this.userID="",this.addMemberModalVisible=!1,this.$store.commit("resetCurrentMemberList")},computed:r()({},Object(n.c)({groupProfile:function(e){return e.conversation.currentConversation.groupProfile},memberList:function(e){return e.group.currentGroupMemberList.slice(0,12)}}),{addMemberButtonVisible:function(){return!!this.groupProfile&&this.groupProfile.type===wx.TIM.TYPES.GRP_PRIVATE},quitText:function(){return this.groupProfile&&this.groupProfile.type!==wx.TIM.TYPES.GRP_PRIVATE&&this.groupProfile.selfInfo&&this.groupProfile.selfInfo.role===wx.TIM.TYPES.GRP_MBR_ROLE_OWNER?"退出并解散群聊":"退出群聊"},isAdminOrOwner:function(){return!(!this.groupProfile||!this.groupProfile.selfInfo)&&this.groupProfile.selfInfo.role!==wx.TIM.TYPES.GRP_MBR_ROLE_MEMBER},canIEditGroupProfile:function(){return!(!this.groupProfile||!this.groupProfile.selfInfo)&&(this.groupProfile.type===wx.TIM.TYPES.GRP_PRIVATE||!!this.isAdminOrOwner)}}),methods:{toAllMemberList:function(){wx.navigateTo({url:"../members/main"})},toUserProfile:function(e){wx.navigateTo({url:"../user-profile/main?userID="+e.userID})},handleQuit:function(){var e=this;wx.showModal({title:"提示",content:"是否确定退出群聊？",success:function(t){t.confirm&&(e.groupProfile.type!==wx.TIM.TYPES.GRP_PRIVATE&&"Owner"===e.groupProfile.selfInfo.role?wx.$app.dismissGroup(e.groupProfile.groupID).then(function(){wx.showToast({title:"解散成功",duration:800}),setTimeout(function(){wx.switchTab({url:"../index/main"})},800)}).catch(function(e){wx.showToast({title:e.message,icon:"none"})}):wx.$app.quitGroup(e.groupProfile.groupID).then(function(){wx.showToast({title:"退群成功",duration:800}),setTimeout(function(){wx.switchTab({url:"../index/main"})},800)}).catch(function(e){wx.showToast({title:e.message,icon:"none"})}))}})},handleClick:function(){this.isAdminOrOwner||wx.showToast({title:"普通群成员不能设置全体禁言",duration:1500,icon:"none"})},handleMuteSwitch:function(e){var t=this;if(this.isAdminOrOwner){var i=e.mp.detail.value;wx.$app.updateGroupProfile({muteAllMembers:i,groupID:this.groupProfile.groupID}).then(function(e){e.data.group.muteAllMembers?t.$store.commit("showToast",{title:"全体禁言已开启",con:"none",duration:1500}):t.$store.commit("showToast",{title:"全体禁言已取消",icon:"none",duration:1500})}).catch(function(e){wx.showToast({title:e.message,duration:800,icon:"none"})})}},handleOk:function(){var e=this;""===this.userID&&wx.showToast({title:"请输入userID",icon:"none",duration:800}),wx.$app.addGroupMember({groupID:this.groupProfile.groupID,userIDList:[this.userID]}).then(function(t){t.data.successUserIDList.length>0&&(wx.showToast({title:"添加成功",duration:800}),e.userID="",e.addMemberModalVisible=!1),t.data.existedUserIDList.length>0&&wx.showToast({title:"该用户已在群中",duration:800,icon:"none"}),t.data.failureUserIDList.length>0&&wx.showToast({title:"添加失败，请确保该用户存在",duration:800,icon:"none"})}).catch(function(e){wx.showToast({title:e.message,duration:800,icon:"none"})})}}}},ytbH:function(e,t){}},["2OUe"]);