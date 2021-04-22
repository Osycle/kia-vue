<template>
  <div class="offset-model-header model-desc">

    <div class="model-header header-scroll scrolled-down down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page.model.name}}</span>
            <span class="price-content" v-if="page.model.min_price">от {{page.model.min_price | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav" v-if="page.model.min_price">
            <ul class="list list-main">
              <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link active-class="active" :to="item.link">{{item.title}}</nuxt-link></li>
            </ul>
            <div class="list-add">
              <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
                <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
              </a>
              <div class="list-add-sub">
                <ul>
                  <!-- <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link :to="item.link" :target="item.in_new_window?'_blank':'_self'">{{item.title}}</nuxt-link></li> -->
                  <li><nuxt-link :to="'/models/'+page.model.code+'/desc/'" class="">Обзор</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/options/'">Комплектации и цены</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/properties/'" class="">Характеристики</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/calc/'" class="">Рассчитать кредит</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/cars/'" class="">Авто в наличии</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/special/'" class="">Спецпредложения</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/configurator/'" class="">Конфигуратор</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/callback/'" class="">Заявка дилеру</nuxt-link></li>
                  <li><nuxt-link :to="'/models/'+page.model.code+'/testdrive/'" class="">Тест-драйв</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="list-last">
              <nuxt-link :to="'/models/'+page.model.code+'/configurator'">Конфигуратор</nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="card-bnr card-top relative" v-for="(bnr, key) in page.banners" :key="key" v-if="bnr.type_code == 'model'">
      <div class="bg-video-content cover">
        <video v-if="bnr.video" :src="'https://cdn.kia.ru/'+bnr.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-md absolute" v-else :style="'background-image: url(https://cdn.kia.ru/resize/1920x960/'+bnr.images.desktop+');'"></div>
        <div class="img-xs absolute" :style="'background-image: url(https://cdn.kia.ru/resize/770x442/'+bnr.images.mobile+');'"></div>
      </div>
      <div class="container-p relative">
        <div class="breadcrumb-container">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/models">Модели</nuxt-link></li>
            <li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page.model.name}}</nuxt-link></li>
          </ol>
        </div>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center" v-if="page.model.min_price"><span>от {{page.model.min_price | spaceBetweenNum}} сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5" v-if="page.model.min_price">·</span>
            <span class="btn-def style-2 m-l-20" v-if="page.model.min_price"><nuxt-link :to="'/models/'+$route.params.id+'/callback'">Связаться с нами</nuxt-link></span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15"><span v-if="!page.model.min_price">Скоро </span>{{bnr.logo.label}}</div>
                <img :src="'https://cdn.kia.ru/'+bnr.logo.image">
                <div class="font-size-nm m-t-10">{{bnr.logo.signature}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg" v-if="page.model.min_price">
                <span class="text align-center" v-if="page.model.min_price"><span>от {{page.model.min_price | spaceBetweenNum}} сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity"><nuxt-link to="callback">Связаться с нами</nuxt-link></div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15" v-for="(teaser, key) in bnr.teasers" :key="key">
                  <div class="img-content">
                    <img :src="'https://cdn.kia.ru/'+teaser.icon">
                  </div>
                  <p><small>{{teaser.description}}</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="card-media">
      <div class="card-media-intro card-media-v" :class="'theme-'+info.theme" v-for="(info, keyParent) in page.infographics" :key="keyParent">
        <template v-if="info.type == 'inherit'">
          <div class="container-p-2 relative" :class="info.preview_block.type">
            <template v-if="(info.preview_block.type == 'accordion_left') || (info.preview_block.type == 'accordion_right')">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">{{info.title}}</h4>
                  <div class="h1 text-x5">{{info.name}}</div>
                  <br>
                  <p class="opacity-5">{{info.description}}</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li v-for="(preview, key) in info.preview_block.contents" :key="key" :class="{active: key == 0}">
                        <a :href="'#card-media-list-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-imgs tab-content owl-img-4-3">
                  <div class="tab-pane fade" :id="'card-media-list-'+keyParent+'-'+key" v-for="(preview, key) in info.preview_block.contents" :key="key" :class="{'active in': key == 0}">
                    <template v-if="preview.teasers.length > 0">
                      <ul class="card-list-engine">
                        <li v-for="(teaser, key) in preview.teasers" :key="key">
                          <div class="cnt-content"><big>{{teaser.title}}</big> <span>{{teaser.title_desc}}</span></div>
                          <div class="text-content">
                            <span>{{teaser.description}}</span>
                          </div>
                        </li>
                      </ul>
                    </template>
                    <template v-else>
                      <div class="img-content">
                        <img :src="'https://cdn.kia.ru/resize/1440x720/'+preview.file">
                      </div>
                      <div class="desc-content m-auto box-md-9 m-t-25">
                        <p>{{preview.description}}</p>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="info.preview_block.type == 'tabs'">
              <div class="entry-header box-md-4">
                <h4 class="color-1 text-n1">{{info.title}}</h4>
                <h2>{{info.name}}</h2>
              </div>
              <div class="entry-content">
                <div class="short-models-nav m-v-30">
                  <ul class="list flex-adaptive li-m-v-15">
                    <li v-for="(preview, key) in info.preview_block.contents" :key="key" :class="{'active in': key == 0}">
                      <a :href="'#card-tech-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade" :id="'card-tech-'+keyParent+'-'+key" v-for="(preview, key) in info.preview_block.contents" :key="key" :class="{'active in': key == 0}">
                    <div class="img-content text-center m-v-30">
                      <img :src="'https://cdn.kia.ru/resize/1440x720/'+preview.file">
                    </div>
                    <div class="desc-content box-lg-6">
                      <p>{{preview.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-if="info.type == 'base'">
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
              <div v-if="info.video.video_preview">
                <div class="bg-video-content-2">
                  <a :href="info.video.link" data-fancybox><div class="btn-play"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg></div></a>
                  <video :src="'https://cdn.kia.ru/'+info.video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                </div>
              </div>
              <div v-else class="img-content">
                <img :src="'https://cdn.kia.ru/'+info.image" alt="">
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="card-video" v-if="false">
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
      <div class="showroom" :class="{'pano-active': panoActive}">
        <div class="container-p relative">
          <div class="showroom-header">
            <div class="entry-header">
              <h4 class="color-2 text-n1">ПРОСМОТР 360°</h4>
              <h2>{{page.model.name}}</h2>
            </div>
            <div class="showroom-typeselect">
              <ul class="list">
                <li :class="{'active': !panoActive}">
                  <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>Экстерьер</span>
                </li>
                <li :class="{'active': panoActive}">
                  <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>Интерьер</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-p relative" v-if="!panoActive">
          <div class="showroom-main m-v-30">
            <div
                class="cloudimage-360"
                :data-folder="'https://cdn.kia.ru'+selectOverview.path"
                data-filename="{index}.png"
                data-spin-reverse
                data-amount="72">
                <div class="showroom-item-cover flex align-center">
                  <div class="flex box-xs-10 align-center">
                    <img :src="'https://cdn.kia.ru'+selectOverview.path+'/1.png'" width="100%">
                  </div>
                </div>
            </div>
          </div>
          <script>window.CI360 = { notInitOnLoad: true }</script>
          <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
        </div>
        <div v-else>
          <div class="showroom-pano">
            <iframe v-if="!panoramasComplectation.panoramas[0].path.match('master-data')" 
                    :src="'/panoramas/iframe.html?pano_xml=http://localhost:3000/'+panoramasComplectation.panoramas[0].path" frameborder="0"></iframe>
            <iframe v-else 
                    :src="'https://www.kia.ru/panorama/frame.html?pano_xml=https://cdn.kia.ru/'+panoramasComplectation.panoramas[0].path+'/pano.xml'" frameborder="0"></iframe>
          </div>
        </div>
        
        <div class="container-p relative">
          <div class="showroom-bottom justify-c-between align-center">
            <div class="flex-adaptive">
              <div class="showroom-colorselect">
                <div class="title-content">
                  <span class="color-gray">Цвет:</span> 
                  <b>{{selectExteriorColor.name}} ({{selectExteriorColor.code}}), </b>
                  <b v-if="selectExteriorColor.is_metallic">метталик</b>
                  <span v-if="selectExteriorColor.price"> + {{selectExteriorColor.price | spaceBetweenNum}} сум</span>
                </div>
                <ul class="list m-t-10">
                  <template v-for="(overview) in selectComplectation.overviews">
                    <template v-for="(color) in page.overviews.colors">
                      <template v-if="overview.color_id == color.id" >
                        <li :class="{'active': selectOverview.color_id == color.id}">
                          <a href="javascript:;" @click.stop.prevent="showroomChanger(color)" >
                            <div class="color-select" :style="'background-image: url(https://cdn.kia.ru'+color.image+')'"></div>
                          </a>
                        </li>
                      </template>
                    </template>
                  </template>
                </ul>
              </div>
              <div class="showroom-colorselect">
                <div class="title-content">
                  <span class="color-gray">Цвет:</span> 
                  <b>{{selectInteriorColor.name}} ({{selectInteriorColor.code}})</b>
                  <span v-if="selectInteriorColor.price"> + {{selectInteriorColor.price | spaceBetweenNum}} сум</span>
                </div>
                <ul class="list m-t-10">
                  <template v-for="(panorama) in panoramasComplectation.panoramas">
                    <template v-for="(color) in page.panoramas.colors">
                      <template v-if="panorama.color_id == color.id">
                        <li :class="{'active': selectInteriorColor.id == color.id}">
                          <a href="javascript:;" @click.stop.prevent="showroomInChanger(color)" >
                            <div class="color-select" :style="'background-image: url(https://cdn.kia.ru'+color.image+')'"></div>
                          </a>
                        </li>
                      </template>
                    </template>
                  </template>
                </ul>
              </div>
            </div>
            <span class="btn-def" v-if="page.model.min_price">
              <nuxt-link :to="'/models/'+page.model.code+'/configurator'" class="p-v-20">Конфигуратор</nuxt-link>	
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-sets bg-color-gray-1" v-if="page.model.min_price">
      <div class="container-p p-v-45">
        <div class="entry-header text-center m-v-30">
          <h4 class="color-2 text-n1">КОМПЛЕКТАЦИИ</h4>
          <h2>Варианты {{page.model.name}}</h2>
          <p>{{page.complectations.complectations.length}} доступных комплектаций</p>
        </div>
        <div class="card-sets-items owl-carousel boxes-3 m-v-30 owl-nav-style-2-xs">
          <figure v-for="(set, key) in page.complectations.complectations" :key="key">
            <div class="fig-wrapper">
              <div class="cap-content">
                <h3>{{set.name}}</h3>
                <h4>от {{set.min_price | spaceBetweenNum}} сум</h4>
              </div>
              <div class="desc-content">
                <div>
                  <p><b>Двигатель и трансмиссия</b></p>
                  <p v-for="(modification, key) in set.modifications" :key="key">
                    <template v-for="(engine) in page.complectations.engines">
                      <template v-if="engine.id == modification.engine_id">
                        {{engine.name+" / "+engine.power_hp+" л. с. / "+engine.fuel_type_name+" / "}}
                      </template>
                    </template>
                    <template v-for="(transmission) in page.complectations.transmissions">
                      <template v-if="transmission.id == modification.transmission_id">
                        {{transmission.gearbox_name+" / "+transmission.drive_name}}
                      </template>
                    </template>
                  </p>
                  <br>
                  <p><b>Основные опции</b></p>
                  <p v-for="(optionId, key) in set.options" :key="'A'+key">
                    <template v-for="(option) in page.complectations.options">
                      <template v-if="option.id == optionId">
                        {{option.name}}
                      </template>
                    </template>
                  </p>
                </div>
                <div class="link-content m-t-20">
                  <div class="align-center font-w-6">
                    <nuxt-link :to="'/models/'+page.model.code+'/options'"><b>Комплектации и цены</b></nuxt-link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
    
    <div class="card-gar bg-color-gray-1" v-for="(info, key) in page.infographics" :key="key" v-if="info.type == 'img_left'">
      <div class="container-p p-v-45">
        <div class="container">
          <div class="entry-content flex-adaptive align-center justify-c-between">
            <div class="img-content m-v-30 flex-s-0">
              <img :src="'https://cdn.kia.ru/resize/790x442/'+info.image">
            </div>
            <div class="entry-header m-v-30 box-md-4">
              <h4 class="color-2 text-n1">{{info.title}}</h4>
              <h2>{{info.name}}</h2>
              <p>{{info.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-fb" v-for="(bnr, key) in page.banners" :key="key" v-if="bnr.type_code == 'center'" 
        :style="'background-image: url(https://cdn.kia.ru/resize/1920x960/'+bnr.bg_images.desktop+');'">
      <div class="container-p text-center" v-if="page.model.min_price">
        <div class="entry-content">
          <div class="entry-header color-white p-v-30">
            <h4 class="text-n1">{{bnr.title}}</h4>
            <h2>{{bnr.name}}</h2>
            <span class="btn-def style-1 m-v-20">
              <nuxt-link :to="bnr.link.url" class="p-v-20 p-h-25">
                {{bnr.link.title}}
              </nuxt-link>
            </span>
          </div>
          <div class="img-content">
            <picture>
              <source :srcset="'https://cdn.kia.ru/resize/770x442'+bnr.images.mobile" media="(max-width: 768px)">
              <img :src="'https://cdn.kia.ru/resize/1020x480/'+bnr.images.desktop">
            </picture>
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
      const path = context.route.path;
      const page = await context.store.dispatch("models/fetchPageData", {
        path: path,
      })
      // const videoGroup = await context.store.dispatch("models/fetchVideo", {
      //   model: page.content.model.model_line_id,
      // })
      return {
        page: page.content
        //videoGroup,
      }
    }catch(e){
      context.error(e);
    }
  },
  methods: {
   
  },
  created(){
    this.selectComplectation = this.page.overviews.complectations[0]

    this.page.panoramas.complectations.forEach(complectation => {
      if(complectation.id === this.selectComplectation.id)
        this.panoramasComplectation = complectation;
    })
    this.selectComplectation.overviews.forEach(overview => {
      if(overview.color_id == this.page.model.overview_default_color_id){
        this.selectOverview = overview;
      }else if(!this.selectOverview){
        this.selectOverview = this.selectComplectation.overviews[0];
      }
    });

    this.page.overviews.colors.forEach(color => {
      if(color.id == this.page.model.overview_default_color_id)
        this.selectExteriorColor = color;
    });
    this.page.panoramas.colors.forEach(color => {
      if(color.id == this.panoramasComplectation.panoramas[0].color_id)
        this.selectInteriorColor = color;
    });
    


    
  },
  mounted(){
    $(window).scrollTop(400);
    $(window).scrollTop(0);
    
    // Активация экстерер 360
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
    _.unionBy(this.page.overviews.colors, "id")

    this.page.overviews.colors = _.unionBy(this.page.overviews.colors, "id");

		$(".card-sets-items.owl-carousel").owlCarousel({
      nav: !checkSm(),
      loop: false,
      //items: 3,
      dots: false,
      dotsEach: false,
      //slideBy: 2,
      autoplay: false,
      autoplayTimeout: 5400,
      touchDrag: true,
      center: false,
      autoheight: true,
      responsive:{
        0:{items:1.1},
        991:{items:3},
        1600:{items:4}
      },
      navText : owlBtn,
      margin: 30
    });
    

  },
  data(){
    return{
      panoActive: false,
      selectOverview: "",
      selectExteriorColor: "",
      selectInteriorColor: "",
      selectComplectation: "",
      panoramasComplectation: "",
      // События Изменение цвета 
      async showroomChanger(color, parentClass){
        parentClass = parentClass || ".showroom-main";
        this.selectComplectation.overviews.map((overview)=>{
          if( color.id == overview.color_id ){
            this.selectExteriorColor = color;
            this.selectOverview = overview;
            window.CI360.destroy();
            console.info(overview, $(parentClass+" [data-folder]"))
            $(parentClass+" [data-folder]").attr('data-folder', "https://cdn.kia.ru"+overview.path)
            $(parentClass+" [data-amount]").attr('data-amount', overview.amount)
            if($(parentClass).find("canvas").length > 0)
              window.CI360.init();
            else{
              $(parentClass).find(".showroom-item-cover").find("img").attr("src", "https://cdn.kia.ru"+overview.path+"/1.png")
            }
          }
        }) 
      },
      async showroomInChanger(color, parentClass){
        this.selectInteriorColor = color;
          parentClass = parentClass || ".showroom-pano";
          
      },

    }
  },
}
</script>
