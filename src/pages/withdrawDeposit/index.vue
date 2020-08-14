<template>
    <!--提现页面'-->
    <div class="withdrawDeposit">
        <!--@submit="onSubmit"-->
            <van-field v-model="shouKuanRen"  style="margin-top:15px"  name="收款人" label="收款人" placeholder="请输入收款人"
                :rules="[{ required: true, message: '请输入收款人姓名' }]"/>
            <van-field  v-model="shouKuanHao" name="收款账号" label="收款账号" placeholder="请输入卡号"
                :rules="[{ required: true, message: '请输入收款账号' }]" />
          
            <div class="moneyKa">
                <div>提现金额</div>
                <!-- 允许输入数字，调起带符号的纯数字键盘 -->
                <van-field class="moneyLie" v-model="money" placeholder="请输入金额" label-width="22"
                   type="number" label="￥" />
                <div class="fenGeXian"></div>
                <div>可提现￥570</div>
            </div>
            <div style="margin: 16px;"> 
                <button class="tiJiaoBut">
                    提交
                </button>
            </div>
        


    </div>

</template>

<script>

    export default {

        //基础数据存放处
        data (){
            return {
               shouKuanRen: '',
               shouKuanHao: '',
               money: null,
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
          
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>

<style lang="stylus" scoped>
    .withdrawDeposit
        height:667px
        width:100vw
        background-color:#F9F9FB
        .moneyKa
            width:100vw
            background-color:white
            margin-top:15px
            padding:15px
            font-size:14px
            .moneyLie
                line-height:40px
                font-size:30px
                margin-top:20px
                margin-bottom:0px
                padding-left:0px
                color:#000000
            .fenGeXian
                width:auto
                margin-right:30px
                margin-bottom:10px
                border-bottom:2px solid #F9F9FB
        .tiJiaoBut 
            width:95%
            height:44px
            border-radius:21px
            color:#ffffff
            border:0px solid
            background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#1DE7A7), color-stop(80%,#22D3F5))
</style>
