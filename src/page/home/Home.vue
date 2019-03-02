 <template>
    <div id="home" v-if="page_data">
      <div class="section">
       <slider :banners="page_data.banners"></slider>
      </div>
      <div class="section">
        <home-list :books="page_data.latestUpdated" heading="最新更新" v-on:onBookSelect="preview($event)">
        </home-list>
      </div>
      <div class="section">
        <home-list :books="page_data.recommended" heading="编辑推荐" v-on:onBookSelect="preview($event)">
        </home-list>
      </div>
      <modal-dialog ref="modaldialog" >
        <div slot="heading">
        </div>
        <div>
          <div v-if="selected">
          {{selected.title}}
          </div>
        </div>
      </modal-dialog>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HomeList from '../../components/HomeList'
import Slider from '../../components/Silder'
import PageList from '../../assets/js/pagelist'
import ModalDialog from '../../components/ModalDialog'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide,
    Slider,
    HomeList,
    ModalDialog
  },
  data () {
    return {
      page_data: undefined,
      selected: undefined
    }
  },
  methods: {
    preview (book) {
      this.selected = book
      alert(book.title)
      this.$refs.modaldialog.open()
    }
  },
  created () {
    this.page_data = PageList.getHomeData()
  }
}
</script>

<style scoped lang="less">
.swp-img{
  display: block;
  width: 100%;
}
</style>
