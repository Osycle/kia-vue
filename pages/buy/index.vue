<template>
  <div class="main-body offset-header buy">
    <div class="breadcrumb-container">
      <div class="container-p">
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/buy">Онлайн-сервисы</nuxt-link></li>
        </ol>
      </div>
    </div>
    <div class="buy-main">
      <div class="container-p">
        <div class="entry-content">
          <h1>Онлайн-сервисы Kia</h1>
          <p>Выберите подходящий авто, рассчитайте и получите кредит, не выходя из дома!</p>
        </div>
        <div class="buy-main-items boxes-3 m-v-30 figure-m-v-20">
          <figure>
            <div class="img-content">
              <nuxt-link :to="'/configurator/'">
                <img src="https://www.kia.ru/images/buy/online/001.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="desc-content">
              <nuxt-link :to="'/configurator/'" class="hover-aunderline">
                <span class="text-s1">Конфигуратор</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
              </nuxt-link>
              <br>
              <p>Создайте автомобиль, отвечающий всем вашим требованиям</p>
            </div>
          </figure>
          <figure>
            <div class="img-content">
              <nuxt-link :to="'/buy/cars/'">
                <img src="https://www.kia.ru/images/buy/online/002.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="desc-content">
              <nuxt-link :to="'/buy/cars/'" class="hover-aunderline">
                <span class="text-s1">Новые автомобили в наличии</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
              </nuxt-link>
              <br>
              <p>Онлайн-каталог автомобилей Kia в наличии у официальных дилеров</p>
            </div>
          </figure>
          <figure>
            <div class="img-content">
              <nuxt-link :to="'/buy/calc/'">
                <img src="https://www.kia.ru/images/buy/online/005.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="desc-content">
              <nuxt-link :to="'/buy/calc/'" class="hover-aunderline">
                <span class="text-s1">Онлайн кредитование</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
              </nuxt-link>
              <br>
              <p>Рассчитайте кредит на автомобиль и получите онлайн-одобрение кредита</p>
            </div>
          </figure>
          <figure>
            <div class="img-content">
              <nuxt-link :to="'/feedback'">
                <img src="https://www.kia.ru/images/buy/online/007.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="desc-content">
              <nuxt-link :to="'/feedback'" class="hover-aunderline">
                <span class="text-s1">Запись на тест-драйв</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
              </nuxt-link>
              <br>
              <p>Забронируйте автомобиль на тест-драйв</p>
            </div>
          </figure>
          <figure>
            <div class="img-content">
              <nuxt-link :to="'/dealers/'">
                <img src="https://www.kia.ru/images/buy/online/008.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="desc-content">
              <nuxt-link :to="'/dealers/'" class="hover-aunderline">
                <span class="text-s1">Поиск дилера</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
              </nuxt-link>
              <br>
              <p>Выберите официального дилера Kia</p>
            </div>
          </figure>
          
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
}
</script>