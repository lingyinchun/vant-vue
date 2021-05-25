export const user = {
  register: '/mall-api/user-c/c/h5/register',
  login: '/mall-api/user-c/c/h5/login', // 手机快速登录
  passwordLogin: '/mall-api/user-c/c/wechat/login/account', // 账号密码登录
  getUserGrowthProgress: '/mall-api/user-c/c/userGrowth/getUserGrowthProgress', // VIP成长值
  getAllUserLevel: '/mall-api/user-c/c/userLevel/getAllUserLevel', // 所有用户等级
  getUserGrowthRule: '/mall-api/user-c/c/userGrowth/getUserGrowthRule', //
  updatePersonalData: '/mall-api/user-c/c/user/updatePersonalData', // 修改个人资料
  getUserInfo: '/mall-api/user-c/c/user/getUserInfo',
  sendDynamicCode: '/mall-api/user-c/c/user/sendDynamicCode', // 验证码
  getCollectRelevantCount: '/mall-api/user-c/c/userCollect/getCollectRelevantCount', // 获取个人中心数量信息
  translationWeChatAddresses: '/mall-api/user-c/c/userAddress/createUserAddressByWechat', // 转换微信地区
  createUserAddress: '/mall-api/user-c/c/userAddress/add', // 新增用户收货地址
  getUserAddressList: '/mall-api/user-c/c/userAddress/query', // 获取用户地址列表
  updateUserAddress: '/mall-api/user-c/c/userAddress/update', // 修改用户地址
  deleteUserAddress: '/mall-api/user-c/c/userAddress/delete/', // 删除地址
  getUserAddressDetail: '/mall-api/user-c/c/userAddress/get/', // 获取地址详情
  addToFavorites: '/mall-api/user-c/c/userCollect/add', // 加入收藏
  addUserBrowse: '/mall-api/user-c/c/userBrowse/add', // 创建用户浏览
  deleteUserBrowse: '/mall-api/user-c/c/userBrowse/delete', // 删除用户浏览
  queryUserBrowse: '/mall-api/user-c/c/userBrowse/getAllBrowse', // 获取用户浏览列表
  queryCollection: '/mall-api/user-c/c/userCollect/getBySkuCode/', // 查询商品是否已收藏
  cancelCollection: '/mall-api/user-c/c/userCollect/deleteByCollectId', // 取消收藏
  queryCollectionList: '/mall-api/user-c/c/userCollect/query', // 获取用户收藏列表
  userInvoiceAdd: '/mall-api/user-c/c/userInvoice/dynamicUserInvoice', // 创建用户发票
  userInvoiceDelete: '/mall-api/user-c/c/userInvoice/delete', // 删除用户发票
  userInvoiceGet: '/mall-api/user-c/c/userInvoice/getInvoice', // 获取用户发票
  userInvoiceQuery: '/mall-api/user-c/c/userInvoice/query', // 用户发票列表
  userInvoiceUpdate: '/mall-api/user-c/c/userInvoice/update', // 更新用户发票
  getUserIntegral: '/mall-api/user-c/c/userIntegralRecord/getUserIntegral', // 获取用户积分
  getUserIntegralList: '/mall-api/user-c/c/userIntegralRecord/query', // 获取用户积分
  takeCoupon: '/mmc-c/c/userCoupon/takeCoupon', // 获取优惠券
  queryUserCoupon: '/mmc-c/c/userCoupon/queryUserCoupon' // 获取用户优惠券
}

export const order = {
  getOrderCount: '/mall-api/order-c/c/order/getOrderCount', // 获取订单状态数量
  getOrderList: '/mall-api/order-c/c/order/query', // 获取订单列表
  addToCart: '/mall-api/order-c/c/shoppingCart/add', // 加车
  getCartList: '/mall-api/order-c/c/shoppingCart/list', // 购物车列表
  updateCartSelected: '/mall-api/order-c/c/shoppingCart/updateSelected', // 购物车每项选中状态
  deleteCartItem: '/mall-api/order-c/c/shoppingCart/delete', // 删除购物车商品
  updateCartItemNumber: '/mall-api/order-c/c/shoppingCart/updateNumber',
  initOrder: '/mall-api/order-c/c/order/init', // 初始化订单
  showOrder: '/mall-api/order-c/c/order/show', //  获取初始化订单数据
  setOrderAddress: '/mall-api/order-c/c/order/setAddressCache', // 设置订单地址
  setOrderInvoice: '/mall-api/order-c/c/order/setInvoiceCache', // 设置订单发票
  setOrderCoupon: '/mall-api/order-c/c/order/setCouponCache',
  submitOrder: '/mall-api/order-c/c/order/add', // 提交订单
  createPay: '/pay-c/c/wxpay/add/', // 拉起微信支付
  deleteOrder: '/mall-api/order-c/c/order/delete/', // 删除订单
  cancelOrder: '/mall-api/order-c/c/order/cancel', // 取消订单
  getCancelReason: '/mall-api/order-c/c/order/getCancelReasons', // 获取取消订单原因
  getOrderDetail: '/mall-api/order-c/c/order/get/' // 获取订单详情
}

export const goods = {
  getHomeGoods: '/mall-api/goods-c/c/goods/getHomeGoods', // 获取首页商品
  getItemDetail: '/mall-api/goods-c/c/goods/get/', // 商品详情
  getCategory: '/mall-api/goods-c/c/goodsCategory/getNavList',
  getCategoryByParentID: '/mall-api/goods-c/c/goodsCategory/getByParentId/'
}

export const search = {
  getSearchList: '/mall-api/goods-c/c/search/list', // 获取搜索列表
  getHotSearchWords: '/mall-api/goods-c/c/search/hotWords', // 获取热搜词
  getHistorySearchWords: '/mall-api/goods-c/c/search/get', // 获取历史搜索词
  deleteHistoryWords: '/mall-api/goods-c/c/search/delete/', // 删除历史搜索词·
  getAssociatedWords: '/mall-api/goods-c/c/search/auto' // 获取联想词
}

export const cms = {
  getHomeBanner: '/mall-api/cms-c/c/advert/wx/applet/getHomeBanner',
  getHomeGuide: '/mall-api/cms-c/c/advert/wx/applet/getHomeGuide'
}
