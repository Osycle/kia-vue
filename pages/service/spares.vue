<template>
  <div class="main-body offset-header spares">
    <div class="bnr-style-1 bnr-height-auto">
      <div class="container-p">
        <div class="box-md-5">
          <div class="breadcrumb-container color-gray">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="">Запчасти</nuxt-link></li>
            </ol>
          </div>
          <div class="relative">
            <div class="entry-header">
              <h1>Запчасти</h1>
              <div class="intext">Производитель обеспечивает своих дилеров необходимым количеством запчастей, деталей и комплектующих для профессионального ремонта. Оригинальные запчасти обеспечивают высокое качество ремонтных и сервисных работ.</div>
            </div>
            <div class="mt-7 flex-adaptive">
              <div class="flex items-center mt-3 tablet:mt-0 tablet:mr-8 desktop:mr-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="service-spares__header-features-icon mr-1"><path d="M18.821 4.448C16.356 3.154 12.181 3.007 11.995 3c-.175 0-4.351.154-6.816 1.448A.346.346 0 005 4.756v7.366c0 .226.125 5.576 6.892 8.849.08.039.173.039.254 0 6.741-3.273 6.85-8.63 6.854-8.852V4.756a.346.346 0 00-.179-.308z" stroke="currentColor" stroke-width="1.2"></path></svg> 
                <span> Безопасность превыше всего </span>
              </div>
              <div class="flex items-center mt-3 tablet:mt-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="service-spares__header-features-icon mr-1"><path d="M19.873 8.473l.424-.424-.424-.425-1.697-1.697-.424-.424-.425.424L9 14.255l-2.927-2.928-.424-.424-.425.424-1.697 1.697-.424.425.424.424 5.049 5.048.424.425.424-.425L19.873 8.473z" stroke="currentColor" stroke-width="1.2"></path></svg>
                <span> Надежность, проверенная исследованиями </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spares-nav">
      <div class="container-p">
        <div class="wrapper mv-6 desktop:pt-5">
          <div class="short-models-nav m-v-20 row-15">
            <ul class="list flex-adaptive li-m-v-15">
              <li class="active"><a href="#spares-tab-1" data-toggle="tab">Оригинальные запчасти</a></li>
              <li><a href="#spares-tab-2" data-toggle="tab">Запчасти PL2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane fade in active" id="spares-tab-1">
        <div class="spares-categories pb-2">
          <div class="container-p">
            <div class="spares-filters">
              <div class="spares-filter" v-for="(catalog, key) in spares_catalog" :key="key">
                <span class="color-gray">{{catalog.title}}</span>
                <ul>
                  <li v-for="(name, key) in catalog.names" :key="key" :class="{'active': name == selectSpare.name}"
                    @click="changeSpare(name)">
                    <span class="icon-content"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="block"><path d="M10.5 14l4-4-4-4M14 10H7" stroke="currentColor" stroke-width="1.5"></path></svg></span> 
                    <span class="text-content">{{name}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="spares-products">
          <div class="container-p">
            <div class="wrapper">
              <div class="spares-products-info box-md-4">
                <div class="img-content">
                  <img :src="selectSpare.img" alt="">
                </div>
                <div class="title-content mv-5 text-x3 text-spacing">{{selectSpare.title}}</div>
                <ul class="list-check list-color-1">
                  <li v-for="(text, key) in selectSpare.list" :key="key">{{text}}</li>
                </ul>
              </div>
              <div class="spares-products-bg box-md-6">
                <img :src="selectSpare.bg" alt="">
              </div>
            </div>
            <div class="video-content mv-6 relative pb-8 desktop:pb-16">
              <div class="container">
                <div class="bg-video-content-2">
                  <a href="https://youtu.be/99pFRihJr40?list=TLGGzoM8YvMLA8wyMjA0MjAyMQ" data-fancybox>
                    <div class="btn-play">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                    </div>
                  </a>
                  <div class="align-center">
                    <img class="box-md-10" src="https://www.kia.ru/images/landing/service/genuine_parts/genuine.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="spares-tab-2">
        <div class="spares-desc">
          <div class="container-p">
            <div class="entry-header box-md-4 mv-5">
              <div class="desktop:text-x4 mb-5 fw-6 text-x3">Запасные части PL2</div>
              <p>Решили пересмотреть бюджет на обслуживание вашего Киа? Понимаете и цените преимущества официального сервиса? Выбирайте запасные части PL2 — неизменное качество за разумные деньги.</p>
            </div>
          </div>
          <div class="img-content text-center mv-6 desktop:mv-10">
            <img src="https://www.kia.ru/images/landing/service/spares/tsr.png" alt="">
          </div>
          <div class="desc-content text-item lists-check list-color-1 mv-8 desktop:pb-6">
            <div class="container-p">
              <div class="box-md-4">
                <p>Спрашивайте запасные части PL2 у официальных дилеров и получайте:</p>
                <br>
                <ul>
                  <li>Качественные запчасти разработанные и произведенные для автомобилей Киа под контролем автопроизводителя;</li>
                  <li>Аналогичный оригинальным запасным частям ресурс использования;</li>
                  <li>Цены на 20% ниже оригинальных запасных частей;</li>
                  <li>Используются в постгарантийный период и для гарантийного ремонта не допускается.</li>
                </ul>
                <br><br>
                <p>Если вы владелец одной из этих моделей Rio QB, cee’d ED, cee’d JD, Optima TF, Picanto TA, Soul AM, Sportage SL, Sorento XM у вас есть еще один повод оставаться лояльным Киа — оставаться с официальным сервисом.</p>
              </div>
            </div>
          </div>
          <div class="video-content mv-6 relative pb-8 desktop:pb-16">
            <div class="container">
              <div class="bg-video-content-2">
                <a href="https://youtu.be/5h05LKms5CE?list=TLGGSzzHwLaSpBQyMjA0MjAyMQ" data-fancybox>
                  <div class="btn-play">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M16 10l-9 5.196V4.804L16 10z" fill="currentColor"></path></svg>
                  </div>
                </a>
                <div class="align-center">
                  <img class="box-md-10" src="https://www.kia.ru/images/landing/service/genuine_parts/pl2.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>



<style lang="scss" scoped>
  .bnr-style-1{
    color: black;
    position: relative;
    overflow: hidden;
    background-position: 115% center;
    background-size: 65%;
    background-image: url('https://www.kia.ru/images/landing/service/spares/bg-header.jpg');
    background-repeat: no-repeat;;
    &:before{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(97.95deg,rgba(5,5,5,.08) .27%,hsla(0,0%,100%,0));
      content: "";
    }
    @media (max-width: 991px){
      background-image: none;
    }
  }
  .breadcrumb-container{
    padding-top: 20px;
  }
</style>

<script>
export default {
  head() {
    return {
      title: "Гарантия на автомобили KIA",
      meta: [
        {
          content: "Гарантия на автомобили KIA",
        }
      ],
    }
  },
  methods:{
    changeSpare(name){
      this.spares.forEach(spare => {
        if(spare.name == name)
          this.selectSpare = spare;
        
      });
    }
  },
  data(){
    return{
      selectSpare: {
        name: "Воздушный",
        title: "Воздушный фильтр",
        img: "/img/service/spares/img-0-0.jpg",
        bg: "/img/service/spares/bg-0-0.jpg",
        list: [
          "Для работы двигателю необходима определенная пропорция смеси топлива и воздуха. Воздух поступает в систему смесеобразования через воздушный фильтр.",
          "Воздушный фильтр обеспечивает защиту двигателя от загрязнений и инородных частиц, вызывающих быстрый износ деталей поршневой группы. Фильтр разработан в соответствии со спецификациями и пропускает тот объем воздуха, который предусмотрен для двигателя."
        ]
      },
      spares_catalog: [
        {
          title: "Фильтр",
          names: [
            "Воздушный",
            "Масляный",
            "Салонный",
            "Топливный",
          ]
        },
        {
          title: "Тормоза",
          names: [
            "Тормозные диски",
            "Тормозные колодки",
          ]
        },
        {
          title: "Двигатель",
          names: [
            "Масло",
            "Свечи зажигания",
          ]
        },
        {
          title: "Кузов",
          names: [
            "Лобовое стекло",
            "Кузовные запчасти",
          ]
        },
        {
          title: "Комплектующие",
          names: [
            "Антифриз",
            "Щётки стеклоочистителя",
            "Амортизаторы",
          ]
        },
      ],
      spares: [
        {
          name: "Воздушный",
          title: "Воздушный фильтр",
          img: "/img/service/spares/img-0-0.jpg",
          bg: "/img/service/spares/bg-0-0.jpg",
          list: [
            "Для работы двигателю необходима определенная пропорция смеси топлива и воздуха. Воздух поступает в систему смесеобразования через воздушный фильтр.",
            "Воздушный фильтр обеспечивает защиту двигателя от загрязнений и инородных частиц, вызывающих быстрый износ деталей поршневой группы. Фильтр разработан в соответствии со спецификациями и пропускает тот объем воздуха, который предусмотрен для двигателя."
          ]
        },
        {
          name: "Салонный",
          title: "Салонный фильтр",
          img: "/img/service/spares/img-0-1.jpg",
          bg: "/img/service/spares/bg-0-1.jpg",
          list: [
            "Воздушный фильтр салона очищает воздух, поступающий в салон через вентиляционные каналы систем отопления и кондиционирования.",
            "Грязный фильтр уменьшает количество воздуха в салоне и делает поездку в автомобиле некомфортной, поэтому их важно вовремя менять."
          ]
        },
        {
          name: "Топливный",
          title: "Топливный фильтр",
          img: "/img/service/spares/img-0-2.jpg",
          bg: "/img/service/spares/bg-0-2.jpg",
          list: [
            "Роль топливного фильтра заключается в удержании различных загрязняющих элементов и обеспечении оптимальной подачи топлива для длительного срока службы двигателя.",
            "Отсутствие фильтрации топлива от загрязнений приводит к преждевременному износу топливной аппаратуры и снижению эксплуатационных показателей автомобиля."
          ]
        },
        {
          name: "Масляный",
          title: "Масляный фильтр",
          img: "/img/service/spares/img-0-3.jpg",
          bg: "/img/service/spares/bg-0-3.jpg",
          list: [
            "Масляный фильтр очищает масло, удаляя загрязнения, образующиеся в результате абразивного износа двигателя и деградации масла.",
            "Оригинальный масляный фильтр обеспечивает наилучшую защиту двигателя и гарантирует исправную работу вашего автомобиля, помогая увеличить срок службы вашего двигателя и предупредить дорогостоящие ремонты."
          ]
        },
        {
          name: "Тормозные диски",
          title: "Тормозные диски",
          img: "/img/service/spares/img-1-0.jpg",
          bg: "/img/service/spares/bg-1-0.jpg",
          list: [
            "Тормозной диск — основной элемент дисковой тормозной системы. Это вращающаяся часть дисковой системы, к которой при помощи привода прижимаются неподвижные тормозные колодки.",
            "Тормозной диск функционально выполняет две задачи: в паре с тормозной колодкой создает трение, необходимое для торможения, и рассеивает сгенерированное тепло."
          ]
        },
        {
          name: "Тормозные колодки",
          title: "Тормозные колодки",
          img: "/img/service/spares/img-1-1.jpg",
          bg: "/img/service/spares/bg-1-1.jpg",
          list: [
            "Основной элемент тормозного механизма. Оригинальные тормозные колодки обеспечивают наилучшую эффективность торможения и высокую безопасность при любой погоде и скорости.",
            "Сконструированы под конкретную модель Kia, обеспечивая надежное и уверенное торможение."
          ]
        },
        {
          name: "Масло",
          title: "Масло",
          img: "/img/service/spares/img-2-0.jpg",
          bg: "/img/service/spares/bg-2-0.jpg",
          list: [
            "Регулярная проверка уровня и состояния моторного масла — лучший способ продлить жизнь вашему двигателю, улучшить его работу и снизить расходы на обслуживание.",
            "Kia рекомендует масло Total."
          ]
        },
        {
          name: "Свечи зажигания",
          title: "Свечи зажигания",
          img: "/img/service/spares/img-2-1.jpg",
          bg: "/img/service/spares/bg-2-1.jpg",
          list: [
            "Оригинальные свечи зажигания обладают высокой надежностью и устойчивостью к агрессивным отложениям, и обеспечивают оптимальные характеристики работы двигателя: стабильное искрообразование с полным сгоранием топливно-воздушной смеси, уверенный пуск двигателя при низких температурах, топливная экономичность.",
          ]
        },
        {
          name: "Лобовое стекло",
          title: "Лобовое стекло",
          img: "/img/service/spares/img-3-0.jpg",
          bg: "/img/service/spares/bg-3-0.jpg",
          list: [
            "Обеспечение первоначальной жесткости кузова. Правильность размеров и формы, что упрощает процесс ремонта, а следовательно уменьшается стоимость замены за счет сокращения времени установки.",
            "Эффективная защита от УФ-излучения, хорошие шумоизолирующие свойства. Повышенный уровень комфорта.",
          ]
        },
        {
          name: "Кузовные запчасти",
          title: "Кузовные запчасти",
          img: "/img/service/spares/img-3-1.jpg",
          bg: "/img/service/spares/bg-3-1.jpg",
          list: [
            "Обеспечивают стабильно-высокую жёсткость кузова, а вместе с ней безопасность и длительную эксплуатацию автомобиля.",
            "Гарантия от сквозной коррозии (при использовании рекомендуемых Kia Л.К.П.). Точные сварные соединения благодаря роботизированным процедурам.",
          ]
        },
        {
          name: "Антифриз",
          title: "Антифриз",
          img: "/img/service/spares/img-4-0.jpg",
          bg: "/img/service/spares/bg-4-0.jpg",
          list: [
            "Оригинальный антифриз Kia имеет содержит в себе оптимальный набор присадок, обладает высокотемпературной стабильностью. Он обеспечивает эффективное охлаждение и защиту двигателя, оптимальную работу водяного насоса и отсутствие отложений в системе охлаждения.",
          ]
        },
        {
          name: "Щётки стеклоочистителя",
          title: "Щётки стеклоочистителя",
          img: "/img/service/spares/img-4-1.jpg",
          bg: "/img/service/spares/bg-4-1.jpg",
          list: [
            "Обеспечивают превосходное качество чистки лобового стекла, удаляя любые осадки при низких температурах и не оставляя за собой полос.",
            "Практически незаметны, не издают скрипа, шума и дополнительных звуков. Отвечают всем требованиям для эксплуатации при низких температурах, и работоспособны даже на высокой скорости.",
          ]
        },
        {
          name: "Амортизаторы",
          title: "Амортизаторы",
          img: "/img/service/spares/img-4-2.jpg",
          bg: "/img/service/spares/bg-4-2.jpg",
          list: [
            "Гарантированный комфорт при движении на различных покрытиях, сцепление с дорогой, устойчивость, а также обеспечение высокой надежности в управлении и минимального тормозного пути.",
          ]
        },
      ]
    }
  }
}
</script>