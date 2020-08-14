<template>
    <!--我的需求页面'-->
    <div class="myNeed">
        <div class="xuQiuKa">
            <div class="xuQiuTile">刚失恋，聊点开心的</div>
            <div class="timeLie">
                <span>120分钟</span>
                <span class="faBuTime">1小时前</span>
            </div>
            <div class="moneyLie">
                <span class="xuQiuMoney">￥600</span>
                <span> <button type="button" class="htmlBut">删除</button></span>
            </div>
        </div>
        <div class="xuQiuKa">
            <div class="xuQiuTile">刚毕业聊聊求职如何避坑</div>
            <div class="timeLie">
                <span>120分钟</span>
                <span class="faBuTime">2小时前</span>
            </div>
            <div class="moneyLie">
                <span class="xuQiuMoney">￥210</span>
                <span> <button type="button" class="htmlBut">删除</button></span>
            </div>
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
               money: 0,
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
           //返回上一页
           fanHui:function(){
               //this.$router.go(-1);
           }
           
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>

<style>
.htmlBut{
    float: right;
    width:70px;
    height:34px;
    border-radius:23px;
    border:1px solid #4CD4D2;
    color:#4CD4D2;
    background-color: #ffffff;
    font-size: 14px;
}
</style>

<style lang="stylus" scoped>
    .myNeed
        height:667px
        width:100vw
        background-color:#F9F9FB
        .xuQiuKa
            width:auto
            height:110px
            margin-top:10px
            padding:15px
            background-color:white
            .xuQiuTile
                font-size:16px
                font-weight:bold
            .timeLie
                font-size:14px
                margin-top:8px
                color:#C1C1C1
                .faBuTime
                    margin-left:15px
            .moneyLie
                line-height:60px
                .xuQiuMoney
                    float: left
                    font-size:18px
                    color:#F23744
                .xuQiuDel
                    float: right
                    height:35px

</style>
