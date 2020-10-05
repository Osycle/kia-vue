<template>
  <div>
    <Bnr />
    <div class="short-models">
      <div class="block-wrapper p-v-md">
        <div class="container">
          <div class="entry-header m-t-30 text-center">
            <h2>Модели KIA</h2>
          </div>
        </div>
        <div class="container">
          <div class="short-models-nav m-v-20 text-center">
            <ul class="list flex-adaptive justify-c-center li-m-v-15">
              <li v-for="(model, key) in loadModelsIndex" :key="key" :class="{active: key == 0}">
                <a :href="'#smodels-'+[key+1]" data-toggle="tab">{{model.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">

            <div :id="'smodels-'+[key+1]" v-for="(model, key) in loadModelsIndex" :key="key" :class="{active: key == 0, 'tab-pane in': true}">
              <div class="tab-content imgs-main">
                <div class="img-content" :style="'background-image: url('+model.bg+');'">
                  <a href="/k5">
                    <img :src="model.img">
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="fetchTest">
      <div class="container">
        <h3>Acasss</h3>
        <input type="text" name="email" v-model="form.email">
        <input type="password" name="password" v-model="form.password">
        <button>SUBMIT</button>
      </div>
    </form>
    <div class="short-motext">
      <div class="container-p p-v-md">
        <div class="row">
          <div class="col-md-6 p-h-15 m-v-30">
            <h3>{{motext.textH3}}</h3>
          </div>
          <div class="col-md-6 p-h-15 m-v-30 text-item">
            <p>{{motext.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import Bnr from '@/components/Bnr'
import { mapActions } from 'vuex'

export default {
  components:{
    Bnr,
  },
  methods: {
    async fetchTest(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users', { //http://hia-vue/handler.php
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password
        })
      });
      const data = await res.json();
      //this.cars = res.json();
      console.log(data);
    }
  },
  computed: {
    loadModelsIndex(){
      return this.$store.getters.getModels
    }
  },
  created(){
    //this.$store.dispatch('loadModelsIndex', 1000);
  },
  data(){
    return {
      mode: "APOM",
      cars: [],
      form: {
        email: '',
        password: '',
      },
      errors: [],
      motext: {
        textH3: "Качество, проверенное временем",
        description: "KIA Motors — старейший корейский автопроизводитель, бренд основан в 1944 году. Завоевав лидирующие позиции в Южной Корее, марка KIA вышла на международный рынок и за несколько десятилетий завоевала репутацию динамично развивающегося бренда, производителя надёжных и практичных автомобилей. Современная история KIA – это стильный и узнаваемый дизайн, инновационные технологии и безупречное качество, широкий модельный ряд, рациональная ценовая политика и максимальная ориентированность на клиента. Девиз компании – «The Power to Surprise» («Искусство удивлять»). Компания не перестает удивлять поклонников новинками, которые восхищают передовыми технологиями и техническим совершенством. Каждая последующая модель опережает запросы клиентов, задает новые тренды в автомобильной индустрии.",
      }
    }
  },
  head: {
    script: [
      {src: '/js/plugins/owl.carousel.min.js'},
      {src: '/js/main.js'},
    ]
  },
  components: {
    
  },


  
}

</script>

<style>

</style>
