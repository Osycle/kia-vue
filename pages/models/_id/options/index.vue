<template>
  <div class="main-body model-options offset-model-header">

    <div class="model-header header-scroll scrolled-down down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page_data.name}}</span>
            <span class="price-content" v-if="page_data.minPrice">от {{page_data.minPrice | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav" v-if="page_data.minPrice">
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
            <div class="list-last" v-if="page_data.minPrice">
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
							<li><nuxt-link :to="'/models/'+$route.params.id+'/options'">Комплектации и цены</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Комплектации и цены {{page_data.name}}</h2>
            <div class="price-content flex-adaptive justify-c-between align-center">
              <div class="m-r-md-30">
                <p class="color-gray">Цена от</p>
                <div class="text-x3 fw-6 m-t-5 align-center">
                  <span>{{page_data.minPrice | spaceBetweenNum}} сум</span>
                  <a class="flex m-l-15" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
                </div>
              </div>
              <div class="btn-content" v-if="page_data.minPrice">
                <span class="btn-def style-2 m-v-20">
                  <nuxt-link :to="'/models/'+page_data.name.toLowerCase()+'/callback'" class="p-v-20">Связаться с нами</nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="img-content text-center m-auto box-md-7 box-lg-6 m-v-30">
          <picture>
            <source :srcset="page_data.sideImage" media="(max-width: 769px)">
            <img :src="page_data.sideImage">
          </picture>
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
							{{complectations.length}}
							<span v-if="complectations.length == 1">комплектация</span> 
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
		
		<div class="options-entry scrolled-down">
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
							<fieldset>
								<h4>Комплектации</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15" 
										v-for="(complectation, key) in page_data.compls"
										:key="key">
										<input type="checkbox" name="id" class="none" :value="complectation.id">
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">{{complectation.name}}</span>
									</label>
								</div>
							</fieldset>
							<fieldset v-if="page_data.privodi.length > 1">
								<h4>Привод</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15"
										v-for="(drive, key) in page_data.privodi" :key="key">
										<input type="checkbox" name="drive" class="none" :value="drive.id">
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">{{drive.privod}}</span>
									</label>
								</div>
							</fieldset>
							<fieldset v-if="false">
								<div class="flex-adaptive row">
									<div class="input-content p-h-15">
										<input type="" name="" class="form-control" value="">
									</div>
									<div class="input-content p-h-15">
										<input type="" name="" class="form-control" value="">
									</div>
								</div>
							</fieldset>
							<br>
							<fieldset>
								<h4 class="m-v-20">Опции</h4>
								<div class="collapse-content">
									<fieldset v-for="(parentOption, key) in page_data.options" :key="key">
										<a data-toggle="collapse" data-parent="#accordion" :href="'#prc-'+key" aria-expanded="true">
											<span>{{parentOption.name}}</span><i class="fa fa-angle-down"></i>
										</a>
										<ul :id="'prc-'+key" class="panel-collapse collapse" role="tabpanel">
											<li v-for="(option, key) in parentOption.options" :key="key">
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="options" class="none" :value="option.id">
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">{{option.name}}</span>
												</label>
											</li>
										</ul>
									</fieldset>
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
									<div class="cell" v-for="(complectation, key) in complectations" :key="key" :filter-param="complectation.id">
										<div class="cell-wrapper">
											<nuxt-link :to="'/models/'+$route.params.id+'/options/'+complectation.id"><h4>{{complectation.name}} <i class="fa fa-angle-right fw-6"></i></h4></nuxt-link>
											<div>
												<p>
													<template v-for="(engine) in page_data.engines" v-if="engine.id == complectation.engineId">{{engine.name}}</template> / 
													<template v-for="(gear) in page_data.gears" v-if="gear.id == complectation.gearId">{{gear.gear}}</template> /
													<template v-for="(drive) in page_data.privodi" v-if="drive.id == complectation.privodId">{{drive.privod}}</template>
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
					<div>
						<section class="item active" v-if="page_data.standart">
							<a href=".item" class="title-click" tc tc-closest>Стандартное оборудование<i class="fa fa-angle-up"></i></a>
							<div class="section-body">
								<div class="section-body-wrapper">
									<div class="list-block-body" v-for="(item, key) in page_data.standart" :key="key">
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
					</div>
					<!-- v-if="page_data.compls[0].offers" -->
					<section class="item special-ap" v-if="false">
						<a href=".item" class="title-click" tc tc-closest>Спецпредложения и цены<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item">
									<div class="config-param-item-wrapper">
										<p class="align-center">
											<label role="button" class="align-center m-v-15">
												<input type="checkbox" class="none offers-all" name="offers" value="all">
												<span class="checkbox-style-1"></span> 
												<span class="m-l-10">Максимальная выгода</span>
											</label>
										</p>
									</div>
								</div>
								<div class="config-param-item">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">Максимальная розничная цена перепродажи на автомобили ПТС 2021</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in complectations" :key="key">
												<div class="num-content">
													<span :price="complectation.price" class="item-price">
														{{complectation.price | spaceBetweenNum}} сум
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="config-param-item special-ap-offer" 
									:class="{'active': offer.status}"
									v-for="(offer, keyParent) in offers" :key="keyParent">
									<div class="config-param-item-wrapper">
										<p class="align-center">
											<label role="button" class="align-center m-v-15">
												<input type="checkbox" class="none offers-input"
													name="offers" :value="keyParent">
												<span class="checkbox-style-1"></span> 
												<span class="m-l-10">{{offer.name}}</span>
											</label>
										</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in complectations" :key="key">
												<div class="num-content" v-if="complectation.offers[keyParent].value*1 != 0">
													<span :price-minus="complectation.offers[keyParent].value" class="item-price">
														- {{complectation.offers[keyParent].value | spaceBetweenNum}} сум
													</span>
												</div>
												<div v-else>
													<div>-</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="config-param-item special-ap-offer special-ap-offer-benefit">
									<div class="config-param-item-wrapper">
										<p class="align-center">Итоговая выгода</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in complectations" :key="key">
												<div class="num-content color-green" v-if="complectation.price-complectation.summaryPrice != 0">
													<span :offer-complecation-id="complectation.id" class="item-price">
														{{complectation.price-complectation.summaryPrice | spaceBetweenNum}} сум
													</span>
												</div>
												<div v-else>
													<div>-</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div class="config-param-item special-ap-offer special-ap-offer-benefit">
									<div class="config-param-item-wrapper">
										<p class="align-center">Цена с учетом выгоды</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in complectations" :key="key">
												<div class="num-content color-red">
													<span :offer-complecation-id="complectation.id" class="item-price">
														{{complectation.summaryPrice | spaceBetweenNum}} сум
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</section>
					<section class="item" v-for="(parentOption, key) in page_data.options" :key="key">
						<a href=".item" class="title-click" tc tc-closest>{{parentOption.name}}<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item" v-for="(option, key) in parentOption.options" :key="key">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">{{option.name}}</p>
										<div class="owl-table owl-carousel" v-if="statusCompl">
											<div class="owl-table-item" v-for="(complectation, key) in complectations" :key="key">
												<div class="op-enable" v-for="(complectationOptionId, key) in complectation.options" v-if="complectationOptionId == option.id" :key="key">
													<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><circle cx="5" cy="5" r="5" fill="currentColor"></circle></svg> 
												</div>
												<div><div>—</div></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="item exterior-color-section">
						<a href=".item" class="title-click" tc tc-closest>Цвета кузова<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item">
									<div class="config-param-item-wrapper">
										<div class="owl-table owl-carousel">
											<div class="owl-table-item" v-for="(complectation, keyParent) in page_data.compls" :key="keyParent">
												<div class="owl-table-item-box" v-for="(colorPrice, key) in complectation.exteriorPrices" :key="key">
													<div v-if="key == 0"> Базовый </div>
													<div v-else> + {{key | spaceBetweenNum}} сум</div>
													<ul class="color-list mv-2 pb-4">
														<li v-for="(color, key) in colorPrice" :key="key">
															<a v-if="keyParent == 0" href="javascript:;" data-toggle="tooltip" data-placement="right" :title="color.name">
																<div class="color-circle" :style="'background-image: url('+color.icon+');'"></div>
															</a>
															<a v-else href="javascript:;" data-toggle="tooltip" data-placement="bottom" :title="color.name">
																<div class="color-circle" :style="'background-image: url('+color.icon+');'"></div>
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
					</section>
					<section class="item exterior-color-section">
						<a href=".item" class="title-click" tc tc-closest>Варианты интерьера<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item">
									<div class="config-param-item-wrapper">
										<div class="owl-table owl-carousel">
											<div class="owl-table-item" v-for="(complectation, keyParent) in page_data.compls" :key="keyParent">
												<div class="owl-table-item-box" v-for="(colorPrice, key) in complectation.interiorPrices" :key="key">
													<div v-if="key == 0"> Базовый </div>
													<div v-else> + {{key | spaceBetweenNum}} сум</div>
													<ul class="color-list mv-2 pb-4">
														<li v-for="(color, key) in colorPrice" :key="key">
															<a v-if="keyParent == 0" href="javascript:;" data-toggle="tooltip" data-placement="right" :title="color.name">
																<div class="color-circle" :style="'background-image: url('+color.icon+');'"></div>
															</a>
															<a v-else href="javascript:;" data-toggle="tooltip" data-placement="bottom" :title="color.name">
																<div class="color-circle" :style="'background-image: url('+color.icon+');'"></div>
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
					</section>
				</div>
			</div>
		</div>

  </div>
</template>





<script>
import Vue from 'vue';
import _ from 'lodash';
Vue.use(_);


export default {
  head() {
    return {
      title: this.page_data.seo ? this.page_data.seo.meta_title : 'Комплектации и цены',
      meta: [
        {
          content: this.page_data.seo ? this.page_data.seo.meta_descr : 'Комплектации и цены'
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
			offers: [],
			filterVisible: true,
			statusCompl: true,
			complectations: [],
    }
  },
  methods: {
  },
	created(){
		var v = this;
		this.complectations = this.page_data.compls;


		this.complectations.map(e=>{e.summaryPrice = e.price})
		this.offers = this.page_data.compls[0].offers;
		this.offers.map(e=>{
			e.status = null;
		})



		this.page_data.compls.map((complectation, index)=>{
			var exteriors = complectation.colors.bodyColors;
			var interior = complectation.colors.interiorColors;
			complectation.exteriorPrices = _.groupBy(exteriors, "price")
			complectation.interiorPrices = _.groupBy(interior, "price")
		})
	},
  mounted() {
		var v = this;
		$(".list-block-body ul").map(function(i, el){
			if($(el).find("li").length == 0)
				$(el).closest(".list-block-body").addClass("hide");
		})

		function offersChange(){
			//v.statusCompl = false;
			var that = $(this);
			//var parentWrap = that.closest(".config-param-item");
			var idNum  = that.val();

			v.offers[idNum]
			if(this.checked){
				v.offers[idNum].status = true;	
				v.complectations.map(e=>{
					e.summaryPrice = e.summaryPrice-e.offers[idNum].value
				})
			}else{
				v.offers[idNum].status = false
				v.complectations.map(e=>{
					e.summaryPrice = e.summaryPrice+e.offers[idNum].value
				})
			}
		}
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

		function filter(e){
			console.log("filter");
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


		/* Спецпредложения и цены */
		$(".offers-input").on("change", offersChange)
		$(".offers-all").on("change", function(){
			console.log(this.checked);
			if(this.checked)
				$(".offers-input").prop("checked", true).trigger("change") 
			else
				$(".offers-input").prop("checked", false).trigger("change") 
		})
		$(".offers-all").prop("checked", true).trigger("change") 

		

		window.activeCarousel = activeCarousel;
		window.filter = filter;
		filter({currentTarget: $(".config-filter-items input")[0]});
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



		$(document).on("change", ".config-filter-items input", filter)
		$('[style="transform: none;"]').removeAttr("style")
  },
}
</script>
