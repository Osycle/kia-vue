<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about/">Мир KIA</nuxt-link></li>
              <li><nuxt-link to="">Дизайн</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
    </div>

    <div class="kiaworld-sponsorship">
      <div class="g-padding p-v-md-40">
        <div class="g-container">
          <div class="g-margin">
            <br>
            <div class="entry-header text-center">
              <h4 class="color-2 text-n1">{{page_data.blocks[0].alias}}</h4>
              <h1 class="text-x5">{{page_data.blocks[0].name}}</h1>
            </div>
            <div class="kiaworld-sponsorship-items">
              <figure v-for="(content, key) in page_data.blocks[0].content" :key="key">
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">{{content.name}}</div>
                    <div v-html="content.text"></div>
                  </div>
                  <div class="img-content">
                    <img :src="content.image">
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="short-concept img bg-size-cover" :style="'background-image: url('+page_data.blocks[1].image+');'">
      <div class="g-padding p-v-md-80 p-v-50">
        <div class="g-container">
          <div class="g-margin">
            <div class="entry-header color-white text-center box-md-7 box-lg-5 m-auto">
              <h2 class="text-x5">{{page_data.blocks[1].name}}</h2>
              <div v-html="page_data.blocks[1].text"></div>
              <br>
              <span class="btn-opacity">
                <a :href="page_data.blocks[1].link">Подробнее</a>
              </span>
            </div>
            <div class="hidden-xs hidden-sm" style="height: 600px;"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-video bg-black-fill color-white">
      <div class="container-p p-v-80">
        <div class="entry-header text-center m-b-30">
          <h4 class="color-2 text-n1">{{page_data.blocks[2].alias}}</h4>
          <h2>{{page_data.blocks[2].name}}</h2>
        </div>
        <br>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="card-video-items boxes-4 owl-carousel owl-btn-2">
              <figure v-for="(content, key) in page_data.blocks[2].content" :key="key">
                <a :href="content.video" data-fancybox>
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" :style="'background-image: url('+content.image+');'"></div>
                      <div class="btn-play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div class="desc-content m-t-10">
                      <p><b>{{content.name}}</b></p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="design-symbol bg-color-black color-white">
      <div class="container-p p-v-80">
        <div class="entry-header text-center m-b-30 box-md-5 m-auto">
          <h4 class="color-2 text-n1">{{page_data.blocks[3].alias}}</h4>
          <h2>{{page_data.blocks[3].name}}</h2>
          <div v-html="page_data.blocks[3].text"></div>
        </div>
        <div class="img-content text-center">
          <img :src="page_data.blocks[3].image">
        </div>
      </div>
    </div>

    <div class="design-inter">
      <div class="container-p p-v-80">
        <div class="row-15 flex-adaptive justify-c-between">
          <div class="col-md-4 p-h-15">
            <h4 class="color-2 text-n1">{{page_data.blocks[4].alias}}</h4>
            <div class="h1 text-x5">{{page_data.blocks[4].name}}</div>
          </div>
          <div class="col-md-offset-1 p-h-15 col-md-6 m-t-50 text-item" v-html="page_data.blocks[4].text"></div>
        </div>
        <br class="hidden-xs">
        <div class="design-inter-items owl-carousel m-t-30">
          <figure v-for="(item, key) in page_data.blocks[4].images" :key="key">
            <div class="img-content">
              <img :src="item">
            </div>
          </figure>
        </div>
      </div>
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
        path: context.route.path
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