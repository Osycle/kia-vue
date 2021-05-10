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
                          @click.prevent.stop="selectParamEngine(engine)">
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
                      <li v-for="(gear, key) in model.gears" :key="key" 
                        :class="{
                          'active': gear.name == currentGearbox.name,
                          'disabled': !validParams(gear.name, currentEngine.allowedGears)
                        }" 
                        :ref="'paramGearbox'"
                        :car-param="gear.name"
                        @click.prevent.stop="selectParamGearbox(gear)">
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
                      <li v-for="(drive, key) in model.privodi" :key="key" 
                          :class="{
                            'active': drive.name == currentDrive.name,
                            'disabled': !validParams(drive.name, currentEngine.allowedPrivodi)
                          }"
                          @click.prevent.stop="selectParamDrive(drive)">
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
          <template v-else-if="currentStepNum === 3">
            <div class="conf-steps conf-step-3">
              <div class="entry-content">
                <div class="entry-title m-v-30">
                  <h3>{{model.title}} {{currentComplectation.name}}</h3>
                </div>
                <div class="showroom-main m-v-10">
                  <div
                      class="cloudimage-360"
                      :data-folder="currentShowroom.colorFolder"
                      data-filename="{index}.png"
                      data-spin-reverse
                      data-amount="72">
                      <div class="showroom-item-cover flex align-center">
                        <div class="flex box-xs-10 align-center">
                          <img :src="currentShowroom.colorFolder+'/1.png'" width="100%">
                        </div>
                      </div>
                  </div>
                </div>
                <script>window.CI360 = { notInitOnLoad: true }</script>
                <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
                <div class="color-gray-4 text-center m-b-30">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                  <p><small>Изображение может не соответствовать выбранной комплектации. Цвет автомобиля может отличаться от представленного на данном сайте.</small></p>
                </div>
                <div v-if="false" class="hide">
                  <div class="config-details config-details-modal conf-steps-modal" v-for="(complectation, index) in page.complectations" :key="index" :id="'config-details-'+complectation.id" :config-complectation-id="complectation.id">
                    <section class="item active" v-for="(gOption, key) in page.grouped_options" :key="key">
                      <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                      <div class="section-body">
                        <div class="section-body-wrapper">
                          <div class="list-block-body">
                            <ul>
                              <template v-for="(complectationOptionId) in complectation.options">
                                <li v-for="(option, key) in gOption.options" :key="key" v-if="complectationOptionId == option.id">
                                  {{option.name}}
                                </li>
                              </template>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div v-if="false" class="fw-7 conf-cnt-complectations">
                  <span class="font-size-nm">
                    {{selectComplectations.length}} 
                    <span v-if="selectComplectations.length == 1">комплектация</span> 
                    <span v-else>комплектации</span> 
                  </span>
                </div>
                <div v-if="false" class="accordion-def m-t-30" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="accordion-def-item" 
                      :class="{'active': complectation.id == selectComplectation.id}"
                      v-for="(complectation, key) in selectComplectations" :key="key">
                    <div class="title-content">
                      
                        <div class="car-params-btn">
                          <div class="flex" click="selectComplectation" @click="selectComplectationAppend(complectation)" role="button">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15">
                              <b>{{complectation.name}}</b><br>
                              <b>{{complectation.min_price | spaceBetweenNum}} сум</b>
                            </div>
                          </div>
                          <a role="button" class="collapsed" data-toggle="collapse" data-parent="#accordion" :href="'#step-3-complectation-'+key">
                            <div class="align-center">
                              <b>Что включено</b>
                              <svg class="m-l-15" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg>
                            </div>
                          </a>
                        </div>
                    </div>
                    <div :id="'step-3-complectation-'+key" class="drop-content collapse" :class="{'in': key == 0}" :aria-expanded="{'true': key == 0}">
                      <div class="drop-content-body">
                        <ul>
                          <template v-for="(baseOption) in groupOptions">
                            <li v-for="(optionId, key) in complectation.advantage_options" :key="key" v-if="baseOption.id == optionId">
                              {{baseOption.name}}
                            </li>
                          </template>
                        </ul>
                        <a href="javascript:;" 
                          :data-src="'#config-details-'+complectation.id" 
                          class="link-btn-1 fw-6 align-center" data-fancybox>
                          Показать всё 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                        </a>
                      </div>
                    </div>
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
      
      const modelName = context.route.params.id;
      
      var page_data = await context.store.dispatch("models/fetchModels", {
        modelName
      })
      
      return {
        model: page_data.model
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
      currentComplectation: {},
      currentComplectations: [],
      currentShowroom: {},

      currentModel: {},
      currentModelLine: {},
      currentFuelType: {},
      currentTransmission: {},
      currentOverview: {},

      
      selectComplectation: {},
      selectExteriorColor: {},
      selectInteriorColor: {},
      selectOverview: {},
      selectPanorama: {},


      groupOptions: [],
      uniqueParams: {},


    }
  },
  mounted(){
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    // Начальный выбор комплектации
    this.selectParamEngine(this.currentEngine);
    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
  },
  methods: {
    validParams(val, arr){
      return arr.find(function(arrItem){
        return arrItem === val
      })
    },
    async selectParamEngine(param){
      this.currentEngine = param;

      var statusAllowedGears = this.currentEngine.allowedGears.find(allowedName => {
        return allowedName == this.currentGearbox.name
      });
      if(!statusAllowedGears){
        this.currentGearbox = this.model.gears.find(e=>{
          if(this.currentEngine.allowedGears[0] == e.name)
            return e;
        }) 
      }

      var statusAllowedDrive = this.currentEngine.allowedPrivodi.find(allowedName => {
        return allowedName == this.currentDrive.name
      });
      if(!statusAllowedDrive){
        this.currentDrive = this.model.privodi.find(e=>{
          if(this.currentEngine.allowedPrivodi[0] == e.name)
            return e;
        }) 
      }
    },
    selectParamGearbox(param){
      this.currentGearbox = param;
    },
    selectParamDrive(param){
      this.currentDrive = param;
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
      
      // step 3
      if(this.currentStepNum == 3){
        //https://api.kia-motors.uz/api/public/configurator/get/3/978/0/6AT/FWD
        var url = 
          "https://api.kia-motors.uz/api/public/configurator/get/"+
          this.currentStepNum+"/"+
          this.model.id+"/"+
          this.currentEngine.id+"/"+
          this.currentGearbox.name+"/"+
          this.currentDrive.name;

        this.currentComplectations = await this.$axios.$get(url)
        this.currentComplectation = this.currentComplectations[0];
        this.currentShowroom = this.currentComplectation.bodyColors[0];
        console.log(this.currentComplectations);
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

  },
}

</script>