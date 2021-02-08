<template>
  <div class="main-body offset-header" header-opacity>
    <div class="kiaworld">
      <div class="kiaworld-bnr color-white" style="background-image: url('https://www.kia.ru/images/landing/about/sponsorship/bg-header.jpg');">
        <div class="breadcrumb-container">
          <div class="container-p">
            <ol class="breadcrumb">
              <li><nuxt-link to="/">Главная</nuxt-link></li>
              <li><nuxt-link to="">Мир KIA</nuxt-link></li>
              <li><nuxt-link to="">Спонсорство</nuxt-link></li>
            </ol>
          </div>
        </div>
        <div class="container-p relative">
          <div class="kiaworld-bnr-header">
            <h1>Спонсорство</h1>
            <p>Активности KIA</p>
          </div>
        </div>
      </div>
    </div>

    <div class="kiaworld-sponsorship">
      <div class="g-padding p-v-md-40">
        <div class="g-container">
          <div class="g-margin">
            <div class="kiaworld-sponsorship-items">
              <figure>
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">FIFA</div>
                    <p>Являясь официальным автомобильным партнёром, KIA предоставляет автомобили из своей широкой модельной линейки на всех крупнейших мероприятиях под эгидой FIFA. Начала партнёрству было положено в 2006 году во время проведения Чемпионата мира по футболу в Германии, а следующим крупным турниром станет «Мундиаль» в Катаре, запланированный на 2022 год.</p>
                    <p>В 2018 году Чемпионат мира по футболу впервые прошёл в России. KIA Motors предоставила более 400 автомобилей для официальных делегаций, спортсменов, гостей и журналистов.</p>
                  </div>
                  <div class="img-content">
                    <img src="https://www.kia.ru/images/landing/about/sponsorship/img-ill-0.jpg">
                  </div>
                </div>
              </figure>
              <figure>
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">Лига Европы UEFA</div>
                    <p>Лига Европы UEFA — это крупнейшее в мире профессиональное клубное футбольное соревнование, в котором участвуют команды из 54 стран Европы. Совокупная телевизионная аудитория турнира достигает 576 миллионов человек. KIA Motors является официальным партнёром Лиги Европы UEFA с сезона 2018/19.</p>
                    <p>Трехлетнее спонсорское соглашение продлится до финала Лиги Европы UEFA в 2021 году. В 2019 году состоялся первый в истории Лиги Европы Трофи-тур. Кубок победителя турнира проехал черех семь стран и городов. включая столицу России — Москву.</p>
                  </div>
                  <div class="img-content">
                    <img src="https://www.kia.ru/images/landing/about/sponsorship/img-ill-1.jpg">
                  </div>
                </div>
              </figure>
              <figure>
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">Australian Open</div>
                    <p>С момента своего первого участия в поддержке этого турнира в 2002 году KIA является его бессменным главным спонсором. Australian Open входит в четвёрку самых престижных соревнований в мире большого тенниса (турниры Большого шлема).</p>
                    <p>В качестве партнёра KIA ежегодно поставляет 100 новых автомобилей, чтобы обеспечить комфортную мобильность лучших теннисистов мира, VIP-персон, официальных лиц и представителей средств массовой информации.</p>
                  </div>
                  <div class="img-content">
                    <img src="https://www.kia.ru/images/landing/about/sponsorship/img-ill-2-hq.jpg">
                  </div>
                </div>
              </figure>
              <figure>
                <div class="flex-adaptive">
                  <div class="desc-content text-item">
                    <hr>
                    <br>
                    <div class="text-x4 m-v-20">Leagues of Legends Европейский чемпионат</div>
                    <p>Партнерство с LEC (League of Legends European Championship) позволило KIA выйти на самый популярный в мире киберспортивный рынок. Спонсорство «Лиги легенд» - это элемент новой маркетинговой стратегии компании, позволяющий установить более тесные связи с молодой аудиторией.</p>
                  </div>
                  <div class="img-content">
                    <img src="https://www.kia.ru/images/landing/about/sponsorship/img-ill-4.jpg">
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <KiaworldOther />

  </div>
</template>

<script>
import KiaworldOther from "@/components/kiaworld/KiaworldOther";


export default {
  head() {
    return {
      title: "Спонсорство",
      meta: [
        {
          content: "Активности KIA"
        }
      ],
    }
  },
  components:{
    KiaworldOther
  },
}
</script>