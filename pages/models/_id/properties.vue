<template>
  <div class="main-body model-options offset-model-header">
    <div class="model-header header-scroll scrolled-down down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page_data.name}}</span>
            <span class="price-content">от {{page_data.compls[0].price | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav" v-if="page_data.compls[0].price">
            <ul class="list list-main">
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/desc/'">Обзор</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/options/'">Комплектации и цены</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/properties/'">Характеристики</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/callback/'">Заявка дилеру</nuxt-link></li>
              <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/testdrive/'">Тест-драйв</nuxt-link></li>
            </ul>
            <div class="list-add">
              <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
                <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
              </a>
              <div class="list-add-sub">
                <ul>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/desc/'">Обзор</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/options/'">Комплектации и цены</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/properties/'">Характеристики</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/callback/'">Заявка дилеру</nuxt-link></li>
                  <li><nuxt-link active-class="active" :to="'/models/'+$route.params.id+'/testdrive/'">Тест-драйв</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="list-last">
              <nuxt-link :to="'/models/'+$route.params.id+'/configurator'">Конфигуратор</nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="options-bnr relative card-top">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
					<div class="breadcrumb-container">
						<ol class="breadcrumb">
							<li><nuxt-link to="/">Главная</nuxt-link></li>
							<li><nuxt-link to="/models">Модели</nuxt-link></li>
							<li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page_data.name}}</nuxt-link></li>
							<li><nuxt-link :to="'/models/'+$route.params.id+'/properties'">Характеристики</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Характеристики {{page_data.name}}</h2>
          </div>
        </div>
      </div>
    </div>
		<div class="options-header scrolled-down">
			<div class="options-header-content">
				<div class="container-p">
					<ul class="list">
						<li class="filter-btn">
							<a href=".options-entry" class="align-center justify-center" tc="filter-hidden">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6.5a2 2 0 104 0 2 2 0 00-4 0zM0 6h3.035a3.5 3.5 0 016.93 0H20v1.5H9.855a3.502 3.502 0 01-6.71 0H0V6zm11.5 7.5a2 2 0 104 0 2 2 0 00-4 0zM0 13h10.035a3.501 3.501 0 016.93 0H20v1.5h-3.145a3.502 3.502 0 01-6.71 0H0V13z" fill="currentColor"></path></svg> 
								<span class="m-l-15">Фильтры и опции</span>
							</a>
						</li>
						<li>
							{{page_data.compls.length}}
							<span v-if="page_data.compls.length == 1">комплектация</span> 
							<span v-else>комплектации</span> 
						</li>
						<li class="hide">
							<div>
								<input type="checkbox"  id="checkbox-diff-spec" name="" class="checkbox-style-1 none">
								<label for="checkbox-diff-spec" class="align-center" role="button">
									<span class="checkbox-style-1"></span>
									<span class="m-l-5">Различающиеся характеристики</span>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="options-entry scrolled-down filter-hidden">
			<div class="container-p relative">
				<div class="config-sidebar">	
					<div class="config-filter">
						<div class="config-filter-items">
							<fieldset>
								<h4>Двигатель</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15" 
										v-for="(engine, key) in page_data.engines"
										:key="key">
										<input type="checkbox" name="engineId" class="none" :value="engine.id">
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">{{engine.name}}</span>
									</label>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
				<div class="options-body">
					<div class="wrapper">
						<div class="config-content">
							<div class="config-variants">
								<div class="config-variants-items owl-carousel" v-if="statusCompl">
									<div class="cell" v-for="(complectation, key) in page_data.compls" :key="key" :filter-param="complectation.id">
										<div class="cell-wrapper" >
											<nuxt-link :to="'/models/'+$route.params.id+'/options/'+complectation.id"><h4>{{complectation.name}} <i class="fa fa-angle-right fw-6"></i></h4></nuxt-link>
											<div>
												<p>
													<template v-for="(engine) in page_data.engines" v-if="engine.id == complectation.engineId">{{engine.name}}</template>
												</p>
												<div class="price-content m-t-15">
													{{complectation.price | spaceBetweenNum}} сум
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="config-details">
					<section class="item active" v-for="(parentOption, key) in page_data.properties" :key="key">
						<a href=".item" class="title-click" tc tc-closest>{{parentOption.name}}<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item" v-for="(option, key) in parentOption.options" :key="key">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">{{option.name}}</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in page_data.compls" :key="key">
												<template v-for="(property) in complectation.properties" v-if="option.id == property.id">
													{{property.value}}
												</template>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>

			</div>
		</div>

  </div>
</template>





<script>


export default {
  head() {
    return {
      title: 'Характеристики '+this.page_data.name,
      meta: [
        {
          content: 'Характеристики '+this.page_data.name
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
  data(){
    return{
      filterVisible: true,
      statusCompl: true,
      complectations: [],
    }
  },
  created(){

	},
  mounted() {
		var v = this;
		$(".list-block-body ul").map(function(i, el){
			if($(el).find("li").length == 0)
				$(el).closest(".list-block-body").addClass("hide");
		})
		
		function activeCarousel(){
			window.configCrs = $(".config-variants-items.owl-carousel").owlCarousel({
					nav: true,
					loop: false,
					items: 2,
					dots: false,
					dotsEach: false,
					//slideBy: 2,
					autoplay: false,
					autoplayTimeout: false,
					autoWidth: true,
					touchDrag: false,
					mouseDrag: false,
					center: false,
					//itemElement: ".cell",
					autoheight: true,
					merge: true,
					responsive:{
						678:{
								mergeFit:true
						}
					},
					navText : owlBtn,
					margin: 0
			});
			


			window.configTableCrs = $(".owl-table.owl-carousel").owlCarousel({
					nav: false,
					loop: false,
					items: 2,
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
					merge: true,
					responsive:{
						678:{
								mergeFit:true
						}
					},
					navText : owlBtn,
					margin: 0
			});


			configCrs.find(".owl-next").on('click', function(event) {
				configTableCrs.trigger('next.owl.carousel');
			})
			configCrs.find(".owl-prev").on('click', function(event) {
				configTableCrs.trigger('prev.owl.carousel');
			})
		}
		activeCarousel();

		$('.config-sidebar').theiaStickySidebar({
			//additionalMarginBottom: -300,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});
		
		$('.options-body').theiaStickySidebar({
			//updateSidebarHeight: true,
			additionalMarginBottom: -200,
			disableOnResponsiveLayouts: false,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});


		function filter(e){
			
			v.statusCompl = false;
			var el = e.currentTarget;
			var newComplectations = false;
			v.complectations = v.page_data.compls;
			var checkeInputs = $(".config-filter-items input:checked");
			var tempSlos = false;
			
			checkeInputs.map((i, el)=>{
				
				var name = el.name
				var value = el.value
				var obj = {}
				if(name == "options")
					obj[name] = [value];
				else if( isNaN(value*1) ){
					obj[name] = value;
				}else{
					obj[name] = value*1;
				}

				//if(!newComplectations || (tempSlos != name)){
				if(tempSlos != name){
					//console.log(tempSlos,name)
					tempSlos = name
					if(newComplectations)
						v.complectations = newComplectations
					newComplectations = _.filter(v.complectations, obj);
					//console.log('filter');
				}else if(tempSlos == name){
					//v.complectations = newComplectations
					newComplectations = _.concat(newComplectations, _.filter(v.complectations, obj))
					console.log('concat');
				}
				newComplectations = _.uniq(newComplectations)
				//console.log(newComplectations);
			})
			//var s = _.filter(v.complectations, {'engineId': [0, 1]})
			//var s = _.filter(this.complectations, {'engineId': 0,'options': ["986"]})

			if(!newComplectations)
				v.complectations = v.page_data.compls;
			else
				v.complectations = newComplectations
			console.log(newComplectations);
			setTimeout(() => {
				v.statusCompl = true;
				setTimeout(() => {
					try{
					activeCarousel();
					}catch(e){
						console.info(e)
					}
				}, 1);
			}, 1);

			
		}

		$(document).on("change", ".config-filter-items input", filter)
  },
}
</script>
