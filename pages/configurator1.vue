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
              <template v-for="(modelLine) in page.model_lines" v-if="!modelLine.noconfigurator">
                <figure v-for="(model, key) in page.models" :key="key" v-if="model.min_price && model.model_line_id == modelLine.id" :model-line-id="modelLine.id">
                  <a href="javascript:;">
                    <div class="fig-wrapper">
                      <div class="img-content">
                        <img :src="'https://cdn.kia.ru/resize/150x73/'+model.image" :alt="modelLine.name">
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
              <template v-for="(modelLine) in page.model_lines" v-if="!modelLine.noconfigurator">
                <figure v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id && model.min_price" :model-line-id="modelLine.id">
                  <div class="fig-wrapper">
                    <div class="desc-content">
                      <div class="text-x5 desktop:text-x4">{{modelLine.name}}</div>
                    </div>
                    <div class="img-content m-t-30">
                      <img :src="'https://cdn.kia.ru/resize/750x366/'+model.image" :alt="modelLine.name">
                    </div>
                  </div>
                </figure>
              </template>
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
  components: {
  },
  data(){
    return {
      currentStep: 1,
      selectModelId: "",
    }
  },
  mounted(){
    $("[scrollf]").map((i, el)=>{
      el = $(el)
      $(window).on("scroll", (e)=>{
        var docViewBottom = $(window).scrollTop() + $(window).height();
        var elBottom = $(el).offset().top + $(el).height();
          if(docViewBottom > elBottom){
            el.addClass("is-scrollf")
          }else{
            el.removeClass("is-scrollf")
          }
      })
    })


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
    })
    owlCrsItems.eq(0).click();
    console.log(owlCrsMain);

  },
  methods: {
    async confNextStep(){
      console.log(this.selectModelId);
      var modelCode;
      for (let i = 0; i < this.page.model_lines.length; i++) {
        const el = this.page.model_lines[i];
        console.log(el, this.selectModelId)
        if(el.id == this.selectModelId)
          modelCode = el.code
      }
      this.$router.push({path: "/models/"+modelCode+"/configurator"});

      this.currentStep++;
    },
    async confPrevStep(){
      
    }
  }
}

</script>