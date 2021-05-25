import { user } from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: user.Login,
    method: 'post',
    data
  })
}
// 会员登记信息
export function getUserGrowthProgress() {
  return request({
    url: user.getUserGrowthProgress,
  })
}

export function getCollectRelevantCount() {
  return request({
    url: user.getCollectRelevantCount,
    method: 'post'
  })
}
