<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">Автомобили в наличии</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header desktop:mb-12">
          <h1 class="text-x5">Автомобили в наличии</h1>
          <p><big>Выберите автомобиль KIA с помощью онлайн-каталога.</big></p>
        </div>
        <div class="entry-content">
          <div class="models-items boxes-4 figure-m-v-30 desktop:mb-12">
            <figure v-for="(model, key) in page.models" :key="key">
              <div class="img-content">
                <nuxt-link :to="'/models/'+model.code+'/desc'">
                  <img :src="'https://cdn.kia.ru/resize/400x198/'+model.image">
                </nuxt-link>
              </div>
              <div class="desc-content">
                <div class="car-card__name">
                  <nuxt-link :to="'/models/'+model.code+'/desc'">
                    {{model.name}}
                  </nuxt-link>
                </div>
              </div>
            </figure>
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
      ]
    }
  },
  async asyncData(context){
    try{
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path
      })
      return {
        page: page.content
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>