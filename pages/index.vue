<template>
  <div>
    <div class="bnr-carousel">
      <div class="bnr-carousel-items owl-carousel owl-btn-2">

        <figure v-for="(model, key) in pageData.content.banners" :key="key">
          <div class="container-p">
            <div class="desc-content">
              <div class="box-xs-10 box-md-9 m-auto">
                <div class="wrapper">
                  <h5>{{model.title}}</h5>
                  <h1>{{model.name}}</h1>
                </div>
                <div class="carimgs">
                  <picture>
                    <source :data-srcset="model.images.mobile">
                    <img :src="model.images.desktop" sizes="272px">
                  </picture>
                </div>
                <div class="info-content">
                  <p>{{model.description}}</p>
                  <div class="btn-content">
                    <span class="btn-def">
                      <a href="/k5">Подробнее</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="img-content">
            <div class="bg-shadow"></div>
            <video :src="model.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
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
              <li v-for="(model, key) in pageData.content.model_list_info.model_lines" :key="key" :class="{active: key == 0}">
                <a :href="'#smodels-'+[key+1]" data-toggle="tab">{{model.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">

            <div :id="'smodels-'+[key+1]" v-for="(model, key) in pageData.content.model_list_info.models" :key="key" :class="{active: key == 0, 'tab-pane in': true}">
              <div class="tab-content imgs-main">
                <div class="img-content" :style="'background-image: url('+model.bg_images.desktop+');'">
                  <a href="/k5">
                    <img :src="model.image">
                  </a>
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
            <li v-for="(groupName, key) in pageData.content.video_bank.groups" :class="{active: key == 0}" :key="key">
              <a :href="'#short-news-'+[key]" data-toggle="tab">{{groupName.name}}</a>
            </li>
          </ul>
        </div>
        <div class="tab-content m-v-30">
          <div class="tab-pane fade in active" :id="'short-news-'+[key]" v-for="(groupName, key) in pageData.content.video_bank.groups" :key="key" :class="{active: key == 0, 'tab-pane in': true}">
            <div class="short-news-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(overview, key) in pageData.content.video_bank.list" :key="key">
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
  components:{
    
  },
  methods: {},
  computed: {},
  async asyncData({store, error}){
    try{
      const pageData = await store.dispatch("models/fetchModels", {path: "index"})
      return {pageData}
    }catch(e){
      error(e);
    }
  },
  async created(){  
    
  },
  data(){
    return {
      pageTitle: "Главная",
      pageData:{},
      models:[],
      errors: [],
    }
  },
  head: {
    title: "Главная - KIA",
    script: [
      {src: '/js/plugins/owl.carousel.min.js'},
      {src: '/js/main.js'},
    ]
  },
  components: {
    
  },
  mounted(){
		/*Owl carousel*/
		window.owlBtn = [
			'<span class="owl-btn previous">'+
				'<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
					'<path d="M6 3L2 7l4 4M2.333 7h12.334" stroke="currentColor" stroke-width="1.5"></path>'+
				'</svg>'+
			'</span>', 
			'<span class="owl-btn next">'+
				'<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
    			'<path d="M9 11l4-4-4-4M12.667 7H.333" stroke="currentColor" stroke-width="1.5"></path>'+
				'</svg>'+
			'</span>'
		]
		$(".bnr-carousel-items.owl-carousel").owlCarousel({
			nav: true,
			loop: true,
			//items: 3,
			dots: true,
			dotsEach: false,
			//autoplay: true,
			//autoplayTimeout: 7000,
			autoheight: true,
			touchDrag: true,
			mouseDrag: true,
			//smartSpeed: 0,
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 0
    });
		$(".short-news .short-news-items.owl-carousel").owlCarousel({
			nav: !checkSm(),
			loop: false,
			//items: 3,
			dots: false,
			dotsEach: false,
			slideBy: 2,
			autoplay: false,
			autoplayTimeout: 5400,
			touchDrag: checkSm(),
			//center: true,
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});
  }
}

</script>

<style>

</style>
