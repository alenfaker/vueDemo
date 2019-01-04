<template>
  <div id="app">
    <div class="app-header">
        <header-top></header-top>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view>

        </router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <tab-bar v-bind:isSelected = "selected" :tabs='tabs'></tab-bar>
    </div>
  </div>
</template>

<script>
import tabBar from './tabBar';
import headerTop from './headerTop';
export default {
  components: {tabBar,headerTop},
  name: 'Layout',
  data() {
     return {
      selected: 'home',
       tabs: [
        {
          name: '首页',
          icon: require('~static/images/common/home.png'),
          iconActive: require('~static/images/common/home-foucs.png'),
          id: 'home',
          active: false
        },
        {
          name: '投资',
          icon: require('~static/images/common/tz.png'),
          iconActive: require('~static/images/common/tz-foucs.png'),
          id: 'invest',
          active: false
        },
        {
          name: '发现',
          icon: require('~static/images/common/find.png'),
          iconActive: require('~static/images/common/find-foucs.png'),
          id: 'version',
          active: false
        },
        {
          name: '个人',
          icon: require('~static/images/common/me.png'),
          iconActive: require('~static/images/common/me-foucs.png'),
          id: 'user',
          active: false
        }
      ]
     }
  },
  computed: {
   
  } ,
  method: {
    changeTab: function () {
      //  if (this.selected === this.id) {
      //    bool = true;
      //  }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
