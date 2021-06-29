<template>
  <div class="kiaworld-other">
    <div class="container-p p-v-md-60 p-v-30">
      <div class="entry-header m-v-30">
        <h3>Подробнее о Kia</h3>
      </div>
      <div class="kiaworld-other-items m-v-30 owl-carousel boxes-3 m-v-30 owl-btn-2">
        <figure>
          <nuxt-link to="/about">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(/img/rebrand/design/kiaworld-other-1.jpg);'"></div>
              </div>
              <div class="desc-content">
                <h3>О компании</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure>
          <nuxt-link to="/about/brand">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(/img/rebrand/design/kiaworld-other-2.jpg);'"></div>
              </div>
              <div class="desc-content">
                <h3>О бренде</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
        <figure>
          <nuxt-link to="/about/technologies">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url(/img/rebrand/design/kiaworld-other-3.jpg);'"></div>
              </div>
              <div class="desc-content">
                <h3>Технологии</h3>
              </div>
            </div>
          </nuxt-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'kiaworld-other-items'
  ],
  mounted(){
    
  }
}
</script>