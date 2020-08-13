<template>
    <div class="settlement">
        <div class="head-div">
            <img  class="settlement-img" src="/static/jiesuan.png" >
            <h2>购买须知</h2>
            <div>找我聊服务类产品，一经售出不予退还</div>
        </div>

        <div class="jine-div">
            <div class="yfje">应付金额</div>
            <h1>{{jine}}</h1>
        </div>
        <div class="btn-div">
            <i-button type="success" @click="openPwdfunc" class="btn-ljgm" shape="circle">立即购买</i-button>
            <!-- <button @click="openPwdfunc" class="btn-ljgm">立即购买</button> -->
            <div class="btn-next-title">购买即视为同意<span @click="goSettlementAgreement" class="btn-next-span">《找我聊用户协议》</span></div>
        </div>

        <van-dialog class="van-dialog-div" v-model="showModel" title="请输入支付密码" confirmButtonText="">
            <van-icon @click="showModel=false;showKeyboard=false;" class="van-icon-close" name="cross" />
            <div class="jine-div2">
                <div class="van-dialog__header">找我聊</div>
                <h1>{{jine}}</h1>
            </div>
            <div class="posab-div">
                <van-cell value="支付方式" is-link>
                <template>
                    <span class="custom-title">建设银行卡</span>
                </template>
                </van-cell>
            </div>
        </van-dialog>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                title : '结算',
                jine:"￥200.00",
                showModel:false,
                pwdValue: '123',
                showKeyboard: false
            }
        },
        created : function(){
        },
        mounted () {
        },
        methods : {
            goSettlementAgreement: function(){
                let url = "/pages/settlementAgreement/main"
                //wx.reLaunch({url}) //即能跳转到tabBar页面，也能跳转到非tabBar页面，不带历史回退
                wx.navigateTo({url})
            },
            openPwdfunc(){
                this.showModel = !this.showModel
                this.showKeyboard = !this.showKeyboard
            },
            onInput(key) {
                this.pwdValue = (this.pwdValue + key).slice(0, 6);
                if(this.pwdValue.length==6){
                    this.showModel = false
                    this.showKeyboard = false
                }
            },
            onDelete() {
                this.pwdValue = this.pwdValue.slice(0, this.pwdValue.length - 1);
            },
        },
        onLoad () {
        },
        watch: {
        }
    }
</script>
<style>
    .settlement .van-nav-bar__title{
        color: #FFFFFF;
    }
    .settlement .van-nav-bar__left .van-icon{
        color: #FFFFFF;
    }
    .settlement .van-dialog-div .van-dialog__footer{
        display: none;
    }
</style>
<style lang="stylus" scoped>
    .settlement
        .settlement-img
            width:100vw
            height 250px
            position absolute
            top 0px
            left 0px
            z-index -1
        .van-nav-bar
            background-color unset

        [class*=van-hairline]::after
            border none
        .head-div
            padding: 44px 20px 0px 20px
            width 100vw
            color #FFFFFF
            h2
                margin-top 10px
        .jine-div
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            text-align center
            h1
                font-size 48px
            .yfje
                font-size 22px
        .btn-div
            position absolute
            bottom 80px
            width 100vw
            text-align center
            .btn-ljgm
                width 70vw
                display block
                margin 0 auto

            .btn-next-title
                margin-top 20px
                .btn-next-span
                    color #07c160
        .van-dialog-div
            width 80vw
            height 250px
            .van-icon-close
                cursor pointer
                position absolute
                top 28px
                left 28px
            .jine-div2
                text-align center
                h1
                    font-size 40px
                    margin 0px 0px
                .van-dialog__header
                    padding-top 8px
            .posab-div
                position absolute
                bottom 70px
                height 50px
                width 80vw
            .van-password-input__security
                border 1px solid #ebedf0
                border-top none
                border-right none
                li
                    border-right 1px solid #ebedf0
        .van-number-keyboard
            z-index 9999
</style>
