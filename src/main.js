// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'  // 引入swiper
Vue.use(VueResource)
// 引入mint-ui (全局引入)
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)
// import './style/base/_base.css'
// 使用swiper
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import './config/rem'
import './style/base/_base.scss'

import {
	Header,
	Button,
	Tabbar,
	TabItem,
	Cell,
	TabContainer,
	TabContainerItem
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Cell.name, Cell)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<Layout/>',
	components: {
		Layout
	}
})
