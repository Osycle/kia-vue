<template>
  <div>

    <no-ssr>
      <!-- Yandex.Metrika counter -->
      <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")

        ym(80120311, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
        });
      </script>
      <noscript><div><img src="https://mc.yandex.ru/watch/80120311" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      <!-- /Yandex.Metrika counter -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126548408-24"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-126548408-24');
      </script>
    </no-ssr>

    <!-- Скрытые формы -->
    <div class="hide">
      <div id="textcredit" class="textcredit">
        <div class="entry-header">
          <h3>Расчет кредита</h3>
        </div>
        <hr>
        <br>
        <div class="text-item">
          <p>Расчет ежемесячного платежа, сформированный при помощи лизингового калькулятора, является предварительным, подлежит уточнению перед или непосредственно при заключении договоров лизингования/страхования, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 369 ч.2 Гражданского кодекса Республики Узбекистан. Для получения подробной информации обращайтесь к официальным дилерам ООО "Roodell". </p>
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
        {content: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K5HVG7K');"},
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
        {src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=f06d738e-1a2e-4ca2-91cc-d23a3bbb9e09'},
        {src: '/js/map.panel.js'},
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
      padding-left: 0;
      padding-right: 10%;
    }
  }
</style>
