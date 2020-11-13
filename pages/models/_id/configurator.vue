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
            <li class="active">
              <b class="color-1">01</b>
              <p>Выбор модели</p>
            </li>
            <li>
              <b class="color-1">02</b>
              <p>Двигатель и трансмиссия</p>
            </li>
            <li>
              <b class="color-1">03</b>
              <p>Комплектация</p>
            </li>
            <li>
              <b class="color-1">04</b>
              <p>Цвета и отделка</p>
            </li>
            <li>
              <b class="color-1">05</b>
              <p>Результаты</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="conf-content">
      <div class="container-p">
        <div class="conf-steps conf-step-1 hide">
          <div class="conf-crs m-v-45">
            <div class="owl-carousel owl-btn-2">
              <template v-for="(modelLine) in page.model_lines">
                <figure v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id" :model-id="model.id">
                  <a href="javascript:;">
                    <div class="fig-wrapper">
                      <div class="img-content">
                        <img :src="model.image" :alt="modelLine.name">
                      </div>
                      <div class="desc-content">
                        <h4>{{modelLine.name}}</h4>
                        <p>от {{model.min_price | spaceBetweenNum}} сум</p>
                      </div>
                    </div>
                  </a>
                </figure>
              </template>
            </div>
          </div>
          <div class="conf-crs-main">
            <div class="owl-carousel owl-btn-2">
              <template v-for="(modelLine) in page.model_lines">
                <figure v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id" :model-id="model.id">
                  <div class="fig-wrapper">
                    <div class="desc-content">
                      <h2>{{model.name}}</h2>
                    </div>
                    <div class="img-content m-t-30">
                      <img :src="model.image" :alt="modelLine.name">
                    </div>
                  </div>
                </figure>
              </template>
            </div>
          </div>
        </div>
        <div class="conf-steps conf-step-2">
          <div class="row p-b-10">
            <div class="left-bar-def col-md-3">
              <div class="wrapper conf-result-content">
                <div class="cap-content">
                  <h3>K5</h3>
                  <h3>от 3 504 900 ₽</h3>
                  <h3>17 570 ₽/мес</h3>
                </div>
                <figure>
                  <img src="https://cdn.kia.ru/resize/300x200/master-data/models/image_side/stinger.png" alt="">
                </figure>
                <div class="conf-result-section">
                  <dl>
                    <dt>2020 год производства</dt>
                  </dl>
                </div>
                <br>
                <div class="conf-result-section">
                  <h4>Двигатель и трансмиссия</h4>
                  <dl><dt>3.3 V6 T-GDI, 370 л.с., бензин</dt></dl> 
                  <dl><dt>8AT, автомат</dt></dl> 
                  <dl><dt>4WD, полный</dt></dl>
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
            <div class="entry-content col-md-9">
              <div class="car-params">
                <div class="car-params-item">
                  <h4>Двигатель</h4>
                  <ul class="flex-list">
                    <li>
                      <div class="car-params-btn active">
                        <div class="flex">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15"><div><strong>2.0 MPI</strong></div>150 л.c., бензин</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="car-params-btn">
                        <div class="flex">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15"><div><strong>2.0 MPI</strong></div>150 л.c., бензин</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="car-params-item">
                  <h4>Двигатель</h4>
                  <ul class="flex-list">
                    <li>
                      <div class="car-params-btn active">
                        <div class="flex">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15"><div><strong>2.0 MPI</strong></div>150 л.c., бензин</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="car-params-btn">
                        <div class="flex">
                          <figure class="check-sel"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2"></path></svg></figure>
                          <div class="m-l-15"><div><strong>2.0 MPI</strong></div>150 л.c., бензин</div>
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
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
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
      const page = await context.store.dispatch("models/fetchPageData", {
        path: '/models'
      })
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  data(){
    return {
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Конфигуратор',link: '/'},
      ],
    }
  },
  mounted(){
    mainjs();

		window.owlCrs = $(".conf-crs .owl-carousel").owlCarousel({
			nav: true,
			loop: false,
			dots: false,
			dotsEach: false,
			//slideBy: 2,
			autoplay: false,
			autoplayTimeout: false,
			autoWidth: true,
			touchDrag: false,
			mouseDrag: false,
			center: false,
			autoheight: true,
			merge: false,
			responsive:{
	
			},
			navText : owlBtn,
			margin: 30
    });
		window.owlCrsMain = $(".conf-crs-main .owl-carousel").owlCarousel({
			nav: true,
			loop: false,
			//items: 3,
			dots: true,
			dotsEach: false,
			//autoplay: true,
			//autoplayTimeout: 7000,
			autoheight: true,
			touchDrag: true,
			mouseDrag: true,
			//smartSpeed: 0,
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 0
    });
    
    var owlCrsItems = owlCrs.find(".owl-item");
    owlCrs.on('click', '.owl-item', (e)=>{
      var target = $(e.currentTarget);
      owlCrsItems.removeClass('is-selected')
      target.addClass('is-selected');
      var modelId = target.find("[model-id]").attr("model-id");
      var index = owlCrsMain.find("[model-id='"+modelId+"']").closest(".owl-item").index()
      owlCrsMain.find(".owl-dot").eq(index).click()
      console.log(target, index);
    });
    owlCrsMain.on('changed.owl.carousel', function(e) {
      var target = $($(e.currentTarget).find('.owl-item').eq(e.page.index));
      owlCrsItems.removeClass('is-selected');
      var modelId = target.find("[model-id]").attr("model-id");
      owlCrs.find("[model-id='"+modelId+"']").closest(".owl-item").addClass('is-selected');
      
      console.log($(e))
    })
    owlCrsItems.eq(0).click();
    console.log(owlCrsMain);

  },
  methods: {
    confnext(){
      console.log('111')
    }
  }
}

</script>