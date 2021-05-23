<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" :style="'background-image: url(\''+page_data.header.image+'\');'">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="">Мир KIA</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header">
            <div v-html="page_data.header.text"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-v-30 desktop:mt-8">    
      <div class="container">
        <div class="row-15 flex-adaptive justify-c-between desktop:mt-5">
          <div class="col-md-4 p-h-15">
            <div class="h1 text-x5 m-t-0">Видение бренда</div>
          </div> 
          <div class="col-md-offset-1 p-h-15 col-md-7 text-item text-x1">
            <p>Основа стратегии компании в России — предлагать потребителям уникальный опыт и яркие впечатления от использования автомобиля, которые выходят за рамки ожиданий, за счет применения инновационных подходов к созданию своей продукции.</p>
            <p>Особенностью бренда KIA является предложение широкого модельного ряда высококачественных автомобилей с ярким дизайном, максимально учитывающих предпочтения покупателей на локальном рынке.</p>
            <p>Ключевая ценность бренда заключается в стремлении создавать больше радостных моментов в жизни клиентов, предоставляя не просто возможность беспроблемного использования автомобиля, но и создавая уникальный опыт владения им на протяжении всего цикла.</p>
          </div>
        </div>
      </div>
    </div>


    <div class="about-desc">
      <div class="container">
        <div class="entry-header m-b-35">
          <h4 class="color-2 text-n1">ЛИДЕРСТВО</h4>
          <h1 class="text-x5">Показатели бренда</h1>
        </div>
        <div class="desc-content">
          <div class="about-desc-list text-item">
            <div class="item m-v-30 pv-4">
              <div class="flex desktop:jc-between">
                <div class="item-header flexbasis-md-3">
                  <h4>Лидер по объему продаж автомобилей</h4>
                </div>
                <div class="item-desc flexbasis-md-8">
                  <p>С 2014 года KIA занимает первое место по объему продаж автомобилей среди иностранных автомобильных брендов в России.</p>
                  <p>По данным Ассоциации европейского бизнеса (АЕБ).</p>
                </div>
                <div class="item-media mt-6 desktop:mt-8 flexbasis-md-12">
                  <video src="https://cdn.kia.ru/media-data/video/chart-animated.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline="" class="item-media-video"></video>
                </div>
              </div>
            </div>
            <div class="item m-v-30 pv-4">
              <div class="flex desktop:jc-between">
                <div class="item-header flexbasis-md-3">
                  <h4>Лидер по уровню удовлетворенности сервисом официального дилера</h4>
                </div>
                <div class="item-desc flexbasis-md-8">
                  <p>В 2018 г. KIA занял первое место среди массовых автомобильных брендов в России по уровню удовлетворенности обслуживанием на сервисе официального дилера.</p>
                  <p>По результатам исследования «АВТОСТАТ ОМНИБУС – 2018. Новые автомобили: мнения автовладельцев» независимого аналитического агентства «Автостат», 2018 г.</p>
                </div>
              </div>
            </div>
            <div class="item m-v-30 pv-4">
              <div class="flex desktop:jc-between">
                <div class="item-header flexbasis-md-3">
                  <h4>Лидер по уровню удовлетворённости послепродажным обслуживанием</h4>
                </div>
                <div class="item-desc flexbasis-md-8">
                  <p>В 2018 г. KIA занял первое место среди 13 массовых брендов по уровню удовлетворенности клиентов послепродажным обслуживанием.</p>
                  <p>По результатам исследования IACS (International Aftersales Customer Satisfaction) международного аналитического агентства GFK Russia, 2018 г.</p>
                </div>
              </div>
            </div>
            <div class="item m-v-30 pv-4">
              <div class="flex desktop:jc-between">
                <div class="item-header flexbasis-md-3">
                  <h4>Остаточная стоимость автомобилей</h4>
                </div>
                <div class="item-desc flexbasis-md-8">
                  <p>Ежегодно модели KIA входят в число лидеров рынка по показателю «Сохранность остаточной стоимости автомобилей».</p>
                  <p>По данным рейтинга агентства «Автостат».</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <template v-for="(block) in page_data.blocks" v-if="block.block == 'block3'">
      <div class="about-stat" :key="key">
        <div class="g-padding">
          <div class="g-container">
            <div class="g-margin">
              <div class="container">
                <div class="about-stat-items boxes-3 text-s1 pb-8 flex-adaptive justify-between desktop:mt-10 mt-6">
                  <div class="cell" :key="key">
                    <h2>{{block.name}}</h2>
                    <div>{{block.text}}</div>
                  </div>
                  <div class="cell" v-for="(num, key) in block.numbers" :key="key">
                    <div class="num-style">{{num.number}} </div>
                    <div><b>{{num.content}}</b></div>
                    <div class="color-gray-5">{{num.content_two[0]}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="img-content">
          <img :src="block.image" alt="">
        </div>
      </div>
      <div class="kiaworld-sponsorship text-x1" :key="key">
        <div class="g-padding p-v-md-40">
          <div class="g-container">
            <div class="g-margin">
              <div class="container">
                <br>
                <div class="kiaworld-sponsorship-items">
                  <figure v-for="(content, key) in block.content" :key="key">
                    <div class="flex-adaptive">
                      <div class="desc-content text-item">
                        <hr>
                        <br>
                        <div class="text-x4 m-v-20">{{content.name}}</div>
                        <div v-html="content.text"></div>
                      </div>
                      <div class="img-content">
                        <img :src="content.image">
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <KiaworldOther :kiaworld-other-items="page_data.footer" />

  </div>
</template>

<script>

import KiaworldOther from "@/components/kiaworld/KiaworldOther";


export default {
  head() {
    return {
      title: this.page_data.seo.title,
      meta: [
        {
          content: this.page_data.seo.description
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
  components:{
    KiaworldOther
  }
}
</script>
