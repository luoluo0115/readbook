<template>
  <div id="silder">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="banner in banners" :key="banner.id">
        <router-link  :to="{ name:'BookDetail', params:{ id: banner.id}}">
          <img :src="banner.img_url" class="swp-img" >
        </router-link>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination" ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'silder',
  props: [
    'banners'
  ],
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true
      }
    }
  }
}
</script>

<style scoped>

</style>
