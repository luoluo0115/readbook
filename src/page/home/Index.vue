<template>
  <div id="index">
    <div class="content">
      <router-view></router-view>
    </div>
    <div>
      <v-footer ></v-footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'index',
  components: {
    'v-footer': Footer
  }
}
</script>

<style scoped>
.content{
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  background: #f5f5f5;
  padding-bottom: .8rem;
  box-sizing: border-box;
  overflow: hidden;
}
footer{
  overflow: hidden;
}
</style>
