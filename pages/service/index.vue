<template>
  <div class="main-body offset-header services">
    <div class="container-p">
      <div class="breadcrumb-container">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">Владельцам</nuxt-link></li>
        </ol>
      </div>
      <div class="entry-header m-v-30">
        <h1 class="text-x5">Владельцам Kia</h1>
        <p>Запишитесь на сервис, подберите аксессуары и запчасти не выходя из дома.</p>
      </div>
      <div class="services-items boxes-4 figure-m-v-15 mv-4 mb-8 desktop:mb-12">
        <div class="cell">
          <nuxt-link to="/service/booking">
            <div class="item-wrapper">
              <div class="icon-content mb-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 4H4v39h7v-2H6V6h24v4h2V4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 19H16v-2h17v2zM33 24H16v-2h17v2zM27 29H16v-2h11v2zM27 34H16v-2h11v2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 12h25v13.678l2-2V10H10v37h29V32.163l-2 2V45H12V12z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.183 21.324l1.414 1.414-11.704 11.704-1.414-1.415 11.704-11.703zm0-2.829l4.242 4.243L33.894 37.27l-4.242-4.243 14.532-14.532zM33 38l-4-4v4h4zM27 39H16v-2h11v2z" fill="currentColor"></path></svg>
              </div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">Запись на сервис</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">Запишитесь на сервис в удобное для вас время</div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell">
          <nuxt-link to="/service/warranty">
            <div class="item-wrapper">
              <div class="icon-content mb-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path d="M25 4c-5 4.5-16 6.5-16 6.5v21c0 11.5 16 16 16 16s16-4.5 16-16v-21S30 8.5 25 4z" stroke="currentColor" stroke-width="2" ></path><path d="M19 25l4.5 4.5L31 22" stroke="currentColor" stroke-width="2" ></path></svg>
              </div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">Гарантия</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">Основные положения и условия гарантии</div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell">
          <nuxt-link to="/service/spares/">
            <div class="item-wrapper">
              <div class="icon-content mb-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path d="M49.446 22.226A22.655 22.655 0 0039.42 7.938 22.793 22.793 0 0028.91 4.444a4.426 4.426 0 00-.235-1.089A4.325 4.325 0 0025.02.475L20.886.042a7.514 7.514 0 00-6.122 2.168L2.211 14.764a7.514 7.514 0 00-2.17 6.122l.434 4.133a4.325 4.325 0 002.88 3.656c.36.127.725.205 1.09.238a22.8 22.8 0 0010.507 17.52 22.664 22.664 0 0012.196 3.553c7.549 0 14.945-3.738 19.285-10.567a22.658 22.658 0 003.013-17.193zM9.891 25.65l5.1-5.099a1.032 1.032 0 001.354-.357h-.002a1.04 1.04 0 00.047-1.043l3.284-3.284a1.044 1.044 0 001.157.092 1.04 1.04 0 00.302-1.55l4.518-4.519c3.834-.345 7.577.565 10.847 2.642 8.078 5.135 10.474 15.886 5.34 23.965a17.247 17.247 0 01-10.877 7.633 17.247 17.247 0 01-13.088-2.294 17.304 17.304 0 01-6.397-7.258 17.418 17.418 0 01-1.585-8.928zm-7.349-.848l-.433-4.134a5.443 5.443 0 011.571-4.435L16.234 3.68a5.443 5.443 0 014.435-1.571l4.134.433a2.235 2.235 0 011.913 1.507c.3.85.1 1.738-.538 2.375L6.424 26.178a2.235 2.235 0 01-2.375.537 2.235 2.235 0 01-1.507-1.912zM44.68 38.304c-3.945 6.207-10.666 9.604-17.527 9.604a20.605 20.605 0 01-11.085-3.229 20.726 20.726 0 01-9.562-16.091c.45-.192.873-.462 1.249-.806a19.508 19.508 0 001.84 7.68 19.38 19.38 0 007.164 8.13 19.306 19.306 0 0010.39 3.04c1.418 0 2.848-.157 4.265-.472a19.313 19.313 0 0012.18-8.547c5.748-9.046 3.066-21.084-5.98-26.834a19.513 19.513 0 00-9.836-3.023c.347-.377.618-.8.81-1.253a20.71 20.71 0 019.717 3.19 20.59 20.59 0 019.113 12.985 20.594 20.594 0 01-2.738 15.626z" fill="currentColor" ></path><path d="M21.589 35.991a10.364 10.364 0 007.866 1.379 10.365 10.365 0 006.537-4.588 10.366 10.366 0 001.378-7.866 10.365 10.365 0 00-4.587-6.537c-4.856-3.086-11.317-1.646-14.404 3.21-3.086 4.855-1.646 11.316 3.21 14.402zm-1.455-13.288a8.357 8.357 0 017.065-3.871c1.532 0 3.082.42 4.469 1.301a8.301 8.301 0 013.673 5.235 8.3 8.3 0 01-1.104 6.3 8.3 8.3 0 01-5.234 3.673 8.302 8.302 0 01-6.3-1.104c-3.888-2.471-5.04-7.645-2.57-11.534zM40.025 32.705a1.038 1.038 0 10.679-1.964 1.04 1.04 0 10-.68 1.964zM38.41 19.956a1.041 1.041 0 00.837-1.656 1.04 1.04 0 10-.836 1.656zM40.965 26.118a1.038 1.038 0 10.003-2.076 1.038 1.038 0 00-.003 2.076zM24.491 39.803a1.038 1.038 0 10-.438 2.03 1.038 1.038 0 00.438-2.03zM30.658 39.607a1.04 1.04 0 10.56 2.002 1.04 1.04 0 00-.56-2.002zM36.036 36.572a1.041 1.041 0 00.714 1.796 1.038 1.038 0 10-.714-1.796zM18.934 37.104a1.04 1.04 0 10-1.328 1.602 1.04 1.04 0 001.328-1.602zM32.81 15.578l.016.008h.001a1.04 1.04 0 00.909-1.87c-.004 0-.007-.003-.01-.004s-.004-.001-.005-.003a1.04 1.04 0 00-.911 1.869zM13.918 31.575a1.04 1.04 0 10.797 1.92 1.04 1.04 0 00-.797-1.92zM13.208 26.976a1.04 1.04 0 10.185-2.07 1.04 1.04 0 00-.185 2.07zM26.742 14.291h.034a1.038 1.038 0 10-.067-2.078 1.038 1.038 0 00-1.004 1.073c.017.562.479 1.005 1.037 1.005z" fill="currentColor" ></path><path d="M23.353 33.215a7.097 7.097 0 005.386.944 7.099 7.099 0 004.476-3.141 7.099 7.099 0 00.944-5.387 7.099 7.099 0 00-3.14-4.476h-.001c-3.325-2.113-7.75-1.127-9.863 2.198-2.113 3.325-1.127 7.75 2.198 9.862zm-.444-8.747a5.067 5.067 0 016.994-1.559 5.032 5.032 0 012.228 3.175 5.032 5.032 0 01-.67 3.819 5.033 5.033 0 01-3.174 2.228 5.033 5.033 0 01-3.82-.67 5.072 5.072 0 01-1.557-6.993zM7.773 21.173a2.67 2.67 0 001.9-.787 2.67 2.67 0 00.787-1.9 2.67 2.67 0 00-.787-1.9 2.67 2.67 0 00-1.9-.787 2.67 2.67 0 00-1.9.787 2.67 2.67 0 00-.787 1.9c0 .717.28 1.392.787 1.9a2.67 2.67 0 001.9.787zm-.43-3.118a.605.605 0 011.039.43.605.605 0 01-.61.61.605.605 0 01-.608-.61c0-.162.063-.315.179-.43zM18.488 10.46a2.67 2.67 0 001.9-.787 2.67 2.67 0 00.787-1.9 2.67 2.67 0 00-.787-1.9 2.67 2.67 0 00-1.9-.788 2.67 2.67 0 00-1.9.787 2.67 2.67 0 00-.787 1.9c0 .718.28 1.393.787 1.9a2.67 2.67 0 001.9.788zm-.43-3.118a.605.605 0 01.86 0 .605.605 0 010 .861.605.605 0 01-.86 0 .605.605 0 010-.86z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">Запчасти</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">Оригинальные запчасти, а также запчасти PL2</div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell">
          <nuxt-link to="/service/special/">
            <div class="item-wrapper">
              <div class="icon-content mb-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><circle cx="25" cy="25" r="22.25" stroke="currentColor" stroke-width="1.5" ></circle><path d="M25.5 10l4.19 9.732 10.551.978-7.96 6.993 2.33 10.337-9.111-5.41-9.11 5.41 2.329-10.337-7.96-6.993 10.55-.978L25.5 10z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" ></path></svg>
              </div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">Спецпредложения</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">Специальные предложения на сервис для владельцев автомобилей Kia</div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="cell hide">
          <a href="">
            <div class="item-wrapper">
              <div class="icon-content mb-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 45.2c11.432 0 20.7-9.268 20.7-20.7 0-11.432-9.268-20.7-20.7-20.7-11.432 0-20.7 9.268-20.7 20.7 0 11.432 9.268 20.7 20.7 20.7zm0 1.8C36.926 47 47 36.926 47 24.5S36.926 2 24.5 2 2 12.074 2 24.5 12.074 47 24.5 47z" fill="currentColor" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 36.2c6.462 0 11.7-5.238 11.7-11.7 0-6.462-5.238-11.7-11.7-11.7-6.462 0-11.7 5.238-11.7 11.7 0 6.462 5.238 11.7 11.7 11.7zm0 1.8C31.956 38 38 31.956 38 24.5S31.956 11 24.5 11 11 17.044 11 24.5 17.044 38 24.5 38z" fill="currentColor" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 27.2a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4zm0 1.8a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="currentColor" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6 21.8v-9h1.8v9h-1.8zM23.6 36.2v-9h1.8v9h-1.8zM13.496 30.557L21.8 25.4l.95 1.53-8.305 5.156-.949-1.53zM34.4 32.6l-7.2-5.4 1.08-1.44 7.2 5.4-1.08 1.44zM21.513 22.637l-8.573-4.95-.9 1.559 8.573 4.95.9-1.56zM27.798 22.457L34.4 18.2l.975 1.513-6.601 4.256-.976-1.512z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content">
                <span class="hover-aunderline mv-4 fw-6 text-s1-b">
                  <span class="this-btn mb-3">Аксессуары</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="services-item__title-icon"><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </span>
                <div class="color-gray-5 mt-4">Аксессуары для всех моделей Kia в наличии и под заказ</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "Сервисы для владельцев Kia",
      meta: [
        {
          content: "Сервисы для владельцев Kia",
        }
      ],
    }
  }
}
</script>