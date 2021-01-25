<template>
  <div class="main-body specials">
    <div class="bnr-area">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="">Спецпредложение</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p">
        <div class="entry-content">
          <h1 class="desktop:text-x3">Специальные предложения</h1>
        </div>
      </div>
    </div>
    <div class="container-p">
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