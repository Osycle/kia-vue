<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1  bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/buy/special/">Спецпредложение</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="content-wrapper">
          <div class="entry-header">
            <h1 class="box-md-4">{{page_data.title}}</h1>
            <p>{{page_data.headText}}</p>
          </div>
          <div class="mt-12 desktop:mt-20 pb-5">
            <div class="flex-adaptive align-end">
              <div class="item desktop:mr-12">
                <div class="h3 fw-6" >
                  <!-- {{new Date(page_data.start)}} <br> {{new Date(page_data.end)}} -->
                  <span v-if="new Date(page_data.start).getFullYear() != new Date(page_data.end).getFullYear()">
                    {{new Date(page_data.start) | dateFormat('D MMMM YYYY')}} по {{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                  <span v-else-if="new Date(page_data.start).getMonth() != new Date(page_data.end).getMonth()">
                    {{new Date(page_data.start) | dateFormat('D MMMM')}} по {{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                  <span v-else>
                    {{new Date(page_data.start) | dateFormat('D')}}-{{new Date(page_data.end) | dateFormat('D MMMM YYYY')}}
                  </span>
                </div>
                <div>Длительность</div>
              </div>
              <div class="item">
                
                  <vac 
                    :startTime="page_data.start" 
                    :end-time="page_data.end">
                    <div 
                      class="h3 fw-6" 
                      slot="process"
                      slot-scope="{ timeObj }">
                        {{ `${timeObj.d} дней, ${timeObj.h}:${timeObj.m}:${timeObj.s}` }}
                      </div>
                    <div slot="finish" class="h3 fw-6">Завершено</div>
                    <div>До завершения</div>
                  </vac>
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    <div class="special-info">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-110 list-check justify-c-center">
          <div class="box-md-6 m-v-30 p-h-15">
            <h2 class="desktop:text-x4 desktop:mb-6">{{page_data.content[0].title}}</h2>
            <div v-html="page_data.content[0].content"></div>
          </div>
          <!-- <div class="box-md-4 m-v-30 p-h-15" v-for="(item, key) in page_data.content" :key="key">
            <h2 class="desktop:text-x4 desktop:mb-6">{{item.title}}</h2>
            <div v-html="item.content"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default

export default {
  head() {
    return {
      title: this.page_data.seo.meta_title.length ? this.page_data.seo.meta_title : "Спецпредложение Kia в Узбекистане",
      meta: [
        {
          content: this.page_data.seo.meta_description.length ? this.page_data.seo.meta_description : "Спецпредложение Kia в Узбекистане",
        }
      ],
    }
  },
  data() {
    return {

    }
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: context.route.path,
      })
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
  created(){
    //this.page_data.start = this.page_data.start * 1000
    //this.page_data.end = this.page_data['end '] * 1000

    //this.page_data.end = this.page_data.end+15e9;
    //delete this.page_data['end ']
  },
  mounted(){
    this.page_data.start = this.page_data.start * 1000
    this.page_data.end = this.page_data.end * 1000
    //this.page_data.end = this.page_data.end+15e9;
    //delete this.page_data['end ']
  },

  methods: {

  }
}
</script>