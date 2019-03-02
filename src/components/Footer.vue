<template>
<div class="tabBar">
  <router-link v-for="item in items" :key="item.id" :to="item.linkTo" class="item" :class="{active:item.isActive}">
    <div @click="activethis(item.id)">
      <i class="iconfont" :class="item.activeClass"></i>
      <span class="txt">{{item.name}}</span>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 0, isActive: true, name: '首页', activeClass: 'icon-fangzi', linkTo: '/'},
        {id: 1, isActive: true, name: '分类', activeClass: 'icon-fenlei', linkTo: '/categories'},
        {id: 2, isActive: true, name: '搜索', activeClass: 'icon-sousuo', linkTo: '/'},
        {id: 3, isActive: true, name: '购物车', activeClass: 'icon-gouwuche', linkTo: '/cart'},
        {id: 4, isActive: true, name: '我的', activeClass: 'icon-jikediancanicon03', linkTo: '/me'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
.tabBar{
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #d9d9d9;
  height: .8rem;
  .item{
    position: relative;
    text-align: center;
    i{
      font-size: .32rem;
      color: #666;
      display: block;
    }
    .txt {
      display: block;
      margin-top: .09333rem;
      font-size: .24rem;
      color: #666;
      line-height: 1;
    }
    &.active i,&.active txt{
      color: #b4282d;
    }
  }
}
</style>
