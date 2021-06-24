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
          <section class="m-v-50" v-for="(type, key) in page_data" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(model, key) in type.models" :key="key" >
                <div>
                  <div class="img-content" >
                    <nuxt-link exact :to="'/models/'+model.url+'/testdrive/'">
                      <img :src="model.image">
                    </nuxt-link>
                  </div>
                  <div class="desc-content">
                    <div class="car-card__name">
                      <nuxt-link exact :to="'/models/'+model.url+'/testdrive/'">{{model.name}}</nuxt-link>
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
      title: "Запись на тест-драйв",
      meta: [
        {
          content: "Запись на тест-драйв"
        }
      ]
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