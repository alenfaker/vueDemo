import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Invest from '@/pages/invest'
import Version from '@/pages/version'
import User from '@/pages/user'



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home',

		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/invest',
			name: 'Invest',
			component: Invest
		},
		{
			path: '/version',
			name: 'Version',
			component: Version
		},
		{
			path: '/user',
			name: 'User',
			component: User
		}
	]
})
