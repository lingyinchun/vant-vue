const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  userName: state => state.user.nickName || state.user.userName || state.user.mobile || '暂未设置用户名'
}
export default getters
