<template>
  <div>
    <Breadcrump :pageTitle="pageTitle"/>
    <div class="models">
      <div class="container-p">
        <div class="entry-header m-b-30">
          <h1 class="text-x5">Все модели KIA</h1>
        </div>
        <div class="models-filter m-v-30">
          <select class="js-select">
            <option>Не выбраны</option>
          </select>
        </div>
        <div class="entry-content">
          <section class="m-v-50" v-for="(type, key) in types" :key="key">
            <h3 class="text-x4">{{type.name}}</h3>
            <div class="models-items boxes-4 figure-m-v-30">
              <figure v-for="(model, key) in type.models" :key="key">
                <div class="img-content">
                  <a href="/k5">
                    <img :src="model.img">
                  </a>
                </div>
                <div class="desc-content">
                  <div class="car-card__name">
                    <a href="/k5">{{model.name}}</a>
                  </div>
                  <div class="car-card-price m-v-5">
                    <p><span class="p-r-10">от {{ model.price | spaceBetweenNum }} сум</span><a class="flex" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></p>
                  </div>
                  <div class="car-card-links">
                    <a href="javascript:;" class="btn-link-1">Конфигуратор<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></a>
                    <a href="models-options.html" class="btn-link-1">Цены<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg></a>
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
import Breadcrump from '@/components/Breadcrump'
export default {  
  head: {
    title: "Модели",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ]
  },
  components: {
    Breadcrump
  },
  data(){
    return {
      pageTitle: "Модели",
      types:[
        {
          name: 'Бизнес-класс и представительский класс',
          models: [
            {
              name: 'K5',
              img: 'https://cdn.kia.ru/resize/400x198/master-data/models/K5_half.png',
              price: "249900000"
            },
          ]
        },
        {
          name: 'Кроссоверы и внедорожники',
          models: [
            {
              name: 'Seltos',
              img: 'https://www.kia.ru/static/resize/400x198/master-data/models/seltos.png',
              price: "229900000"
            },
          ]
        }
      ]
    }
  },
  
  filters: {
    spaceBetweenNum (price) {
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(price))
        price = price.replace(pattern, "$1 $2");
      return price;
    },
  },

}
</script>