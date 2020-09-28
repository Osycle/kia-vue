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
              <li v-for="(model, key) in models" :key="key" :class="{active: key == 0}"><a href="#smodels-1" data-toggle="tab">{{model.name}}</a></li>
            </ul>
          </div>
        </div>
        <div class="short-models-content">
          <div class="tab-content">

            <div :id="[key]" v-for="(model, key) in models" :key="key" class="tab-pane in active">
              <div class="tab-content imgs-main">
                <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/3840x240/site-data/models/background/retina/k5.jpg');">
                  <a href="/k5">
                    <img src="https://cdn.kia.ru/resize/1020x480/master-data/models/K5_half.png">
                  </a>
                </div>
              </div>
            </div>


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
        },
        {
          name: 'Seltos',
        }
      ]
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
