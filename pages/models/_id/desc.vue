<template>
  <div class="offset-model-header model-desc">
    <div class="model-header header-scroll scrolled-down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page.model.name}}</span>
            <span class="price-content">от {{page.model.min_price | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav">
            <ul class="list list-main">
              <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link active-class="active" :to="item.link">{{item.title}}</nuxt-link></li>
            </ul>
            <div class="list-add">
              <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
                <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
              </a>
              <div class="list-add-sub">
                <ul>
                  <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link :to="item.link" :target="item.in_new_window?'_blank':'_self'">{{item.title}}</nuxt-link></li>
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
        <video :src="bnr.video" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-xs absolute" :style="'background-image: url('+bnr.images.mobile+');'"></div>
      </div>
      <div class="container-p relative">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/models">Модели</nuxt-link></li>
            <li><nuxt-link :to="'/models/'+page.model.code">{{page.model.name}}</nuxt-link></li>
          </ol>
        </div>
      </div>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center"><span>от {{page.model.min_price | spaceBetweenNum}} сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5">·</span>
            <span class="btn-def style-2 m-l-20"><nuxt-link to="callback">Связаться с нами</nuxt-link></span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">{{bnr.logo.label}}</div>
                <img :src="bnr.logo.image">
                <div class="font-size-nm m-t-10">{{bnr.logo.signature}}</div>
              </div>
              <div class="desc-content hidden-md hidden-lg">
                <span class="text align-center"><span>от {{page.model.min_price | spaceBetweenNum}} сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity"><nuxt-link to="callback">Связаться с нами</nuxt-link></div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15" v-for="(teaser, key) in bnr.teasers" :key="key">
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
                        <img :src="preview.file">
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
                      <img :src="preview.file">
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
              <div class="bg-video-content-2">
                <a :href="info.video.link" data-fancybox><div class="btn-play"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg></div></a>
                <video :src="info.video.video_preview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
              </div>
            </div>
          </div>
        </template>
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
              <h2>{{page.model.name}}</h2>
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
                :data-folder="page.overviews.complectations[0].overviews[0].path"
                data-filename="{index}.png"
                data-spin-reverse
                :data-amount="page.overviews.complectations[0].overviews[0].amount"
            ></div>
            {{page.overviews.colors[0].path}}
          </div>
          <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
          <div class="showroom-bottom justify-c-between align-center">
            <div class="showroom-colorselect">
              <div class="title-content">
                <span class="color-gray">Цвет:</span> <b >{{showroom.colorName}}</b>
              </div>
              <ul class="list m-t-10" :color-arr="colorCodeArr = []">
                <template v-for="(color, key) in page.overviews.colors">
                  <li v-if="!colorCodeArr.filter((e)=>{return e == color.code}).length" :color-num="colorCodeArr.push(color.code)" :key="key">
                    <a href="javascript:;" @click.prevent="showroom.changer(color, page.overviews.complectations)" >
                      <div class="color-select" :style="'background-image: url('+color.image+')'"></div>
                    </a>
                  </li>
                </template>
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
    
    <div class="card-gar bg-color-gray-1" v-for="(info, key) in page.infographics" :key="key" v-if="info.type == 'img_left'">
      <div class="container-p p-v-45">
        <div class="entry-content flex-adaptive align-center justify-c-between">
          <div class="img-content m-v-30 flex-s-0">
            <img :src="info.image">
          </div>
          <div class="entry-header m-v-30 box-md-4">
            <h4 class="color-2 text-n1">{{info.title}}</h4>
            <h2>{{info.name}}</h2>
            <p>{{info.description}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card-fb" v-for="(bnr, key) in page.banners" :key="key" v-if="bnr.type_code == 'center'" :style="'background-image: url('+bnr.bg_images.desktop+');'">
      <div class="container-p text-center">
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
              <source :srcset="bnr.images.mobile" media="(max-width: 768px)">
              <img :src="bnr.images.desktop">
            </picture>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

import Breadcrump from '@/components/Breadcrump'
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
  scrollToTop: true,
  components: {
    Breadcrump
  },
  async asyncData(context){
    try{
      const path = context.route.path;
      const page = await context.store.dispatch("models/fetchPageData", {
        path: path,
      })
      const videoGroup = await context.store.dispatch("models/fetchVideo", {
        model: page.content.model.model_line_id,
      })
      return {
        page: page.content,
        videoGroup,
      }
    }catch(e){
      context.error(e);
    }
  },
  data(){
    return{
      showroom: {
        colorName: '',
        path: '',
        amount: '',
        async changer(color, complectations){
          this.colorName = (color.name+" ("+color.code+")");
          complectations[0].overviews.map((el, i)=>{
            if( color.id == el.color_id ){
              window.CI360.destroy();
              $(".showroom-main [data-folder]").attr('data-folder', el.path)
              $(".showroom-main [data-amount]").attr('data-amount', el.amount)
              window.CI360.init();
            }
          }) 
        }
      }
    }
  },
  mounted() {
    mainjs();
  },
}
</script>
