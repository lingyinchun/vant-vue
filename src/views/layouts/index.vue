<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer" v-if='!$route.meta.isHideTab'>
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home-o',
          activeIcon: 'wap-home'
        },
        {
          title: '分类',
          to: {
            name: 'category'
          },
          icon: 'cluster-o',
          activeIcon: 'cluster'
        },
        {
          title: '购物车',
          to: {
            name: 'cartPage'
          },
          icon: 'cart-o',
          activeIcon: 'cart'
        },
        {
          title: '我',
          to: {
            name: 'userContent'
          },
          icon: 'manager-o',
          activeIcon: 'manager'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>

<style lang="scss">
.layout-footer{
  .van-tabbar{
    background: #fdfdfd;
  }
}
</style>
