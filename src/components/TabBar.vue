<template>
  <div>
    <van-tabbar fixed route v-model="active" active-color="#c63420" @change="handleChange">
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :icon="item.icon" :key="index">
        <span>{{item.title}}</span>
        <template #icon="props">
          <van-icon :name="props.active ? item.activeIcon : item.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
