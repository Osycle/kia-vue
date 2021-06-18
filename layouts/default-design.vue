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
          <p>Расчет ежемесячного платежа, сформированный при помощи лизингового калькулятора, является предварительным, подлежит уточнению перед или непосредственно при заключении договоров лизингования/страхования, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 369 ч.2 Гражданского кодекса Республики Узбекистан. Для получения подробной информации обращайтесь к официальным дилерам ООО "Roodell". </p>
        </div>
      </div>
    </div>
    <div id="page">
      <Header-design />
      <main class="main">
        <Nuxt />
      </main>
      <Footer-design />
    </div>
  </div>
</template>


<script>
import HeaderDesign from '@/components/Header-design'
import FooterDesign from '@/components/Footer-design'

export default {
  head() {
    return {
      script: [
        // {content: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K5HVG7K');"},
        {src: '/js/plugins/jquery.min.js'},
        {src: '/js/plugins/bootstrap.min.js'},
        {src: '/js/plugins/jquery.fancybox.js'},
        {src: '/js/plugins/ion.rangeSlider.min.js'},
        {src: '/js/plugins/theia-sticky-sidebar.min.js'},
        {src: '/js/plugins/select2.min.js'},
        {src: '/js/plugins/jquery.mmenu.all.js'},
        {src: '/js/plugins/smooth-scroll.js'},
        {src: '/js/plugins/jquery.validate.js'},
        {src: '/js/plugins/owl.carousel.min.js'},
        {src: '/js/plugins/js-cloudimage-360-view.min.js'},
        {
          src: "/js/metrix.js",
          async: true,
          crossorigin: "anonymous",
          body: false,
        },
        {src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=f06d738e-1a2e-4ca2-91cc-d23a3bbb9e09'},
        {src: '/js/map.panel.js'},

        //{src: '/js/main.js'},
      ],
      link: [
        {rel: 'stylesheet', href: "/kia-design/fonts/Kia/stylesheet.css"},
      ],
    }
  },
  mounted(){
    $(document).on("click", ".link-more", function(){
      // Подробнее
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'unGjJ0ul',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
    
    $(document).on("click", ".link-more-model", function(){
      // Подробнее о моделях
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'kHVukoUA',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
    
    $(document).on("click", "button[type='submit']", function(){
      // Отправить заявку
      DSPCounter('send', {
        'sid'       : '223159',
        'site_area' : 'pyR98Eso',
        'user_id'   : '',
        'lead_id'   : '',
        'order_sum' : ''
      });
    });
  },
  components: {
    HeaderDesign,
    FooterDesign
  },
  methods: {}
}















</script>

<style lang="scss" scoped>
  *{
    font-family: 'Kia Signature';
  }
</style>
<style lang="scss">
  .accordion_left{
    .card-media-desc{
      padding-left: 0;
      padding-right: 10%;
    }
  }

::-webkit-scrollbar{
	width:5px;
	position: absolute;
	height: 5px;
}
 ::-webkit-scrollbar-thumb{
 	border-radius: 5px;
 	z-index: 500;
	background-color: lighten(#05141F, 0%);
}
::-webkit-scrollbar-thumb:hover{
	background-color: darken(#05141F, 5%);
} 
::-webkit-scrollbar-thumb:active{
	background-color: darken(#05141F, 10%);
}
::-webkit-scrollbar-track-piece{
	background-color: white;
}
// OPERA
::-o-scrollbar{
	width:5px;
	position: absolute;
}
::-o-scrollbar-thumb{
	z-index: 500;
	border-radius: 5px;
	background-color: lighten(#05141F, 5%);
}
::-o-scrollbar-thumb:hover{
	background-color: darken(#05141F, 5%);
} 
::-o-scrollbar-thumb:active{
	background-color: darken(#05141F, 10%);
}
::-o-scrollbar-track-piece{
	background-color: rgba(white, 0.5);
}
::selection {
    background: #05141F;
    color: #fff;
    text-shadow: none;
}



</style>

