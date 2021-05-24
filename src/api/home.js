import qs from 'qs'
// axios
import api from './index'
// axios
import request from '@/utils/request'

export function getUserInfo(params) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data: qs.stringify(params),
    hideLoading: true // 隐藏 loading 组件
  })
}

export function getCode() {
  return request({
    url: api.getCode,
    method: 'post'
  })
}

