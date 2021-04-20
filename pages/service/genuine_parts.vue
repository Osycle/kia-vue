<template>
  <div class="main-body offset-header">
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
    <div class="spares">
      <div class="container-p">
        <div class="wrapper mv-6 desktop:pv-5">
          <div class="short-models-nav m-v-20 row-15">
            <ul class="list flex-adaptive li-m-v-15">
              <li class="active"><a href="#smodels-1" data-toggle="tab">Оригинальные запчасти</a></li>
              <li><a href="#smodels-1" data-toggle="tab">Запчасти PL2</a></li>
            </ul>
          </div>
          <div class="spares-categories">
            <div class="spares-filters">
              <div class="spares-filter" v-for="(filter, key) in filtres" :key="key">
                <span class="color-gray">{{filter.name}}</span>
                <ul>
                  <li v-for="(typeName, key) in filter.types" :key="key" :class="{'active': typeName == currentFilter}"
                    @click="currentFilter = typeName">
                    <span class="icon-content"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="block"><path d="M10.5 14l4-4-4-4M14 10H7" stroke="currentColor" stroke-width="1.5"></path></svg></span> 
                    <span class="text-content">{{typeName}}</span>
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
  data(){
    return{
      currentFilter: "Воздушный",
      filtres: [
        {
          name: "Фильтр",
          types: [
            "Воздушный",
            "Масляный",
            "Салонный",
            "Топливный",
          ]
        },
        {
          name: "Тормоза",
          types: [
            "Тормозные диски",
            "Тормозные колодки",
          ]
        },
        {
          name: "Двигатель",
          types: [
            "Масло",
            "Свечи зажигания",
          ]
        },
        {
          name: "Кузов",
          types: [
            "Лобовое стекло",
            "Кузовные запчасти",
          ]
        },
        {
          name: "Комплектующие",
          types: [
            "Антифриз",
            "Щётки стеклоочистителя",
            "Амортизаторы",
          ]
        },
        

      ]
    }
  }
}
</script>