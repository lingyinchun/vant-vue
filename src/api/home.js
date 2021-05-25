import qs from 'qs'
// axios
import { user } from './index'
// axios
import request from '@/utils/request'

export function getUserInfo(params) {
  return request({
    url: user.UserInfo,
    method: 'post',
    data: qs.stringify(params),
    hideLoading: true // 隐藏 loading 组件
  })
}

export function getCode() {
  return request({
    url: user.getCode,
    method: 'post'
  })
}

