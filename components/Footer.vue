<template>
  <footer id="footer">
    <div class="container-p">
      <div class="text-item color-gray footer-text collapse m-v-20" id="footer-text" style="height: 0px;">
        <p>Сведения о ценах на продукцию бренда Kia, содержащиеся на сайте, носят исключительно информационный характер. Указанные цены могут отличаться от действительных цен дилеров Kia. Для получения подробной информации об актуальных ценах на продукцию Kia обращайтесь к дилерам Kia. Приобретение любой продукции бренда Kia осуществляется в соответствии с условиями индивидуального договора купли-продажи. Представленные изображения автомобиля могут отличаться от реализуемого.</p>
      </div>
      <br>
      <hr>
      <br>
      <div class="footer-content m-v-30">
        <div class="footer-logo">
          <img src="/img/logo-white.png">
        </div>
        <div class="flex-adaptive footer-main">
          <div class="footer-menu">
            <ul class="item">
              <li v-for="(item, key) in menu_data.menus" :key="key" v-if="!item.subsections">
                <nuxt-link v-if="!item.subsections" :to="item.url" active-class="active">
                  {{item.name}}
                </nuxt-link>
              </li>
            </ul>
            <template v-for="(item) in menu_data.menus" v-if="item.id == 907">
              <ul class="item" v-for="(item, key) in item.subsections" :key="key" v-if="key < 3">
                <h4>{{item.name}}</h4>
                <li v-for="(subitem, key) in item.values" :key="key">
                  <nuxt-link :to="subitem.url">{{subitem.name}}</nuxt-link>
                </li>
              </ul>
            </template>
          </div>
          <div class="footer-info">
            <div>
              <p>Информационная линия Kia</p>
              <h4 class="m-t-0"><a :href="'tel:'+menu_data.phone">{{menu_data.phone | spacePhone}}</a></h4>
            </div>
            <br><br>
            <div class="footer-soc">
              <p>Kia в соцсетях</p>
              <ul class="m-t-5">
                <li v-for="(item, key) in menu_data.socials" :key="key">
                  <a :href="item.url" target="_blank" :title="item.name" v-html="item.icon"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="footer-feedback clearfix">
        <div class="flex-adaptive">
          <div class="col-md-8">
            <p><small>ООО «Roodell» ведет деятельность на территории Республики Узбекистан в соответствии с законодательством Республики Узбекистан. Реализуемые товары доступны к получению на территории Республики Узбекистан. Мониторинг потребительского поведения субъектов, находящихся за пределами Республики Узбекистан, не ведется. Информация о соответствующих моделях и комплектациях и их наличии, ценах, возможных выгодах и условиях приобретения доступна у дилеров Kia на территории Республики Узбекистан. Товар сертифицирован. Не является публичной офертой.</small></p>
            <br><br>
            <ul class="list-inline color-gray-4 font-size-1 hide">
              <li><a href="">Правовая информация</a></li>
              <li><a href="">Сообщить об ошибке на сайте</a></li>
            </ul>
          </div>
          <div class="col-md-4 text-right-md hide">
            <span class="btn-opacity color-white">
              <nuxt-link to="/feedback">Обратная связь</nuxt-link>
            </span>
            <br><br>
            <p class="copyright"><small>LifeStyle</small></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    data(){
      return{
        menu_data: [],
      }
    },
    async created(){
      this.menu_data = await this.$axios.$get('https://api.kia-motors.uz/menu');
    },
  }
</script>
<style scoped lang="scss">
  .footer-menu{
    .item{
      @media (min-width: 1600px){
        min-width: 16%;
      }
    }
  }
</style>