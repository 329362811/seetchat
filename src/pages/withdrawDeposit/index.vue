<template>
    <!--提现页面'-->
    <div class="withdrawDeposit">
        <!--@submit="onSubmit"-->
            <van-field v-model="shouKuanRen"  style="margin-top:15px"  name="收款人" label="收款人" placeholder="请输入收款人"
                :rules="[{ required: true, message: '请输入收款人姓名' }]"/>
            <van-field  v-model="shouKuanHao" name="收款账号" label="收款账号" placeholder="请输入卡号"
                :rules="[{ required: true, message: '请输入收款账号' }]" />
          
            <div class="moneyKa">
                <div class="titleMoney">提现金额</div>
                <!-- 允许输入数字，调起带符号的纯数字键盘 -->
                <van-row>
                    <van-col span="4" class="moneyLabel">￥</van-col>
                    <van-col span="20">
                        <input  v-model="money" class="moneyInput" placeholder="请输入金额"
                            @input="oninput"  :maxlength="moneyMaxLeng">
                    </van-col>
                </van-row>
                <div class="fenGeXian"></div>
                <div>可提现￥570</div>
            </div>
            <div style="margin: 16px;"> 
                <button class="tiJiaoBut"> 提交</button>
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
               moneyMaxLeng: 8//规定最大可输入的长度
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
            //输入内容验证
            oninput(e) {
                this.$nextTick(() => {
                let val = e.target.value.toString();
                val = val.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
                val = val.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
                val = val.replace(/^0+\./g, '0.');
                val = val.match(/^0+[1-9]+/) ? val = val.replace(/^0+/g, '') : val
                val = (val.match(/^\d*(\.?\d{0,2})/g)[0]) || ''

                if (val.includes(".")) {
                    let numDian = val.toString().split(".")[1].length;
                    if (numDian === 2) {
                    this.moneyMaxLeng = val.length;
                    }
                } else {
                    this.moneyMaxLeng = 8;
                }
                this.money = val;
                });
            },

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
            .titleMoney
                margin-bottom:20px
            .moneyLabel
                font-size:30px
            .moneyInput
                float:left;
                height:40px;
                width:85vw
                line-height:40px;
                font-size:30px;
                border:0px;
            .fenGeXian
                width:auto
                margin:10px 10px 10px 0px
                border-bottom:2px solid #F9F9FB
        .tiJiaoBut 
            width:95%
            height:44px
            border-radius:21px
            color:#ffffff
            border:0px solid
            background: -webkit-gradient(linear, left top, right bottom, color-stop(10%,#1DE7A7), color-stop(80%,#22D3F5))
</style>
