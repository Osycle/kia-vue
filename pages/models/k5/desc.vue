<template>
  <div>
    <div class="card-bnr relative">
      <div class="bg-video-content cover">
        <video :src="pageData.content.banners[1].video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-xs absolute" style="background-image: url('img/other/k5-card-bnr-xs.jpg');"></div>
      </div>
      <div class="container-p relative">
        <Breadcrump :pageTitle="pageTitle"/>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center"><span>от {{pageData.content.model.min_price | spaceBetweenNum}} сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5">·</span>
            <span class="btn-def style-2 m-l-20"><a href="feedback.html">Связаться с нами</a></span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">{{pageData.content.banners[1].logo.label}}</div>
                <img :src="pageData.content.banners[1].logo.image">
                <div class="font-size-nm m-t-10">{{pageData.content.banners[1].logo.signature}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg">
                <span class="text align-center"><span>от {{pageData.content.model.min_price | spaceBetweenNum}} сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity"><a href="feedback.html">Связаться с нами</a></div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15" v-for="(teaser, key) in pageData.content.banners[1].teasers" :key="key">
                  <div class="img-content">
                    <img :src="teaser.icon">
                  </div>
                  <p><small>{{teaser.description}}</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
			<div class="card-media bg-color-gray-6 color-white">
        <div v-for="(info, key) in pageData.content.infographics" :key="key" v-if="key < 1" :class="key">
          <div class="card-media-v" :data-ss="key">
            <div class="container-p-2 relative">
              <div class="row-15 flex-adaptive justify-c-between">
                <div class="col-md-6 p-h-15">
                  <h4 class="color-2 text-n1">{{info.title}}</h4>
                  <div class="h1 text-x5">{{info.name}}</div>
                </div>
                <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
                  <p>{{info.description}}</p>
                </div>
              </div>
              <br class="hidden-sm hidden-xs">
              <div class="video-content m-t-30 relative">
                <div class="bg-video-content-2">
                  <a href="https://www.youtube.com/watch?v=2QOuOXUVkz0" data-fancybox>
                    <div class="btn-play">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                    </div>
                  </a>
                  <video :src="info.video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                </div>
              </div>
            </div>
          </div>
          <div class="card-media-intro">
            <div class="container-p-2">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">ДИЗАЙН</h4>
                  <div class="h1 text-x5">Впечатляет притязательных</div>
                  <br>
                  <p class="opacity-5">KIA K5 открывает новую эпоху дизайна автомобилей KIA. В этом инновационном седане сочетаются динамика и комфорт, дополненные дерзким и уверенным профилем. Его элегантность считывается в пристальном внимании к деталям.</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li class="active"><a href="/#card-media-list-1-1" data-toggle="tab">Элегантный силуэт кузова</a></li>
                      <li><a href="/#card-media-list-1-2" data-toggle="tab">Изящные светодиодные фары</a></li>
                      <li><a href="/#card-media-list-1-3" data-toggle="tab">Решетка радиатора</a></li>
                      <li><a href="/#card-media-list-1-4" data-toggle="tab">Спортивный дизайн заднего бампера</a></li>
                      <li><a href="/#card-media-list-1-5" data-toggle="tab">18” легкосплавные диски</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-imgs tab-content owl-img-4-3">
                  <div class="tab-pane fade in active" id="card-media-list-1-1">
                    <div class="img-content">
                      <img src="/img/other/k5-1-1.jpg">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>Динамичный боковой профиль, уникальный хромированный молдинг и силуэт в стиле “фастбек” с покатой линией крыши, плавно перетекающий в контур багажника, создают стильный и уверенный образ.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="card-media-list-1-2">
                    <div class="img-content">
                      <img src="/img/other/k5-1-2.jpg">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>Светодиодные фары проекционного типа и графический элемент «биение сердца» в форме дневных ходовых огней подчеркивают технологичность и футуристичный дизайн автомобиля.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="card-media-list-1-3">
                    <div class="img-content">
                      <img src="/img/other/k5-1-3.jpg">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>Решетка радиатора в фирменной стилистике «улыбка тигра» обрела интригующий трехмерный рисунок. Дизайн ячеек напоминает текстуру акульей кожи.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="card-media-list-1-4">
                    <div class="img-content">
                      <img src="/img/other/k5-1-4.jpg">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>Серебристый диффузор, двойная хромированная отделка подчеркивают любовь к скорости и спортивный дух нового KIA К5.Уникальный рисунок задних фонарей продолжает графическую тему “биение сердца”.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="card-media-list-1-5">
                    <div class="img-content">
                      <img src="/img/other/k5-1-5.jpg">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>Легкосплавные диски спортивного дизайна подчеркивают динамику автомобиля.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






			</div>
  </div>
</template>


<script>
import Breadcrump from '@/components/Breadcrump'
export default {
  components: {
    Breadcrump
  },
  async asyncData({store, error}){
    try{
      const pageData = await store.dispatch("models/fetchModels", {path: "model"})
      //this.title = pageData.content.seo.title
      console.log(pageData);
      return {pageData}
    }catch(e){
      error(e);
    }
  },
  data(){
    return {
      title: 'Hello World!',
      pageTitle: "Модели"
    }
  },
  mounted() {
    //this.title = this.pageData.content.seo.title
  },
  filters: {
    spaceBetweenNum (price) {
      price += "";
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(price))
        price = price.replace(pattern, "$1 $2");
      return price;
    },
  },
  head() {
    return {
      title: this.pageData.content.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.pageData.content.seo.description
        }
      ]
    }
  },
}
</script>