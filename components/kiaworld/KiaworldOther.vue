<template>
  <div class="kiaworld-other">
    <div class="container-p p-v-md-60 p-v-30">
      <div class="entry-header m-v-30">
        <h3>Подробнее о KIA</h3>
      </div>
      <div class="kiaworld-other-items m-v-30 owl-carousel boxes-3 m-v-30 owl-btn-2">
        <figure>
          <nuxt-link to="/about/design/">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" style="background-image: url('https://cdn.kia.ru/media-data/landing/about/brand/menu/img-more-design.jpg');"></div>
              </div>
              <div class="desc-content">
                <h3>Дизайн</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure>
          <nuxt-link to="/about/concept/">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" style="background-image: url('https://www.kia.ru/static/media-data/landing/about/brand/menu/img-more-concept.jpg');"></div>
              </div>
              <div class="desc-content">
                <h3>Концепт-кары</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure>            
          <nuxt-link to="/about/sponsorship/">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" style="background-image: url('https://www.kia.ru/static/media-data/landing/about/brand/menu/img-more-sponsorship.jpg');"></div>
              </div>
              <div class="desc-content">
                <h3>Спонсорство</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure>
          <nuxt-link to="/about/history/">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" style="background-image: url('https://www.kia.ru/static/media-data/landing/about/brand/menu/img-more-history.jpg');"></div>
              </div>
              <div class="desc-content">
                <h3>История KIA</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
      </div>
    </div>
  </div>
</template>