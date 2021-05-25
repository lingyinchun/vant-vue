import {createPay} from "../api/order";
import Dialog from "../../wxcomponents/vant/dialog/dialog";

export default {
  methods: {
    async onPay(orderCode) {
      return new Promise(async (resolve, reject) => {
        const wxpayRes = await createPay(orderCode)
        uni.hideLoading()
        if (wxpayRes.code === 200) {
          await uni.requestPayment({
            provider: 'wxpay',
            ...wxpayRes.data,
            success(res) {
              resolve(res)
            },
            fail(res) {
              reject(res)
            }
          })
        } else {
          uni.showToast({
            title: wxpayRes.message,
            icon: 'none'
          })
          reject()
        }
      })
    }
  }
}
