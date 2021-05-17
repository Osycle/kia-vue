<template>
  <div class="main-body model-options offset-model-header">
    <div class="model-header header-scroll scrolled-down down">
      <div class="container-p">
        <div class="model-header-panel">
          <div class="align-center">
            <span class="name-content">{{page.model.name}}</span>
            <span class="price-content">от {{page.model.min_price | spaceBetweenNum}} сум</span>
            <a class="flex m-l-15 hidden-xs hidden-sm" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
            <a href=".list-add-sub" class="btn-options visible-xs visible-sm" data-toggle="dropdown"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2"></path></svg></a>
          </div>
          <div class="model-header-nav">
            <ul class="list list-main">
              <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link active-class="active" :to="item.link">{{item.title}}</nuxt-link></li>
            </ul>
            <div class="list-add">
              <a href=".list-add-sub" class="btn-options hidden-xs hidden-sm" data-toggle="dropdown">
                <div class="icm-area"><svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></svg></div>
              </a>
              <div class="list-add-sub">
                <ul>
                  <li v-for="(item, key) in page.model_menu" :key="key"><nuxt-link active-class="active" :to="item.link">{{item.title}}</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="list-last">
							<nuxt-link :to="'/models/'+page.model.code+'/configurator'">Конфигуратор</nuxt-link>
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
							<li><nuxt-link :to="'/models/'+$route.params.id+'/desc'">{{page.model.name}}</nuxt-link></li>
							<li><nuxt-link :to="'/models/'+$route.params.id+'/properties'">Характеристики</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Характеристики {{page.model.name}}</h2>
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
							{{this.complectations.length}}
							<span v-if="this.complectations.length == 1">комплектация</span> 
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
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">2.0 MPI / 149 л.с. / Бензин</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">1.6 T-GDI / 177 л.с. / Бензин</span>
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
								<div class="config-variants-items owl-carousel">
									<div class="cell" v-for="(complectation, key) in complectations" :key="key">
										<div class="cell-wrapper" >
											<h4>{{complectation.name}} <i class="fa fa-angle-right fw-6"></i></h4>
											<div>
												<p>
													<!-- Engine -->
													<template v-for="(engine) in page.specifications.engines" v-if="complectation.engine_id == engine.id">
														{{engine.volume}} / {{engine.power_hp}} л. с. /
														<template v-for="(fuel_type) in page.specifications.fuel_types" v-if="engine.fuel_type_id == fuel_type.id">
															{{fuel_type.name}}
														</template>
													</template>
													<!-- Transmission -->
													<template v-for="(transmission) in page.specifications.transmissions" v-if="complectation.transmission_id == transmission.id">
														<template v-for="(gearbox) in page.specifications.gearboxes" v-if="transmission.gearbox_id == gearbox.id">
															{{gearbox.name}} /
														</template>
														<template v-for="(drive) in page.specifications.drives" v-if="transmission.drive_id == drive.id">
															{{drive.name}}
														</template>
													</template>
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
					<section class="item active" v-for="(item, key) in page.specifications.grouped_specifications" :key="key">
						<a href=".item" class="title-click" tc tc-closest>{{item.name}}<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item" v-for="(option, key) in item.specifications" :key="key">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">{{option.name}}</p>
										<div class="owl-table owl-carousel">
											<div class="owl-table-item" v-for="(model, key) in complectations" :key="key" >
												<span v-for="(specification, key) in sortedUniq(model.specifications)" v-if="option.id == specification.id" :key="key">
													{{specification.value}}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="item active">
						<a href=".item" class="title-click" tc tc-closest>Спецификация<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">Код модели</p>
										<div class="owl-table owl-carousel">
											<div class="owl-table-item" v-for="(model, key) in complectations" :key="key" >
												<span>
													{{model.modification_code}}
												</span>
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

import _ from 'lodash'

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
  data(){
    return{
      filterVisible: true,
      complectationsAllLength: 0,
      complectations: [],
    }
  },
  created(){
    for (const key in this.page.specifications.complectations) {
			const complectation = this.page.specifications.complectations[key];
			//complectation.
      this.complectations.push(complectation)
    }
	},
  mounted() {
		var configCrs = $(".config-variants-items.owl-carousel").owlCarousel({
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

    console.log(configCrs);
		var configTableCrs = $(".owl-table.owl-carousel").owlCarousel({
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

    //console.log(configCrs, configTableCrs);

		$('.config-sidebar').theiaStickySidebar({
			//additionalMarginBottom: -300,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});
		
		$('.options-body').theiaStickySidebar({
			//updateSidebarHeight: true,
			disableOnResponsiveLayouts: false,
			additionalMarginTop: 60,
			defaultPosition: "absolute"
		});
		
  },
}
</script>
