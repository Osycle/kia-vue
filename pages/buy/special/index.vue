<template>
  <div class="main-body offset-header specials">
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
        <figure v-for="(offer, key) in spacialItems" :key="key">
          <nuxt-link :to="'/buy/special/'+offer.id">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(\''+offer.image+'\');'"></div>
              </div>
              <div class="desc-content">
                <h4>{{offer.name}}</h4>
                <p>{{offer.text}}</p>
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
      title: "Специальные предложения Kia Узбекистан",
      meta: [
        {
          content: "Специальные предложения Kia Узбекистан"
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const spacialItems = await context.store.dispatch("other/fetchPath", {
        path: context.route.path
      })
      return {
        spacialItems
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>