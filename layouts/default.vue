<template>
  <div>
    <!-- Скрытые формы -->
    <div class="hide">
      <div id="textcredit" class="textcredit">
        <div class="entry-header">
          <h3>Расчет кредита</h3>
        </div>
        <hr>
        <br>
        <div class="text-item">
          <p>Данное предложение по расчету страховой премии носит исключительно информационный характер, не является публичной офертой (ст. 437 ГК РФ). Расчет кредита является предварительным, носит ориентировочный характер и подлежит уточнению перед или непосредственно при заключении договоров кредитования/страхования. Доступны иные варианты расчетов при разных параметрах кредита. Информация о ставках кредита и иных параметрах кредитного предложения предоставлена банками-партнерами ООО «Киа Моторс Россия и СНГ», которые предоставляют кредит: ООО «Русфинанс Банк» (Лицензия №1792 от 13.02.2013г.) и ООО «Сетелем Банк» ООО (Лицензия №2168 от 27.06.2013г.). Общие условия кредитования: валюта кредита рубли РФ, первоначальный взнос от 0% от стоимости автомобиля; срок кредита: от 12 до 60 мес.; процентная ставка банка от 6.4% до 17.1% годовых; минимальная сумма кредита 100 000 руб., максимальная сумма кредита 4 000 000 руб. Обеспечение кредита – залог автомобиля. Предполагается возможность включения в сумму кредита страховых премий по страхованию жизни и здоровья заемщика. Условия могут быть изменены в одностороннем порядке банками-партнерами. Подробные условия кредитования, требования к условиям страхования и заемщикам уточняйте у банков-партнеров и менеджеров в официальных дилерских центрах ООО «Киа Моторс Россия и СНГ».</p>
        </div>
      </div>
    </div>
    <div id="page">
      <Header />
      <main class="main">
        <Nuxt />
      </main>
      <Footer />
      
    </div>
  </div>
</template>


<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  head() {
    return {
      script: [
        {src: '/js/plugins/jquery.min.js'},
        {src: '/js/plugins/bootstrap.min.js'},
        {src: '/js/plugins/jquery.fancybox.js'},
        {src: '/js/plugins/ion.rangeSlider.min.js'},
        {src: '/js/plugins/theia-sticky-sidebar.min.js'},
        {src: '/js/plugins/select2.min.js'},
        {src: '/js/plugins/jquery.mmenu.all.js'},
        {src: '/js/plugins/smooth-scroll-link.min.js'},
        {src: '/js/plugins/owl.carousel.min.js'},
        {src: '/js/plugins/js-cloudimage-360-view.min.js'},
        //{src: '/js/main.js'},
      ],
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {}
}















</script>

<style lang="scss">
  .accordion_left{
    .card-media-desc{
      padding-left: 10%;
      padding-right: 0;
    }
  }
</style>
