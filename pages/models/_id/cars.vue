<template>
  <div class="main-body offset-model-header">
    <div class="model-header header-scroll scrolled-down">
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
							<li><nuxt-link :to="'/models/'+page.model.code">{{page.model.name}}</nuxt-link></li>
							<li><nuxt-link :to="'/models/'+page.model.code+'/properties'">Характеристики</nuxt-link></li>
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
		<div class="options-entry scrolled-down">
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

    }
  },
  created(){

	},
  mounted() {


				
		
  },
}
</script>
