<template>
  <div class="main-body" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white bg-shadow-none" style="background-image: url('https://www.kia.ru/images/landing/about/design/bg-header.jpg');">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="/about">Модели</nuxt-link></li>
              <li><nuxt-link to="/about/design">Дизайн</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header">
            <h1>Дизайн</h1>
            <p>Переворачивая представление о KIA</p>
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