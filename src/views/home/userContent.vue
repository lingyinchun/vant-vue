<!-- home -->
<template>
  <div class="user_content">
    <div class="center-top">
      <div class="user-setting">
        <van-icon
          name="setting-o"
          size="24px"/>
      </div>
      <div class="user-info">
          <van-image
            round
            src="https://staples-fuli.oss-cn-shanghai.aliyuncs.com/osc-web/1594964747179_23.54984255436473_54357b1b-9000-4c44-83f9-de8924b4253e.jpg"
          />
        <div class="username" v-if="!isLogin">
          <div
            class="f18">
            立即登录
          </div>
          <span>登录体验更多</span>
        </div>
        <div class="username" v-if="isLogin">
          <span class="f18">{{userInfo.nickName}}</span>
        </div>
      </div>
      <div class="balance">
        <div >
          <span class="f16">{{collectRelevantCount.collect || 0}}</span>
          <span class="c6">我的收藏</span>
        </div>
        <div >
          <span class="f16">{{collectRelevantCount.browse || 0}}</span>
          <span class="c6">浏览记录</span>
        </div>
        <div >
          <span class="f16">{{collectRelevantCount.integral || 0}}</span>
          <span class="c6">积分</span>
        </div>
        <div >
          <span class="f16">{{collectRelevantCount.coupon || 0}}</span>
          <span class="c6">优惠券</span>
        </div>
      </div>
      <div class="vip-card" :style="{'background-color':vipBackground}">
        <div class="level-name f16" v-if="isLogin">{{vipInfo.currentLevelName}}</div>
        <div class="level-name f16" v-if="!isLogin">您还不是会员，可注册成为会员哦</div>
        <div class="level-link f12">
          <div><span>{{isLogin? vipInfo.growth : '0' }}</span>成长值</div>
          <span class="vip-level-link" >查看会员等级 ></span>
        </div>
        <div style="margin-top: 10px;">
          <van-progress color="#f2826a" :percentage="vipInfo.speedLevel || 0" />
        </div>
        <div v-if="isLogin && vipInfo.nextLevelGrowth" class="vip-info f12">再获取{{vipInfo.nextLevelGrowth}}成长值即可成为{{vipInfo.nextLevelName}}</div>
        <div v-if="!isLogin" class="vip-info f12">登录查看会员成长值</div>
      </div>
    </div>
    <div class="center-order">
      <div class="more-orders">
        <van-cell
          is-link
          value="全部订单">
          <div slot="title">
            <div class="van-cell-text">我的订单</div>
          </div>
        </van-cell>
        <van-grid column-num="4" :border="false">
          <van-grid-item
            style="color: #e1bd85;"
            icon="pending-payment"
            text="待付款"
            :badge="orderCount.pendingPayment || null"
            />
          <van-grid-item
            style="color: #e1bd85;"
            icon="todo-list-o"
            text="待发货"
            :badge="orderCount.pendingshippment || null"
            />
          <van-grid-item
            style="color: #e1bd85;"
            icon="logistics"
            text="待收货"
            :badge="orderCount.pendingReceiving|| null"
            />
          <van-grid-item
            style="color: #e1bd85;"
            icon="comment-o"
            text="待评价"
            :badge="orderCount.pendingEvaluate|| null"
            />
        </van-grid>
      </div>
    </div>
    <div class="center-tools">
      <van-cell title="常用工具"/>
      <van-grid column-num="4" :border="false">
        <van-grid-item icon="location" text="收货地址" style="color: #ec6862;" />
        <van-grid-item icon="manager" text="个人资料" style="color: #db548e;" />
        <van-grid-item icon="service" text="客服" style="color: #867ee0;" />
        <van-grid-item icon="description" text="增票资质" style="color: #c771e5;" />
        <van-grid-item icon="gift-card" text="领券中心" style="color: #D32F2F;" />
      </van-grid>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getCollectRelevantCount, getUserGrowthProgress } from '@/api/user'
import { getOrderCount } from '@/api/order'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: 'login',
      vipInfo: {},
      orderCount: {},
      collectRelevantCount: {}
    }
  },
  computed: {
    ...mapGetters(['userName']),
    vipBackground() {
      return this.vipInfo?.backGroundColor || '#e0b36c'
    }
  },
  created() {
    if (this.isLogin) {
      this.getOrderCount()
      this.getUserGrowthProgress()
      this.getCollectRelevantCount()
    }
  },
  methods: {
    async getUserGrowthProgress() {
      const res = await getUserGrowthProgress()
      if (res.code === 200) {
        this.$set(this, 'vipInfo', res.data || {})
        this.vipInfo.speedLevel = parseInt(res.data.speedLevel)
        console.log(this.vipInfo.speedLevel)
      } else {
        this.$toast.fail(res.message)
      }
    },
    async getCollectRelevantCount() {
      const res = await getCollectRelevantCount()
      if (res.code === 200) {
        this.$set(this, 'collectRelevantCount', res.data)
      } else {
        this.$toast.fail(res.message)
      }
    },
    async getOrderCount() {
      const res = await getOrderCount()
      if (res.code === 200) {
        this.$set(this, 'orderCount', res.data)
      } else {
        this.$toast.fail(res.message)
      }
    }
  }
}
</script>
<style lang="scss">
.user_content {
  .center-top {
    position: relative;
    padding-bottom: 60px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fae3b4;
    .user-setting {
      position: absolute;
      top: 60px;
      right: 10px;
      justify-content: flex-end;
      .van-icon {
        margin-right: 20px;
      }
    }

    .user-info {
      /*height: 300px;*/
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      padding: 0 20px;

      .avatar {
        width: 100px;
        margin: 0 22px;

        //image {
        //  width: 92px;
        //  height: 92px;
        //  border: 8px solid #fff;
        //  border-radius: 50%;
        //}
      }

      .username {
        margin-left: 20px;
        width: 400px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 15px;
        /*align-items: center;*/

        button {
          margin: 0;
          width: 200px;
        }
      }
    }

    .balance {
      display: flex;
      flex-direction: row;
      height: 60px;
      margin-top: 15px;
      font-size: 14px;
      & > div {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text {
          line-height: 1.4;
        }
      }
    }
    .vip-card {
      height: 100px;
      width: 94vw;
      position: absolute;
      bottom: -50px;
      box-sizing: border-box;
      left: 3vw;
      background-color: #e0b36c;
      border-radius: 10px;
      padding: 10px 20px;
      color: #fff;
      .level-link {
        display: flex;
        justify-content: space-between;
      }
      .vip-info {
        margin-top: 10px;
      }
    }
  }
  .center-order {
    background-color: #fff;
    margin-top: 70px;
    width: 94vw;
    margin-left: 3vw;
  }
  .center-tools {
    background-color: #fff;
    height: auto;
    margin-top: 20px;
    width: 94vw;
    margin-left: 3vw;
  }
}
</style>
