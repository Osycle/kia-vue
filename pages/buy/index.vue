<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/buy">Онлайн-сервисы</nuxt-link></li>
        </ol>
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