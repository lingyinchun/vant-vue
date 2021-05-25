export default {
  data() {
    return {
      renderList: [],
      hasNextPage: true,
      isLoading : false,
      pageSetting: {
        pageSize: 20,
        pageNo: 1
      }
    }
  },

  methods: {
    /**
     * @param {Function} listRequest 获取列表方法
     * @param {Function} getResultList 获取数据后操作返回的list
     * @return {Promise<void>}
     */
    async getLoadingList(listRequest,getResultList) {
      if (!this.hasNextPage || this.isLoading) {
        return
      }
      this.isLoading = true
      try {
        const params = JSON.parse(JSON.stringify(this.pageSetting))
        for (let key in params) {
          if (!params[key]) {
            delete params[key]
          }
        }
        const res = await listRequest(params)
        if (res.code === 200) {
          this.hasNextPage = res.data.hasNextPage
          this.renderList = this.renderList.concat(getResultList(res))
          this.pageSetting.pageNo = ++this.pageSetting.pageNo
        } else {
          uni.showToast({
            title: res.message,
            icon: 'none'
          })
        }
      } catch (e) {
      }
      this.isLoading = false
    }
  }
}
