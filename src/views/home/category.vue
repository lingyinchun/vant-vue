<!-- home -->
<template>
  <div class="category">
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="类型1" />
        <van-sidebar-item title="类型2" />
        <van-sidebar-item title="类型3" />
      </van-sidebar>
    </div>
    <div class="right_box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: '1',
      list: [],
      loading: false,
      finished: false,
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
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>
.category {
  display: flex;
  height: calc(100vh - 50px);
  overflow: hidden;
  .right_box{
    flex: 1;
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
