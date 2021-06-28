<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/about/">Бренд Kia</nuxt-link></li>
          <li><nuxt-link to="/about/technologies">Технологии</nuxt-link></li>
          <li><nuxt-link to="">{{page_data.name}}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <div class="link-content fw-6 mv-6">
          <nuxt-link to="/about/technologies" class="align-center mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path data-v-fde3dc5a="" d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
            Все технологии
          </nuxt-link>
          <div class="color-2">{{page_data.categorie}}</div>
        </div>
        <hr>
      </div>
    </div>
    <div class="block-content entry-content">
      <div class="container-p pb-12">
        <div class="flex-adaptive justify-c-between">
          <div class="img-content box-md-4 desktop:mr-6 mv-6">
            <img :src="page_data.image" alt="">
          </div>
          <div class="desc-content cell box-md-5 mv-6">
            <div class="text-x5 desktop:text-x4 mb-4">
              {{page_data.name}}
            </div>
            <div v-html="page_data.content" class="intext"></div>
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
      title: this.page_data.seo.title,
      meta: [
        {
          content: this.page_data.seo.description
        }
      ],
    }
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

<style lang="scss" scoped>
  .entry-content{
    .img-content{
      @media (max-width: 991px){
        margin-left: -15px;
        margin-right: -15px;
      }
    }
  }
</style>