import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      themeColor: '#e0b36c'
      // isFullScreenDevice: false
    }
  },
  // onLoad() {
  // uni.getSystemInfo().then(res => {
  // 	const {bottom} = res[1].safeArea
  // 	this.isFullScreenDevice =(res[1].screenHeight - bottom) > 0
  // })
  // },
  methods: {
    log(data) {
      console.log(JSON.parse(JSON.stringify(data)))
    },

    /**
     * navigatorTo跳转页面
     * @param {String} url
     * @param {Object} options
     * @param {Boolean} options.needLogin 是否检测登录
     */
    navTo(url, options = {}) {
    },
    checkLogin() {
      if (!this.isLogin) {
        return false
      } else {
        return true
      }
    },
    stopPrevent() {
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    isLogin() {
      return !!this.$store.state.user.token
    }
  }
}
