<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url('+page_data.header.image+');'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="">{{page_data.header.title}}</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <div class="box-md-5 text-x5 fw-7">{{page_data.header.title}}</div>
          <div class="text-s1">{{page_data.header.subtitle}}</div>
        </div>
      </div>
    </div>
    <div class="block-first">
      <div class="container-p">
        <div class="wrapper p-v-md-50 p-h-md-110">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="entry-header">
              <div class="text-x5 mb-5 fw-7">{{page_data.content.name}}</div>
              <div class="text-x1" v-html="page_data.content.summary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-5 desktop:pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-n1 color-1 mb-2">{{page_data.features.alias}}</div>
          <div class="text-x5 fw-7">{{page_data.features.title}}</div>
        </div>
        <div class="wa-advantages-items boxes-4">
          <div class="cell desktop:mv-6" v-for="(cell, key) in page_data.features.content" :key="key">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4" v-html="cell.icon"></div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-8">
                <div class="text-x1 mb-3"><b>{{cell.text[0]}}</b></div>
                <div class="text-s2i color-gray-5">{{cell.text[1]}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="container-p pv-5 desktop:pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-n1 color-1 mb-2">{{page_data.loan.alias}}</div>
          <div class="text-x5 fw-7">{{page_data.loan.title}}</div>
        </div>
        <div class="items boxes-4">
          <div class="cell mv-5" v-for="(cell, key) in page_data.loan.content" :key="key">
            <div class="wrapper">
              <div class="img-content text-center" v-html="cell.icon"></div>
              <hr>
              <div class="desc-content flex flex-start">
                <div class="num color-1 fw-7">0{{key+1}}</div>
                <div class="text-content pl-6 text-s2i">{{cell.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>

    <div class="landign-credits" v-if="false">
      <div class="container-p pv-5 desktop:pv-10">
        <div class="entry-header">
          <div class="text-x5 fw-7">Выберите программу кредитования</div>
          <div class="color-gray-4 mt-2">3 программы</div>
        </div>
        <div class="landign-credits-items list-check mv-8">
          <div class="cell mv-1">
            <div class="wrapper flex-adaptive bg-color-gray-1 ph-8 pv-8 li-m-v-15 jc-between relative">
              <div>
                <div class="mb-3 text-x4 fw-7">Kia Легко</div>
                <div class="mb-3">Программа с гарантированной остаточной стоимостью</div>
                <div class="mb-5 color-gray-4">Преимущества программы:</div>
                <ul class="list">
                  <li>Платёж до 2-х раз ниже, чем по программе “Kia Стандарт”</li>
                  <li>Гарантия банка партнера по выкупу автомобиля по окончанию кредита</li>
                  <li>Возможность легко обменять автомобиль на новый по окончанию программы</li>
                </ul>
              </div>
              <div class="btn-content flex-adaptive align-center">
                <span class="btn-def mv-3">
                  <a href="">Расчёт кредита</a>
                </span>
                <span class="link-content mv-3 desktop:ml-8 car-card-links desktop:mr-10">
                  <a href="javascript:;" class="btn-link-1">
                    Цены<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="cell mv-1">
            <div class="wrapper flex-adaptive bg-color-gray-1 ph-8 pv-8 li-m-v-15 jc-between relative">
              <div class="bg-color-1 color-white ph-1 pv-1 absolute" style="top:0;left:0;">Выбор покупателей</div>
              <div>
                <div class="mb-3 text-x4 fw-7">Kia Легко Plus</div>
                <div class="mb-3">Платеж один, а плюсов много!</div>
                <div class="mb-5 color-gray-4">Преимущества программы:</div>
                <ul class="list">
                  <li>Все преимущества программы “Kia Легко”</li>
                  <li>Единый платеж за кредит КАСКО и ТО</li>
                  <li>Расходы распределяются пропорционально, и через год не возникнет необходимость снова платить за КАСКО и ТО</li>
                </ul>
              </div>
              <div class="btn-content flex-adaptive align-center">
                <span class="btn-def mv-3">
                  <a href="">Расчёт кредита</a>
                </span>
                <span class="link-content mv-3 desktop:ml-8 car-card-links desktop:mr-10">
                  <a href="javascript:;" class="btn-link-1">
                    Цены<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="cell mv-1">
            <div class="wrapper flex-adaptive bg-color-gray-1 ph-8 pv-8 li-m-v-15 jc-between relative">
              <div>
                <div class="mb-3 text-x4 fw-7">Kia Стандарт</div>
                <div class="mb-3">Классическая программа кредитования</div>
                <div class="mb-5 color-gray-4">Преимущества программы:</div>
                <ul class="list">
                  <li>Первоначальный взнос от 0% до 90%</li>
                  <li>Срок кредита от 1 года до 5 лет</li>
                  <li>Возможность оформления с неполным пакетом документов</li>
                </ul>
              </div>
              <div class="btn-content flex-adaptive align-center">
                <span class="btn-def mv-3">
                  <a href="">Расчёт кредита</a>
                </span>
                <span class="link-content mv-3 desktop:ml-8 car-card-links desktop:mr-10">
                  <a href="javascript:;" class="btn-link-1">
                    Цены<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="credits-partners">
      <div class="container-p pv-5 desktop:pb-13">
        <div class="entry-header mb-5">
          <div class="text-x5 fw-7">Официальные банки-партнеры</div>
        </div>
        <div class="credits-partners-items figure-m-v-15">
          <div class="cell align-center jc-center" v-for="(cell, key) in page_data.banks.images" :key="key">
            <div class="img-content">
              <img :src="cell">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>





<script>
export default {
  head() {
    return {
      title: this.page_data.seo.title ? this.page_data.seo.title : "Kia Finance Программа кредитования от Kia",
      meta: [
        {
          content: this.page_data.seo.description ? this.page_data.seo.description : "Kia Finance Программа кредитования от Kia",
        }
      ],
    }
  },
  async asyncData(context){
    try{
      const page_data = await context.store.dispatch("other/fetchPath", {
        path: context.route.path
      });
      return {
        page_data
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>
