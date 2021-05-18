<template>
  <div class="offset-model-header model-desc">

    <div class="model-header header-scroll scrolled-down down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page_data.name}}</span>
            <span class="price-content" v-if="page_data.minPrice">от {{page_data.minPrice | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav" v-if="page_data.minPrice">
            <ul class="list list-main">
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/desc/'">Обзор</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/options/'">Комплектации и цены</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/properties/'">Характеристики</nuxt-link></li>
            </ul>
            <div class="list-add">
              <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
                <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
              </a>
              <div class="list-add-sub">
                <ul>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/desc/'">Обзор</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/options/'">Комплектации и цены</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/properties/'">Характеристики</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="list-last" v-if="page_data.minPrice">
              <nuxt-link :to="'/models/'+page_data.name.toLowerCase()+'/configurator'">Конфигуратор</nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="card-bnr card-top relative">
      <div class="bg-video-content cover">
        <video v-if="page_data.header.video" :src="page_data.header.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <!-- <div class="img-md absolute" v-else :style="'background-image: url(https://cdn.kia.ru/resize/1920x960/'+bnr.images.desktop+');'"></div> -->
        <!-- <div class="img-xs absolute" :style="'background-image: url(https://cdn.kia.ru/resize/770x442/'+bnr.images.mobile+');'"></div> -->
      </div>
      <div class="container-p relative">
        <div class="breadcrumb-container">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/models">Модели</nuxt-link></li>
            <li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page_data.name}}</nuxt-link></li>
          </ol>
        </div>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center" v-if="page_data.minPrice"><span>от {{page_data.minPrice | spaceBetweenNum}} сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5" v-if="page_data.minPrice">·</span>
            <span class="btn-def style-2 m-l-20" v-if="page_data.minPrice">
              <nuxt-link :to="'/models/'+$route.params.id+'/callback'">Связаться с нами</nuxt-link>
            </span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">
                  <span v-if="!page_data.minPrice">Скоро </span>{{page_data.header.onLogoText}}
                </div>
                <img :src="page_data.header.logo">
                <div class="font-size-nm m-t-10">{{page_data.header.underLogoText}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg" v-if="page_data.minPrice">
                <span class="text align-center" v-if="page_data.minPrice"><span>от {{page_data.minPrice | spaceBetweenNum}} сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity">
                  <nuxt-link :to="'/models/'+$route.params.id+'/callback'">Связаться с нами</nuxt-link>
                </div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15" v-for="(teaser, key) in page_data.header.icons" :key="key">
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

    <div class="card-media">
      <div class="card-media-intro card-media-v" :class="'theme-'+block.theme" v-for="(block, keyParent) in page_data.blocks" :key="keyParent">
        <template v-if="block.type == 'block1'">
          <div class="container-p-2 relative" :class="'accordion_'+block.direct">
            <template v-if="(block.direct == 'left') || (block.direct == 'right')">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">{{block.name}}</h4>
                  <div class="h1 text-x5">{{block.title}}</div>
                  <br>
                  <p class="opacity-5">{{block.summary}}</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li v-for="(preview, key) in block.photos" :key="key" :class="{active: key == 0}">
                        <a :href="'#card-media-list-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-imgs tab-content owl-img-4-3">
                  <div class="tab-pane fade" :id="'card-media-list-'+keyParent+'-'+key" 
                    v-for="(preview, key) in block.photos"
                    :class="{'active in': key == 0}"
                    :key="key">
                    <div class="img-content">
                      <img :src="preview.url">
                    </div>
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>{{preview.text}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="block.type == 'block3'">
              <div class="entry-header box-md-4">
                <h4 class="color-1 text-n1">{{block.name}}</h4>
                <h2>{{block.title}}</h2>
              </div>
              <div class="entry-content">
                <div class="short-models-nav m-v-30">
                  <ul class="list flex-adaptive li-m-v-15">
                    <li v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                      <a :href="'#card-tech-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade" :id="'card-tech-'+keyParent+'-'+key" v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                    <div class="img-content text-center m-v-30">
                      <img :src="preview.url">
                    </div>
                    <div class="desc-content box-lg-6">
                      <p>{{preview.text}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </template>
        <template v-if="block.type == 'block2'">
          <div class="container-p-2 relative" :class="'accordion_'+block.direct">
            <template v-if="(block.direct == 'left') || (block.direct == 'right')">
              <div class="flex-adaptive">
                <div class="card-media-desc">
                  <h4 class="color-2 text-n1">{{block.name}}</h4>
                  <div class="h1 text-x5">{{block.title}}</div>
                  <br>
                  <p class="opacity-5">{{block.summary}}</p>
                  <br>
                  <hr>
                  <div class="card-media-list m-t-40">
                    <ul class="list">
                      <li v-for="(enteas, key) in block.content" :key="key" :class="{active: key == 0}">
                        <a :href="'#card-media-list-'+keyParent+'-'+key" data-toggle="tab">{{enteas.name}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-media-imgs tab-content owl-img-4-3">
                  <div class="tab-pane fade" :id="'card-media-list-'+keyParent+'-'+key" 
                    v-for="(enteas, key) in block.content"
                    :class="{'active in': key == 0}"
                    :key="key">
                    <div class="desc-content m-auto box-md-9 m-t-25">
                      <p>{{enteas.name}}</p>
                    </div>
                    <ul class="card-list-engine">
                      <li v-for="(teaser, key) in enteas.options" :key="key">
                        <div class="cnt-content"><big>{{teaser.value}}</big> <span>{{teaser.type}}</span></div>
                        <div class="text-content">
                          <span>{{teaser.title}}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-if="block.type == 'block3'">
          <div class="container-p-2 relative">
            <div class="entry-header box-md-4">
              <h4 class="color-1 text-n1">{{block.name}}</h4>
              <h2>{{block.title}}</h2>
            </div>
            <div class="entry-content">
              <div class="short-models-nav m-v-30">
                <ul class="list flex-adaptive li-m-v-15">
                  <li v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                    <a :href="'#card-tech-'+keyParent+'-'+key" data-toggle="tab">{{preview.name}}</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade" :id="'card-tech-'+keyParent+'-'+key" v-for="(preview, key) in block.photos" :key="key" :class="{'active in': key == 0}">
                  <div class="img-content text-center m-v-30">
                    <img :src="preview.url">
                  </div>
                  <div class="desc-content box-lg-6">
                    <p>{{preview.text}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="block.type == 'block4'">
          <div class="container-p-2 relative" :class="'type-'+block.type">
            <div class="row-15 flex-adaptive justify-c-between">
              <div class="col-md-6 p-h-15">
                <h4 class="color-2 text-n1">{{block.name}}</h4>
                <div class="h1 text-x5">{{block.title}}</div>
              </div>
              <div class="col-md-offset-1 p-h-15 col-md-4 m-t-50 opacity-5">
                <p>{{block.summary}}</p>
              </div>
            </div>
            <br class="hidden-sm hidden-xs">
            <div class="video-content m-t-30 relative">
              <div v-if="block.video">
                <div class="bg-video-content-2">
                  <a :href="block.video" data-fancybox><div class="btn-play"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg></div></a>
                  <video :src="block.preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
                </div>
              </div>
              <div v-else class="img-content">
                <img :src="block.image" alt="">
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="card-showroom car-showroom" v-if="page_data.colors.bodyColors.length || page_data.colors.interiorColors.length">
      <div class="showroom" :class="{'pano-active': panoActive}">
        <div class="container-p relative">
          <div class="showroom-header">
            <div class="entry-header">
              <h4 class="color-2 text-n1">ПРОСМОТР 360°</h4>
              <h2>{{page_data.name}}</h2>
            </div>
            <div class="showroom-typeselect">
              <ul class="list">
                <li :class="{'active': !panoActive}" v-if="page_data.colors.bodyColors.length">
                  <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>Экстерьер</span>
                </li>
                <li :class="{'active': panoActive}" v-if="page_data.colors.interiorColors.length">
                  <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                  <span>Интерьер</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="container-p relative" v-if="!panoActive && page_data.colors.bodyColors.length">
          <div class="showroom-main m-v-10">
            <div
                class="cloudimage-360"
                :data-folder="currentExterior.colorFolder"
                data-filename="{index}.png"
                data-spin-reverse
                data-amount="72">
                <div class="showroom-item-cover flex align-center">
                  <div class="flex box-xs-10 align-center">
                    <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
                  </div>
                </div>
            </div>
          </div>
          <script>window.CI360 = { notInitOnLoad: true }</script>
          <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
        </div>
        <div v-else-if="page_data.colors.interiorColors.length">
          <div class="showroom-pano">
            <iframe
              :src="'https://cdn.kia-motors.uz/panoramas/iframe.html?pano_xml='+currentInterior.colorFolder" frameborder="0"></iframe>
          </div>
        </div>
        <div class="container-p relative" v-if="page_data.colors.bodyColors.length || page_data.colors.interiorColors.length">
          <div class="showroom-bottom justify-c-between align-center">
            <div class="flex-adaptive">
              <div class="showroom-colorselect" v-if="page_data.colors.bodyColors.length">
                <div class="title-content">
                  <span class="color-gray">Цвет:</span> 
                  <b>{{currentExterior.name}}</b>
                  <b v-if="currentExterior.metalic*1">метталик</b>
                  <span v-if="currentExterior.price"> + {{currentExterior.price | spaceBetweenNum}} сум</span>
                </div>
                <ul class="list m-t-10">
                  <li v-for="(color, key) in page_data.colors.bodyColors" 
                    :class="{'active': currentExterior.id == color.id}"
                    :key="key">
                    <a href="javascript:;" @click.stop.prevent="colorChangeExterior(color)" >
                      <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="showroom-colorselect" v-if="page_data.colors.interiorColors.length">
                <div class="title-content">
                  <span class="color-gray">Цвет:</span> 
                  <b>{{currentInterior.name}}</b>
                  <span v-if="currentInterior.price"> + {{currentInterior.price | spaceBetweenNum}} сум</span>
                </div>
                <ul class="list m-t-10">
                  <li v-for="(color, key) in page_data.colors.interiorColors" 
                    :class="{'active': currentInterior.id == color.id}"
                    :key="key">
                    <a href="javascript:;" @click.stop.prevent="colorChangeInterior(color)" >
                      <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span class="btn-def" v-if="page_data.minPrice">
                <nuxt-link :to="'/models/'+page_data.name.toLowerCase()+'/configurator'" class="p-v-20">Конфигуратор</nuxt-link>	
              </span>
            </div>
          </div>
        </div>
      
        

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

    <div class="card-sets bg-color-gray-1" v-if="page_data.minPrice">
      <div class="container-p p-v-45">
        <div class="entry-header text-center m-v-30">
          <h4 class="color-2 text-n1">КОМПЛЕКТАЦИИ</h4>
          <h2>Варианты {{page_data.name}}</h2>
          <p>{{page_data.compls.length}} доступных комплектаций</p>
        </div>
        <div class="card-sets-items owl-carousel boxes-3 m-v-30 owl-nav-style-2-xs">
          <figure v-for="(set, key) in page_data.compls" :key="key">
            <div class="fig-wrapper">
              <div class="cap-content">
                <h3>{{set.name}}</h3>
                <h4>от {{set.price | spaceBetweenNum}} сум</h4>
              </div>
              <div class="desc-content">
                <div>
                  <p><b>Двигатель и трансмиссия</b></p>
                  <p v-for="(text, key) in set.engine" :key="key">{{text}}</p>
                  <br>
                  <p><b>Основные опции</b></p>
                  <p v-for="(option, key) in set.options" :key="'A'+key">
                    {{option}}
                  </p>
                </div>
                <div class="link-content m-t-20" v-if="false">
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

    <div v-if="page_data.footer" class="card-fb" :style="'background-image: url('+page_data.footer.image+');'">
      <div class="container-p text-center" v-if="page_data.minPrice">
        <div class="entry-content">
          <div class="entry-header color-white p-v-30">
            <h4 class="text-n1">{{page_data.footer.title}}</h4>
            <h2>{{page_data.footer.text}}</h2>
            <span class="btn-def style-1 m-v-20">
              <nuxt-link :to="'/models/'+$route.params.id+'/callback/'" class="p-v-20 p-h-25">
                Заказать звонок дилера
              </nuxt-link>
            </span>
          </div>
          <div class="img-content">
            <picture>
              <source :srcset="page_data.footer.car" media="(max-width: 768px)">
              <img :src="page_data.footer.car">
            </picture>
          </div>
        </div>
      </div>
    </div>


    <div v-if="false">
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
    </div>




  </div>
</template>


<script>
export default {
  head() {
    return {
      title: this.page_data.seo ? this.page_data.seo.meta_title : 'Обзор KIA',
      meta: [
        {
          content: this.page_data.seo ? this.page_data.seo.meta_descr : 'Обзор KIA'
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: context.route.path
      });
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
  methods: {
   
  },
  created(){
    this.currentExterior = this.page_data.colors.bodyColors[0];
    this.currentInterior = this.page_data.colors.interiorColors[0];

    
  },
  mounted(){
    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
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
      currentExterior: {},
      currentInterior: {},

      /* События Изменение цвета  */
      async colorChangeExterior(color, parentClass){
        parentClass = parentClass || ".showroom-main";
        this.currentExterior = color;
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', this.currentExterior.colorFolder)
        $(parentClass+" [data-amount]").attr('data-amount', 72)
        if($(parentClass).find("canvas").length > 0)
          window.CI360.init();
        else{
          $(parentClass).find(".showroom-item-cover").find("img").attr("src", this.currentExterior.colorFolder+"/1.png")
        }
      },
      async colorChangeInterior(color){
        this.currentInterior = color;
      },

    }
  },
}
</script>
