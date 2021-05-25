import { order } from './index'
// axios
import request from '@/utils/request'

// 订单数量
export function getOrderCount(data) {
  return request({
    url: order.getOrderCount
  })
}
