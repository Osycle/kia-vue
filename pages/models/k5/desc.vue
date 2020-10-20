<template>
  <div>
    <div class="card-bnr relative">
      <div class="bg-video-content cover">
        <video :src="pageData.content.banners[1].video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-xs absolute" style="background-image: url('img/other/k5-card-bnr-xs.jpg');"></div>
      </div>
      <div class="container-p relative">
        <Breadcrump :breadcrumpTitle="breadcrumpTitle"/>
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
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[0].title}}</h4>
              <div class="h1 text-x5">{{infographics[0].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[0].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[0].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[0].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[1].title}}</h4>
              <div class="h1 text-x5">{{infographics[1].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[1].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[1].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-1-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-1-'+[key+1]" v-for="(preview, key) in infographics[1].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[2].title}}</h4>
              <div class="h1 text-x5">{{infographics[2].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[2].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[2].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[2].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[3].title}}</h4>
              <div class="h1 text-x5">{{infographics[3].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[3].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[3].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-4-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-4-'+[key+1]" v-for="(preview, key) in infographics[3].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[5].title}}</h4>
              <div class="h1 text-x5">{{infographics[5].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[5].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[5].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[5].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[6].title}}</h4>
              <div class="h1 text-x5">{{infographics[6].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[6].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[6].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-6-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-6-'+[key+1]" v-for="(preview, key) in infographics[6].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive r-reverse">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[7].title}}</h4>
              <div class="h1 text-x5">{{infographics[7].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[7].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[7].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-7-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-7-'+[key+1]" v-for="(preview, key) in infographics[7].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2 relative">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-6 p-h-15">
              <h4 class="color-2 text-n1">{{infographics[8].title}}</h4>
              <div class="h1 text-x5">{{infographics[8].name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
              <p>{{infographics[8].description}}</p>
            </div>
          </div>
          <br class="hidden-sm hidden-xs">
          <div class="video-content m-t-30 relative">
            <div class="bg-video-content-2">
              <a :href="infographics[8].video.link" data-fancybox>
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="infographics[8].video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
      </div>
      <div class="card-media-intro card-media-v">
        <div class="container-p-2">
          <div class="flex-adaptive">
            <div class="card-media-desc">
              <h4 class="color-2 text-n1">{{infographics[9].title}}</h4>
              <div class="h1 text-x5">{{infographics[9].name}}</div>
              <br>
              <p class="opacity-5">{{infographics[9].description}}</p>
              <br>
              <hr>
              <div class="card-media-list m-t-40">
                <ul class="list">
                  <li v-for="(preview, key) in infographics[9].preview_block.contents" :key="key" :class="{active: key == 0}"><a :href="'#card-media-list-9-'+[key+1]" data-toggle="tab">{{preview.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="card-media-imgs tab-content owl-img-4-3">
              <div class="tab-pane fade" :id="'card-media-list-9-'+[key+1]" v-for="(preview, key) in infographics[9].preview_block.contents" :key="key" :class="{'active in': key == 0}">
                <div class="img-content">
                  <img :src="preview.file">
                </div>
                <div class="desc-content m-auto box-md-9 m-t-25">
                  <p>{{preview.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-video">
      <div class="container-p p-v-80">
        <div class="entry-header text-center">
          <h4 class="color-2 text-n1">ОБЗОРЫ</h4>
          <h2>Видео о модели</h2>
          <div class="short-models-nav m-v-30">
            <ul class="list flex-adaptive justify-c-center li-m-v-15">
              <li v-for="(title, key) in videoGroup.content.video_bank.groups" :key="key" :class="{'active': key == 0}">
                <a :href="'#'+title.id" data-toggle="tab">{{title.name}} ({{videoGroup.content.video_bank.list[title.id].length}})</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div :id="key" v-for="(videoList, key) in videoGroup.content.video_bank.list" :key="key"  class="tab-pane fade" :class="{'active in': videoGroup.content.video_bank.groups[0].id == key}">
            <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(videoItem, keyItem) in videoList" :key="keyItem">
                <a :href="videoItem.video_link" :data-fancybox="key">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" :style="'background-image: url('+videoItem.preview_image+');'"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>{{videoItem.name}}</b></p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-showroom car-showroom">
      <div class="container-p p-v-30">
        <div class="showroom">
          <div class="showroom-header">
            <div class="entry-header">
              <h4 class="color-2 text-n1">ПРОСМОТР 360°</h4>
              <h2>K5</h2>
            </div>
            <div class="showroom-typeselect">
              <ul class="list">
                <li class="active">
                  <a href="javascript:;" data-toggle="tab"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>Экстерьер</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="showroom-main m-v-30">
            <div
                class="cloudimage-360"
                data-folder="https://www.kia.ru/static/master-data/overviews//EXS4/20202020/D641/DU3/"
                data-filename="{index}.png"
                data-spin-reverse
                data-amount="72"
            ></div>
          </div>
          <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.5.0/js-cloudimage-360-view.min.js"></script>
          <div class="showroom-bottom justify-c-between align-center">
            <div class="showroom-colorselect">
              <div class="title-content">
                <span class="color-gray">Цвет:</span> <b>Yacht Blue (DU3)</b>
              </div>
              <ul class="list m-t-10">
                <li>
                  <a href="javascript:;">
                    <img src="https://www.kia.ru/static/master-data/colors/7be5370a-0358-4fe5-a083-d9f5dcb07830.svg" class="color-img">
                    <img src="https://www.kia.ru/_nuxt/assets/check-colour.ace89650.svg" class="check-img active">
                  </a>
                </li>
              </ul>
            </div>
            <span class="btn-def">
              <a href="../" class="p-v-20">Конфигуратор</a>	
            </span>
          </div>
          <br><br>
        </div>
      </div>
    </div>
    <div class="card-sets bg-color-gray-1">
      <div class="container-p p-v-45">
        <div class="entry-header text-center m-v-30">
          <h4 class="color-2 text-n1">КОМПЛЕКТАЦИИ</h4>
          <h2>Варианты K5</h2>
          <p>5 доступных комплектаций</p>
        </div>
        <blockquote></blockquote>
        <div class="card-sets-items owl-carousel boxes-3 m-v-30 owl-nav-style-2-xs">
          <figure v-for="(set, key) in pageData.content.complectations.complectations" :key="key">
            <div class="fig-wrapper">
              <div class="cap-content">
                <h3>{{set.name}}</h3>
                <h4>от {{set.min_price | spaceBetweenNum}} сум</h4>
              </div>
              <div class="desc-content">
                <div>
                  <p><b>Двигатель и трансмиссия</b></p>
                  <p v-for="(modification, key) in set.modifications" :key="key">
                    <template v-for="(engine) in pageData.content.complectations.engines">
                      <template v-if="engine.id == modification.engine_id">
                        {{engine.name+" / "+engine.power_hp+" л. с. / "+engine.fuel_type_name+" / "}}
                      </template>
                    </template>
                    <template v-for="(transmission) in pageData.content.complectations.transmissions">
                      <template v-if="transmission.id == modification.transmission_id">
                        {{transmission.gearbox_name+" / "+transmission.drive_name}}
                      </template>
                    </template>
                  </p>
                  <br>
                  <p><b>Основные опции</b></p>
                  <p v-for="(optionId, key) in set.options" :key="'A'+key">
                    <template v-for="(option) in pageData.content.complectations.options">
                      <template v-if="option.id == optionId">
                        {{option.name}}
                      </template>
                    </template>
                  </p>
                </div>
                <div class="link-content m-t-20">
                  <div class="align-center font-w-6">
                    <a href="../models-options.html" class="hover-aunderline"><b>Комплектации и цены</b></a>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
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
      const pageData = await store.dispatch("models/fetchPageData", {
        pathname: "/models/k5/desc"
      })
      const videoGroup = await store.dispatch("models/fetchVideo", {
        model: pageData.content.model.model_line_id,
      })
      console.log(pageData, "424", store);
      return {
        pageData,
        videoGroup,
        infographics: pageData.content.infographics
      }
    }catch(e){
      error(e);
    }
  },
  data(){
    return {
      breadcrumpTitle: "K5",
      infographics: [],
    }
  },
  methods:{

  },
  mounted() {
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
		$(".card-sets-items.owl-carousel").owlCarousel({
				nav: !checkSm(),
				loop: false,
				//items: 3,
				dots: checkSm(),
				dotsEach: false,
				//slideBy: 2,
				autoplay: false,
				autoplayTimeout: 5400,
				touchDrag: true,
				center: false,
				autoheight: true,
				responsive:{
					0:{items:1},
					991:{items:3},
					1600:{items:3}
				},
				navText : owlBtn,
				margin: 30
		});
		$(".card-video-items.owl-carousel").map(function(i, el){
			el = $(el);
			var figLen = (el.find("figure").length <= 3);
			el.owlCarousel({
				nav: true,
				loop: false,
				//items: 3,
				dots: false,
				dotsEach: true,
				//slideBy: 5,
				autoplay: false,
				autoplayTimeout: 5400,
				touchDrag: checkSm(),
				//center: figLen,
				responsive:{
					0:{items:1},
					991:{items:4}
				},
				navText : owlBtn,
				margin: 30
			});
    });
    

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
      ],
    }
  },
}
</script>

<style lang="scss">
  .card-bnr{
    .breadcrumb-container{
      .container-p{
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>