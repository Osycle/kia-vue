<template>
  <div class="relative conf offset-header" scrollf>
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/configurator">Конфигуратор</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="conf-header">
      <div class="container-p">
        <div class="entry-header">
          <h2>Конфигуратор</h2>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li>
              <nuxt-link to="/configurator">
                <b>01</b>
                <p>Выбор модели</p>
              </nuxt-link>
            </li>
            <li @click.stop="progressStepsBar(2)" :class="{'active': currentStepNum == 2}">
              <b>02</b>
              <p>Двигатель и трансмиссия</p>
            </li>
            <li @click.stop="progressStepsBar(3)" :class="{'active': currentStepNum == 3}">
              <b>03</b>
              <p>Комплектация</p>
            </li>
            <li @click.stop="progressStepsBar(4)" :class="{'active': currentStepNum == 4}">
              <b>04</b>
              <p>Цвета и отделка</p>
            </li>
            <li @click.stop="progressStepsBar(5)" :class="{'active': currentStepNum == 5}">
              <b>05</b>
              <p>Результаты</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-main" :current-step="currentStepNum">
      <div class="container-p clearfix">
        <div class="left-bar-def sidebar-wrapper col-md-3 scrolled-down">
          <div class="wrapper-scroll">
            <div class="wrapper conf-result-content">
              <div class="cap-content">
                <h3>{{model.title}}</h3>
                <h3>от {{currentPrice | spaceBetweenNum}} сум</h3>
              </div>
              <figure class="text-center m-v-20">
                <img :src="model.sideImage" alt="">
              </figure>
              <div class="conf-result-section">
                <dl>
                  <dt>{{currentComplectation.year}} год производства</dt>
                </dl>
              </div>
              <br>
              <div class="conf-result-section">
                <h4>Двигатель и трансмиссия</h4>
                <dl>
                  <dt>{{currentEngine.name}}, {{currentEngine.descr}}</dt>
                  <dt>{{currentGearbox.name}}, {{currentGearbox.value}}</dt>
                  <dt>{{currentDrive.name}}, {{currentDrive.value}}</dt>
                </dl>
              </div>
              <div class="conf-result-summary">
                <dl>
                  <dt>Итоговая стоимость</dt> 
                  <dd><strong class="text-s1">от {{currentPrice | spaceBetweenNum}} сум</strong></dd>
                </dl>
              </div>
              <div class="conf-result-summary hide">
                <p>Кредитный расчет</p>
                <dl>
                  <dt>Ежемесячный платеж</dt> 
                  <dd><strong class="text-s1">10 900 ₽/мес</strong></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="conf-main-content col-md-9">
          <template v-if="currentStepNum === 2">
            <div class="conf-steps conf-step-2">
              <div class="entry-content">
                <div class="car-params">
                  <div class="car-params-item">
                    <h4>Двигатель</h4>
                    <ul class="flex-list">
                      <li v-for="(engine, key) in model.engines" :key="key" :class="{'active': engine.id == currentEngine.id}"
                          :ref="'paramEngine'"
                          :car-param="engine.name"
                          @click.prevent.stop="selectParamEngine(engine, $event)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{engine.name}}</div>
                              {{engine.descr}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>Коробка передач</h4>
                    <ul class="flex-list">
                      <li v-for="(gear, key) in model.gears" :key="key" :class="{'active': gear.name == currentGearbox.name}" 
                        :ref="'paramGearbox'"
                        :car-param="gear.name"
                        @click.prevent.stop="selectParamGearbox(gear, $event)">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{gear.name}}</div>
                              {{gear.value}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="car-params-item">
                    <h4>Привод</h4>
                    <ul class="flex-list">
                      <li v-for="(drive, key) in model.privodi" :key="key" :class="{'active': drive.name == currentDrive.name}">
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <div class="fw-6">{{drive.name}}</div>
                              {{drive.value}}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </template>
 

        </div>
      </div>
    </div>
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
          <span class="btn-def btn-step-back" v-if="currentStepNum < 5">
            <nuxt-link to="/configurator" v-if="currentStepNum <= 2" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </nuxt-link>
            <a href="javascript:;" v-else @click="progressStepsBar('prev')" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </a>
          </span>
          <span class="btn-def">
            <a href="javascript:;" v-if="currentStepNum == 5" @click.prevent.stop="scrollAnimate('#conf-feedback', $event)">Забронировать</a>
            <a href="javascript:;" v-if="currentStepNum < 5" @click="progressStepsBar('next')">Далее</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>




export default {
  head() {
    return {
      title: "KIA K5 – конфигуратор седана, старт продаж в России",
      meta: [
        {
          content: "Сконфигурируйте KIA K5. Возможность выбрать доступный двигатель, настроить внешний вид и подобрать аксессуары для вашего седана КИА К5."
        }
      ],
    }
  },
  async asyncData(context){
    try{
      
      // const path = context.route.path
      // const page = await context.store.dispatch("models/fetchPageData", {
      //   path: "/models/"+context.route.params.id+"/full"
      // })
      const modelName = context.route.params.id;
      
      const page_data = await context.store.dispatch("models/fetchModels", {
        modelName
      })
      
      //console.log(page_data);
      var ata = {
        "id": 978,
        "title": "K5",
        "sideImage": "https://cdn.kia-motors.uz/uploads/gallery/original-20bc78.png",
        "engines": [
        {
          "id": 0,
          "name": "2.0 MPI",
          "descr": "150 л.c., Бензин",
          "allowedGears": ["6AT", "10AT"],
          "allowedPrivodi": ["FWD", "4WD"]
        },
        {
          "id": 1,
          "name": "2.5 GDI",
          "descr": "194 л.c., Бензин",
          "allowedGears": ["6AT", "8AT", "10AT"],
          "allowedPrivodi": ["FWD"]
        }],
        "gears": [
        {
          "name": "6AT",
          "value": "Автомат"
        },
        {
          "name": "8AT",
          "value": "Автомат"
        },
        {
          "name": "10AT",
          "value": "Автомат"
        }],
        "privodi": [
        {
          "name": "4WD",
          "value": "Полный"
        },
        {
          "name": "FWD",
          "value": "Передний"
        }],
        "minPrices": [
        {
          "6AT":{
            "FWD": 269900000,
            "4WD": 550000000
          },
          "10AT":{
            "FWD": 269900000,
            "4WD": 550000000
          }

        },
        {
          "8AT":{"FWD": 35890000},
          "6AT":{"FWD": 5}
        }]
      }
      return {
        model: ata
      }
    }catch(e){
      context.error(e);
    }
  },
  components: {},
  compluted: {

  },
  filters:{

  },
  data(){
    return {
      currentStepNum: 2,
      currentEngine: {},
      currentGearbox: {},
      currentDrive: {},
      currentPrice: 0,

      currentModel: {},
      currentModelLine: {},
      currentComplectation: {},
      currentFuelType: {},
      currentTransmission: {},
      currentOverview: {},

      selectComplectations: {},
      selectComplectation: {},
      selectExteriorColor: {},
      selectInteriorColor: {},
      selectOverview: {},
      selectPanorama: {},

      panoActive: false,
      showroomComplectations: [],
      showroomComplectation: {},
      panoramasComplectations: [],
      panoramasComplectation: {},
      summaryCode: "", //00U007

      groupOptions: [],
      uniqueParams: {},


    }
  },
  mounted(){
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    this.selectParamEngine(this.currentEngine);
  },
  methods: {
    selectParamChange(){

    },
    async selectParamEngine(param, event){
      this.currentEngine = param;

      this.$refs.paramGearbox.map(e => {
        var paramValue = $(e).attr("car-param");
        var boolVal = false;
        for (let i = 0; i < this.currentEngine.allowedGears.length; i++) {
          const gearItem = this.currentEngine.allowedGears[i];
          if(paramValue === gearItem){
            boolVal = true;break;
          }
        }
        if(!boolVal){
          $(e).addClass("disabled");
          if(this.currentGearbox.name === paramValue){
            this.model.gears.map(gear => {
              if(gear.name === this.currentEngine.allowedGears[0])
                this.currentGearbox = gear;
                $(e).removeClass("disabled");
            })
          }

          console.log((this.currentGearbox.name == paramValue))
        }else{
          $(e).removeClass("disabled");
        }
      });

      this.selectParamChange();
    },
    selectParamGearbox(param, event){
      this.currentGearbox = param;



      this.selectParamChange();
    },

    scrollAnimate(elId, event){
      $('html, body').animate({ scrollTop: $(elId).offset().top-30}, 300);
    },
    async progressStepsBar(stepNum){
      const that = this;
      console.log(stepNum);
      if(stepNum == "next")
        this.currentStepNum++;
      else if(stepNum == "prev"){
        this.currentStepNum--;
      }
      else if(stepNum >= 0){
        this.currentStepNum = stepNum;
      }
      if(this.currentStepNum == 1){
        
      }
    },
  },
  async created(){
    //this.dataJson = await this.$axios.$get('https://api.kia-motors.uz/configurator/get/1');
    //console.log(this.dataJson);

    /* Начальная выборка */

    this.currentEngine = this.model.engines[0];
    
    this.model.gears.forEach(gear => {
      if(gear.name === this.currentEngine.allowedGears[0])
      this.currentGearbox = gear;
    });
    this.model.privodi.forEach(drive => {
      if(drive.name === this.currentEngine.allowedPrivodi[0])
      this.currentDrive = drive;
    });
    
    this.currentPrice = this.model.minPrices[this.currentEngine.id][this.currentGearbox.name][this.currentDrive.name]

    
    //this.currentGearbox = this.model.gears[0];
    //this.currentDrive = this.currentEngine;
  },
}

</script>