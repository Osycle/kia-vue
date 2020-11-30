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
            <li conf-bar-step="1">
              <nuxt-link to="/configurator">
                <b>01</b>
                <p>Выбор модели</p>
              </nuxt-link>
            </li>
            <li conf-bar-step="2" class="active">
              <a href="">
                <b>02</b>
                <p>Двигатель и трансмиссия</p>
              </a>
            </li>
            <li conf-bar-step="3">
              <a href="">
                <b>03</b>
                <p>Комплектация</p>
              </a>
            </li>
            <li conf-bar-step="4">
              <a href="">
                <b>04</b>
                <p>Цвета и отделка</p>
              </a>
            </li>
            <li conf-bar-step="5">
              <a href="">
                <b>05</b>
                <p>Результаты</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-main">
      <div class="container-p clearfix">
        <div class="left-bar-def sidebar-wrapper col-md-3">
          <div class="wrapper-scroll">
            <div class="wrapper conf-result-content">
              <div class="cap-content">
                <h3>{{currentModelLine.name}}</h3>
                <h3>от {{currentComplectation.min_price | spaceBetweenNum}} сум</h3>
              </div>
              <figure class="text-center m-v-20">
                <img :src="'https://cdn.kia.ru/resize/300x200'+currentModel.image_side_view" alt="">
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
                  <dt>{{carParams.engine.name}}, {{carParams.engine.power_hp}}</dt>
                  <dt>{{carParams.transmission.gears_number}}{{carParams.gearbox.code}}, {{carParams.gearbox.name}}</dt>
                  <dt>{{carParams.drive.code}}, {{carParams.drive.name}}</dt>
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
        </div>
        <div class="conf-main-content col-md-9">
          <div class="conf-steps conf-step-2">
            <div class="row p-b-10">
              <div class="entry-content">
                <div class="car-params">
                  <div class="car-params-item">
                    <h4>Двигатель</h4>
                    <ul class="flex-list">
                      <li v-for="(engine, key) in page.engines" :key="key" @click.prevent.stop="carParamClickEngine(engine)" :param-engine-id="engine.id" car-param>
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
                  <div class="car-params-item car-params-transmission">
                    <h4>Коробка передач</h4>
                    <ul class="flex-list">
                      <li v-for="(transmission, key) in uniqueParams.transmissions" class="disabled" :key="key" @click.prevent.stop="carParamClickTransmission(transmission)" car-param>
                        <div class="car-params-btn">
                          <div class="flex">
                            <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                            <div class="m-l-15" v-for="(gearbox, key) in page.gearboxes" :key="key" v-if="transmission.gearbox_id == gearbox.id"
                              :param-uniq="transmission.gears_number+gearbox.code"
                              >
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
                  <div class="car-params-item car-params-drive">
                    <h4>Привод</h4>
                    <ul class="flex-list">
                      <li v-for="(drive, key) in page.drives" :key="key" class="disabled" car-param
                        :param-drive-id="drive.id"
                        :param-drive-code="drive.code"
                        >
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
        path: "/models/"+context.route.params.id+"/full"
      })
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  components: {},
  filters:{},
  data(){
    return {
      currentStep: 2,
      currentComplectation: {},
      currentEngine: {},
      currentTransmission: {},
      currentDrive: {},
      currentGearbox: {},

      carParams: {},
      uniqueParams: {},
      //groupComplectations: [],
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Конфигуратор',link: '/'},
      ],
    }
  },
  created(){
    this.currentComplectation = this.page.complectations[0];
    this.changeCurrentComplectation(this.currentComplectation);
    for (let i = 0; i < this.page.model_list.model_lines.length; i++) {
      const modelLine = this.page.model_list.model_lines[i];
      if( modelLine.code === this.$route.params.id )
        this.currentModelLine = modelLine;
    }
    for (let i = 0; i < this.page.model_list.models.length; i++) {
      const model = this.page.model_list.models[i];
      if( this.currentModelLine.id === model.model_line_id )
        this.currentModel = model;
    }

    // Уникальные железяки

      const uniqueTransmissions = [];
      const uniqueEngines = [];
      const transGear = {};
      this.page.transmissions.filter(function(el){
        if( !(typeof transGear[el.gearbox_id+"|"+el.gears_number] == 'string') ){
          transGear[el.gearbox_id+"|"+el.gears_number] = ""
          uniqueTransmissions.push(el);
        }
      })
      

       this.uniqueParams.transmissions = uniqueTransmissions
      // console.log(this.uniqueParams, "s");



  },
  mounted(){
    mainjs();
    //this.carParamActive();
    //console.log(this.currentModelLine, this.currentModel)
  },
  methods: {
    async carParamClickEngine(engine, e){

      this.currentEngine = engine;
      this.groupComplectations = [];
      this.groupTransmissions = [];

      this.page.complectations.forEach((complectation, i)=>{
        if(complectation.engine_id == engine.id) 
          this.groupComplectations.push(complectation)
      })
      
      this.groupComplectations.forEach((complectation)=>{
        this.page.transmissions.forEach((transmission)=>{
          if(complectation.transmission_id == transmission.id){
            this.groupTransmissions.push(transmission);
            console.log(complectation, transmission);
          }
        })
      })
      console.log(this.groupTransmissions);


      $(".car-params-transmission, .car-params-drive").find("li").addClass("disabled");

      this.groupTransmissions.forEach((transmission, i)=>{
        this.page.gearboxes.forEach((gearbox)=>{
          if( transmission.gearbox_id == gearbox.id ){
            if(i == 0)
              this.currentTransmission = transmission;
            var attrParam = transmission.gears_number+gearbox.code;
            $("[param-uniq='"+attrParam+"']").closest("li").removeClass("disabled");
          }
        })
        this.page.drives.forEach((drive)=>{
          console.log(transmission);
          if( transmission.drive_id == drive.id ){
            if(i == 0)
              this.currentDrive = drive;
            $("[param-drive-id='"+drive.id+"']").removeClass("disabled");
          }
        })
      })

      // this.changeCurrentComplectation(this.currentComplectation);
      this.carParamActive();
    },
    async carParamClickTransmission(transmission){
      this.currentTransmission = transmission;
      this.carParamActive();
      console.log(transmission);
    },
    changeCurrentComplectation(complectation){
      for (let i = 0; i < this.page.engines.length; i++) {
        const item = this.page.engines[i];
        if(item.id == complectation.engine_id){
          this.carParams.engine = item
        }
        for (let i = 0; i < this.page.fuel_types.length; i++) {
          if(this.page.fuel_types[i].id == item.fuel_type_id)
            this.carParams.fuel_type_id = this.page.fuel_types[i];
        }
      }
      
      for (let i = 0; i < this.page.transmissions.length; i++) {
        const item = this.page.transmissions[i];
        if(item.id == complectation.transmission_id){
          this.carParams.transmission = item
        }
        for (let i = 0; i < this.page.gearboxes.length; i++) {
          if(this.page.gearboxes[i].id == item.gearbox_id)
            this.carParams.gearbox = this.page.gearboxes[i];
        }
        for (let i = 0; i < this.page.drives.length; i++) {
          if(this.page.drives[i].id == item.drive_id)
            this.carParams.drive = this.page.drives[i];
        }
      }
    },
    carParamActive(){
      $("[car-param]").removeClass("active");

      $("[param-engine-id='"+this.currentEngine.id+"']").addClass("active");

      this.page.gearboxes.forEach((gearbox)=>{
        if( this.currentTransmission.gearbox_id == gearbox.id ){
          var attrParam = this.currentTransmission.gears_number+gearbox.code;
          $("[param-uniq='"+attrParam+"']").closest("li").addClass("active");
        }
      })
      this.page.drives.forEach((drive)=>{
        if( this.currentTransmission.drive_id == drive.id ){
          this.currentDrive = drive;
          $("[param-drive-id='"+drive.id+"']").addClass("active");
        }
      });
      
      
      
      //$("[drive-id='"+this.carParams.drive.id+"']").addClass("active");
    },
    confnext(){
      const modelVideo = this.$axios.$get('http://kia-api-php/handler.php?path=/modifications', {
        path: "/full"
      })
      this.currentStep++;
    }
  }
}

</script>