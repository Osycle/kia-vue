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
                      <li v-for="(engine, key) in page.engines" :key="key" @click="carParamClick({engine}, $event)" :engine-id="engine.id" car-param>
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
                      <li v-for="(transmission, key) in filterTransmission(page.transmissions, 'name')" :key="key" @click="carParamClick({transmission}, $event)" :transmission-id="transmission.id" car-param class="disabled">
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
                      <li v-for="(drive, key) in page.drives" :key="key" :drive-id="drive.id" car-param>
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
      currentComplectation: "",
      carParams: {},
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
  },
  mounted(){
    mainjs();
    this.carParamActive();
    console.log(this.currentModelLine, this.currentModel)
  },
  methods: {
    async carParamClick(carParam, e){
      //console.log('so sadpsaoidpoas', carParam ,e)
      if(carParam['engine']){
        for (let i = 0; i < this.page.complectations.length; i++) {
          const item = this.page.complectations[i];
          if(item.engine_id == carParam.engine.id){
            this.currentComplectation = item;
            break;
          }
        }
      }
      
      if(carParam['transmission']){
        for (let i = 0; i < this.page.complectations.length; i++) {
          const item = this.page.complectations[i];
          if(item.transmission_id == carParam.transmission.id){
            this.currentComplectation = item;
            break;
          }
        }
      }

      this.changeCurrentComplectation(this.currentComplectation);
      this.carParamActive();
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
      const engineId = this.currentComplectation.engine_id
      const transmissionId = this.currentComplectation.transmission_id
      $("[car-param]").removeClass("active");
      $("[engine-id='"+this.carParams.engine.id+"']").addClass("active");
      $("[transmission-id='"+this.carParams.transmission.id+"']").addClass("active");
      $("[drive-id='"+this.carParams.drive.id+"']").addClass("active");
    },
    filterTransmission(array, keyName){
      const keyArray = ['sdsd'];
      const newArray = [];
      let matchKey = false;
      var s = array.filter(function(el, i){
        //console.log(el.name, i);
        for (let i = 0; i < keyArray.length; i++) {
          console.log(el.name, keyArray[i]);
          if(el.name == keyArray[i]){
            matchKey = true;
            break;
          }
        }
        if( !matchKey ){
          keyArray.push(el.name);
          console.log('--------')
          return el;
        }
        
      })
      console.log(s, "s");
      
      //console.log(s);
      // for (let o = -1; o < keyArray.length; o++) {
      //   console.log(keyArray)
      //   if( array[i][keyName] == keyArray[o] ){
      //     matchKey = true;
      //     break;
      //   }
      // }
      // for (let i = 0; i < array.length; i++) {
      //   keyArray.push()
      //   if(!matchKey){
      //     keyArray.push(array[i][keyName])
      //     newArray.push(array[i])
      //   }
      // }
      //console.log(newArray);
      return newArray;
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