<template>
  <div class="main-body model-options offset-model-header">
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
						<div class="container-p">
							<ol class="breadcrumb">
								<li><nuxt-link to="/">Главная</nuxt-link></li>
								<li><nuxt-link to="/models">Модели</nuxt-link></li>
								<li><nuxt-link :to="'/models/'+page.model.code">{{page.model.name}}</nuxt-link></li>
								<li><nuxt-link :to="'/models/'+page.model.code+'/options'">Комплектации и цены</nuxt-link></li>
							</ol>
						</div>
					</div>
        </div>
        <div class="entry-intro">
          <div class="relative">
            <h2>Комплектации и цены {{page.model.name}}</h2>
            <div class="price-content flex-adaptive justify-c-between align-center">
              <div class="m-r-md-30">
                <p class="color-gray">Цена от</p>
                <div class="text-x3 fw-6 m-t-5 align-center">
                  <span>{{page.model.min_price | spaceBetweenNum}} сум</span>
                  <a class="flex m-l-15" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a>
                </div>
              </div>
              <div class="btn-content">
                <span class="btn-def style-2 m-v-20">
                  <nuxt-link :to="'/models/'+page.model.code+'/callback'" class="p-v-20">Связаться с нами</nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="img-content text-center m-auto box-md-7 box-lg-6 m-v-30">
          <picture>
            <source :srcset="'https://cdn.kia.ru/'+page.banner.images.mobile" media="(max-width: 769px)">
            <img :src="'https://cdn.kia.ru/'+page.banner.images.desktop">
          </picture>
        </div>
      </div>
    </div>
		<div class="options-header scrolled-down">
			<div class="options-header-content p-v-30">
				<div class="container-p">
					<ul class="list">
						<li>
							<a href=".options-entry" class="align-center justify-center" tc="filter-hidden">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6.5a2 2 0 104 0 2 2 0 00-4 0zM0 6h3.035a3.5 3.5 0 016.93 0H20v1.5H9.855a3.502 3.502 0 01-6.71 0H0V6zm11.5 7.5a2 2 0 104 0 2 2 0 00-4 0zM0 13h10.035a3.501 3.501 0 016.93 0H20v1.5h-3.145a3.502 3.502 0 01-6.71 0H0V13z" fill="currentColor"></path></svg> 
								<span class="m-l-15">Фильтры и опции</span>
							</a>
						</li>
						<li>
							{{page.modifications.complectations.length}}
							<span v-if="page.modifications.complectations.length == 1">комплектация</span> 
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
										<span class="m-l-10">1.6 MPI / 121 л.с. / Бензин</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">1.6 MPI / 123 л.с. / Бензин</span>
									</label>
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
								<h4>Коробка передач</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Механика</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Автомат</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Робот</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Вариатор</span>
									</label>
								</div>
							</fieldset>
							<fieldset>
								<h4>Привод</h4>
								<div class="input-items">
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Передний</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Полный</span>
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
										<span class="m-l-10">Style</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Prestige</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Premium</span>
									</label>
									<label role="button" class="align-center m-v-15">
										<input type="checkbox" name="" class="none" >
										<span class="checkbox-style-1"></span>
										<span class="m-l-10">Premium+</span>
									</label>
								</div>
							</fieldset>
							<fieldset>
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
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-1" aria-expanded="true"><span>Пакет "Теплые опции"</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-1" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Подогрев передних сидений</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Подогрев задних сидений</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Подогрев рулевого колеса</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Электрообогрев ветрового стекла</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Подогрев форсунок стеклоомывателя</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Боковые зеркала заднего вида с электроприводом и подогревом</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Воздуховоды для задних пассажиров в центральной консоли</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-2" aria-expanded="true"><span>Экстерьер</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-2" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Стальные диски 16"с шинами 205/60 R16</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Легкосплавные диски 16" с шинами 205/60 R16</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Легкосплавные диски 17" с шинами 215/55 R17</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Легкосплавные диски 18" с шинами 235/45 R18</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Решетка радиатора с черными глянцевыми вставками</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Внешние дверные ручки с отделкой хромом</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Галогенные фары проекционного типа</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодные (LED) фары</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодные дневные ходовые огни (LED DRL)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Противотуманные фары</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодные (LED) противотуманные фары</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодные (LED) задние фонари</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодные (LED) габаритные огни</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Люк с электроприводом</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Двухцветная окраска кузова (опционально)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Рейлинги на крыше</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-3" aria-expanded="true"><span>Интерьер</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-3" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Вставки серого цвета</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Вставки из черного глянца с принтом</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Вставки с имитацией прострочки</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Рулевое колесо и ручка селектора трансмиссии с отделкой кожей</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Сиденья с отделкой тканью</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Сиденья с комбинированной отделкой ткань + эко кожа</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Сиденья с отделкой эко кожей</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Полка багажного отделения</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Светодиодная (LED) подсветка салона</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Декоративная подсветка интерьера Mood Lamp</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-4" aria-expanded="true"><span>Безопасность</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-4" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Фронтальные подушки безопасности</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Боковые подушки и шторки безопасности</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Стальное запасное колесо временного использования</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Полноразмерное запасное колесо</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-5" aria-expanded="true"><span>Мультимедиа</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-5" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Аудиосистема с 3.8" монохромным дисплеем</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Мультимедиа с 8" цветным дисплеем, с поддержкой Android Auto и Apple Carplay</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Навигационная система с 10.25" цветным дисплеем, с поддержкой Android Auto и Apple Carplay</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Аудиосистема Bose</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Дополнительные разъемы зарядки USB</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Беспроводная зарядка для мобильных устройств в центральной консоли</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Bluetooth для подключения мобильных устройств</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-6" aria-expanded="true"><span>Современные системы помощи водителю DRIVE WISE</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-6" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Аудиосистема с 3.8" монохромным дисплеем</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Мультимедиа с 8" цветным дисплеем, с поддержкой Android Auto и Apple Carplay</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Навигационная система с 10.25" цветным дисплеем, с поддержкой Android Auto и Apple Carplay</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Аудиосистема Bose</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Дополнительные разъемы зарядки USB</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Беспроводная зарядка для мобильных устройств в центральной консоли</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Bluetooth для подключения мобильных устройств</span>
												</label>
											</li>
										</ul>
									</fieldset>
									<fieldset>
										<a data-toggle="collapse" data-parent="#accordion" href="#prc-7" aria-expanded="true"><span>Комфорт</span><i class="fa fa-angle-down"></i></a>
										<ul id="prc-7" class="panel-collapse collapse" role="tabpanel">
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Интеллектуальный круиз-контроль (SCC) с функцией Stop&amp;Go</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система предотвращения фронтального столкновения (FCA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система предотвращения выезда из полосы движения (LKA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Ассистент движения в полосе (LFA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система предотвращения столкновения с автомобилем в слепой зоне (BCA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система предотвращения бокового столкновения при выезде с парковки задним ходом (RCCA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система безопасного выхода (SEA)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система контроля внимания водителя (DAW)</span>
												</label>
											</li>
											<li>
												<label role="button" class="align-center m-v-15">
													<input type="checkbox" name="" class="none" >
													<span class="checkbox-style-1"></span>
													<span class="m-l-10">Система распознавания усталости водителя (DAW)</span>
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
								<div class="config-variants-items owl-carousel">
									<div class="cell" v-for="(complectation, key) in page.modifications.complectations" :key="key">
										<div class="cell-wrapper">
											<h4>{{complectation.name}} <i class="fa fa-angle-right fw-6"></i></h4>
											<div>
												<p>
													<!-- Engine -->
													<template v-for="(engine) in page.modifications.engines" v-if="complectation.engine_id == engine.id">
														{{engine.volume}} / {{engine.power_hp}} л. с. /
														<template v-for="(fuel_type) in page.modifications.fuel_types" v-if="engine.fuel_type_id == fuel_type.id">
															{{fuel_type.name}}
														</template>
													</template>
													<!-- Transmission -->
													<template v-for="(transmission) in page.modifications.transmissions" v-if="complectation.transmission_id == transmission.id">
														<template v-for="(gearbox) in page.modifications.gearboxes" v-if="transmission.gearbox_id == gearbox.id">
															{{gearbox.name}} /
														</template>
														<template v-for="(drive) in page.modifications.drives" v-if="transmission.drive_id == drive.id">
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
					<section class="item active">
						<a href=".item" class="title-click" tc tc-closest>Стандартное оборудование<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="list-block-body">
									<h4>Экстерьер</h4>
									<ul>
									<template>
										<li v-for="(options_base, key) in page.modifications.options_base" 
												v-if="options_base.group_name == 'Экстерьер'" :key="key">
											<span>{{options_base.name}}</span>
										</li>
									</template>
									</ul>
								</div>
								
								<div class="list-block-body">
									<h4>Интерьер</h4>
									<ul>
									<template>
										<li v-for="(options_base, key) in page.modifications.options_base" 
												v-if="options_base.group_name == 'Интерьер'" :key="key">
											<span>{{options_base.name}}</span>
										</li>
									</template>
									</ul>
								</div>
								<div class="list-block-body">
									<h4>Безопасность</h4>
									<ul>
									<template>
										<li v-for="(options_base, key) in page.modifications.options_base" 
												v-if="options_base.group_name == 'Безопасность'" :key="key">
											<span>{{options_base.name}}</span>
										</li>
									</template>
									</ul>
								</div>
								<div class="list-block-body">
									<h4>Комфорт</h4>
									<ul>
									<template>
										<li v-for="(options_base, key) in page.modifications.options_base" 
												v-if="options_base.group_name == 'Комфорт'" :key="key">
											<span>{{options_base.name}}</span>
										</li>
									</template>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section class="item" v-for="(item, key) in page.modifications.grouped_options" :key="key">
						<a href=".item" class="title-click" tc tc-closest>{{item.name}}<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="config-param-item" v-for="(option, key) in item.options" :key="key">
									<div class="config-param-item-wrapper">
										<p class="m-b-15 align-center">{{option.name}}</p>
										<div class="owl-table owl-carousel">
											<div class="owl-table-item" v-for="(model, key) in page.modifications.complectations" :key="key">
												<div class="op-enable" v-for="(modelOptionId, key) in model.options" v-if="modelOptionId == option.id" :key="key">
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
  scrollToTop: true,
  async asyncData(context){
    try{
			const path = context.route.path;
			//console.log(context);
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
    }
  },
  methods: {

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
