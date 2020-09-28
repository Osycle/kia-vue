<template>
  <div class="bnr-carousel">
    <div class="bnr-carousel-items owl-carousel owl-btn-2">


      <figure v-for="(model, key) in models" :key="key">
        <div class="container-p">
          <div class="desc-content">
            <div class="box-xs-10 box-md-9 m-auto">
              <div class="wrapper">
                <h5>{{model.bnr.textH5}}</h5>
                <h1>{{model.bnr.textH1}}</h1>
              </div>
              <div class="carimgs">
                <picture>
                  <source :data-srcset="model.bnr.img.xs">
                  <img :src="model.bnr.img.md" sizes="272px">
                </picture>
              </div>
              <div class="info-content">
                <p>{{model.bnr.description}}</p>
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
          <video :src="model.bnr.bg.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        </div>
      </figure>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      models: [
        {
          name: 'k5',
          bnr:{
            textH5 : 'Встречайте',
            textH1 : 'Новый KIA K5',
            description: 'Спортивный силуэт •  Дорожный просвет 155 мм • Объём багажника 510 л • Комплекс систем Drive Wise',
            bg:{
              video: 'https://cdn.kia.ru/media-data/banner/video/a6efa924-3fd4-4eb2-8b48-b5eda29be47b.mp4',
            },
            img: {
              xs: 'https://cdn.kia.ru/resize/375x188/media-data/banners/main_header/k5/K5_front.png',
              md: 'https://cdn.kia.ru/resize/1440x720/media-data/banners/main_header/k5/K5_side.png',
            },
          },
        },
        {
          name: 'seltos',
          bnr:{
            textH5 : 'Встречайте',
            textH1 : 'Новый KIA K5',
            description: 'Мультимедиа 10,25” с навигацией и камерой заднего вида • Электрообогрев лобового стекла, рулевого колеса и сидений • Drive Wise – комплекс систем безопасности и помощи водителю',
            bg:{
              video: 'img/slider/video-1.mp4',
            },
            img: {
              xs: 'https://cdn.kia.ru/media-data/banners/models/seltos/options/seltos_options_mobile.png',
              md: 'img/slider/1-2.png',
            }
          },
        }
      ]
    }
  },
  mounted(){
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
			navText : [
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
		],
			margin: 0
		});
  },
}
</script>