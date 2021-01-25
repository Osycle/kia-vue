<template>
  <div class="main-body special" header-opacity>
    <div class="bnr-style-1 color-white bg-shadow-none" :style="'background-image: url(https://cdn.kia.ru/'+page.offer.detail_image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/buy/special/">Спецпредложение</nuxt-link></li>
            <li><nuxt-link to="">{{page.offer.name}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-4">{{page.offer.name}}</h1>
          <p>{{page.offer.preview_text}}</p>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-110 list-check justify-c-center">
          <div class="box-md-4 m-v-30 p-h-15">
            <h2 class="desktop:text-x4 desktop:mb-6">Условия участия</h2>
            <div v-html="page.offer.condition_text"></div>
          </div>
          <div class="box-md-4 m-v-30 p-h-15">
            <h2 class="desktop:text-x4 desktop:mb-6">Преимущества программы</h2>
            <div v-html="page.offer.advantage_text"></div>
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
      return {
        page: page.content,
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>