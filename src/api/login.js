// axios
import { user } from './index'
// axios
import request from '@/utils/request'

export function getCode(data) {
  return request({
    url: user.sendDynamicCode,
    method: 'post',
    data: data
  })
}

export function registerUser(data) {
  return request({
    url: user.register,
    method: 'post',
    data: data
  })
}

export function loginFn(data) {
  return request({
    url: user.login,
    method: 'post',
    data: data
  })
}

