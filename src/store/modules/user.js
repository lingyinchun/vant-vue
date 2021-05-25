import { registerUser, loginFn } from '@/api/login'

const state = {
  userInfo: {},
  token: ''
}
const mutations = {
  SET_USER_INFO(state, data) {
    state.userInfo = data
  },
  SET_TOKEN(state, data) {
    state.token = data
  }
}
const actions = {
  // 注册
  registerAc({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      const res = await registerUser(data)
      if (res.code === 200) {
        commit('SET_TOKEN', res.data.token)
        commit('SET_USER_INFO', res.data)
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
  // 登录
  loginAction({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      const res = await loginFn(data)
      if (res.code === 200) {
        commit('SET_TOKEN', res.data.token)
        commit('SET_USER_INFO', res.data)
        resolve(res)
      } else {
        reject(res)
      }
    })
  }
}
export default {
  state,
  mutations,
  actions
}
