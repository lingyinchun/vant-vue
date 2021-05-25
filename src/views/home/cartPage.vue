<!-- home -->
<template>
  <div class="index-container">
    <van-sticky>
      <div class="top-bar">
        <div>共<span class="price">1</span>件商品</div>
        <div class="title">购物车</div>
        <div class="right">
          <div v-if="!isSelect" @click="edit">编辑</div>
          <div v-if="isSelect" @click="cancelCheck">完成</div>
        </div>
      </div>
    </van-sticky>
    <div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      isSelect: false,
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {},
  mounted() { },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    edit() {},
    cancelCheck() {},
    onSubmit() {}
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .top-bar{
    box-sizing: border-box;
    border-bottom: 5px solid #f2f2f2;
    height: 46px;
    padding: 0 16px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price{
      color: #ff5500;
      font-size: 14px;
      font-weight: bold;
    }
    div{
      width: 100px;
    }
    .title{
      font-size: 15px;
      color: #3c3c3c;
      text-align: center;
    }
    .right{
      text-align: right;
    }
  }
  .van-submit-bar{
    bottom: 50px;
  }
}
</style>
