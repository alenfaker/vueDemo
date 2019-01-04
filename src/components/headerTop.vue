<template>
    <div class="header-top">
         <mt-header title="e融所">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click='go(-1)'>返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
    export default {
        name: 'headerTop',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
