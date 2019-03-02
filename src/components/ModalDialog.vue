<template>
  <div  class="dialog-wrapper" :class="{'open': is_open}">
    <div class="overlay" v-on:click="close"></div>
    <div class="dialog">
      <div class="heading">
        <slot name="heading">
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_open: false
    }
  },
  methods: {
    open () {
      this.is_open = true
      this.$emit('dialogopen')
    },
    close () {
      this.is_open = false
      this.$emit('dialogclose')
    }
  }
}
</script>

<style scoped lang="less">
.dialog-wrapper{
  height: 100%;
  display: none;
  &.open{
    display: block;
  }
  & > .overlay{
    background: rgba(0,0,0,.5);
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  & > .dialog{
    position:fixed;
    top:.6rem;
    left:.6rem;
    right:.6rem;
    bottom:.6rem;
    z-index: 20;
    box-shadow: 0 0 .1rem rgba(0, 0, 0, .8);
    background: #fff;
    & heading {
      padding: .12rem;
    }
  }
}

</style>
