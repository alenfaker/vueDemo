<template>
  <div class='home-page'>
    <div class="index-banner-auto">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
      >
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
        <div
          class="swiper-scrollbar"
          slot="scrollbar"
        ></div>
      </swiper>
    </div>

  </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			selected: '首页',
    			swiperOption: {
    				// some swiper options/callbacks
    				// 所有的参数同 swiper 官方 api 参数
    				// ...reset
    				pagination: {
    					el: '.swiper-pagination'
    				},
    				speed: 300,
    				autoplay: {
    					delay: 1000
    				}
    			},
    			swiperSlides: [1, 2, 3, 4, 5]
    		}
	},
    	computed: {
    		swiper() {
    			return this.$refs.mySwiper.swiper
    		}
    	},
    	mounted() {
    		this.initBanner()
	},
    	methods: {
    		initBanner() {
    			this.$http
    				.jsonp(
    					'https://www.myerong.com/sysInfo.action?method=advServletByStrType&strType=PC',
    					{},
    					{
    						headers: {},
    						emulateJSON: true
    					}
    				)
    				.then(response => {
    					console.info(response)
    				})
		}
    	}
    }
</script>
<style lang='scss'>
.home-page {
  .index-banner-auto {
    height: rem;
  }
}
</style>
