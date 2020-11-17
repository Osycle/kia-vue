<template>
  <div class="relative conf" scrollf>
    <Breadcrump :breadcrumpItems="breadcrumpItems"/>
    <div class="conf-header">
      <div class="container-p">
        <div class="entry-header">
          <h2>Конфигуратор</h2>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li class="active">
              <b class="color-1">01</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">02</b>
              <p>Двигатель и трансмиссия</p>
            </li>
            <li>
              <b class="color-1">03</b>
              <p>Комплектация</p>
            </li>
            <li>
              <b class="color-1">04</b>
              <p>Цвета и отделка</p>
            </li>
            <li>
              <b class="color-1">05</b>
              <p>Результаты</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-content">
      <div class="container-p">
        <div class="left-bar-def col-md-3">
          <div class="wrapper conf-result-content">
            <div class="cap-content">
              <h3>K5</h3>
              <h3>от 3 504 900 ₽</h3>
              <h3>17 570 ₽/мес</h3>
            </div>
            <figure>
              <img src="https://cdn.kia.ru/resize/300x200/master-data/models/image_side/stinger.png" alt="">
            </figure>
            <div class="conf-result-section">
              <dl>
                <dt>2020 год производства</dt>
              </dl>
            </div>
            <br>
            <div class="conf-result-section">
              <h4>Двигатель и трансмиссия</h4>
              <dl>
                <!-- <dt>{{carParams.engine.name}}, {{carParams.engine.power_hp}}</dt> -->
                <dt></dt>
                <dt>4WD, полный</dt>
              </dl>
            </div>
            <div class="conf-result-summary">
              <dl>
                <dt>Итоговая стоимость</dt> 
                <dd><strong class="text-s1">от 3 504 900 ₽</strong></dd>
              </dl>
            </div>
            <div class="conf-result-summary">
              <p>Кредитный расчет</p>
              <dl>
                <dt>Ежемесячный платеж</dt> 
                <dd><strong class="text-s1">10 900 ₽/мес</strong></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="conf-content">
          <div class="conf-steps conf-step-2">
            <div class="row p-b-10">
              <div class="entry-content col-md-offset-3 col-md-9">
                <div class="car-params">
                  <div class="car-params-item">
                    <h4>Двигатель</h4>
                    <ul class="flex-list">
                      <li v-for="(engine, key) in page.engines" :key="key" @click="carParamClick({engine}, $event)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15" v-for="(type, key) in page.fuel_types" :key="key" v-if="engine.fuel_type_id == type.id">
                              <div class="fw-6">{{engine.name}}</div>
                              {{engine.power_hp}} л.c., {{type.name}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>Коробка передач</h4>
                    <ul class="flex-list">
                      <li v-for="(transmission, key) in page.transmissions" :key="key" @click="carParamClick({transmission}, $event)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15" v-for="(gearbox, key) in page.gearboxes" :key="key" v-if="transmission.gearbox_id == gearbox.id">
                              <div class="fw-6">
                                {{gearbox.name}}
                              </div>
                              {{transmission.gears_number}}{{gearbox.code}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>Привод</h4>
                    <ul class="flex-list">
                      <li v-for="(drive, key) in page.drives" :key="key" @click="carParamClick">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">
                                {{drive.name}}
                              </div>
                              {{drive.code}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
          <span class="btn-def btn-step-back">
            <a href="javascript:;" currentstep="0" @click="confnext" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </a>
          </span>
          <span class="btn-def">
            <a href="javascript:;" currentstep="0" @click="confnext">Далее</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import mainjs from '@/static/js/main'
import Step_2 from '@/components/configurator/Step-2.vue'

export default {
  head() {
    return {
      title: this.page.seo.title,
      meta: [
        {
          content: this.page.seo.description
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const path = context.route.path
      console.log(context.route.params.id);
      const page = await context.store.dispatch("models/fetchPageData", {
        path: "/models/"+context.route.params.id+"/modifications"
        //path: "/models"
      })
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  components: {
    
  },
  data(){
    return {
      currentStep: 1,
      complectationId: "",
      carParams: {
        engine: {
          name: "",
          power_hp: "",
        },
        transmission:{

        }
      },
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Конфигуратор',link: '/'},
      ],
    }
  },
  mounted(){
    mainjs();
    const firstSet = this.page.complectations[0];
    for (let i = 0; i < this.page.engines.length; i++) {
      const item = this.page.engines[i];
      if(item.id == firstSet.engine_id){
        this.carParams.engine = item
      }
    }
    
    for (let i = 0; i < this.page.transmissions.length; i++) {
      const item = this.page.transmissions[i];
      if(item.id == firstSet.transmission_id){
        this.carParams.transmission = item
      }
    }

    console.log(this.page.complectations[0])
  },
  methods: {
    async carParamClick(carParam, e){
      //console.log('so sadpsaoidpoas', carParam ,e)
      if(carParam['engine']){

        this.carParams.engine = carParam.engine
        for (let i = 0; i < this.page.fuel_types.length; i++) {
          const el = this.page.fuel_types[i];
          if(el.id == carParam.engine.fuel_type_id)
            this.carParams.fuel_types = el;
        }
      }
      // if(carParam['transmission']){
      //   this.carParams.transmission_id = carParam.transmission.id
      //   this.carParams.drive_id = carParam.transmission.drive_id
      //   this.carParams.fuel_type_id = carParam.transmission.gearbox_id
      // }
      console.log(this.carParams, carParam);
      this.changeParam();
    },
    carInfo(prop){
      console.log(prop)
    },
    changeParam(){
      console.log('changeParam');
    },
    confnext(){
      const modelVideo = this.$axios.$get('http://kia-api-php/handler.php?path=/modifications', {
        path: "/modifications"
      })
      this.currentStep++;
    }
  }
}

</script>