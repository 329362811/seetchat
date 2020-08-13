<template>
    <!--结算-->
    <div class="searchIndex">
        <div class="head-div">
            <form action="/">
                <van-search
                    v-model="searchValue"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </div>

    </div>

</template>

<script>
export default {
  data () {
    return {
        title:'搜索',
        searchValue: ''
    }
  },
  computed: {
  },
  methods: {
    onSearch(val) {

    },
    onCancel() {
        let url = "/pages/index/main"
        wx.reLaunch({url}) //即能跳转到tabBar页面，也能跳转到非tabBar页面，不带历史回退
        //wx.navigateTo({url})
    }
  },
  onLoad () {
    
  },
  watch: {
  }
}
</script>
<style lang="stylus" scoped>
    .searchIndex
        width:100vw
        height 250px
        .van-nav-bar
            background-color unset
        .head-div
            padding 60rpx 20rpx 0 20rpx
            line-height 30px
</style>
