<template>
  <div class="main-body offset-header special" header-opacity>
    <div class="bnr-style-1 bnr-height-auto color-white bg-shadow-none" :style="'background-image: url(https://www.kia.ru/images/img_bg_5_1.png);'">
      <div class="breadcrumb-container">
        <div class="container-p">
          <ol class="breadcrumb">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="">Kia Finance</nuxt-link></li>
          </ol>
        </div>
      </div>
      <div class="container-p relative">
        <div class="entry-header">
          <h1 class="box-md-5">Kia Finance</h1>
          <div class="text-s1">Программа кредитования от Kia</div>
        </div>
      </div>
    </div>
    <div class="block-first">
      <div class="container-p">
        <div class="wrapper p-v-md-50 p-h-md-110">
          <div class="box-lg-8 m-auto m-v-30 p-h-15">
            <div class="entry-header">
              <div class="text-x5 mb-5 fw-7">Что такое Kia Finance</div>
              <div class="text-x1">Kia Finance - это широкая линейка финансовых программ, которые позволяют клиенту сделать доступным любой автомобиль Kia. Программы нацелены на снижение затрат клиента при покупке автомобиля в кредит путем снижения кредитных ставок, ежемесячных платежей и стоимости владения автомобилем. Партнёрами программы Kia Finance являются «Сетелем Банк» ООО, ПАО «РОСБАНК» и ПАО «Совкомбанк».</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wa-advantages bg-color-gray-1">
      <div class="container-p pv-13">
        <div class="entry-header text-center mb-10">
          <div class="text-x5 fw-7">Ключевые преимущества</div>
        </div>
        <div class="wa-advantages-items boxes-4">
          <div class="cell desktop:mv-6">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M26 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.991.247a3.5 3.5 0 10-6.894.575L12.951 13a1.97 1.97 0 00-1.79 1.211L4.277 30.279a2.984 2.984 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.622-15.45 7.205-.601c.6.483 1.363.772 2.193.772 1.04 0 1.973-.453 2.614-1.173l7.628-.636-6.466 15.088a2.983 2.983 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.886-16.067c-.392-.914-1.295-1.311-2.131-1.191l-8.716.726zm9.01 1.256h-.003l-6.884 16.064a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394l-6.885-16.064zm5.966 19.458c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm-24 2c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm.919-3.394L13 15 6.114 31.067a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-6">
                <div class="text-x1 mb-3"><b>Выгодно</b></div>
                <div class="text-s2i color-gray-5">Комфортные ставки по кредиту от партнёров программы Kia Finance</div>
              </div>
            </div>
          </div>
          <div class="cell desktop:mv-6">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M26 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.991.247a3.5 3.5 0 10-6.894.575L12.951 13a1.97 1.97 0 00-1.79 1.211L4.277 30.279a2.984 2.984 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.622-15.45 7.205-.601c.6.483 1.363.772 2.193.772 1.04 0 1.973-.453 2.614-1.173l7.628-.636-6.466 15.088a2.983 2.983 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.886-16.067c-.392-.914-1.295-1.311-2.131-1.191l-8.716.726zm9.01 1.256h-.003l-6.884 16.064a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394l-6.885-16.064zm5.966 19.458c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm-24 2c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm.919-3.394L13 15 6.114 31.067a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-6">
                <div class="text-x1 mb-3"><b>Выгодно</b></div>
                <div class="text-s2i color-gray-5">Комфортные ставки по кредиту от партнёров программы Kia Finance</div>
              </div>
            </div>
          </div>
          <div class="cell desktop:mv-6">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M26 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.991.247a3.5 3.5 0 10-6.894.575L12.951 13a1.97 1.97 0 00-1.79 1.211L4.277 30.279a2.984 2.984 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.622-15.45 7.205-.601c.6.483 1.363.772 2.193.772 1.04 0 1.973-.453 2.614-1.173l7.628-.636-6.466 15.088a2.983 2.983 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.886-16.067c-.392-.914-1.295-1.311-2.131-1.191l-8.716.726zm9.01 1.256h-.003l-6.884 16.064a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394l-6.885-16.064zm5.966 19.458c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm-24 2c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm.919-3.394L13 15 6.114 31.067a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-6">
                <div class="text-x1 mb-3"><b>Выгодно</b></div>
                <div class="text-s2i color-gray-5">Комфортные ставки по кредиту от партнёров программы Kia Finance</div>
              </div>
            </div>
          </div>
          <div class="cell desktop:mv-6">
            <div class="flex desktop:fd-columm">
              <div class="img-content mt-4">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"  class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M26 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1.991.247a3.5 3.5 0 10-6.894.575L12.951 13a1.97 1.97 0 00-1.79 1.211L4.277 30.279a2.984 2.984 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.622-15.45 7.205-.601c.6.483 1.363.772 2.193.772 1.04 0 1.973-.453 2.614-1.173l7.628-.636-6.466 15.088a2.983 2.983 0 00-.24 1.373 9 9 0 1017.928 0 2.985 2.985 0 00-.24-1.373l-6.886-16.067c-.392-.914-1.295-1.311-2.131-1.191l-8.716.726zm9.01 1.256h-.003l-6.884 16.064a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394l-6.885-16.064zm5.966 19.458c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm-24 2c.27 0 .527-.034.772-.098a7.003 7.003 0 01-13.478 0c.245.064.503.098.772.098h11.934zm.919-3.394L13 15 6.114 31.067a1 1 0 00.919 1.394h11.934a1 1 0 00.919-1.394z" fill="currentColor" ></path></svg>
              </div>
              <div class="desc-content mv-4 mobile:ml-5 box-md-8 box-lg-6">
                <div class="text-x1 mb-3"><b>Выгодно</b></div>
                <div class="text-s2i color-gray-5">Комфортные ставки по кредиту от партнёров программы Kia Finance</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>





<script>
export default {
  head() {
    return {
      title: "Kia Finance Программа кредитования от Kia",
      meta: [
        {
          content: "Kia Finance Программа кредитования от Kia",
        }
      ],
    }
  }
}
</script>
