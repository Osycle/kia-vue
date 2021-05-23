<template>
  <div class="kiaworld-other">
    <div class="container-p p-v-md-60 p-v-30">
      <div class="entry-header m-v-30">
        <h3>Подробнее о KIA</h3>
      </div>
      <div class="kiaworld-other-items m-v-30 owl-carousel boxes-3 m-v-30 owl-btn-2">
        <figure v-for="(item, key) in kiaworldOtherItems" :key="key">
          <nuxt-link :to="item.url">
            <div class="fig-wrapper">
              <div class="img-content">
                <div class="img" :style="'background-image: url('+item.image+');'"></div>
              </div>
              <div class="desc-content">
                <h3>{{item.name}}</h3>
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
  ]
}
</script>