<template>
  <div class="relative">
    <Breadcrump :breadcrumpItems="breadcrumpItems"/>
    <div class="conf sidebar-wrapper">
      <div class="container-p">
        <div class="entry-header">
          <h1>Конфигуратор</h1>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li class="active">
              <b class="color-1">01</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">02</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">03</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">04</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">04</b>
              <p>Выбор модели</p>
            </li>
          </ul>
        </div>
        <div class="conf-steps">
          <div class="conf-crs m-v-30">
            <div class="conf-crs-items owl-carousel owl-btn-2">
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="img-content">
                    <img src="https://cdn.kia.ru/resize/150x73/master-data/models/K5_half.png" alt="">
                  </div>
                  <div class="desc-content">
                    <h4>K5</h4>
                    <p>от 1 509 900 ₽</p>
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div class="conf-main-crs">
            <div class="carousel-def owl-carousel owl-btn-2">
              <figure>
                <div class="fig-wrapper">
                  <div class="desc-content">
                    <h2>k5</h2>
                  </div>
                  <div class="img-content m-t-30">
                    <img src="https://cdn.kia.ru/resize/750x366/master-data/models/stinger.png" alt="">
                  </div>
                </div>
              </figure>
              <figure>
                <div class="fig-wrapper">
                  <div class="desc-content">
                    <h2>k5</h2>
                  </div>
                  <div class="img-content m-t-30">
                    <img src="https://cdn.kia.ru/resize/750x366/master-data/models/stinger.png" alt="">
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="theiaStickySidebar">
        <div class="conf-down">
          <div class="container-p">
            <div class="flex-wrapper">
              <span class="btn-def">
                <a href="javascript:;">Далее</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import mainjs from '@/static/js/main'

export default {
  head() {
    return {
      title: this.page.seo.title,
      meta: [
        {
          content: this.page.seo.description
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path
      })
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  data(){
    return {
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Конфигуратор',link: '/'},
      ],
    }
  },
  mounted(){
    mainjs();
  },
  methods: {}
}

</script>