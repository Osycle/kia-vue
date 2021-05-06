<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/models">Запись на тест-драйв</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">Запись на тест-драйв</h1>
        </div>
        <div class="entry-content">
          <section class="m-v-50" v-for="(type, key) in page.groups" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(modelLine, key) in page.model_lines" :key="key" v-if="type.id == modelLine.group_id && modelLine.testdrive" >
                <div v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id">                
                  <div class="img-content" >
                    <nuxt-link exact :to="'/models/'+modelLine.code+'/testdrive/'">
                      <img :src="'https://cdn.kia.ru/resize/400x198/'+model.image">
                    </nuxt-link>
                  </div>
                  <div class="desc-content">
                    <div class="car-card__name">
                      <nuxt-link exact :to="'/models/'+modelLine.code+'/testdrive/'">{{modelLine.name}}</nuxt-link>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </section>
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