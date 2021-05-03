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
                      data-amount="72">
                      <div class="showroom-item-cover flex align-center">
                        <div class="flex box-xs-10 align-center">
                          <img :src="'https://cdn.kia.ru'+showroomComplectation.overviews[0].path+'/1.png'" width="100%">
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
          <template v-else-if="currentStepNum === 4">
            <div class="conf-steps conf-step-4">
              <div class="entry-content relative" :class="{'pano-active': panoActive}">
                <div class="showroom">
                  <div class="showroom-header">
                    <div class="entry-header m-v-10">
                      <h3>{{currentModelLine.name}} {{showroomComplectation.name}}</h3>
                    </div>
                    <div class="showroom-typeselect">
                      <ul class="list">
                        <li :class="{'active': !panoActive}">
                          <a @click="panoActive = false" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                          <span>Экстерьер</span>
                        </li>
                        <li :class="{'active': panoActive}">
                          <a @click="panoActive = true" href="javascript:;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M6 10l2.5 2.5L14 7" stroke="currentColor" stroke-width="2"></path></svg></a>
                          <span>Интерьер</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="showroom-main m-v-10" v-if="!panoActive">
                    <div
                        class="cloudimage-360"
                        :data-folder="'https://cdn.kia.ru'+showroomComplectation.overviews[0].path"
                        data-filename="{index}.png"
                        data-spin-reverse
                        data-amount="72">
                        <div class="showroom-item-cover flex align-center">
                          <div class="flex box-xs-10 align-center">
                            <img :src="'https://cdn.kia.ru'+showroomComplectation.overviews[0].path+'/1.png'" width="100%">
                          </div>
                        </div>
                    </div>
                    <div class="color-gray-4 text-center m-b-30">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="showroom__three-sixty-icon"><path d="M9.724 9.472c0-1.584-.912-2.28-2.82-2.28-.6 0-1.632.18-2.268.468v1.296c.816-.276 1.5-.396 2.268-.384.864.012 1.164.336 1.164.924 0 1.056-.948 1.284-1.752 1.284H5.68v1.392h.636c1.212 0 2.064.228 2.064 1.332-.036.816-.42 1.212-1.476 1.212-.768 0-1.344-.06-2.556-.348v1.308a8.962 8.962 0 002.7.444c1.848 0 2.988-.792 2.988-2.616 0-1.26-.552-1.896-1.416-2.196.672-.372 1.104-.96 1.104-1.836zM14.343 14.788c-1.488 0-1.584-1.2-1.584-2.988a5.527 5.527 0 011.572-.252c.972 0 1.38.384 1.38 1.548 0 1.116-.324 1.692-1.368 1.692zm.324-6.228c.612 0 1.308.108 2.124.312V7.6a7.966 7.966 0 00-2.436-.408c-1.668 0-3.264.744-3.264 4.764 0 2.628.912 4.176 3.264 4.176 2.064 0 3.012-1.272 3.012-3.156 0-1.776-.96-2.808-2.736-2.808-.528 0-1.176.096-1.836.3.132-1.548.924-1.908 1.872-1.908zM21.62 16.132c1.968 0 3.132-1.344 3.132-4.428 0-3.084-1.164-4.512-3.132-4.512-1.968 0-3.12 1.428-3.12 4.512 0 3.096 1.152 4.428 3.12 4.428zm0-1.344c-1.116 0-1.464-1.008-1.464-3.084 0-2.028.348-3.168 1.464-3.168s1.476 1.14 1.476 3.168c0 2.076-.36 3.084-1.476 3.084z" fill="currentColor"></path><path d="M15 23c-7.732 0-14-2.727-14-6.09 0-1.263.885-2.437 2.4-3.41m17.667 8.9C25.76 21.417 29 19.328 29 16.91c0-1.263-.885-2.437-2.4-3.41" stroke="currentColor" stroke-width="1.5"></path><circle cx="27.5" cy="6.5" r="1.75" stroke="currentColor" stroke-width="1.5"></circle><path d="M12 19l4 4-4 4" stroke="currentColor" stroke-width="1.5"></path></svg>
                      <p><small>Изображение может не соответствовать выбранной комплектации. Цвет автомобиля может отличаться от представленного на данном сайте.</small></p>
                    </div>
                  </div>
                  <div v-else>
                    <div class="showroom-pano">
                      <iframe async :src="'https://www.kia.ru/panorama/frame.html?pano_xml=https://cdn.kia.ru/'+selectPanorama.path+'/pano.xml'" frameborder="0"></iframe>
                    </div>
                  </div>
                  <script>window.CI360 = { notInitOnLoad: true }</script>
                  <script src="/js/plugins/js-cloudimage-360-view.min.js"></script>

                  <div class="relative">
                    <div class="showroom-bottom justify-c-between align-center">
                      <div class="flex-adaptive">
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
                        <div class="showroom-colorselect">
                          <div class="title-content">
                            <span class="color-gray">Цвет:</span> 
                            <b>{{selectInteriorColor.name}} ({{selectInteriorColor.code}})</b>
                            <span v-if="selectInteriorColor.price"> + {{selectInteriorColor.price | spaceBetweenNum}} сум</span>
                          </div>
                          <ul class="list m-t-10">
                            <template v-for="(panorama) in panoramasComplectation.panoramas">
                              <template v-for="(color) in panoramasComplectations.colors">
                                <template v-if="panorama.color_id == color.id">
                                  <li :class="{'active': selectInteriorColor.id == color.id}">
                                    <a href="javascript:;" @click.stop.prevent="showroomInChanger(color)" >
                                      <div class="color-select" :style="'background-image: url(https://cdn.kia.ru/'+color.image+')'"></div>
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
                    data-amount="72">
                    <div class="showroom-item-cover flex align-center">
                      <div class="flex box-xs-10 align-center">
                        <img :src="'https://cdn.kia.ru'+selectOverview.path+'/1.png'" width="100%">
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
              <div class="conf-summary-id">
                <div class="wrapper-content">
                  <b>ID конфигурации</b>
                  <a href="#" id="link-copy-code" 
                      @click.prevent.stop="copyUrlCode(summaryCode, $event)" 
                      class="flex align-center" 
                      data-placement="bottom"
                      data-delay='{ "show": 500, "hide": 100 }'
                      data-trigger="focus" 
                      role="button"
                      title="Ссылка скопированно">
                    <input id="copyUrlCode" class="bury">
                    <div class="conf-summary-code m-h-15"><u>{{summaryCode}}</u></div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M14.734 11.239l2.706-2.955c.747-.816.747-2.14 0-2.956l-2.03-2.216c-.746-.816-1.958-.816-2.705 0L8.647 7.545c-.747.816-.747 2.139 0 2.955l1.015 1.108m-3.72-2.586L2.56 12.716c-.747.816-.747 2.14 0 2.956l2.03 2.216c.746.816 1.957.816 2.705 0l4.735-5.172c.747-.816.746-2.139-.001-2.955l-1.014-1.108" stroke="currentColor" stroke-width="1.5"></path></svg>
                  </a>
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
                      <dl>
                        <dt>Интерьер</dt>
                        <dd><div class="flex align-center"><span>{{selectInteriorColor.name}}</span> <figure :style="'background-image: url(https://cdn.kia.ru/'+selectInteriorColor.image+');'"></figure></div></dd>
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
                  <h3>Забронировать автомобиль {{currentModelLine.name}} {{selectComplectation.name}} {{currentEngine.name}}</h3>
                  <p>После отправки заявки выбранный дилер свяжется с вами для уточнения деталей.</p>
                </div>
                <form action="" method="POST">

                  <input type="text" :value="new Date().getFullYear()" name="anti-bot-a" class="hide">
                  <input type="text" value="carBook" name="type" class="hide">
                  <input type="text" name="carName" class="hide" :value="currentModelLine.name+' '+currentComplectation.name">
                  <input type="text" name="engine" class="hide" :value="currentEngine.name+' / '+currentEngine.power_hp+' л.с / '+currentFuelType.name">
                  <input type="text" name="transmission" class="hide" :value="currentGearbox.name+' '+currentTransmission.name">
                  <input type="text" name="unit" class="hide" :value="currentDrive.name">
                  <input type="text" name="bodyColor" class="hide" :value="selectExteriorColor.name">
                  <input type="text" name="interColor" class="hide" :value="selectInteriorColor.name">

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
                      <input type="checkbox" name="iagree" class="hide" required>
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
  async asyncData(context){
    try{
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path: "/models/"+context.route.params.id+"/full"
      })
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
    this.carParamActive();
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    if(this.$route.query.summary_code && this.$route.query.summary_code.length > 0){
      this.summaryCode = this.$route.query.summary_code;
      this.parseSummaryCode()
    }
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
    
    console.log(this.$route.query.summary_code);
  },
  methods: {
    copyUrlCode(code, event){
      $('#link-copy-code').popover('show'); 
      $("#copyUrlCode")[0].value = document.location.origin+this.$route.path+"?summary_code="+code;
      $("#copyUrlCode")[0].select();
      document.execCommand("copy");
      console.log(code, event);
    },
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
      }, 500)

      return true;

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
          if($(parentClass).find("canvas").length > 0)
            window.CI360.init();
          else{
            $(parentClass).find(".showroom-item-cover").find("img").attr("src", "https://cdn.kia.ru"+overview.path+"/1.png")
          }
        }
      }) 
    },
    async showroomInChanger(color, parentClass){
      this.selectInteriorColor = color;
      this.panoramasComplectation.panoramas.forEach(panorama=>{
        if(panorama.color_id == color.id)
          this.selectPanorama = panorama;
      })
        parentClass = parentClass || ".showroom-pano";
        
      console.log(color, $(parentClass).find("iframe"));
    },
    async activeShowroom(){
      $(".showroom-item-cover").remove();
      window.CI360.init();
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
          collapseClear();
        }, 500)
        
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
        // https://www.kia.ru/ajax/page/configurator/models/11f54c7e-cccf-405e-950c-691c554bea5f/panoramas?complectations[]=f50239f8-c152-4680-8bba-051691f8e01c&complectations[]=7be5053b-9ef0-4d7b-b6b0-367daa774285&complectations[]=ea939986-7735-4b5e-b6a0-52694b4b20e7&complectations[]=ecc1c0b3-61db-4fa7-af9a-65ee4e881e1e&complectations[]=6436406b-513d-4368-bbee-d587d25133a2
        if( Object.keys(this.selectOverview).length == 0 ){
          this.page.exterior_colors.forEach((color)=>{
            if(color.id == this.selectComplectation.exterior_colors[0]){
              this.showroomChanger(color, '.conf-step-4');
            }
          })
        }
        // Подбираем id полученных комплектации
        var complectationsIds = this.selectComplectations.map((complectation)=>{
          return complectation.id;
        })
        var url = 'https://www.kia.ru/ajax/page/configurator/models/11f54c7e-cccf-405e-950c-691c554bea5f/panoramas';
        try{
          var json = await this.$axios.$get(url, {
            params:{
              complectations: [this.selectComplectation.id]
            }
          })

          this.panoramasComplectations = json.content;
          this.panoramasComplectation = this.panoramasComplectations.complectations[0];

 
          this.panoramasComplectations.colors.forEach(color => {
            if(color.id == this.panoramasComplectation.panoramas[0].color_id){
              this.selectPanorama = this.panoramasComplectation.panoramas[0];
              this.selectInteriorColor = color;
            }
          });
        }catch(error){
          console.error(error);
        }
      }

      // step 5
      if(this.currentStepNum == 5){

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
  async created(){

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