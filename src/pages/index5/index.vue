<template>
    <!--个人中心页面'-->
    <div class="index5">
        <div class="woDe">
            我的个人中心
        </div>
        <div class="ziLiaoKa">
            <van-row gutter="24">
                <van-col span="5">
                    <img  class="touXiang" src="/static/wxBg.png" >
                </van-col>
                <van-col span="16">
                    <p class="niCheng">零度</p>
                    <div class="idHao">ID号：12151463674</div>
                </van-col>
                <van-col span="3">
                    <van-icon @click="bianJiBut" class="jianTou" name="arrow" />
                </van-col>
            </van-row>
        </div>
        <div class="caiFuKa">
            <van-row class="caiFuColumnOne" gutter="24">
                <van-col span="24">
                    <div class="oneLeft">我的明细</div>
                    <a href="#" class="oneRight" @click="mingXiBut" style="float:right">明细</a>
                </van-col>
                <van-col span="20">
                    <div class="oneLeftTwo">24小时后可提现</div>
                </van-col>
            </van-row>
            <van-row class="caiFuColumnTwo" gutter="24">
                <div class="twoLeft">6100</div>
                <div class="twoRight">
                    <i-button class="twoRight-btn" type="ghost" shape="circle">提现</i-button>
                </div>
            </van-row>
        </div>
        <div class="gongNengKa">
            <a href="#" @click="xuQiuBut"> 
                <van-row class="gongNengLan">
                    <div class="gongNengLanLeft"><img class="gongNengIcon" src="/static/myNeed.png" ></div>
                    <div class="gongNengLanRight">我的需求</div>
                </van-row>
            </a> 
            <a href="#"  @click="keFuBut"> 
                <van-row class="gongNengLan">
                    <div class="gongNengLanLeft"><img class="gongNengIcon" src="/static/customerService.png" ></div>
                    <div class="gongNengLanRight">客服咨询 09:00-22:00</div>
                </van-row>
            </a> 
        </div>



    </div>

</template>

<script>

    export default {

        //基础数据存放处
        data (){
            return {
               
               
            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            
        },

        //声明方法
        methods : {
            //编辑资料箭头
            bianJiBut: function(){

                //this.$router.push('/personalData');
                let url = "/pages/personalData/main"
                wx.navigateTo({url})
            },
            //账户明细按钮
            mingXiBut: function(){
                //this.$router.push('/accountDetails');
                let url = "/pages/accountDetails/main"
                wx.navigateTo({url})
            },
            //提现按钮
            tiXian: function(){
                //this.$router.push('/withdrawDeposit');;
                let url = "/pages/withdrawDeposit/main"
                wx.navigateTo({url})
            },
            //我的需求跳转
            xuQiuBut: function(){
                this.$router.push('/myNeed');
                let url = "/pages/myNeed/main"
                wx.navigateTo({url})
            },
            //客服咨询是否拨打电话
            keFuBut: function(){
                Dialog.confirm(
                    {
                        title: '确定拨打电话',
                        message: '400-8161-666',
                        confirmButtonText: '拨打',
                        cancelButtonText: "取消",
                        confirmButtonColor: "#1DE7A7",
                    }).then(() => {
                        //alert("确定")
                    }).catch(() => {
                        //alert("取消")
                    }
                );
            }
            
           

        },

        //计算属性
        computed: {

        },


        components: {
            
        }
    }
</script>
<style lang="stylus" scoped>
    .index5
        padding:0px 15px;
        .woDe
            height:60px
            line-height :80px;
            font-weight :bold
            font-size:23px
        .ziLiaoKa
            height:100px
            .touXiang  
                float:left
                width:70px
                height:70px
                border-radius:50vw
                margin-top:15px;
            .niCheng
                float:left
                font-size:14px
                font-weight:bold
                width:200px;
                margin-top:28px
                margin-bottom:7px;
            .idHao
                float:left
                font-size:12px
            .jianTou
                margin-top:10vw
                float right
        .caiFuKa
            height:150px
            padding:15px 15px 0 20px
            border-radius:15px
            box-shadow:0px 0px 2px 2px rgba(0,0,0,0.2)
            color:white
            
            //background: -moz-linear-gradient(top, #22D3F5 0%, #1DE7A7 50%)
            background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#22D3F5), color-stop(80%,#1DE7A7))
            // background: -o-linear-gradient(top, #22D3F5 0%,#1DE7A7 100%)
            // background: -ms-linear-gradient(top, #22D3F5 0%,#1DE7A7 100%)
            //background: linear-gradient(to bottom, #22D3F5 0%,#1DE7A7 100%)

            // background: url(https://img.yzcdn.cn/vant/cat.jpeg) repeat-x center
            .caiFuColumnOne
                line-height:24px
                .oneLeft
                    float:left
                    font-size:16px
                .oneRight
                    float:right
                    font-size:14px
                    color:white
                .oneLeftTwo
                    float:left
                    font-size:13px
                    margin-left:0px
            .caiFuColumnTwo
                margin-top:10px
                line-height:90px
                .twoLeft
                    float:left
                    font-size:50px
                .twoRight
                    float:right
                    .twoRight-btn
                        border-radius 34px !important
                        line-height 17px !important
                        height 17px !important
                        position relative
                        top 21px
                        min-width 32px
                        color #07c160 !important
        .gongNengKa
            height:200px
            margin-top:25px
            .gongNengLan
                padding-bottom:10px
                margin-top:15px
                .gongNengLanLeft
                    float:left
                    margin-left:5px
                    margin-top:5px
                .gongNengLanRight
                    float:left
                    padding-top:3px
                    color:#000000
                    margin-left:14px
                .gongNengIcon
                    width:31px
                    height:30px
</style>
