<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url('+page_data.header.image+');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about/">Бренд Kia</nuxt-link></li>
              <li><nuxt-link to="">История Kia</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header" v-html="page_data.header.text"></div>
        </div>
      </div>
    </div>
    <div class="kiaworld-history">
      <div class="g-padding p-v-md-80 p-v-30">
        <div class="container">
          <div class="g-margin">
            <div class="kiaworld-history-items">
              <template v-for="(content) in page_data.content">
                <figure class="item-full">
                  <div class="img-full">
                    <div class="img bg-size-cover" style="background-image: url('https://www.kia.ru/images/landing/about/history/img-timeline-0.jpg');"></div>
                    <div class="caption">
                      <h4>{{content.alias}}</h4>
                      <h2 class="text-x4">{{content.name}}</h2>
                    </div>
                  </div>
                  <div class="desc-content" v-html="content.info"></div>
                </figure>
                <figure v-for="(item, key) in content.images" :key="key">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <div class="img" :style="'background-image: url('+item.image+');'"></div>
                    </div>
                    <div class="desc-content">
                      <h4 class="color-2">{{item.name}}</h4>
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                </figure>
              </template>

            </div>
          </div>
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