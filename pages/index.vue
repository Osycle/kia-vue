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
              <li v-for="(model, key) in models" :key="key" :class="{active: key == 0}"><a :href="'#smodels-'+[key+1]" data-toggle="tab">{{model.name}}</a></li>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">

            <div :id="'smodels-'+[key+1]" v-for="(model, key) in models" :key="key" :class="{active: key == 0, 'tab-pane in': true}">
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

export default {
  components:{
    Bnr,
  },
  data(){
    return {
      models: [
        {
          name: 'K5',
          bg: "https://cdn.kia.ru/resize/3840x240/site-data/models/background/retina/k5.jpg",
          img: "https://cdn.kia.ru/resize/1020x480/master-data/models/K5_half.png"
        },
        {
          name: 'Seltos',
          bg: "https://cdn.kia.ru/resize/3840x240/site-data/models/background/retina/seltos.jpg",
          img: "https://cdn.kia.ru/resize/1020x480/master-data/models/seltos.png"
        }
      ],
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
  methods: {

  },


  
}

</script>

<style>

</style>
