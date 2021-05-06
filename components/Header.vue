<template>
  <div class="header-parent" :class="{'header-op': opacityStyle}">
    <div class="header-hidden"></div>
    <header id="header" class="header header-scroll scrolled-down" :class="{'white-style': !opacityStyle}">
      <!-- HEADER TOP -->
      <div class="header-top">
        <div class="container-p relative">
          <div class="row">
            <div class="header-top-content">
              <div class="menu p-h-15">
                <ul class="menu-list">
                  <li><nuxt-link active-class="active" to="/models">Модели</nuxt-link></li>
                  <li><a href="javascript:;" subdown-click="1">Выбор и покупка</a></li>
                  <li><nuxt-link active-class="active" to="/configurator">Конфигуратор</nuxt-link></li>
                  <li><nuxt-link active-class="active" to="/buy/cars">Авто в наличии</nuxt-link></li>
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
                  <li><nuxt-link to="/service/booking">Запись на сервис</nuxt-link></li>
                  <li><a href="javascript:;" subdown-click="3">Мир KIA</a></li>
                  <li><nuxt-link to="/dealers">Дилеры</nuxt-link></li>
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
                  <div>
                    <div class="item">
                      <div class="color-gray-4 title-content">Новые авто</div>
                      <ul>
                        <li><nuxt-link to="/buy">Онлайн-сервисы</nuxt-link></li>
                        <li><nuxt-link to="/configurator">Конфигуратор</nuxt-link></li>
                        <li><nuxt-link to="/service/special">Спецпредложения</nuxt-link></li>
                        <li><nuxt-link to="/buy/calc">Расчёт кредита</nuxt-link></li>
                        <li><nuxt-link to="/dealers">Поиск дилера</nuxt-link></li>
                        <li><nuxt-link to="/feedback">Запрос предложения</nuxt-link></li>
                        <li><nuxt-link to="/buy/testdrive">Запись на тест-драйв</nuxt-link></li>
                      </ul>
                    </div>
                    <div class="item">
                      <div class="color-gray-4 title-content">KIA в Узбекистане</div>
                      <ul>
                        <li><nuxt-link to="/feedback">Обратная связь</nuxt-link></li>
                        <li><nuxt-link to="/dealers/">Дилеры</nuxt-link></li>
                      </ul>
                    </div>
                    <div class="item">
                      <div class="color-gray-4 title-content">Владельцам</div>
                      <ul>
                        <li><nuxt-link to="/service/">Все сервисы</nuxt-link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="subdown-right hide">
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
                    <h2>
                      <nuxt-link to="/configurator">Конфигуратор</nuxt-link>
                    </h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/af3343b2-d53a-49a6-aa11-4cf7e01aff81.jpg');"></div>
                  <div class="desc-content">
                    <h2>
                      <nuxt-link to="/service/special">Спецпредложения</nuxt-link>
                    </h2>
                  </div>
                </figure>
                <figure>
                  <div class="img-content" style="background-image: url('https://cdn.kia.ru/resize/640x225/site-data/menu/quick_links/57a17a2b-c237-4668-bcb6-9b2e0ea04370.jpg');"></div>
                  <div class="desc-content">
                    <h2>
                      <nuxt-link to="/buy/calc">Расчёт кредита</nuxt-link>
                    </h2>
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
                  <!-- clear -->
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
                  <div class="subdown-menu-items">
                    <div>
                      <div class="item">
                        <div class="color-gray-4 title-content">Бренд KIA</div>
                        <ul>
                          <li><nuxt-link to="/about/brand/">Компания KIA Motors</nuxt-link></li>
                          <li><nuxt-link to="/about/history/">История</nuxt-link></li>
                          <li><nuxt-link to="/about/sponsorship/">Спонсорство</nuxt-link></li>
                          <li><a href="https://worldwide.kia.com/int/our-movement" target="_blank">Kia worldwide</a></li>
                        </ul>
                      </div>
                      <div class="item">
                        <div class="color-gray-4 title-content">KIA в Узбекистане</div>
                        <ul>
                          <li><nuxt-link to="/about/">О нас</nuxt-link></li>
                          <li><nuxt-link to="/feedback/">Обратная связь</nuxt-link></li>
                          <li><nuxt-link to="/dealers/">Дилеры</nuxt-link></li>
                          <li><nuxt-link to="/about/dealer/">Как стать дилером</nuxt-link></li>
                          <li><nuxt-link to="/feedback">Заказать звонок дилера</nuxt-link></li>
                        </ul>
                      </div>
                    </div>
                    <div>          
                      <div class="item">
                        <div class="color-gray-4 title-content">Инновации</div>
                        <ul>
                          <li><nuxt-link to="/about/design/">Дизайн</nuxt-link></li>
                          <li><nuxt-link to="/about/concept/">Концепт-кары</nuxt-link></li>
                          <li><nuxt-link to="/about/technologies">Технологии</nuxt-link></li>
                        </ul>
                      </div>
                      <div class="item">
                        <div class="color-gray-4 title-content">Медиа</div>
                        <ul>
                          <li><nuxt-link to="/press/news">Новости</nuxt-link></li>
                          <li><nuxt-link to="/press/reviews">Обзоры</nuxt-link></li>
                          <li><nuxt-link to="/press/magazine">Журнал Kia WAY</nuxt-link></li>
                        </ul>
                      </div>
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
    <div class="hide">
      <div id="min-menu">
        <ul>
          <li><nuxt-link to="/models">Модели</nuxt-link></li>
          <li>
            <a href="javascript:;">Выбор и покупка</a>
            <ul>
              <li><nuxt-link to="/buy">Онлайн-сервисы</nuxt-link></li>
              <li><nuxt-link to="/configurator">Конфигуратор</nuxt-link></li>
              <li><nuxt-link to="/service/special">Спецпредложения</nuxt-link></li>
              <li><nuxt-link to="/buy/calc">Расчёт кредита</nuxt-link></li>
              <li><nuxt-link to="/dealers">Поиск дилера</nuxt-link></li>
              <li><nuxt-link to="/feedback">Запрос предложения</nuxt-link></li>
              <li><nuxt-link to="/buy/testdrive">Запись на тест-драйв</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/configurator">Конфигуратор</nuxt-link></li>
          <li><nuxt-link to="/buy/cars">Авто в наличии</nuxt-link></li>
          <li>
            <nuxt-link to="/about">Мир KIA</nuxt-link>
            <ul class="sub-menu-item">
              <div class="wrapper">
                <div class="menu-item-cap">Бренд KIA</div>
                <li><nuxt-link to="/about/brand/">Компания KIA Motors</nuxt-link></li>
                <li><nuxt-link to="/about/history/">История</nuxt-link></li>
                <li><nuxt-link to="/about/sponsorship/">Спонсорство</nuxt-link></li>
                <li><nuxt-link to="https://worldwide.kia.com/int/our-movement" target="_blank">Kia worldwide</nuxt-link></li>
              </div>
              <div class="wrapper">
                <div class="menu-item-cap">KIA в Узбекистане</div>
                <li><nuxt-link to="/about">О нас</nuxt-link></li>
                <li><nuxt-link to="/dealers">Дилеры</nuxt-link></li>
                <li><nuxt-link to="/about/dealer/">Как стать дилером</nuxt-link></li>
                <li><nuxt-link to="/feedback">Заказать звонок дилера</nuxt-link></li>
              </div>
              <div class="wrapper">
                <div class="menu-item-cap">Инновации</div>
                <li><nuxt-link to="/about/design">Дизайн</nuxt-link></li>
                <li><nuxt-link to="/about/concept">Концепт-кары</nuxt-link></li>
                <li><nuxt-link to="/about/technologies">Технологии</nuxt-link></li>
              </div>
              <div class="wrapper">
                <div class="menu-item-cap">Медиа</div>
                <li><nuxt-link to="/press/news">Новости</nuxt-link></li>
                <li><nuxt-link to="/press/reviews">Обзоры</nuxt-link></li>
                <li><nuxt-link to="/press/magazine">Журнал Kia WAY</nuxt-link></li>
              </div>
            </ul>
          </li>
          <li><nuxt-link to="/dealers">Дилеры</nuxt-link></li>
        </ul>
      </div>
		</div>
		<!-- MIN MENU HEADER -->
		<div class="min-menu-header hidden-md hidden-lg header-scroll scrolled-down">
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
				<div class="col-xs-8 min-menu-logo-parent">
					<div class="min-menu-logo">
						<div>
              <nuxt-link exact to="/">
                <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.339 10.05v.78h.434c.366 0 .631.25.631.585 0 .118-.03.225-.059.309l-6.066 18.21a.194.194 0 00.033.174.158.158 0 00.13.064h4.728c.14 0 .295-.123.35-.271l4.032-12.756c.034-.132.16-.348.417-.348s.38.216.413.34l4.07 12.75c.064.162.219.285.358.285h4.728c.06 0 .097-.017.127-.06.042-.055.05-.14.037-.17L60.13 10.194c-.033-.072-.096-.144-.362-.144h-7.428zM38.572 29.98a.2.2 0 01-.201-.204v-18.5c0-.355-.28-.639-.628-.639h-.477v-.78h6.089c.112 0 .2.093.2.208v19.711a.2.2 0 01-.2.203h-4.783z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M.667 19.998C.667 8.955 18.279 0 40.002 0c21.723 0 39.331 8.955 39.331 19.998C79.333 31.045 61.725 40 40.003 40 18.278 40 .666 31.045.666 19.998zm39.33-17.906c-19.408 0-35.14 8.015-35.14 17.906 0 9.895 15.732 17.91 35.14 17.91 19.413 0 35.147-8.015 35.147-17.91 0-9.891-15.734-17.906-35.146-17.906z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.675 29.98c-.151 0-.406-.14-.556-.373l-5.503-7.816c-.067-.101-.2-.292-.478-.292-.217 0-.439.152-.439.496v7.781a.2.2 0 01-.2.203h-4.65c-.108 0-.2-.089-.2-.203v-18.5c0-.355-.28-.639-.628-.639h-.523v-.78h6c.11 0 .201.093.201.208v6.569c0 .259.188.449.44.449.07 0 .301-.025.502-.33l4.553-6.518c.154-.234.414-.378.565-.378h5.243c.08 0 .125.073.138.093.025.047.041.124.004.187L26.298 18.9l-.008.013a.84.84 0 00-.113.373c0 .098.033.237.154.398.453.648 6.951 9.956 6.972 9.98.054.081.063.149.034.213-.034.063-.1.101-.139.101h-5.523z" fill="currentColor"></path>
                </svg>
              </nuxt-link>
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


<script>
import mainjs from '@/static/js/main';

export default {
  data(){
    return {
      opacityStyle: false,
    }
  },
  watch:{
    $route (to, from){
      setTimeout(() => {
        this.opacityStyle = $('[header-opacity]').length
        mainjs(); 
        minMenu.close()
      }, 120);
    }
  },
  mounted(){
    
    // owl Carousel btn
    window.owlBtn = [
      '<span class="owl-btn previous">'+
        '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
          '<path d="M6 3L2 7l4 4M2.333 7h12.334" stroke="currentColor" stroke-width="1.5"></path>'+
        '</svg>'+
      '</span>', 
      '<span class="owl-btn next">'+
        '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
          '<path d="M9 11l4-4-4-4M12.667 7H.333" stroke="currentColor" stroke-width="1.5"></path>'+
        '</svg>'+
      '</span>'
    ]

    this.opacityStyle = $('[header-opacity]').length

   $(".header a:not([subdown-click])").on("click", function(){
      if($("[subdown-click].subdown-active").length)
        $("[subdown-click].subdown-active").trigger("click");
    })
		$("[subdown-click]").on("click", function(){
			var that = $(this)
			var num = that.attr("subdown-click");
      ($("[subdown]")).removeClass("subdown-active");
			if(that.hasClass("bg-shadow")){
				$("a[subdown-click='"+num+"']").trigger("click");
				return;
			}
			if(!that.hasClass("subdown-active")){
				$("a[subdown-click]").removeClass("subdown-active");
				that.add($("[subdown="+num+"]")).addClass("subdown-active");
				$("body").addClass("subdown-active");
			}else{
				that.add($("[subdown="+num+"]")).removeClass("subdown-active");
				$("body").removeClass("subdown-active");
			}
		})
		$(".subdown-wrapper").on("click", function(e){
			if($(e.target).hasClass("subdown-wrapper"))
				$("[subdown-click].subdown-active").trigger("click");
    })

    //init main js
    mainjs();
  }
}
</script>