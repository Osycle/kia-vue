<template>
  <div class="main-body offset-header model-special">
    <div class="container-p">
      <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">Спецпредложения на сервис Kia</nuxt-link></li>
        </ol>
      </div>
      <div class="entry-header m-v-30">
        <div class="flex-adaptive justify-c-between">
          <h1 class="text-x5">Спецпредложения на сервис Kia</h1>
        </div>
      </div>
      <div class="m-t-30 m-b-15">
        {{page.offers.length}} спецпредложения
      </div>
      <div class="short-news-items boxes-4 figure-m-v-15 p-b-30 m-t-15 m-b-30">
        <figure v-for="(offer, key) in page.offers" :key="key">
          <nuxt-link :to="'/service/special/'+offer.code">
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