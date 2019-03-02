<template>
  <div id="home-list">
    <div class="m-box clearfix">
      <!--新书上架-->
      <h3 class="f-b clearfix">
        <div class="f-l"><em></em><span class="f-title">{{heading}}</span></div>
        <a class="f-r more">更多></a>
      </h3>
      <ul class="m-list clearfix">
        <li v-for="book in books" :key="book.id" v-on:click="$emit('onBookSelect', book)">
          <div class="m-pic" >
            <img :src="book.img_url">
            <div class="clearfix">
              <h4>{{book.title}}</h4>
              <p>【{{book.country}}】{{book.authors | join}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-list',
  props: [
    'heading',
    'books'
  ],
  filters: {
    join: function (args) {
      return args + (',')
    }
  }
}
</script>

<style scoped lang="less">
.m-box {
    padding: .3rem;
    margin-bottom: .2rem;
    background-color: #fff;
    h3.f-b {
      font-size: .32rem;
      em{
        display: inline-block;
        background: #ED6460;
        border-radius: .03rem;
        width: .05rem;
        height: .22rem;
        margin-right: .08rem;
      }
      .f-title {
        height: .8rem;
        line-height: .8rem;
        padding-bottom: .2rem;
        font-size: .32rem;;
        color: #ED6460;
        display: inline-block;
        font-weight: bold;
      }
      .more{
        height: .8rem;
        line-height: .8rem;
        font-size: .24rem;
        font-weight: normal;
        color: #aba59a;
      }
    }
    .m-list{
      width: 100%;
      transition: opacity .5s;
      -moz-transition: opacity .5s;
      -webkit-transition: opacity .5s;
      -o-transition: opacity .5s;
      li {
        position: relative;
        float: left;
        width: 30%;
        margin-right: 5%;
        margin-bottom: .2rem;
        &:nth-child(3n+3){margin-right: 0;}
        .m-pic{
          display: block;
          img{
            width: 100%;
          }
          h4{
            font-size: .28rem;
            height: .72rem;
            line-height: .36rem;
            max-height: .72rem;
            margin: .1rem 0;
            overflow: hidden;
            font-weight: normal;
            color: #6c6358;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p {
            color: #aba59a;
            line-height: .26rem;
            height: .26rem;
            font-size: .24rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
