<template>
  <div class="relative conf " scrollf>
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
          <h2><nuxt-link to="/models/k5/configurator/k5">Конфигуратор</nuxt-link></h2>
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
                  <dt>{{currentEngine.name}}, {{currentEngine.power_hp}}</dt>
                  <dt>{{currentTransmission.gears_number}}{{currentGearbox.code}}, {{currentGearbox.name}}</dt>
                  <dt>{{currentDrive.code}}, {{currentDrive.name}}</dt>
                </dl>
              </div>
              <div class="conf-result-summary">
                <dl>
                  <dt>Итоговая стоимость</dt> 
                  <dd><strong class="text-s1">от {{currentComplectation.min_price | spaceBetweenNum}} сум</strong></dd>
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
                  <div class="car-params-item car-params-engine">
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
                        @click.prevent.stop="carParamClickDrive(drive)"
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
          </template>
          <template v-else-if="currentStepNum === 3 && Object.keys(showroomComplectation).length != 0">
            <div class="conf-steps conf-step-3">
              <div class="entry-content">
                <div class="entry-title m-v-30">
                  <h3>{{currentModelLine.name}} {{showroomComplectation.name}}</h3>
                </div>
                <div class="showroom-main m-v-10">
                  <div
                      class="cloudimage-360"
                      :data-folder="'https://cdn.kia.ru'+showroomComplectation.overviews[0].path"
                      data-filename="{index}.png"
                      data-spin-reverse
                      data-amount="72"
                  ></div>
                </div>
                <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
                <div class="color-gray-4 text-center m-b-30">
                  <p><small>Изображение может не соответствовать выбранной комплектации. Цвет автомобиля может отличаться от представленного на данном сайте.</small></p>
                </div>
                <div class="hide">
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
                <div class="fw-7 conf-cnt-complectations">
                  <span class="font-size-nm">
                    {{selectComplectations.length}} 
                    <span v-if="selectComplectations.length == 1">комплектация</span> 
                    <span v-else>комплектации</span> 
                  </span>
                </div>
                <div class="accordion-def m-t-30" id="accordion" role="tablist" aria-multiselectable="true">
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
                    <div :id="'step-3-complectation-'+key" class="drop-content collapse" role="tabpanel">
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
          <template v-else-if="currentStepNum === 4">
            <div class="conf-steps conf-step-4">
              <div class="entry-content">
                <div class="entry-title m-v-30">
                  <h3>{{currentModelLine.name}} {{showroomComplectation.name}}</h3>
                </div>
                <div class="showroom-main m-v-10">
                  <div
                      class="cloudimage-360"
                      :data-folder="'https://cdn.kia.ru'+showroomComplectation.overviews[0].path"
                      data-filename="{index}.png"
                      data-spin-reverse
                      data-amount="72"
                  ></div>
                </div>
                <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
                <div class="color-gray-4 text-center m-b-30">
                  <p><small>Изображение может не соответствовать выбранной комплектации. Цвет автомобиля может отличаться от представленного на данном сайте.</small></p>
                </div>
                <div class="showroom-bottom justify-c-between align-center">
                  <div class="showroom-colorselect">
                    <div class="title-content">
                      <span class="color-gray">Цвет:</span> 
                      <b>{{selectExteriorColor.name}} ({{selectExteriorColor.code}}), </b>
                      <b v-if="selectExteriorColor.is_metallic">метталик</b>
                      <span v-if="selectExteriorColor.price"> + {{selectExteriorColor.price | spaceBetweenNum}} сум</span>
                    </div>
                    <ul class="list m-t-10">
                      <template v-for="(complectationColorId) in selectComplectation.exterior_colors">
                        <template v-for="(color, key) in page.exterior_colors">
                          <template v-if="complectationColorId == color.id" >
                          <li :class="{'active': selectExteriorColor.id == color.id}" :key="key">
                            <a href="javascript:;" @click.stop.prevent="showroomChanger(color, '.conf-step-4')">
                              <div class="color-select" :style="'background-image: url(\'https://www.kia.ru/static'+color.image+'\')'"></div>
                            </a>
                          </li>
                          </template>
                        </template>
                      </template>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <template v-if="currentStepNum == 5">
        <div class="conf-steps conf-step-5">
          <div class="entry-content">
            <div class="conf-summary">
              <div class="entry-title m-v-30">
                <h3>{{currentModelLine.name}} {{showroomComplectation.name}}</h3>
              </div>
              <div class="showroom-main m-v-10">
                <div
                    class="cloudimage-360"
                    :data-folder="'https://cdn.kia.ru/'+selectOverview.path"
                    data-filename="{index}.png"
                    data-spin-reverse
                    data-amount="72"
                ></div>
              </div>
              <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>
              <div class="color-gray-4 text-center m-b-30">
                <p><small>Изображение может не соответствовать выбранной комплектации. Цвет автомобиля может отличаться от представленного на данном сайте.</small></p>
              </div>
              <div class="conf-summary-id">
                <div class="wrapper-content">
                  <b>ID конфигурации</b>
                  <div class="conf-summary-code m-h-15"><u>{{this.summaryCode}}</u></div>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M14.734 11.239l2.706-2.955c.747-.816.747-2.14 0-2.956l-2.03-2.216c-.746-.816-1.958-.816-2.705 0L8.647 7.545c-.747.816-.747 2.139 0 2.955l1.015 1.108m-3.72-2.586L2.56 12.716c-.747.816-.747 2.14 0 2.956l2.03 2.216c.746.816 1.957.816 2.705 0l4.735-5.172c.747-.816.746-2.139-.001-2.955l-1.014-1.108" stroke="currentColor" stroke-width="1.5"></path></svg>
                </div>
              </div>
              <div class="conf-summary-params">
                <div class="wrapper-content">
                  <div class="item col-md-6">
                    <div class="fw-6 font-size-nm m-b-20">Двигатель и трансмиссия</div>
                    <div class="info-content">
                      <dl><dt>Год производства</dt> <dd>{{ selectComplectation.year }}</dd></dl> 
                      <dl><dt>Двигатель</dt> <dd>{{currentEngine.name}} / 123 л.с. / {{currentFuelType.name}}</dd></dl> 
                      <dl><dt>Коробка передач</dt> <dd>{{currentGearbox.name}}, {{currentTransmission.gears_number}}{{currentGearbox.code}}</dd></dl> 
                      <dl><dt>Привод</dt> <dd>{{currentDrive.name}}</dd></dl>
                    </div>
                  </div>
                  <div class="item col-md-6">
                    <div class="fw-6 font-size-nm m-b-20">Цвет</div>
                    <div class="info-content">
                      <dl>
                        <dt>Кузов</dt> 
                        <dd><div class="flex align-center"><span>{{selectExteriorColor.name}}</span> <figure :style="'background-image: url(https://cdn.kia.ru/'+selectExteriorColor.image+');'"></figure></div></dd>
                      </dl> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="config-details">
                
                <section class="item" v-for="(gOption, key) in page.grouped_options" :key="key">
                  <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                  <div class="section-body">
                    <div class="section-body-wrapper">
                      <div class="list-block-body">
                        <ul>
                          <template v-for="(complectationOptionId) in selectComplectation.options">
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
          </div>
          <div class="conf-feedback" id="conf-feedback">
            <div class="entry-content">
              <div class="form-content pt-6 desktop:pt-20 pb-12 desktop:pb-20">
                <div>
                  <h3>Забронировать автомобиль Picanto Classic 1.0 MPI</h3>
                  <p>После отправки заявки выбранный дилер свяжется с вами для уточнения деталей.</p>
                </div>
                <form>
                  <input type="text" name="model" class="hide">
                  <div class="row">
                    <div class="input-content m-v-30 col-md-6 p-h-15">
                      <input type="text" name="name" placeholder="Имя *"  class="form-control" required>
                    </div>
                    <div class="input-content m-v-30 col-md-6 p-h-15">
                      <input type="phone" name="phone" placeholder="Телефон *"  class="form-control" required>
                    </div>
                  </div>
                  <div class="iagree m-v-30">
                    <label class="flex" role="button">
                      <input type="checkbox" name="" class="hide" required>
                      <span class="checkbox-style-1"></span>
                      <span class="p-l-20">Отправляя сообщение, я выражаю свое согласие и разрешаю ООО 'Roodell', а также, по их поручению, третьим лицам осуществлять обработку моих персональных данных (фамилия, имя, отчество, год, месяц, дата и место рождения; адрес, номер паспорта и сведения о дате выдачи паспорта и выдавшем его органе; образование, профессия, место работы и должность; домашний, рабочий и мобильный телефоны; адрес электронной почты и другие данные, требуемые для отправки сообщения), включая сбор, систематизацию, накопление, хранение, уточнение, использование, распространение (в том числе трансграничную передачу), обезличивание, уничтожение персональных данных), в целях связанных с возможностью предоставления информации о товарах и услугах, которые потенциально могут представлять интерес, а также в целях сбора и обработки статистической информации и проведения маркетинговых исследований. Согласие на обработку персональных данных в соответствии с указанными выше условиями я предоставляю на 10 (десять) лет. Я уведомлен и согласен с тем, что указанное согласие может быть мной отозвано посредством направления письменного заявления заказным почтовым отправлением с описью вложения, либо вручено лично под подпись.</span>
                    </label>
                  </div>
                  <span class="btn-def">
                    <button type="submit">Забронировать</button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
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
      title: this.page.seo.title,
      meta: [
        {
          content: this.page.seo.description
        }
      ],
    }
  },
  props: ['page'],
  async asyncData(context){
    try{
      console.log("context.route.params.id: ", context.route.params.id);
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path: "/models/"+context.route.params.id+"/full"
      })
      console.log(page, context.route.params)
      return {page: page.content}
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

      page: null,
      currentStepNum: 2,
      currentModel: {},
      currentModelLine: {},
      currentComplectation: {},
      currentEngine: {},
      currentFuelType: {},
      currentTransmission: {},
      currentDrive: {},
      currentGearbox: {},
      currentOverview: {},

      selectComplectations: {},
      selectComplectation: {},
      selectExteriorColor: {},
      selectOverview: {},

      showroomComplectations: [],
      showroomComplectation: {},

      summaryCode: "",

      groupOptions: [],
      uniqueParams: {},


    }
  },
  mounted(){
    this.carParamActive();
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    console.log(this.$route, "Тут тот самый роут");
  },
  methods: {
    scrollAnimate(elId, event){
      $('html, body').animate({ scrollTop: $(elId).offset().top-30}, 300);
    },
    featureFill(complectation){
      this.currentComplectation = complectation;
      // transmissions
      for (let i = 0; i < this.page.transmissions.length; i++) {
        const transmission = this.page.transmissions[i];
        if(transmission.id == this.currentComplectation.transmission_id){
          this.currentTransmission = transmission;
          break;
        }
      }
      // engines
      for (let i = 0; i < this.page.engines.length; i++) {
        const engine = this.page.engines[i];
        if(engine.id == this.currentComplectation.engine_id){
          this.currentEngine = engine;
          break;
        }
      }
      // fuel type
      for (let i = 0; i < this.page.fuel_types.length; i++) {
        const fuelType = this.page.fuel_types[i];
        if(fuelType.id == this.currentEngine.fuel_type_id){
          this.currentFuelType = fuelType;
          break;
        }
      }
      // gearboxes
      for (let i = 0; i < this.page.gearboxes.length; i++) {
        const gearbox = this.page.gearboxes[i];
        if(gearbox.id == this.currentTransmission.gearbox_id){
          this.currentGearbox = gearbox;
          break;
        }
      }
      // drives
      for (let i = 0; i < this.page.drives.length; i++) {
        const drive = this.page.drives[i];
        if(drive.id == this.currentTransmission.drive_id){
          this.currentDrive = drive;
          break;
        }
      }
    },

    // Парс кода конфигуратора
    async parseSummaryCode(){
      
      var that = this;
      const modelcode = await this.$axios.$post('/configurator.php')
      console.log(this.summaryCode, "parseSummaryCode", modelcode);
      
      var codeComplectation = this.summaryCode.slice(0, 3);
      var codeOverview = this.summaryCode.slice(3, 6);
      var idComplectation;
      var idOverview;

      for( var code in modelcode.complectations){
        if(code == codeComplectation)
          idComplectation = modelcode.complectations[code];
      }
      
      for( var code in modelcode.overviews){
        if(code == codeOverview)
          idOverview = modelcode.overviews[code];
      }

      var complectation = this.page.complectations.filter((complectation)=>{
        if( complectation.id == idComplectation){
          return complectation;
        }
      })[0]
      var exteriorColor = this.page.exterior_colors.filter((overview)=>{
        if( overview.id == idOverview){
          return overview;
        }
      })[0]

      try{
        that.showroomComplectations = await this.$axios.$get('/overviews.php', {
          params:{
            id: that.currentModel.id,
            complectations: [complectation.id]
          }
        })
        this.showroomComplectation = that.showroomComplectations[0]
        this.selectOverview = this.showroomComplectation.overviews.filter((overview)=>{
          if( overview.color_id == idOverview)
            return overview;
        })[0]
        console.log(this.showroomComplectation);
      }catch(error){
        console.error(error);
      }


      this.selectExteriorColor = exteriorColor;
      this.selectComplectation = complectation;


      setTimeout(()=>{
        this.featureFill(complectation);
        this.carParamActive();
        this.currentStepNum = 5;
      }, 1000)


    },
    // События Изменение цвета 
    async showroomChanger(color, parentClass){
      parentClass = parentClass || ".showroom-main";
      this.showroomComplectation.overviews.map((overview)=>{
        if( color.id == overview.color_id ){
          this.selectExteriorColor = color;
          this.selectOverview = overview;
          window.CI360.destroy();
          console.info(overview, $(parentClass+" [data-folder]"))
          $(parentClass+" [data-folder]").attr('data-folder', "https://cdn.kia.ru"+overview.path)
          $(parentClass+" [data-amount]").attr('data-amount', overview.amount)
          window.CI360.init();
        }
      }) 
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
      // step 2
      if(this.currentStepNum == 2){
        if( Object.keys(this.currentEngine).length != 0 ){
          setTimeout(function(){
            $(".car-params-engine li").map((i, el)=>{
              el = $(el);
              if( el.attr("param-engine-id") === that.currentEngine.id ){
                el.trigger("click");
              }
            })
          }, 1)
          return;
        }
        this.carParamActive();
        setTimeout(()=>{
          $(".car-params-engine li").eq(0).trigger("click");
        }, 500);
      }
      // step 3
      if(this.currentStepNum == 3){



        this.selectComplectation = this.selectComplectations[0];
        setTimeout(()=>{
          $(".conf-step-3").find("[data-toggle='collapse']").eq(0).trigger("click");
          collapseClear();
        }, 1)
        
        // Подбираем id полученных комплектации
        var complectationsIds = this.selectComplectations.map((complectation)=>{
          return complectation.id;
        })

        try{
          that.showroomComplectations = await this.$axios.$get('/overviews.php', {
            params:{
              id: that.currentModel.id,
              complectations: complectationsIds
            }
          })
          that.selectComplectationAppend(this.selectComplectation);
        }catch(error){
          console.error(error);
        }
      }
      // step 4
      if(this.currentStepNum == 4){

        if( Object.keys(this.selectOverview).length == 0 ){
          this.page.exterior_colors.forEach((color)=>{
            if(color.id == this.selectComplectation.exterior_colors[0]){
              this.showroomChanger(color, '.conf-step-4');
            }
          })
          
          
        }
      }

      // step 5
      if(this.currentStepNum == 5){


  

        console.log(this.selectComplectation, this.selectExteriorColor);
        const modelcode = await this.$axios.$post('/configurator.php', {
          complectation: that.selectComplectation,
          exterior_color: that.selectExteriorColor
        })
        console.log(this.selectComplectation.id)
        var codeComplectation;
        var codeOverview;
        for( var code in modelcode.complectations){
          if(modelcode.complectations[code] == this.selectComplectation.id)
            codeComplectation = code;
        }
        
        for( var code in modelcode.overviews){
          if(modelcode.overviews[code] == this.selectExteriorColor.id)
            codeOverview = code;
        }
        this.summaryCode = (codeComplectation+codeOverview);
        console.log(codeComplectation, codeOverview);
        setTimeout(()=>{
          window.CI360.init();
          //this.showroomChanger(this.selectExteriorColor, '.conf-step-5');
          collapseClear();
        }, 1);
      }
      
    },
    /* Текущее выбранная комплектация */
    async selectComplectationAppend(complectation){
      this.selectComplectation = complectation;
      this.showroomComplectations.forEach((overview)=>{
        if( overview.id == complectation.id)
          this.showroomComplectation = overview;
      })
    },
    /* Выбор двигателя */
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
          }
        })
      })

      $(".car-params-transmission, .car-params-drive").find("li").addClass("disabled");

      this.groupTransmissions.forEach((transmission, i)=>{
        this.page.gearboxes.forEach((gearbox)=>{
          if( transmission.gearbox_id == gearbox.id ){
            if(i == 0){
              this.currentTransmission = transmission;
              this.page.gearboxes.forEach((gearbox)=>{
                if(transmission.gearbox_id == gearbox.id)
                  this.currentGearbox = gearbox;
              })
            }
            var attrParam = transmission.gears_number+gearbox.code;
            $("[param-uniq='"+attrParam+"']").closest("li").removeClass("disabled");
          }
        })
        this.page.drives.forEach((drive)=>{
          if( transmission.drive_id == drive.id ){
            if(i == 0){
              this.currentDrive = drive;
            }
            $("[param-drive-id='"+drive.id+"']").removeClass("disabled");
          }
        })
      })
      this.carParamActive();
    },
    
    /* Выбор трансмиссии */
    async carParamClickTransmission(thisTransmission){
      this.page.transmissions.forEach((transmission)=>{
        var arr = []
        if(transmission.gearbox_id == thisTransmission.gearbox_id)
          arr.push(transmission);
          arr.forEach((t)=>{
            if(t.drive_id == this.currentDrive.id){
              this.currentTransmission = t;
              this.page.gearboxes.forEach((gearbox)=>{
                if(t.gearbox_id == gearbox.id)
                  this.currentGearbox = gearbox;
              })
            }
          })
      })
      this.carParamActive();
    },
    /* Выбор привода */
    async carParamClickDrive(drive){
      this.currentDrive = drive;
      this.carParamActive();
    },
    carParamActive(){
      $("[car-param]").removeClass("active");
      $("[param-engine-id='"+this.currentEngine.id+"']").addClass("active");
      $("[param-uniq='"+this.currentTransmission.gears_number+this.currentGearbox.code+"']")
        .closest("li")
        .addClass("active");
      $("[param-drive-id='"+this.currentDrive.id+"']").addClass("active");
      this.changeCurrentComplectation();
    },
    /* Выбор комплектации */
    changeCurrentComplectation(p){
      var set = []
      set = this.page.complectations.filter((complectation)=>{
        if(complectation.transmission_id === this.currentTransmission.id)
          return complectation;
      })
      set = set.filter((complectation)=>{
        if(complectation.engine_id === this.currentEngine.id)
          return complectation;
      })
      var maxNum = Infinity;
      set.filter((complectation)=>{
        if(complectation.price < maxNum){
          maxNum = complectation.price;
          this.currentComplectation = complectation;
        }
      })
      
      this.selectComplectations = set
    },
    confPrevStep(){
      this.currentStepNum--;
    },
  },
  created(){
    
    this.featureFill(this.page.complectations[0]);
    

  
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


    this.page.grouped_options.forEach((item)=>{
      item.options.forEach((option)=>{
        this.groupOptions.push(option);
      });
    })


    this.changeCurrentComplectation();
  },
}

</script>