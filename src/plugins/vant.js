// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Calendar, CellGroup } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Calendar)
