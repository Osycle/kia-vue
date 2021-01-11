<template>
  <div class="main-body" :class="{'filter-visible': filterVisible}">
    <div class="model-header">
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
              <a href="javascript:;">Конфигуратор</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- options-bnr -->
    <div class="options-bnr relative card-top">
      <div class="container-p relative">
        <div class="flex-adaptive align-center justify-c-between">
          <Breadcrump :breadcrumpItems="breadcrumpItems"/>
          <div class="link-content">
            <ul class="list-inline">
              <li>
                <a href="" class="hover-aunderline">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-1" data-v-22b6d7c2=""><path d="M2.75.75h9.94l4.56 4.56v13.94H2.75V.75z" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path><path d="M12.5 1v5h4" stroke="currentColor" stroke-width="1.5" data-v-22b6d7c2=""></path></svg>
                  <span class="m-l-10">Скачать прайс-лист</span>
                </a>
              </li>
              <li>
                <a href="feedback.html" class="hover-aunderline">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="mr-1" data-v-3802aeb3=""><path d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39zM11 5c1.333 0 4 .8 4 4M10 2c2.667 0 8 1.6 8 8" stroke="currentColor" stroke-width="1.5" data-v-3802aeb3=""></path></svg>
                  <span class="m-l-10">Обратный звонок</span>
                </a>
              </li>
            </ul>
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
                  <a href="feedback.html" class="p-v-20">Связаться с нами</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="img-content text-center m-auto box-md-7 box-lg-6 m-v-30">
          <picture>
            <source :srcset="page.banner.images.mobile" media="(max-width: 769px)">
            <img :src="page.banner.images.desktop">
          </picture>
        </div>
      </div>
    </div>
		<!-- options -->
		<div class="options scroll-options-recon scrolled-up">
			<!-- options-nav -->
			<div class="options-nav p-v-30">
				<div class="container-p">
					<ul class="list">
						<li>
							<a href="javascript:" class="align-center justify-center" @click="filterVisible = !filterVisible">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6.5a2 2 0 104 0 2 2 0 00-4 0zM0 6h3.035a3.5 3.5 0 016.93 0H20v1.5H9.855a3.502 3.502 0 01-6.71 0H0V6zm11.5 7.5a2 2 0 104 0 2 2 0 00-4 0zM0 13h10.035a3.501 3.501 0 016.93 0H20v1.5h-3.145a3.502 3.502 0 01-6.71 0H0V13z" fill="currentColor"></path></svg> 
								<span class="m-l-15">Фильтры и опции</span>
							</a>
						</li>
						<li>6 комплектаций</li>
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
			<!-- options-body -->
			<div class="options-body">
				<div class="g-padding">
					<div class="wrapper">
						<!-- config-content -->
						<div class="config-content">
							<div class="config-variants">
								<div class="config-variants-items owl-carousel">
									<div class="cell" v-for="(cell, key) in page.modifications.complectations" :key="key">
										<div class="cell-wrapper">
											<h4>{{cell.name}} <i class="fa fa-angle-right fw-6"></i></h4>
											<div>
												<p>{{infoModel(cell)}}</p>
												<div class="price-content m-t-15">
													{{cell.price | spaceBetweenNum}} сум
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="config-wrapper row">
			<div class="config-sidebar col-md-3 p-h-15">	
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
							<div class="range-input">
								<input type="range" name="" class="js-range-slider">
							</div>
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
					<div class="input-clear p-h-40">
						<a>
							<i class="fa fa-rotate-left"></i>
							Очистить фильтр
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-9 p-h-15">
				<div class="config-details scroll-options-recon">
					<section class="item active">
						<a href=".item" class="title-click" data-toggle="click">Стандартное оборудование<i class="fa fa-angle-up"></i></a>
						<div class="section-body">
							<div class="section-body-wrapper">
								<div class="list-block-body">
									<h4>Экстерьер</h4>
									<ul>
										<li><span>Светодиодные (LED) фары</span></li>
										<li><span>Cветодиодные дневные ходовые огни (LED DRL)</span></li>
									</ul>
								</div>
								<div class="list-block-body">
									<h4>Интерьер</h4>
									<ul>
										<li><span>Задние сиденья со спинками, складывающимися в соотношении 60/40 Безопасность</span></li>
									</ul>
								</div>
								<div class="list-block-body">
									<h4>Безопасность</h4>
									<ul>
										<li><span>Фронтальные подушки безопасности</span></li>
										<li><span>Система курсовой устойчивости (ESC)</span></li>
										<li><span>Интегрированная система активного управления (VSM)</span></li>
										<li><span>Система помощи при трогании на подъеме (HAC)</span></li>
										<li><span>Система предупреждения об экстренном торможении (ESS)	</span></li>
										<li><span>Крепления ISOFIX для детского кресла</span></li>
										<li><span>Полноразмерное легкосплавное запасное колесо</span></li>
									</ul>
								</div>
								<div class="list-block-body">
									<h4>Комфорт</h4>
									<ul>
										<li><span>Мультифункциональное рулевое колесо</span></li>
										<li><span>Bluetooth для подключения мобильного телефона</span></li>
										<li><span>Система выбора режима движения (Drive Mode Select)</span></li>
										<li><span>Круиз-контроль</span></li>
										<li><span>Передние и задние стеклоподъёмники с электроприводом</span></li>
										<li><span>Стеклоподъемник водителя с функцией Auto</span></li>
										<li><span>Датчик света	</span></li>
										<li><span>Ключ с дистанционным управлением центральным замком</span></li>
										<li><span>Аудиосистема с радио, USB разъемом (6 динамиков)</span></li>
										<li><span>Климат контроль</span></li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section class="item" v-for="(item, key) in page.modifications.grouped_options" :key="key">
						<a href=".item" class="title-click" data-toggle="click">{{item.name}}<i class="fa fa-angle-up"></i></a>
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

import Breadcrump from '@/components/Breadcrump'
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
  scrollToTop: true,
  components: {
    Breadcrump
  },
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
      breadcrumpItems: [
        {title: 'Главная',link: '/'},
        {title: 'Модели',link: '/models'},
        {title: 'K5',link: '/models/k5'},
      ],
    }
  },
  methods: {
    infoModel(complectation){
      const engineId = complectation.engine_id
      const transmissionId = complectation.transmission_id
      const m = this.page.modifications;
      let text, engineName, engineHp, fuelType, driveName, gearboxName;

      m.engines.forEach(engine => {
        if(engine.id == engineId){
          engineName = engine.volume;
          engineHp = engine.power_hp;
          m.fuel_types.forEach(ftype => {
            if(ftype.id == engine.fuel_type_id)
              fuelType = ftype.name
          })
        }
      });
      m.transmissions.forEach(transmission => {
        if(transmission.id == transmissionId){
          m.drives.forEach(drive =>{
            if(drive.id == transmission.drive_id)
              driveName = drive.name
          })
          m.gearboxes.forEach(gearbox =>{
            if(gearbox.id == transmission.gearbox_id)
              gearboxName = gearbox.name
          })
        }
      });
      //2.5, 150 л. c., Бензин / Автомат / Передний привод
      text = engineName+" / "+engineHp+" л. с "+fuelType+" / "+gearboxName+" / "+driveName
      return text;
    }
  },
  mounted() {
		mainjs();

		$('.config-sidebar').theiaStickySidebar({
      additionalMarginTop: 80
    });
  },
}
</script>

<style lang="scss">
	.config-filter{
		display: none;
	}
	.config-variants-items{
		display: block;
	}
	.filter-visible{
		.config-filter{
			display: block;
		}
		.options-body{
			width: 76.2%;
    	margin-left: auto;
		}
		.config-details{
			//padding-left: 440px;
			//padding-right: 50px;
		}
		.config-content{
			//width: calc(100% - 380px);
		}
	}
</style>