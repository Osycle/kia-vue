<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url(\''+page_data.header.image+'\');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about">Мир Kia</nuxt-link></li>
              <li><nuxt-link to="">Компания Kia Motors</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block1'">
        <div class="container p-v-30 p-t-md-80" :key="key">
          <div class="row-15 flex-adaptive justify-c-between">
            <div class="col-md-4 p-h-15">
              <div class="h1 text-x5 m-t-0">{{block.name}}</div>
            </div>
            <div class="col-md-offset-1 p-h-15 col-md-7" v-html="block.text"></div>
          </div>
          <div class="video-content m-t-30 m-t-md-80 relative">
            <div class="bg-video-content-2">
              <a :href="block.video" data-fancybox="">
                <div class="btn-play">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                </div>
              </a>
              <video :src="block.videoPreview" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
            </div>
          </div>
        </div>
        <div class="kiaworld-cnt p-b-20" :key="key">
          <div class="container-p">
            <div class="cnt-items boxes-3 boxes-xs-2 figure-m-v-20 m-v-30">
              <figure v-for="(content, key) in block.content" :key="key">
                <div class="fig-wrapper">
                  <h1 class="m-b-5">{{content.name}}</h1>
                  <p>{{content.text}}</p>
                  <nuxt-link to="/about/history" class="hover-aunderline" v-if="key == 0">
                    <b>История Kia</b><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path data-v-8a6d1ec4="" d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </nuxt-link>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </template>
      <div class="kiaworld-logo">
        <template v-for="(block) in page_data.blocks" v-if="block.block == 'block2'">
          <div class="kiaworld-logo-wrapper" :key="key">
            <div class="container-p">
              <div class="box-md-10 box-lg-6 m-auto">
                <h1>{{block.name}}</h1>
                <br>
                <div v-html="block.text"></div>
                <br>
                <img class="m-auto m-b-md-30" :src="block.image">
              </div>
            </div>
          </div>
        </template>
        <template v-for="(block) in page_data.blocks" v-if="block.block == 'block3'">
          <div class="img-entry-header relative">
            <div class="container text-content color-white m-t-md-40">
              <h4 class="color-2 text-n1">{{block.alias}}</h4>
              <div class="row-15 flex-adaptive justify-c-between">
                <div class="col-md-4 p-h-15">
                  <div class="h1 text-x5 m-t-0">{{block.name}}</div>
                </div>
                <div class="col-md-offset-1 p-h-15 text-x1 col-md-7" v-html="block.text"></div>
              </div>
            </div>
            <div class="img-bg">
              <img :src="block.image">
            </div>
          </div>
        </template>
      </div>
      
    </div>

    <div class="kiaworld-designc">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block4'">
        <div class="container-p p-v-md">
          <div class="entry-header text-center m-v-30 box-md-6 m-auto">
            <div class="h1 m-b-30">{{block.name}}</div>
            <p class="text-x1">{{block.text}}</p>
          </div>
          <div class="kiaworld-designc-items boxes-3 figure-m-v-20">
            <figure v-for="(content, key) in block.content" :key="key">
              <div class="fig-wrapper">
                <div class="img-content">
                  <div class="img" :style="'background-image: url('+content.image+');'"></div>
                </div>
                <div class="desc-content text-x1 m-t-10" v-html="content.name"></div>
              </div>
            </figure>
          </div>
        </div>
      </template>
    </div>
    
    <div class="kiaworld-cars">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block5'">
        <div class="img-entry-header relative">
          <div class="container text-content m-t-md-70">
            <div class="row-15 flex-adaptive justify-c-between">
              <div class="col-md-4 p-h-15">
                <div class="h1 text-x5 m-t-0">{{block.name}}</div>
              </div>
              <div class="col-md-offset-1 p-h-15 text-x1 col-md-7">
                <p>{{block.text}}</p>
              </div>
            </div>
          </div>
          <div class="img-bg">
            <img :src="block.image">
          </div>
        </div>
      </template>
    </div>
    <div class="kiaworld-plan">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block6'">
        <div class="g-padding">
          <div class="g-container">
            <div class="g-margin">
              <div class="kiaworld-plan-body color-white">
                <div class="img-content">
                  <img :src="block.image">
                </div>
                <div class="h1 text-x5">{{block.name}}</div>
                <div v-html="block.text"></div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="kiaworld-rating">
      <template v-for="(block) in page_data.blocks" v-if="block.block == 'block7'">
        <div class="g-padding">
          <div class="g-container">
            <div class="g-margin flex-adaptive justify-c-between p-v-30 p-v-md-90">
              <div class="desc-content m-v-30 box-md-4">
                <div class="h1 text-x5">{{block.name}}</div>
                <br>
                <div class="text-x1">{{block.text}}</div>
                <br><br>
                <div class="fw-6 text-x5">{{block.content.code[0]}} <span class="text-x3">{{block.content.code[1]}}</span></div>
                <div class="text-x1">{{block.content.content}}</div>
              </div>
              <div class="img-content m-v-30 box-md-5">
                <img :src="block.image">
              </div>
            </div>
            <hr>
          </div>
        </div>
      </template>
    </div>

    <KiaworldOther :kiaworld-other-items="page_data.footer" />
    
  </div>
</template>


<script>
import KiaworldOther from "@/components/kiaworld/KiaworldOther";


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
  components:{
    KiaworldOther
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: "/about/brand"
      });
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
}

</script>