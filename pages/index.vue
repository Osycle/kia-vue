<template>
  <div class="main-body" header-opacity>
    <div class="bnr-carousel">
      <div class="bnr-carousel-items owl-carousel owl-btn-2">

        <figure v-for="(slide, key) in page_data.slider" :key="key">
          <div class="container-p">
            <div class="desc-content">
              <div class="box-xs-10 box-md-9 m-auto">
                <div class="wrapper">
                  <div v-html="slide.content"></div>
                  <div v-if="slide.underContent" class="text-s1 pt-4 fw-5">{{slide.underContent}}</div>
                </div>
                <div class="carimgs">
                  <picture>
                    <source :srcset="slide.modelPic" media="(max-width: 500px)" sizes="272px">
                    <img :src="slide.modelPic" sizes="272px">
                  </picture>
                </div>
                <div class="info-content">
                  <p>{{slide.underModelPicText}}</p>
                  <div class="btn-content">
                    <span class="btn-def">
                      <nuxt-link :to="slide.link">Подробнее</nuxt-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="img-content">
            <div class="bg-shadow"></div>
            <video v-if="slide.videoBg" :src="slide.videoBg" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            <picture>
              <source :data-srcset="slide.imageBg">
              <source :data-srcset="slide.imageBg">
              <img sizes="auto" :src="slide.imageBg">
            </picture>
          </div>
        </figure>
        
      </div>
    </div>
    <div class="short-models">
      <div class="block-wrapper p-v-md">
        <div class="container">
          <div class="entry-header m-t-30 text-center">
            <h2>Модели Kia</h2>
          </div>
        </div>
        <div class="container">
          <div class="short-models-nav m-v-20 text-center">
            <ul class="list flex-adaptive justify-c-center li-m-v-15">
              <li v-for="(model, key) in page_data.models" :key="key" :class="{active: key == 0}">
                <a :href="'#smodels-'+key" data-toggle="tab">{{model.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">
            <div class="tab-pane" :id="'smodels-'+key" v-for="(model, key) in page_data.models" :key="key" :class="{'active in': key == 0}">
              <div class="tab-content imgs-main">
                <div class="img-content" 
                  :style="'background-image: url('+model.bg+');'">
                  <nuxt-link :to="'/models/'+model.url+'/desc'">
                    <picture>
                    	<source :srcset="model.image" media="(max-width: 500px)" sizes="1020px">
                    	<source :srcset="model.image" media="(max-width: 1440px)" sizes="1020px">
                    	<img :src="model.image"  sizes="1020px">
                    </picture>
                  </nuxt-link>
                </div>
                <div class="desc-content">
                  <div class="container-p">
                    <div class="align-center flex-adaptive justify-c-between">
                      <div class="flexbasis-md-4"></div>
                      <div class="text-center flexbasis-md-4">
                        <div class="text-x4 fw-6 mt-3 mb-2 ">
                          {{model.name}}
                        </div>
                        <p>от {{model.price | spaceBetweenNum}} сум</p>
                      </div>
                      <div class="btn-content flexbasis-md-4 text-right-md mt-4">
                        <span class="btn-def">
                          <nuxt-link :to="'/models/'+model.url+'/desc'" class="p-v-25">Подробнее о модели</nuxt-link>
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
            <li class="active">
              <a href="#short-news-1" data-toggle="tab">Видео-обзоры</a>
            </li>
          </ul>
        </div>
        <div class="tab-content m-v-30">
          <div class="tab-pane fade in active" id="short-news-1">
            <div class="short-news-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(item, key) in page_data.articles" :key="key">
                <div class="fig-wrapper">
                  <div class="img-content">
                    <a :href="item.video" data-fancybox>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                      <div class="img" :style="'background-image: url('+item.image+');'"></div>
                    </a>
                  </div>
                  <div class="desc-content">
                    <h4>{{item.title}}</h4>
                    <p>{{item.author}}</p>
                    <p class="news-date">{{ new Date(item.date*1000) | dateFormat('D MMMM YYYY')}}</p>
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
          <div class="col-md-6 p-h-15 m-v-30" v-html="page_data.footerText[0]"></div>
          <div class="col-md-6 p-h-15 m-v-30 text-item" v-html="page_data.footerText[1]"></div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>


export default {
  head() {
    return {
      title: this.page_data.seo.title,
      meta: [
        {
          content: this.page_data.seo.description
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: "/indexPage"
      })
      return {
        page_data
      }
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

