<!-- home -->
<template>
  <div class="login_container">
    <van-nav-bar
      :title="$route.meta.title"
      left-arrow
      :fixed='true'
      @click-left="onClickLeft"
      :placeholder="true"
    />
    <div class="content">
      <van-field
        v-model="mobile"
        center
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      >
      </van-field>
      <van-field
        v-model="code"
        center
        required
        clearable
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" type="primary" plain @click='getMobileCode' :disabled="codeTime!==0">
            发送验证码{{codeTime===0?'':codeTime}}</van-button>
        </template>
      </van-field>
    </div>
    <van-button style='width:90%;margin-top: 30px;' type="primary" size="large" round block @click="logo">注册</van-button>
  </div>
</template>

<script>
// 请求接口
import { getCode, registerUser } from '@/api/login.js'
import { checkStr } from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: false,
      mobile: '',
      code: '',
      codeTime: 0,
      timeFn: null
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件

    },
    getMobileCode() {
      if (!this.mobile) {
        this.$toast.fail('请输入手机号')
        return
      }
      if (!checkStr(this.mobile, 'mobile')) {
        this.$toast.fail('请输入正确的手机号')
        return
      }
      getCode({ moblie: this.mobile, sendType: 2 })
        .then((res) => {
          if (res.code === 200) {
            this.codeTime = 10
          } else {
            this.$toast.fail(res.message)
            this.codeTime = 5
          }
          this.timeFn = setInterval(() => {
            if (this.codeTime > 0) {
              this.codeTime--
            } else {
              this.codeTime = 0
              clearInterval(this.timeFn)
              this.timeFn = null
            }
          }, 1000)
        })
        .catch(() => { })
    },
    logo() {
      if (!this.mobile) {
        this.$toast.fail('请输入手机号')
        return
      }
      if (!this.code) {
        this.$toast.fail(请输入验证码)
        return
      }
      this.$store.dispatch('registerAc', { mobile: this.mobile, dynamicCode: this.code }).then((res) => {
        if (res.code === 200) {
          this.$toast.success('注册成功,正在跳转')
          this.$router.push({ path: '/home' })
        }
      }).catch(() => {
      })
    },
    onClickLeft() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login_container{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title{
    margin-top: 10px;
    color: #666666;
    font-size: 14px;
  }
  .content{
    width: 100%;
  }
}
</style>
