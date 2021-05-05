<template>
  <div class="main-body" header-opacity>
    <div class="bnr-carousel">
      <div class="bnr-carousel-items owl-carousel owl-btn-2">

        <figure v-for="(bnr, key) in page.banners" :key="key">
          <div class="container-p">
            <div class="desc-content">
              <div class="box-xs-10 box-md-9 m-auto">
                <div class="wrapper">
                  <h5>{{bnr.title}}</h5>
                  <h1>{{bnr.name}}</h1>
                  <div v-if="bnr.logo.signature" class="text-s1 pt-4 fw-5">{{bnr.logo.signature}}</div>
                </div>
                <div class="carimgs">
                  <picture>
                    <source :srcset="'https://cdn.kia.ru/'+bnr.images.mobile" media="(max-width: 500px)" sizes="272px">
                    <img :src="'https://cdn.kia.ru/'+bnr.images.desktop" sizes="272px">
                  </picture>
                </div>
                <div class="info-content">
                  <p>{{bnr.description}}</p>
                  <div class="btn-content">
                    <span class="btn-def">
                      <nuxt-link :to="bnr.link.url">{{bnr.link.title}}</nuxt-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="img-content">
            <div class="bg-shadow"></div>
            <video v-if="bnr.video" :src="'https://cdn.kia.ru/'+bnr.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            <picture>
              <source :data-srcset="'https://cdn.kia.ru/resize/375x211'+bnr.bg_images.mobile">
              <source :data-srcset="'https://cdn.kia.ru/resize/1440x810'+bnr.bg_images.retina">
              <img sizes="auto" :src="'https://cdn.kia.ru/resize/1920x1080'+bnr.bg_images.desktop">
            </picture>
          </div>
        </figure>
        
      </div>
    </div>
    <div class="short-models">
      <div class="block-wrapper p-v-md">
        <div class="container">
          <div class="entry-header m-t-30 text-center">
            <h2>Модели KIA</h2>
          </div>
        </div>
        <div class="container">
          <div class="short-models-nav m-v-20 text-center">
            <ul class="list flex-adaptive justify-c-center li-m-v-15">
              <template v-for="(model) in page.model_list_info.models">  
                <li v-for="(model_line, key) in page.model_list_info.model_lines" v-if="model.model_line_id == model_line.id" :key="key" :class="{active: key == 0}">
                  <a :href="'#smodels-'+[key+1]" data-toggle="tab">{{model_line.name}}</a>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">
            <div class="tab-pane" :id="'smodels-'+[key+1]" v-for="(model, key) in page.model_list_info.models" :key="key" :class="{'active in': key == 0}">
              <div class="tab-content imgs-main">
                <div class="img-content" 
                  :style="'background-image: url(https://cdn.kia.ru/resize/3840x240/'+model.bg_images.retina+');'">
                  <nuxt-link :to="model.landing_link">
                    <picture>
                    	<source :srcset="'https://cdn.kia.ru/resize/375x188/'+model.image" media="(max-width: 500px)" sizes="1020px">
                    	<source :srcset="'https://cdn.kia.ru/resize/820x410/'+model.image" media="(max-width: 1440px)" sizes="1020px">
                    	<img :src="'https://cdn.kia.ru/resize/1020x480/'+model.image"  sizes="1020px">
                    </picture>
                  </nuxt-link>
                </div>
                <div class="desc-content">
                  <div class="container-p">
                    <div class="align-center flex-adaptive justify-c-between">
                      <div class="flexbasis-md-4"></div>
                      <template v-for="(model_line) in page.model_list_info.model_lines" v-if="model.model_line_id == model_line.id">
                        <div class="text-center flexbasis-md-4" :key="key">
                          <div class="text-x4 fw-6 mt-3 mb-2 ">
                            {{model_line.name}}
                          </div>
                          <p>от {{model.min_price | spaceBetweenNum}} сум</p>
                        </div>
                      </template>
                      <div class="btn-content flexbasis-md-4 text-right-md mt-4">
                        <span class="btn-def">
                          <nuxt-link :to="model.landing_link" class="p-v-25">Подробнее о модели</nuxt-link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="short-news">
      <div class="container-p p-v-md">
        <div class="entry-header m-t-30 text-center">
          <h2>Будьте в курсе</h2>
        </div>
        <div class="short-models-nav m-v-20 text-center">
          <ul class="list flex-adaptive justify-c-center li-m-v-15">
            <li v-for="(groupName, key) in page.video_bank.groups" :class="{active: key == 0}" :key="key">
              <a :href="'#short-news-'+[key]" data-toggle="tab">{{groupName.name}}</a>
            </li>
          </ul>
        </div>
        <div class="tab-content m-v-30">
          <div class="tab-pane fade in active" :id="'short-news-'+[key]" v-for="(groupName, key) in page.video_bank.groups" :key="key" :class="{active: key == 0, 'tab-pane in': true}">
            <div class="short-news-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(overview, key) in page.video_bank.list" :key="key">
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a :href="[overview.video_link]" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url('+[overview.preview_image]+');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <h4>{{overview.name}}</h4>
                    <p>{{overview.author}}</p>
                    <p class="news-date">{{ new Date(overview.date*1000) | dateFormat('D MMMM YYYY')}}</p>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="short-motext">
      <div class="container-p p-v-md">
        <div class="row">
          <div class="col-md-6 p-h-15 m-v-30">
            <h3>Качество, проверенное временем</h3>
          </div>
          <div class="col-md-6 p-h-15 m-v-30 text-item">
            <p>KIA Motors — старейший корейский автопроизводитель, бренд основан в 1944 году. Завоевав лидирующие позиции в Южной Корее, марка KIA вышла на международный рынок и за несколько десятилетий завоевала репутацию динамично развивающегося бренда, производителя надёжных и практичных автомобилей. Современная история KIA – это стильный и узнаваемый дизайн, инновационные технологии и безупречное качество, широкий модельный ряд, рациональная ценовая политика и максимальная ориентированность на клиента. Девиз компании – «The Power to Surprise» («Искусство удивлять»). Компания не перестает удивлять поклонников новинками, которые восхищают передовыми технологиями и техническим совершенством. Каждая последующая модель опережает запросы клиентов, задает новые тренды в автомобильной индустрии.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>


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
  mounted(){
  
    $(".bnr-carousel-items.owl-carousel").owlCarousel({
      nav: !checkSm(),
      loop: true,
      //items: 3,
      dots: true,
      dotsEach: false,
      autoheight: true,
      touchDrag: true,
      mouseDrag: true,
      responsive:{
        0:{items:1},
        991:{items:1}
      },
      navText : owlBtn,
      margin: 0
    });

  },
  methods: {}
}

</script>

