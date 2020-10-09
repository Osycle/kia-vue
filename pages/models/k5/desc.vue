<template>
  <div>
    <div class="card-bnr relative">
      <div class="bg-video-content cover">
        <video src="video/k5.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline=""></video>
        <div class="img-xs absolute" style="background-image: url('img/other/k5-card-bnr-xs.jpg');"></div>
      </div>
      <div class="container-p relative">
        <Breadcrump :pageTitle="pageTitle"/>
        <div class="wrapper-content">
          <div class="desc-content justify-c-end hidden-xs hidden-sm">
            <span class="text align-center"><span>от 249 900 000 сум</span> <a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
            <span class="p-h-5">·</span>
            <span class="btn-def style-2 m-l-20"><a href="feedback.html">Связаться с нами</a></span>
          </div>
          <div class="card-bnr-bottom">
            <div class="flex-adaptive align-center justify-c-between">
              <div class="card-bnr-name">
                <div class="text-n1 m-b-15">KIA</div>
                <img src="https://www.kia.ru/static/media-data/banners/models/k5/main/logo.svg">
                <div class="font-size-nm m-t-10">Сверхчеловеческие возможности</div>
              </div>
              <div class="desc-content hidden-md hidden-lg">
                <span class="text align-center"><span>от 249 900 000 сум</span><a class="p-l-5" href="javascript:;" data-src="#textcredit" data-fancybox><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" role="button" class="color-gray-3 info-icon-gray info-icon"><circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"></circle><path d="M9 15h2V8.5H9V15z" fill="currentColor"></path><circle cx="10" cy="6.25" r="1.25" fill="currentColor"></circle></svg></a></span>
                <div class="btn-opacity"><a href="feedback.html">Связаться с нами</a></div>
              </div>
              <div class="card-bnr-advantages box-md-5 flex row">
                <div class="item p-h-15">
                  <div class="img-content">
                    <img src="https://www.kia.ru/static/media-data/banners/models/cerato/main/engine.svg">
                  </div>
                  <p><small>Новый двигатель Smartstream 2.5 GDI</small></p>
                </div>
                <div class="item p-h-15">
                  <div class="img-content">
                    <img src="https://www.kia.ru/static/media-data/teaser/stinger_teaser2.svg">
                  </div>
                  <p><small>8-ступенчатая автоматическая трансмиссия</small></p>
                </div>
                <div class="item p-h-15">
                  <div class="img-content">
                    <img src="https://www.kia.ru/static/media-data/banners/models/sportage/main/drivewise.svg">
                  </div>
                  <p><small>Интеллектуальные системы безопасности и помощи водителю</small></p>
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
import Breadcrump from '@/components/Breadcrump'
export default {
  head: {
    title: "Модели",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ]
  },
  components: {
    Breadcrump
  },
  async asyncData({store, error}){
    try{
      const pageData = await store.dispatch("models/fetchModels", {path: "models"})
      console.log(pageData);
      return {pageData}
    }catch(e){
      error(e);
    }
  },
  data(){
    return {
      pageTitle: "Модели"
    }
  },
  filters: {
    spaceBetweenNum (price) {
      price += "";
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(price))
        price = price.replace(pattern, "$1 $2");
      return price;
    },
  },
}
</script>