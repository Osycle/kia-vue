<template>
  <div class="main-body offset-header">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/models">Модели</nuxt-link></li>
        </ol>
      </div>
    </div>

    <div class="models">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">Все модели KIA</h1>
        </div>
        <div class="entry-content">
          <section class="m-v-50" v-for="(type, key) in page.groups" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(modelLine, key) in page.model_lines" :key="key" v-if="type.id == modelLine.group_id" >
                <div v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id">                
                  <div class="img-content" >
                    <nuxt-link prefetch :to="$route.path+'/'+modelLine.code+'/desc'"><img :src="model.image"></nuxt-link>
                  </div>
                  <div class="desc-content">
                    <div class="car-card__name">
                      <nuxt-link prefetch :to="$route.path+'/'+modelLine.code+'/desc'">{{modelLine.name}}</nuxt-link>
                    </div>
                    <div class="car-card-price m-v-5">
                      <p><span class="p-r-10">от {{ model.min_price | spaceBetweenNum }} сум</span><a class="flex" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></p>
                    </div>
                    <div class="car-card-links">
                      <nuxt-link exact :to="$route.path+'/'+modelLine.code+'/configurator/'" class="btn-link-1">Конфигуратор<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></nuxt-link>
                      <nuxt-link exact :to="$route.path+'/'+modelLine.code+'/options/'" class="btn-link-1">Цены<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></nuxt-link>
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