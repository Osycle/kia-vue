<template>
  <div class="main-body offset-header" header-opacity>
    <div class="bnr-style-1 color-white bg-shadow-none" :style="'background-image: url(https://cdn.kia.ru/media-data/landing/technologies/1920_tech_banner.jpg);'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/about/">Мир KIA</nuxt-link></li>
            <li><nuxt-link to="">Технологии</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-5">Технологии</h1>
          <p class="box-md-4">Автомобили KIA – это не только современный, притягательный дизайн, но и множество самых передовых технологий, которые обеспечивают высокое качество и надежность, удовольствие от вождения и безопасность, комфорт и широкие информационно-развлекательные возможности.</p>
        </div>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <div class="wrapper p-v-md-50 flex-adaptive p-h-md-110 list-check justify-c-center">
          <div class="box-md-5 box-lg-8 m-v-30 p-h-15 text-item intext">
            <h3>Передовые решения</h3>
            <p>В KIA Motors мы стремимся к тому, чтобы гарантировать максимальную безопасность и комфорт не только для водителя, но также для пассажиров, пешеходов, водителей других транспортных средств, разрабатывая «умные» автомобили, которые активно анализируют условия движения и помогают водителю в случае необходимости. Функционал и возможности автомобилей KIA расширяются с каждой новой моделью, появляющейся на рынке, и уже сегодня мы готовим новые решения в области экологии, топливной экономичности и телематики, а также передовые разработки для эры автономного и электрифицированного транспорта.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block-content">
      <div class="container-p">
        <div class="wrapper">
          <div class="short-models-nav m-v-10">
            <ul class="list flex-adaptive justify-c-start li-m-v-15">
              <li class="active"><a href="#" data-toggle="tab">Все технологии</a></li>
              <li v-for="(item, key) in page.technology_groups" :key="key">
                <a href="#" data-toggle="tab">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <div class="short-news-items boxes-4 figure-m-v-15">
            <figure v-for="(item, key) in page.technologies" :key="key">
              <nuxt-link :to="'/about/technologies/'+item.id">
                <div class="fig-wrapper">
                  <div class="img-content">
                    <div class="img" :style="'background-image: url(https://cdn.kia.ru/resize/410x277/'+item.image+');'"></div>
                  </div>
                  <div class="desc-content">
                    <h4>{{item.name}}</h4>
                  </div>
                </div>
              </nuxt-link>
            </figure>
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
      //title: this.page.seo.title,
      meta: [
        {
          //content: this.page.seo.description
        }
      ],
    }
  },
  async asyncData(context){
    try{
			const path = context.route.path;
      const page = await context.store.dispatch("models/fetchPageData", {
        path: path,
      })
      return {
        page: page.content,
      }
    }catch(e){
      context.error(e);
    }
  },
}
</script>

