<template>
  <div class="main-body relative conf offset-header" scrollf>
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
        <div class="conf-steps conf-step-1" :class="{'active': currentStep == 1}">
          <div class="conf-crs m-v-45">
            <div class="owl-carousel owl-btn-2">
              <figure v-for="(model, key) in models" :key="key" :model-line-id="model.name">
                <a href="javascript:;">
                  <div class="fig-wrapper">
                    <div class="img-content">
                      <img :src="model.image" :alt="model.name">
                    </div>
                    <div class="desc-content">
                      <h4>{{model.name}}</h4>
                      <p>от {{model.price | spaceBetweenNum}} сум</p>
                    </div>
                  </div>
                </a>
              </figure>
            </div>
          </div>
          <div class="conf-crs-main">
            <div class="owl-carousel owl-btn-2">
              <figure v-for="(model, key) in models" :key="key" :model-line-id="model.name">
                <div class="fig-wrapper">
                  <div class="desc-content">
                    <div class="text-x5 desktop:text-x4">{{model.name}}</div>
                  </div>
                  <div class="img-content m-t-30">
                    <nuxt-link :to="'/models/'+model.url+'/configurator'">
                      <img :src="model.image" :alt="model.name">
                    </nuxt-link>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="conf-down">
      <div class="container-p">
        <div class="flex-wrapper">
          <span class="btn-def btn-step-back" v-if="currentStep > 1">
            <a href="javascript:;" currentstep="0" @click="confPrevStep" class="flex align-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="2"></path></svg>
              Шаг назад
            </a>
          </span>
          <span class="btn-def">
            <a href="javascript:;" currentstep="0" @click="confNextStep">Далее</a>
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
      title: "Модельный ряд KIA – комплектации и цены на новые автомобили КИА 2019/2020",
      meta: [
        {
          content: "Все модели автомобилей KIA в России: субкомпактные и компактные, автомобили бизнес-класса и представительского класса, кроссоверы и внедорожники."
        }
      ],
    }
  },
  async asyncData(context){
    try{
      
      var page_data = await context.store.dispatch("models/configuratorModels", {})
      return {
        models: page_data.models
      }
    }catch(e){
      context.error(e);
    }
  },
  components: {
  },
  data(){
    return {
      currentStep: 1,
      selectModelId: "",
    }
  },
  mounted(){

    var v = this;
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
    var modelLineAttrName = "model-line-id"
    v.selectModelId = owlCrs.find(".owl-item.active figure").attr(modelLineAttrName);

    owlCrs.on('click', '.owl-item', (e)=>{
      var target = $(e.currentTarget);
      owlCrsItems.removeClass('is-selected')
      target.addClass('is-selected');
      var modelId = target.find("["+modelLineAttrName+"]").attr(modelLineAttrName);
      var index = owlCrsMain.find("["+modelLineAttrName+"='"+modelId+"']").closest(".owl-item").index()
      owlCrsMain.find(".owl-dot").eq(index).click()
      console.log(target, index);
      v.selectModelId = modelId;
    });
    owlCrsMain.on('changed.owl.carousel', function(e) {
      var target = $($(e.currentTarget).find('.owl-item').eq(e.page.index));
      owlCrsItems.removeClass('is-selected');
      var modelId = target.find("["+modelLineAttrName+"]").attr(modelLineAttrName);
      owlCrs.find("["+modelLineAttrName+"='"+modelId+"']").closest(".owl-item").addClass('is-selected');
      v.selectModelId = modelId;
    })
    owlCrsItems.eq(0).click();

  },
  methods: {
    async confNextStep(){
      var modelUrl = this.selectModelId.toLowerCase();
      this.$router.push({path: "/models/"+modelUrl+"/configurator"});
      this.currentStep++;
    },
    async confPrevStep(){
      
    }
  }
}

</script>