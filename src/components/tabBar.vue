<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item v-for="(item, index) in tabMenus" :id = "item.id" :key = "index">
        <img slot="icon" :src="selected === item.id ? item.iconActive : item.icon">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
	name: 'tabBar',
	data() {
		return {
			selected: this.isSelected,
			tabMenus: this.tabs
		}
	},  
	props: {
		isSelected: String,
		tabs: Array
	},
	created: function () {


	},
	computed: {
		// bool: function () {
		//   if (this.selected === this.id) {
		//     return true;
		//   }
		//   return false;
		// }
	},
	watch: {
		selected: function(val) {
			switch (val) {
			case 'home':
				this.$router.push('/home')

				break
			case 'invest':
				this.$router.push('/invest')


				break
			case 'version':
				this.$router.push('/version')


				break
			case 'user':
				this.$router.push('/user')


				break
			}
		}
	}
}

</script>

<style scoped>
</style>
