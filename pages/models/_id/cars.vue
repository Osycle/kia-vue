<template>
  <div class="main-body carstock">
    <div class="options-bnr relative">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
					<div class="breadcrumb-container">
						<ol class="breadcrumb">
							<li><nuxt-link to="/">Главная</nuxt-link></li>
							<li><nuxt-link to="/models">Модели</nuxt-link></li>
							<li><nuxt-link :to="'/models/'+page.model.code">{{page.model.name}}</nuxt-link></li>
							<li><nuxt-link to="">Каталог новых автомобилей</nuxt-link></li>
						</ol>
					</div>
        </div>
        <div class="entry-intro m-b-md-50 m-v-30">
          <div class="relative">
            <h1>{{page.model.name}} в Ташкенте</h1>
            <p>Новые автомобили в наличии у официальных дилеров KIA</p>
          </div>
        </div>
      </div>
    </div>
    <div class="entry-content border-top">
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
							<fieldset>
								<h4>Комплектация</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Classic</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Comfort</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Luxe</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Prestige</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Style</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">GT line</span>
									</label>
								</div>
							</fieldset>
              </div>
            </div>
          </div>

          <div class="carstock-content p-h-30 p-h-md-60">
            <div class="carstock-items figure-m-v-30">
              <div class="item">
                <figure>
                  <img src="https://cdn.kia.ru/resize/445x250/master-data/albums/k5/UD/1.png" alt="">
                </figure>
                <div class="desc-content">
                  <h4><a href="" class="btn-link-1">K5 Classic</a></h4>
                  <div class="param-content color-gray-5">
                    <div class="m-v-5">2.0 л / 150 л.c. / бензин / автомат / передний привод</div>
                    <div class="m-v-5">2020 год производства / 2021 модельный год</div>
                    <div class="m-v-5">Цвет: Clear White</div>
                    <div class="m-v-5">Салон: Черный, Тканевая отделка</div>
                  </div>
                  <div class="price-content m-t-20">
                    <strong><big>1 589 900 сум</big></strong>
                  </div>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src="https://cdn.kia.ru/resize/445x250/master-data/albums/k5/UD/1.png" alt="">
                </figure>
                <div class="desc-content">
                  <h4>
                    <a href="" class="btn-link-1">K5 Classic</a>
                  </h4>
                  <div class="param-content color-gray-5">
                    <div class="m-v-5">2.0 л / 150 л.c. / бензин / автомат / передний привод</div>
                    <div class="m-v-5">2020 год производства / 2021 модельный год</div>
                    <div class="m-v-5">Цвет: Clear White</div>
                    <div class="m-v-5">Салон: Черный, Тканевая отделка</div>
                  </div>
                  <div class="price-content m-t-20">
                    <strong><big>1 589 900 сум</big></strong>
                  </div>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src="https://cdn.kia.ru/resize/445x250/master-data/albums/k5/UD/1.png" alt="">
                </figure>
                <div class="desc-content">
                  <h4>
                    <a href="" class="btn-link-1">K5 Classic</a>
                  </h4>
                  <div class="param-content color-gray-5">
                    <div class="m-v-5">2.0 л / 150 л.c. / бензин / автомат / передний привод</div>
                    <div class="m-v-5">2020 год производства / 2021 модельный год</div>
                    <div class="m-v-5">Цвет: Clear White</div>
                    <div class="m-v-5">Салон: Черный, Тканевая отделка</div>
                  </div>
                  <div class="price-content m-t-20">
                    <strong><big>1 589 900 сум</big></strong>
                  </div>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src="https://cdn.kia.ru/resize/445x250/master-data/albums/k5/UD/1.png" alt="">
                </figure>
                <div class="desc-content">
                  <h4>
                    <a href="" class="btn-link-1">K5 Classic</a>
                  </h4>
                  <div class="param-content color-gray-5">
                    <div class="m-v-5">2.0 л / 150 л.c. / бензин / автомат / передний привод</div>
                    <div class="m-v-5">2020 год производства / 2021 модельный год</div>
                    <div class="m-v-5">Цвет: Clear White</div>
                    <div class="m-v-5">Салон: Черный, Тканевая отделка</div>
                  </div>
                  <div class="price-content m-t-20">
                    <strong><big>1 589 900 сум</big></strong>
                  </div>
                </div>
              </div>
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
