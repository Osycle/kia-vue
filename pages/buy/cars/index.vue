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
          <p><big>Выберите автомобиль Kia с помощью онлайн-каталога.</big></p>
        </div>
        <div class="entry-content">
          <div class="models-items boxes-4 figure-m-v-30 desktop:mb-12">
            <figure v-for="(model, key) in models" :key="key">
              <div class="img-content">
                <nuxt-link :to="'/models/'+model.url+'/desc'">
                  <img :src="model.image">
                </nuxt-link>
              </div>
              <div class="desc-content">
                <div class="car-card__name">
                  <nuxt-link :to="'/models/'+model.url+'/desc'">
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
      title: "Автомобили в наличии",
      meta: [
        {
          content: "Автомобили Kia в наличии Узбекистане"
        }
      ]
    }
  },
  data(){
    return {
      models: [],
    }
  },
  created(){
    this.page_data.map(e=>{
      e.models.map(model=>{
        this.models.push(model);
      })
    })
  },
  async asyncData(context){
    try{
      //const path = context.route.path
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: "models"
      })
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>