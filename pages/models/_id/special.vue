<template>
  <div class="main-body offset-header model-special">
    <div class="container-p">

      <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/models">Модели</nuxt-link></li>
          <li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page.model.name}}</nuxt-link></li>
          <li><nuxt-link :to="'/models/'+$route.params.id+'/special'">Спецпредложения</nuxt-link></li>
        </ol>
      </div>
      <div class="entry-header m-v-30">
        <div class="flex-adaptive justify-c-between">
          <div class="text-content box-md-5 m-v-20">
            <div>
              <h1 class="text-x5">Спецпредложения <br>{{page.model.name}}</h1>
            </div>
            <div class="price-content flex-adaptive m-t-20">
              <div class="box-md-3">
                <div class="color-gray-4 m-b-10">Минимальная цена</div>
                <b class="font-size-3">{{page.model.min_price | spaceBetweenNum}} сум</b>
              </div>
            </div>
          </div>
          <div class="img-content box-md-5 m-v-20">
            <img src="https://cdn.kia.ru/resize/582x180/master-data/models/K5_half.png" alt="" class="m-auto">
          </div>
        </div>
      </div>
      <div class="short-news-items boxes-4 figure-m-v-15 p-b-30 m-v-30">
        <figure v-for="(offer, key) in page.offers" :key="key">
          <nuxt-link :to="'/buy/special/'+offer.code">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(\'https://cdn.kia.ru/resize/410x277'+offer.preview_image+'\');'"></div>
              </div>
              <div class="desc-content">
                <h4>{{offer.name}}</h4>
                <p>{{offer.preview_text}}</p>
                <br>
              </div>
            </div>
          </nuxt-link>
        </figure>
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
      return {
        page: page.content,
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>