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
          <svg width="70" height="16" viewBox="0 0 70 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M40.6147 14.1909C40.6147 14.3201 40.651 14.3906 40.7356 14.3906C40.7961 14.3906 40.8444 14.3671 40.9049 14.3319L62.7111 0.552129C63.0979 0.305433 63.4485 0.176211 63.9682 0.176211H68.7671C69.5044 0.176211 70 0.657856 70 1.37445V10.2673C70 11.3363 69.7582 11.9589 68.7671 12.5345L62.9529 15.9295C62.8803 15.9765 62.8078 16 62.7594 16C62.6869 16 62.6265 15.953 62.6265 15.7533V5.36858C62.6265 5.2511 62.5902 5.16887 62.5056 5.16887C62.4452 5.16887 62.3968 5.19236 62.3364 5.22761L46.3927 15.2952C45.9454 15.5771 45.5828 15.6593 45.1718 15.6593H34.5951C33.8577 15.6593 33.3621 15.1777 33.3621 14.4611V1.65639C33.3621 1.56241 33.3138 1.48018 33.2412 1.48018C33.1808 1.48018 33.1324 1.50367 33.072 1.53891L22.5557 7.68282C22.4469 7.74156 22.4227 7.80029 22.4227 7.84728C22.4227 7.89427 22.4348 7.92952 22.5194 8L30.0259 15.2952C30.1226 15.3891 30.1951 15.4714 30.1951 15.5419C30.1951 15.6241 30.0863 15.6711 29.9534 15.6711H23.1601C22.6282 15.6711 22.2172 15.5888 21.9271 15.3069L17.3701 10.8781C17.3217 10.8311 17.2854 10.8076 17.2371 10.8076C17.2008 10.8076 17.1404 10.8311 17.092 10.8546L9.47677 15.3069C9.01744 15.5771 8.70316 15.6593 8.24383 15.6593H1.23295C0.495597 15.6593 0 15.1777 0 14.4611V5.73275C0 4.65198 0.241755 4.04112 1.23295 3.46549L7.0834 0.0469899C7.14384 0.0117476 7.19219 0 7.24055 0C7.32516 0 7.37351 0.0939796 7.37351 0.281938V11.9589C7.37351 12.0764 7.40977 12.1351 7.49439 12.1351C7.54274 12.1351 7.60318 12.0999 7.66362 12.0646L27.427 0.516887C27.8985 0.246696 28.1886 0.164464 28.7325 0.164464H39.3697C40.1071 0.164464 40.6027 0.646109 40.6027 1.3627L40.6147 14.1909Z"/></svg>
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