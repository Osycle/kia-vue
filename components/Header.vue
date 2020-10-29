<template>
  <div>
    <div class="header-hidden block"></div>
    <header id="header" class="header header-scroll white-style">
      <!-- HEADER TOP -->
      <div class="header-top">
        <div class="container-p relative">
          <div class="row">
            <div class="header-top-content">
              <div class="menu p-h-15">
                <ul class="menu-list">
                  <li><nuxt-link active-class="active" to="/models">Модели</nuxt-link></li>
                  <li><nuxt-link active-class="active" to="/testdata">Выбор и покупка</nuxt-link></li>
                  <li><nuxt-link active-class="active" to="/users">Конфигуратор</nuxt-link></li>
                  <li><nuxt-link active-class="active" to="/login">Авто в наличии</nuxt-link></li>
                </ul>
              </div>
              <div class="header-logo col-md-2 p-h-15">
                <nuxt-link exact to="/">
                  <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.339 10.05v.78h.434c.366 0 .631.25.631.585 0 .118-.03.225-.059.309l-6.066 18.21a.194.194 0 00.033.174.158.158 0 00.13.064h4.728c.14 0 .295-.123.35-.271l4.032-12.756c.034-.132.16-.348.417-.348s.38.216.413.34l4.07 12.75c.064.162.219.285.358.285h4.728c.06 0 .097-.017.127-.06.042-.055.05-.14.037-.17L60.13 10.194c-.033-.072-.096-.144-.362-.144h-7.428zM38.572 29.98a.2.2 0 01-.201-.204v-18.5c0-.355-.28-.639-.628-.639h-.477v-.78h6.089c.112 0 .2.093.2.208v19.711a.2.2 0 01-.2.203h-4.783z" fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M.667 19.998C.667 8.955 18.279 0 40.002 0c21.723 0 39.331 8.955 39.331 19.998C79.333 31.045 61.725 40 40.003 40 18.278 40 .666 31.045.666 19.998zm39.33-17.906c-19.408 0-35.14 8.015-35.14 17.906 0 9.895 15.732 17.91 35.14 17.91 19.413 0 35.147-8.015 35.147-17.91 0-9.891-15.734-17.906-35.146-17.906z" fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.675 29.98c-.151 0-.406-.14-.556-.373l-5.503-7.816c-.067-.101-.2-.292-.478-.292-.217 0-.439.152-.439.496v7.781a.2.2 0 01-.2.203h-4.65c-.108 0-.2-.089-.2-.203v-18.5c0-.355-.28-.639-.628-.639h-.523v-.78h6c.11 0 .201.093.201.208v6.569c0 .259.188.449.44.449.07 0 .301-.025.502-.33l4.553-6.518c.154-.234.414-.378.565-.378h5.243c.08 0 .125.073.138.093.025.047.041.124.004.187L26.298 18.9l-.008.013a.84.84 0 00-.113.373c0 .098.033.237.154.398.453.648 6.951 9.956 6.972 9.98.054.081.063.149.034.213-.034.063-.1.101-.139.101h-5.523z" fill="currentColor"></path>
                  </svg>
                </nuxt-link>
              </div>
              <div class="menu p-h-15">
                <ul class="menu-list justify-c-end">
                  <li><a href="javascript:;" subdown-click="2">Владельцам</a></li>
                  <li><a href="javascript:;" subdown-click="3">Мир KIA</a></li>
                  <li><a href="projects.html">Дилеры</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="subdown" subdown="1">
        <div class="subdown-wrapper">
          <div class="bg-shadow" subdown-click></div>
          <div class="subdown-item">
            <div class="container-p">
              <div class="subdown-item-wrapper">
                <div class="subdown-menu-items">
                  <div class="item">
                    <div class="color-gray-4 title-content">Новые авто</div>
                    <ul>
                      <li><a href="../">Онлайн-сервисы</a></li>
                      <li><a href="../">Конфигуратор</a></li>
                      <li><a href="../">Авто в наличии</a></li>
                      <li><a href="../">Спецпредложения</a></li>
                      <li><a href="../">Расчёт кредита</a></li>
                      <li><a href="../">Сравнение комплектаций</a></li>
                      <li><a href="../">Поиск дилера</a></li>
                      <li><a href="../">Запрос предложения</a></li>
                      <li><a href="../">Запись на тест-драйв</a></li>
                      <li><a href="../">Аксессуары</a></li>
                      <li><a href="../">ЭПТС</a></li>
                      <li><a href="../">Все брошюры</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">Авто с пробегом</div>
                    <ul>
                      <li><a href="../">Поиск автомобилей</a></li>
                      <li><a href="../">Программа «KIA Уверен»</a></li>
                      <li><a href="../">Программа «Трейд-ин»</a></li>
                      <li><a href="../">Трейд-ин оценка</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">KIA Finance</div>
                    <ul>
                      <li><a href="../">Кредитование</a></li>
                      <li><a href="../">Страхование</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">Корпоративным клиентам</div>
                    <ul>
                      <li><a href="../">Программы продаж</a></li>
                      <li><a href="../">Программы сервиса</a></li>
                      <li><a href="../">Лизинг</a></li>
                    </ul>
                  </div>
                </div>
                <div class="subdown-right">
                  <div class="subdown-ad">
                    <a href="../">
                      <div class="img-content">
                        <div class="img" style="background-image: url('https://cdn.kia.ru/site-data/menu/banners/buy_banner.jpg');"></div>
                      </div>
                      <div class="desc-content">
                        <span class="text-s1">Специальная серия Edition Plus</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="subdown-footer">
              <div class="subdown-footer-items">
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/9de04711-0734-4618-ad3d-523c6b14d53b.jpg');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Конфигуратор</a></h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/af3343b2-d53a-49a6-aa11-4cf7e01aff81.jpg');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Спецпредложения</a></h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/57a17a2b-c237-4668-bcb6-9b2e0ea04370.jpg');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Расчёт кредита</a></h2>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="subdown" subdown="2">
        <div class="subdown-wrapper">
          <div class="bg-shadow" subdown-click></div>
          <div class="subdown-item">
            <div class="container-p">
              <div class="subdown-item-wrapper">
                <div class="subdown-menu-items">
                  <div class="item">
                    <div class="color-gray-4 title-content">Техобслуживание и ремонт</div>
                    <ul>
                      <li><a href="../">Запись на сервис</a></li>
                      <li><a href="../">Спецпредложения</a></li>
                      <li><a href="../">Сервис для корпоративных клиентов</a></li>
                      <li><a href="../">Поиск дилера</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">Запчасти и аксессуары</div>
                    <ul>
                      <li><a href="../">Оригинальные части</a></li>
                      <li><a href="../">Запчасти PL2</a></li>
                      <li><a href="../">Наличие запчастей</a></li>
                      <li><a href="../">Аксессуары</a></li>
                      <li><a href="../">Подбор масла</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">Информация для владельцев</div>
                    <ul>
                      <li><a href="../">Руководства по эксплуатации</a></li>
                      <li><a href="../">Гарантия</a></li>
                      <li><a href="../">Сервисные инспекции</a></li>
                      <li><a href="../">Помощь на дороге</a></li>
                      <li><a href="../">Премиум сервис</a></li>
                      <li><a href="../">Быстрый сервис</a></li>
                      <li><a href="../">Автомобиль на время ремонта</a></li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="color-gray-4 title-content">Семья KIA</div>
                    <ul>
                      <li><a href="../">Программа лояльности</a></li>
                      <li><a href="../">Личный кабинет</a></li>
                    </ul>
                  </div>
                </div>
                <div class="subdown-right">
                  <div class="subdown-ad">
                    <a href="../">
                      <div class="img-content">
                        <div class="img" style="background-image: url('https://cdn.kia.ru/site-data/menu/banners/mir_kia_banner.png');"></div>
                      </div>
                      <div class="desc-content">
                        <span class="text-s1">Программы поддержки клиентов KIA</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="subdown-footer">
              <div class="subdown-footer-items">
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/8abd3f03-c0bc-420d-9a74-d0a3980edcf9.png');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Запись на сервис</a></h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/1f9b86ac-23ab-49ac-b98f-cf18b2514bcf.png');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Аксессуары</a></h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/9d49bd85-f462-4f9e-a5ab-5f52329fc61f.png');"></div>
                  <div class="desc-content">
                    <h2><a href="../">Спецпредложения</a></h2>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="subdown" subdown="3">
        <div class="subdown-wrapper">
          <div class="bg-shadow subdown-click" subdown-click="3"></div>
          <div class="subdown-item">
            <div class="container-p">
              <div class="subdown-item-wrapper">
                <div>
                  <div class="subdown-menu-items boxes-2">
                    <div class="item">
                      <div class="color-gray-4 title-content">Бренд KIA</div>
                      <ul>
                        <li><a href="../kiaworld-1.html">Компания KIA Motors</a></li>
                        <li><a href="../kiaworld-history.html">История</a></li>
                        <li><a href="../kiaworld-reward.html">Награды</a></li>
                        <li><a href="../kiaworld-sponsorship.html">Спонсорство</a></li>
                        <li><a href="https://www.kia.com/worldwide/main.do">Kia Worldwide</a></li>
                      </ul>
                    </div>
                    <div class="item">
                      <div class="color-gray-4 title-content">KIA в Узбекистане</div>
                      <ul>
                        <li><a href="../">О нас</a></li>
                        <li><a href="../">Popup Store</a></li>
                        <li><a href="../">Социальная ответственность</a></li>
                        <li><a href="../">Карьера</a></li>
                        <li><a href="../javascirpt:;">Обратная связь</a></li>
                        <li><a href="../dealers.html">Дилеры</a></li>
                        <li><a href="../">Как стать дилером</a></li>
                        <li><a href="../">Заказать звонок дилера</a></li>
                      </ul>
                    </div>
                    <div class="item">
                      <div class="color-gray-4 title-content">Инновации</div>
                      <ul>
                        <li><a href="../desing.html">Дизайн</a></li>
                        <li><a href="../concept.html">Концепт-кары</a></li>
                        <li><a href="../">Технологии</a></li>
                      </ul>
                    </div>
                    <div class="item">
                      <div class="color-gray-4 title-content">Медиа</div>
                      <ul>
                        <li><a href="../news.html">Новости</a></li>
                        <li><a href="../">Обзоры</a></li>
                        <li><a href="../">Журнал KIA WAY</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="subdown-info">
                  <div class="subdown-info-item m-b-30">
                    <div class="color-gray-4 m-b-10">Информационная линия KIA</div>
                    <div class="text-x2 fw-6"><big>+99871 2157007</big></div>
                  </div>
                  <div class="footer-soc">
                    <div class="color-gray-4 m-b-10">KIA в соцсетях</div>
                    <ul class="m-t-5">
                      <li><a href="https://www.youtube.com/channel/UCbcoHuLNcxJdleQNl1ET4ug" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><circle cx="15" cy="15" r="14.25" stroke="currentColor" stroke-width="1.5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M20.403 11.143c.36.372.477 1.217.477 1.217s.12.993.12 1.985v.93c0 .993-.12 1.985-.12 1.985s-.117.845-.477 1.217c-.411.44-.867.486-1.125.512l-.077.008c-1.68.124-4.201.128-4.201.128s-3.12-.03-4.08-.123c-.046-.01-.1-.016-.163-.023-.304-.038-.781-.096-1.16-.502-.36-.372-.477-1.217-.477-1.217S9 16.268 9 15.276v-.93c0-.993.12-1.986.12-1.986s.117-.845.477-1.217c.412-.44.868-.485 1.126-.51l.076-.009c1.68-.124 4.198-.124 4.198-.124h.006s2.518 0 4.198.124l.076.008c.258.026.714.07 1.126.511zm-6.644 1.815v3.445l3.243-1.717-3.243-1.728z" fill="currentColor"></path></svg></a></li>
                      <li><a href="https://instagram.com/kiamotors_uzbekistan" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><circle cx="15" cy="15" r="14.25" stroke="currentColor" stroke-width="1.5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12.217 8.29c.72-.032.95-.04 2.784-.04h-.002c1.833 0 2.062.008 2.783.04.718.034 1.209.147 1.64.314a3.3 3.3 0 011.195.779c.375.375.606.752.779 1.196.166.429.28.92.313 1.638.033.72.041.95.041 2.783s-.008 2.063-.04 2.783c-.035.718-.148 1.209-.314 1.638-.173.444-.404.82-.78 1.196a3.302 3.302 0 01-1.194.779c-.43.167-.92.28-1.64.313-.72.033-.949.041-2.782.041-1.833 0-2.063-.008-2.783-.04-.719-.034-1.21-.147-1.639-.314a3.305 3.305 0 01-1.195-.78 3.307 3.307 0 01-.779-1.195c-.166-.43-.28-.92-.313-1.638-.033-.72-.041-.95-.041-2.783s.008-2.063.04-2.783c.033-.719.147-1.21.314-1.639.173-.444.404-.82.78-1.195a3.305 3.305 0 011.195-.779c.43-.167.92-.28 1.638-.313zm2.558 1.177h-.381v-.002c-1.258.002-1.5.01-2.122.038-.658.03-1.015.14-1.253.233-.315.122-.54.269-.777.505a2.092 2.092 0 00-.505.776c-.092.238-.202.595-.232 1.254-.033.711-.04.924-.04 2.726 0 1.803.007 2.017.04 2.728.03.658.14 1.015.232 1.253.123.315.27.54.505.776.237.236.462.383.777.505.238.092.595.202 1.253.232.712.033.925.04 2.728.04 1.802 0 2.016-.007 2.727-.04.658-.03 1.016-.14 1.253-.232.316-.122.54-.269.776-.505s.383-.46.505-.775c.093-.238.203-.595.233-1.253.032-.712.04-.926.04-2.727 0-1.802-.008-2.015-.04-2.727-.03-.658-.14-1.015-.233-1.253a2.095 2.095 0 00-.505-.776 2.087 2.087 0 00-.776-.505c-.238-.092-.595-.202-1.253-.232-.712-.033-.925-.04-2.727-.04h-.225z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.604 10.587a.81.81 0 100 1.62.81.81 0 000-1.62zM11.534 15a3.467 3.467 0 116.933 0 3.467 3.467 0 01-6.933 0zm5.714 0a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" fill="currentColor"></path></svg></a></li>
                      <li><a href="https://www.facebook.com/KiaMotorsUzbekistan/" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><circle cx="15" cy="15" r="14.25" stroke="currentColor" stroke-width="1.5"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M15.99 21.109v-6.43h1.775L18 12.463h-2.01l.003-1.11c0-.577.055-.887.885-.887h1.11V8.25h-1.776c-2.132 0-2.883 1.075-2.883 2.883v1.33H12v2.216h1.33v6.43h2.66z" fill="currentColor"></path></svg></a></li>
                      <li><a href="https://t.me/kiamotors_uzbekistan" target="_blank"><i class="fa fa-paper-plane"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="subdown-right">
                  <div class="subdown-ad">
                    <a href="../">
                      <div class="img-content">
                        <div class="img" style="background-image: url('https://cdn.kia.ru/site-data/menu/banners/mir_kia_banner.png');"></div>
                      </div>
                      <div class="desc-content">
                        <span class="text-s1">Программа лояльности «Семья KIA»</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
		<!-- MIN MENU -->
		<div id="min-menu">
			<ul>
				<li><a href="../k5">K5</a></li>
				<li><a href="../seltos">Seltos</a></li>
				<li><a href="javascript:;">Мир KIA</a>
					<ul>
						<li><a href="../kiaworld-1.html">Бренд</a></li>
						<li><a href="../kiaworld-history.html">История</a></li>
						<li><a href="../desing.html">Дизайн</a></li>
						<li><a href="../concept.html">Концепт</a></li>
						<li><a href="../kiaworld-sponsorship.html">Спонсорство</a></li>
					</ul>
				</li>
				<li><a href="../dealers.html">Дилеры</a></li>
			</ul>
		</div>
		<!-- MIN MENU HEADER -->
		<div class="min-menu-header hidden-md hidden-lg header-scroll scrolled-up white-style">
			<div class="min-menu-top">
				<div class="wrapper-bg"></div>
				<div class="min-menu-bar col-xs-2">
					<a href="#min-menu">
						<div class="bar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</div>
					</a>
				</div>
				<div class="col-xs-8">
					<div class="min-menu-logo">
						<div>
							<a href="../index.html" title="">
								<div class="img" style="background-image: url('/img/logo.png');"></div>
							</a>
						</div>	
					</div>
				</div>
				<div class="col-xs-2 justify-c-center align-center p-h-5" style="height: 60px	;">
					<div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>