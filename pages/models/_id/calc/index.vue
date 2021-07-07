<template>
  <div class="relative conf offset-header" scrollf>
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/models">Модели</nuxt-link></li>
          <li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{model.title}}</nuxt-link></li>
          <li><nuxt-link to="">Расчет кредита {{model.title}}</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="conf-header">
      <div class="container-p">
        <div class="entry-header">
          <h2>Расчет кредита {{model.title}}</h2>
        </div>
        <div class="conf-progress-bar">
          <ul class="list">
            <li v-for="(step, key) in steps" :key="key"
               @click.stop="progressStepsBar(step.num)" :class="{'active': currentStepNum == step.num}">
              <nuxt-link to="/buy/calc" v-if="step.num == 1">
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </nuxt-link>
              <template v-else>
                <b>{{step.text}}</b>
                <p>{{step.description}}</p>
              </template>
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
              <div class="conf-result-section hide">
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
              <div class="conf-result-summary mv-3">
                <dl>
                  <dt>Стоимость авто</dt> 
                  <dd><strong class="text-s1">от {{currentPrice | spaceBetweenNum}} сум</strong></dd>
                </dl>
              </div>
              <div class="conf-result-summary" v-if="currentStepNum == 5 || currentStepNum == 6">
                <p>Кредитный расчет</p>
                <hr>
                <div class="flex jc-between mv-2">
                  <div>Первый взнос</div> 
                  <div><b>{{payment.ante | spaceBetweenNum}} сум</b></div>
                </div>
                <div class="flex jc-between mv-2">
                  <div>Сумма кредита</div> 
                  <div><b>{{payment.credit_price | spaceBetweenNum}} сум</b></div>
                </div>
                <div class="flex jc-between mv-2">
                  <div>Срок кредита</div> 
                  <div><b>{{payment.term | spaceBetweenNum}} мес</b></div>
                </div>
                <div class="flex jc-between mv-2">
                  <div>Кредитная ставка</div> 
                  <div><b>{{payment.rate}} %</b></div>
                </div>
                <dl class="flex jc-between mv-2 mt-3">
                  <dt>Ежемесячный платеж</dt> 
                  <dd><strong class="text-s1">{{payment.mpay | spaceBetweenNum}} сум/мес</strong></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="conf-main-content col-md-9">

          <template v-if="currentStepNum === 2">
            <div class="conf-steps conf-step-engine">
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
            <div class="conf-steps conf-step-complectation">
              <div class="entry-content">
                <div class="entry-title m-v-30">
                  <h3>{{model.title}} {{currentComplectation.name}}</h3>
                </div>
                <div class="showroom-main m-v-10">
                  <div
                      class="cloudimage-360"
                      :data-folder="currentExterior.colorFolder"
                      data-filename="{index}.png"
                      data-spin-reverse
                      data-amount="72">
                      <div class="showroom-item-cover flex align-center">
                        <div class="flex box-xs-10 align-center">
                          <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
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
                <div v-if="selectComplectations" class="hide">
                  <div class="config-details config-details-modal conf-steps-modal" 
                    v-for="(complectation, index) in selectComplectations" 
                    :key="index" 
                    :id="'config-details-'+complectation.name.replace(/ /, '-').toLowerCase()" 
                    :config-complectation-id="complectation.name.replace(/ /, '-').toLowerCase()">
                    <section class="item active" v-if="model.standart">
                      <a href=".item" class="title-click" tc tc-closest>Стандартное оборудование<i class="fa fa-angle-up"></i></a>
                      <div class="section-body">
                        <div class="section-body-wrapper">
                          <div class="list-block-body" v-for="(item, key) in model.standart" :key="key">
                            <h4>{{item.name}}</h4>
                            <ul>
                              <li v-for="(text, key) in item.values" :key="key">
                                <span>{{text}}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section  class="item active" v-for="(gOption, key) in complectation.options" :key="key">
                      <a href=".item" class="title-click" tc-closest tc>{{gOption.name}}<i class="fa fa-angle-up"></i></a>
                      <div class="section-body">
                        <div class="section-body-wrapper">
                          <div class="list-block-body">
                            <ul>
                              <li v-for="(value, key) in gOption.values" :key="key">{{value}}</li>
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
                        v-for="(complectation, key) in selectComplectations"
                        :class="{'active': complectation.name == currentComplectation.name}"
                        :key="key">
                    <div class="title-content">
                      <div class="car-params-btn">
                        <div class="flex" click="selectComplectation" @click="selectComplectationAppend(complectation)" role="button">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15">
                            <b>{{complectation.name}}</b><br>
                            <b>{{complectation.price | spaceBetweenNum}} сум</b>
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
                          <li v-for="(optionText, key) in complectation.mainOptions" :key="key">{{optionText}}</li>
                        </ul>
                        <a href="javascript:;" 
                          :data-src="'#config-details-'+complectation.name.replace(/ /, '-').toLowerCase()" 
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
            <div class="conf-steps conf-step-overview">
              <div class="entry-content relative" :class="{'pano-active': panoActive}">
                <div class="showroom">
                  <div class="showroom-header">
                    <div class="entry-header m-v-10">
                      <h3>{{model.title}} {{currentComplectation.name}}</h3>
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
                        :data-folder="currentExterior.colorFolder"
                        data-filename="{index}.png"
                        data-spin-reverse
                        data-amount="72">
                        <div class="showroom-item-cover flex align-center">
                          <div class="flex box-xs-10 align-center">
                            <img :src="currentExterior.colorFolder+'/1.png'" width="100%">
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
                      <iframe 
                        :src="'https://cdn.kia-motors.uz/panoramas/iframe.html?pano_xml='+currentInterior.colorFolder" frameborder="0"></iframe>
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
                            <b>{{currentExterior.name}}</b>
                            <span v-if="currentExterior.price"> + {{currentExterior.price | spaceBetweenNum}} сум</span>
                          </div>
                          <ul class="list m-t-10"> 
                            <li v-for="(color, key) in currentComplectation.bodyColors" 
                              :class="{'active': currentExterior.id == color.id}"
                              :key="key">
                              <a href="javascript:;" @click.stop.prevent="colorChangeExterior(color, '.conf-step-4')">
                                <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="showroom-colorselect">
                          <div class="title-content">
                            <span class="color-gray">Цвет:</span> 
                            <b>{{currentInterior.name}}</b>
                            <span v-if="currentInterior.price"> + {{currentInterior.price | spaceBetweenNum}} сум</span>
                          </div>
                          <ul class="list m-t-10">
                            <li v-for="(color, key) in currentComplectation.interiorColors"
                              :class="{'active': currentInterior.id == color.id}"
                              :key="key">
                              <a href="javascript:;" @click.stop.prevent="colorChangeInterior(color)" >
                                <div class="color-select" :style="'background-image: url(\''+color.icon+'\')'"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="currentStepNum === 5">
            <div class="conf-steps conf-step-credit">
              <div class="entry-content mv-8">
                <div>
                  <div class="text-x3">Выберите первый взнос</div>
                  <div class="text-s2i">По умолчанию выбраны условия с самым низким ежемесячным платежом. Вы можете изменить их на более подходящие.</div>
                </div>
                <div class="credit-inputs mv-10">
                  <form action="">
                    <div class="wrapper-inputs mv-8 cleargix">
                      <div class="flex-adaptive">
                        <div class="box-xs-10 desktop:mr-5">

                          <div class="mv-10 payment-ante">
                            <div class="irs-content">
                              <div class="calc-range box-xs-10 active">
                                <input type="text" id="cr_ante_percent" name="" v-model="payment.ante_percent">
                              </div>
                              <div class="calc-range box-xs-10">
                                <input type="text" id="cr_ante" name="" v-model="payment.ante">
                              </div>
                            </div>
                            <div class="text-s3i-b flex align-center jc-between">
                              <span>Первоначальный взнос <span v-if="credit.ante_min > 0"> от {{credit.ante_min}} %</span></span>
                              <a href="javascript:;" class="ph-2 pt-1 payment-ante-change-irs">
                                <svg width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M72.837,213.333H320c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H72.837l48.915-48.915     c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L6.248,176.915c-0.497,0.497-0.967,1.02-1.413,1.564     c-0.202,0.246-0.378,0.506-0.567,0.759c-0.228,0.304-0.463,0.601-0.675,0.918c-0.203,0.303-0.379,0.618-0.565,0.929     c-0.171,0.286-0.351,0.566-0.509,0.861c-0.17,0.317-0.314,0.644-0.466,0.968c-0.145,0.307-0.298,0.609-0.429,0.924     c-0.13,0.315-0.236,0.637-0.35,0.957c-0.121,0.337-0.25,0.669-0.354,1.013c-0.097,0.32-0.168,0.645-0.249,0.969     c-0.089,0.351-0.187,0.698-0.258,1.056c-0.074,0.375-0.118,0.753-0.172,1.13c-0.044,0.311-0.104,0.618-0.135,0.933     c-0.138,1.4-0.138,2.811,0,4.211c0.031,0.315,0.09,0.621,0.135,0.933c0.054,0.377,0.098,0.756,0.173,1.13     c0.071,0.358,0.169,0.704,0.258,1.055c0.081,0.324,0.152,0.649,0.249,0.969c0.104,0.344,0.233,0.677,0.354,1.013     c0.115,0.32,0.22,0.642,0.35,0.957c0.13,0.315,0.284,0.616,0.429,0.923c0.153,0.324,0.297,0.651,0.467,0.969     c0.158,0.294,0.337,0.573,0.508,0.859c0.186,0.312,0.362,0.627,0.565,0.931c0.211,0.316,0.446,0.612,0.673,0.916     c0.19,0.254,0.366,0.514,0.569,0.761c0.443,0.54,0.91,1.059,1.403,1.552c0.004,0.004,0.006,0.008,0.01,0.011l85.333,85.333     c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L72.837,213.333z"/><path d="M507.164,333.522c0.204-0.248,0.38-0.509,0.571-0.764c0.226-0.302,0.461-0.598,0.671-0.913     c0.204-0.304,0.38-0.62,0.566-0.932c0.17-0.285,0.349-0.564,0.506-0.857c0.17-0.318,0.315-0.646,0.468-0.971     c0.145-0.306,0.297-0.607,0.428-0.921c0.13-0.315,0.236-0.637,0.35-0.957c0.121-0.337,0.25-0.669,0.354-1.013     c0.097-0.32,0.168-0.646,0.249-0.969c0.089-0.351,0.187-0.698,0.258-1.055c0.074-0.375,0.118-0.753,0.173-1.13     c0.044-0.311,0.104-0.617,0.135-0.933c0.138-1.4,0.138-2.811,0-4.211c-0.031-0.315-0.09-0.621-0.135-0.933     c-0.054-0.377-0.098-0.756-0.173-1.13c-0.071-0.358-0.169-0.704-0.258-1.055c-0.081-0.324-0.152-0.649-0.249-0.969     c-0.104-0.344-0.233-0.677-0.354-1.013c-0.115-0.32-0.22-0.642-0.35-0.957c-0.13-0.314-0.283-0.615-0.428-0.921     c-0.153-0.325-0.297-0.653-0.468-0.971c-0.157-0.293-0.336-0.572-0.506-0.857c-0.186-0.312-0.363-0.628-0.566-0.932     c-0.211-0.315-0.445-0.611-0.671-0.913c-0.191-0.255-0.368-0.516-0.571-0.764c-0.439-0.535-0.903-1.05-1.392-1.54     c-0.007-0.008-0.014-0.016-0.021-0.023l-85.333-85.333c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17l48.915,48.915     H192c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333h247.163l-48.915,48.915     c-8.331,8.331-8.331,21.839,0,30.17s21.839,8.331,30.17,0l85.333-85.333c0.008-0.008,0.014-0.016,0.021-0.023     C506.261,334.572,506.725,334.057,507.164,333.522z"/></svg>
                              </a>
                            </div>
                          </div>
                          <div class="mv-10">
                            <div class="irs-content">
                              <div class="calc-range box-xs-10">
                                <input type="text" id="cr_term" name="" value="" />
                              </div>
                            </div>
                            <div class="text-s3i-b">Срок кредита</div>
                          </div>
                          <div class="mv-10">
                            <div class="irs-content">
                              <div class="calc-range box-xs-10">
                                <input type="text" id="cr_rate" name="" value="" />
                              </div>
                            </div>
                            <div class="text-s3i-b">Кредитная ставка</div>
                          </div>
                        </div>
                        <div class="box-xs-10 mt-10 flex fd-columm">
                          <div class="wrap mv-2">
                            <div class="title-content">Первоначальный взнос</div>
                            <div class="input-content">
                              <div class="form-control credit-ante-label hide" >{{payment.ante | spaceBetweenNum}}</div>
                              <input type="text" class="form-control credit-ante-input" id="antein" v-model="payment.ante" v-facade="'###########'">
                            </div>
                          </div>
                          <div class="wrap mb-2 mt-0">
                            <div class="title-content font-size-1">Сумма кредита</div>
                            <div class="ph-2">
                              <div v-if="payment.credit_price < 0">0</div>
                              <div v-else>{{payment.credit_price | spaceBetweenNum}}</div>
                            </div>
                          </div>
                          <div class="text-right mt-8">
                            <div class="desktop:mr-3">
                              <div class="title-content fw-6">Ежемесячный платёж</div>
                              <div class="result-sum mv-3 fw-6 text-s1">{{payment.mpay | spaceBetweenNum}} сум/мес</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr>

                    <div class="flex-adaptive mt-10 jc-between">
                      <div class="btn-content">
                        <span class="btn-def">
                          <a href="javascript:;" @click="cr_counter">Расчитать</a>
                        </span>
                      </div>
                    </div>

                  </form>
                  <div class="credit-table-content mt-5">
                    <div class="table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Мес.</th>
                            <th>Остаток долга</th>
                            <th>Платеж</th>
                            <th>Процентная часть</th>
                            <th>Долговая часть</th>
                            <th>Остаток долга на конец периода</th>
                          </tr>
                        </thead>
                        <tbody>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="currentStepNum === 6">
            <div class="conf-steps conf-step-credit">
              <div class="entry-content">
                <div class="conf-summary mt-8">
                  <div class="conf-summary-params">
                    <div class="wrapper-content">
                      <div class="item col-md-6">
                        <div class="fw-6 font-size-nm m-b-20">Итоговая стоимость</div>
                        <div class="info-content flex fd-columm jc-between">
                          <div>
                            <dl>
                              <dt>Стоимость автомобиля</dt>
                              <dd>{{currentComplectation.price | spaceBetweenNum}} сум</dd>
                            </dl>
                            <dl v-if="currentExterior.price">
                              <dt>Стоимость экстерьера</dt>
                              <dd>{{currentExterior.price | spaceBetweenNum}} сум</dd>
                            </dl>
                            <dl v-if="currentInterior.price">
                              <dt>Стоимость интерьера</dt>
                              <dd>{{currentInterior.price | spaceBetweenNum}} сум</dd>
                            </dl>
                          </div>
                          <dl class="mt-5">
                            <dt>Итого</dt>
                            <dd><big>{{(currentComplectation.price*1)+(currentExterior.price*1)+(currentInterior.price*1) | spaceBetweenNum}} сум</big></dd>
                          </dl>
                        </div>
                      </div>
                      <div class="item col-md-6">
                        <div class="fw-6 font-size-nm m-b-20">Расчёт кредита</div>
                        <div class="info-content flex fd-columm jc-between">
                          <div>
                            <dl>
                              <dt>Первый взнос</dt>
                              <dd>{{payment.ante | spaceBetweenNum}} сум</dd>
                            </dl> 
                            <dl>
                              <dt>Сумма кредита</dt>
                              <dd>{{payment.credit_price | spaceBetweenNum}} сум</dd>
                            </dl> 
                            <dl>
                              <dt>Срок кредита</dt>
                              <dd>{{payment.term | spaceBetweenNum}} мес</dd>
                            </dl> 
                            <dl>
                              <dt>Кредитная ставка</dt>
                              <dd>{{payment.rate}} %</dd>
                            </dl>
                          </div>
                          <dl class="mt-5">
                            <dt>Платёж в месяц</dt>
                            <dd><big>{{payment.mpay | spaceBetweenNum}} сум/мес</big></dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="credit-table-content mt-5">
                  <div class="table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Мес.</th>
                          <th>Остаток долга</th>
                          <th>Платеж</th>
                          <th>Процентная часть</th>
                          <th>Долговая часть</th>
                          <th>Остаток долга на конец периода</th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="conf-feedback hide" id="conf-feedback">
                <div class="entry-content">
                  <div class="form-content pt-6 desktop:pt-20 pb-12 desktop:pb-20">
                    <div>
                      <h3>Забронировать автомобиль {{currentModelLine.name}} {{selectComplectation.name}} {{currentEngine.name}}</h3>
                      <p>После отправки заявки выбранный дилер свяжется с вами для уточнения деталей.</p>
                    </div>
                    <form action="https://cdn.kia-motors.uz/feedback.php" method="POST" formaj>

                      <input type="text" :value="new Date().getFullYear()" name="anti-bot-a" class="hide">
                      <input type="text" value="carBook" name="type" class="hide">
                      <input type="text" name="carName" class="hide" :value="model.title+' '+currentComplectation.name">
                      <input type="text" name="engine" class="hide" :value="currentEngine.name+' / '+currentEngine.descr">
                      <input type="text" name="transmission" class="hide" :value="currentGearbox.value+', '+currentGearbox.name">
                      <input type="text" name="unit" class="hide" :value="currentDrive.value">
                      <input type="text" name="bodyColor" class="hide" :value="currentExterior.name">
                      <input type="text" name="interColor" class="hide" :value="currentInterior.name">

                      <div class="row">
                        <div class="input-content m-v-30 col-md-6 p-h-15">
                          <input type="text" name="name" placeholder="Имя *"  class="form-control" required>
                        </div>
                        <div class="input-content m-v-30 col-md-6 p-h-15">
                          <input type="text" name="phone" placeholder="Телефон *"  class="form-control" required pattern="[0-9]+" title="цифры">
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
                    <div class="form-success-block">
                      <div class="form-success-block-wrapper pv-10">
                        <h3>Заявка успешно отправлена!</h3>
                        <br>
                        <p>Спасибо за заявку! Рассмотрение займет не больше одного рабочего дня, но обычно мы справляемся быстрее. Как только все будет готово, менеджер свяжется с вами.</p>
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
          <span class="btn-def btn-step-back" v-if="currentStepNum < steps.length">
            <nuxt-link to="/buy/calc/" v-if="currentStepNum <= 2" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </nuxt-link>
            <a href="javascript:;" v-else @click="progressStepsBar('prev')" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </a>
          </span>
          <span class="btn-def">
            <!-- <a href="javascript:;" v-if="currentStepNum == steps.length" @click.prevent.stop="scrollAnimate('#conf-feedback', $event)">Забронировать</a> -->
            <a href="javascript:;" v-if="currentStepNum < steps.length" @click="progressStepsBar('next')">Далее</a>
            <a href="javascript:;" v-if="currentStepNum >= steps.length" @click="progressStepsBar('prev')">Назад</a>
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
      title: "Расчет кредита",
      meta: [
        {
          content: "Расчет кредита."
        }
      ],
    }
  },
  async asyncData(context){
    try{
      
      const modelName = context.route.params.id;
      
      var page_data = await context.store.dispatch("models/configuratorModels", {
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
      selectComplectations: [],
      currentExterior: {},
      currentInterior: {},
      panoActive: false,

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

      steps: [
        {
          num: 1,
          text: "01",
          description: "Выбор модели"
        },
        {
          num: 2,
          text: "02",
          description: "Двигатель и трансмиссия"
        },
        {
          num: 3,
          text: "03",
          description: "Комплектация"
        },
        {
          num: 4,
          text: "04",
          description: "Цвета и отделка"
        },
        {
          num: 5,
          text: "05",
          description: "Условия кредита"
        },
        {
          num: 6,
          text: "06",
          description: "Результаты"
        },
      ],


      credit:{
        price: 0,
        term_min: 13, 
        term_max: 48,
        rate_min: 19, 
        rate_max: 33.2,
        ante_min: 0,
        ante_max: 100,
        ante_percent: 0,
      },

      payment:{
        price: 0,
        credit_price: 0,
        ante: 0,
        term: 48,
        rate: 0,
        rate_one: 0,
        mpay: 0,
      },

    }
  },
  mounted(){
    var v = this;
    $('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 0
    });
    // Начальный выбор комплектации
    this.selectParamEngine(this.currentEngine);
    // Активация showroom 360 при клике
    $(document).on("click", ".showroom-item-cover", ()=>{
      window.CI360.init();
    })
    $('[style="transform: none;"]').removeAttr("style");






  },
  methods: {

    calc(){
      var result;
      var term = this.payment.term // Срок
      var credit_price = this.payment.credit_price; // Сумма кредита
      var rateone = this.payment.rate_one;

      this.payment.credit_price = this.payment.price - this.payment.ante
      this.payment.rate_one = this.payment.rate/100/12
      
      result = credit_price*(rateone + ( rateone / (((1+rateone)**term) - 1) ) )
      console.log(result);
      this.payment.mpay = Math.round(result);
    },
    cr_counter(){
      var v = this;
      $(".credit-table-content").addClass("active");
      var body = $(".credit-table-content table tbody")
      body.find("tr").remove();
      console.log(body)
      var tpl = ''
      var remainder_all = this.payment.credit_price;
      var payment = this.payment.mpay;
      var summary = 0;
      var summary_rate = 0;
      var summary_payment = 0;
      var debt_rate;
      var remainder;
      for (let i = 0; i < v.payment.term; i++) {
        
        var f_rate_one = remainder_all*this.payment.rate_one;
        var f_dept = this.payment.mpay - f_rate_one;
        var f_end_dept = remainder_all - f_dept;

        summary_rate += f_rate_one;
        summary_payment += payment;
        summary += f_dept;

        if(f_end_dept < 50)
          f_end_dept = 0

        tpl = tpl+`
          <tr>
            <td>${i+1}</td>
            <td>${spaceBetweenNum(Math.round(remainder_all))}</td>
            <td>${spaceBetweenNum(Math.round(payment))}</td>
            <td>${spaceBetweenNum(Math.round(f_rate_one))}</td>
            <td>${spaceBetweenNum(Math.round(f_dept))}</td>
            <td>${spaceBetweenNum(Math.round(f_end_dept))}</td>
          </tr>
        `
        if(i == v.payment.term-1){
          tpl = tpl+`
            <tr>
              <td></td>
              <td></td>
              <td><b>Итого:</b><br><b>${spaceBetweenNum(Math.round(summary_payment))} сум</b></td>
              <td><b>Итого:</b><br><b>${spaceBetweenNum(Math.round(summary_rate))} сум</b></td>
              <td></td>
              <td></td>
            </tr>
          `
        }
        remainder_all = remainder_all - f_dept
      }
      body.append(tpl)
    },



    /* События Изменение цвета  */
    async colorChangeExterior(color, parentClass){
      parentClass = parentClass || ".showroom-main";
      this.currentExterior = color;
      window.CI360.destroy();
      $(parentClass+" [data-folder]").attr('data-folder', this.currentExterior.colorFolder)
      $(parentClass+" [data-amount]").attr('data-amount', 72)
      if($(parentClass).find("canvas").length > 0)
        window.CI360.init();
      else{
        $(parentClass).find(".showroom-item-cover").find("img").attr("src", this.currentExterior.colorFolder+"/1.png")
      }
    },
    async colorChangeInterior(color){
      this.currentInterior = color;
    },
    /* Текущее выбранная комплектация */
    async selectComplectationAppend(complectation){
      this.currentComplectation = complectation;
      this.currentExterior = this.currentComplectation.bodyColors[0];
      this.currentInterior = this.currentComplectation.interiorColors[0];
    },
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
      const v = this;
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

        this.selectComplectations = await this.$axios.$get(url)
        this.currentComplectation = this.selectComplectations[0];
        this.currentExterior = this.currentComplectation.bodyColors[0];
        this.currentInterior = this.currentComplectation.interiorColors[0];
      }
      
      // step 5
      if(this.currentStepNum == 5){

        setTimeout(() => {
          // change range ante percent
          $(".payment-ante-change-irs").on("click", function(){
            $(this).closest(".payment-ante").find(".calc-range").toggleClass("active");
          })


          this.credit.price = ((this.currentComplectation.price*1)+(this.currentExterior.price*1)+(this.currentInterior.price*1));
          if(this.currentComplectation.ante_min*1 > 0)
            this.credit.ante_min = this.currentComplectation.ante_min*1;
          if(this.currentComplectation.rate_min*1 > 0)
            this.credit.rate_min = this.currentComplectation.rate_min*1;

          this.payment.price = this.credit.price;
          this.payment.rate = this.credit.rate_min
          this.payment.rate = this.credit.rate_min
          //this.payment.term = this.credit.term_min
          
          // Первоначальное значение (число)
          window.cr_ante = $("#cr_ante").ionRangeSlider({
            min: 0,
            max: v.credit.price,
            from: 0,
            to: 0,
            from_min: Math.round((v.credit.price/100)*v.credit.ante_min),
            from_max: Math.round((v.credit.price/100)*v.credit.ante_max),
            postfix: " сум",
            step: 1,
            //grid: true,
            //grid_snap: true,
            onChange: function (data) {
              v.payment.ante = data.from
              console.log(data);
              cr_ante_percent.update({from: data.from_percent,});
              v.calc();
            },
          }).data("ionRangeSlider");
          // Первоначальное значение (процент)
          window.cr_ante_percent = $("#cr_ante_percent").ionRangeSlider({
            min: 0,
            max: 100,
            from: 0,
            to: 0,
            to_min: 0,
            from_min: v.credit.ante_min,
            from_max: v.credit.ante_max,
            postfix: " %",
            step: 1,
            onChange: function (data) {
              var val = Math.round(cr_ante.result.max*(data.from/100))
              v.payment.ante_percent = data.from;
              v.payment.ante = val;
              cr_ante.update({from: v.payment.ante,});
              v.calc();
            },

          }).data("ionRangeSlider");


          window.cr_term = $("#cr_term").ionRangeSlider({
            //type: "double",
            min: v.credit.term_min,
            max: v.credit.term_max,
            from: 0,
            to: 0,
            postfix: " мес",
            step: 1,
            grid: false,
            onChange: function (data) {
              v.payment.term = data.from;
              v.calc();
            }
          }).data("ionRangeSlider");

          window.cr_rate = $("#cr_rate").ionRangeSlider({
            //type: "double",
            min: v.credit.rate_min,
            max: v.credit.rate_max,
            from: 0,
            to: 0,
            postfix: " %",
            step: 0.1,
            grid: false,
            onChange: function (data) {
              v.payment.rate = data.from;
              v.calc();
            }
          }).data("ionRangeSlider");
          
          v.updateRange = function(){
            cr_ante.update({from: v.payment.ante,});
            cr_ante.callOnChange()
            cr_term.update({from: v.payment.term,});
            cr_rate.update({from: v.payment.rate,});
          }
          
          this.calc();
          v.updateRange();
          $(".credit-ante-input").on("change", function(){
            v.updateRange();
          })
        }, 1)
      }

      if(this.currentStepNum == 6){
        setTimeout(() => {
          this.calc()
          this.cr_counter()
        }, 50)
      }

      if(this.currentStepNum == this.steps.length){
        setTimeout(() => {
          mainjs()  
        }, 50);
      }

    },
  },
  async created(){

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