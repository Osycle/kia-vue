<template>
  <div class="conf-steps conf-step-1">
    <div class="conf-crs m-v-45">
      <div class="owl-carousel owl-btn-2">
        <template v-for="(modelLine) in page.model_lines">
          <figure v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id" :model-id="model.id">
            <a href="javascript:;">
              <div class="fig-wrapper">
                <div class="img-content">
                  <img :src="model.image" :alt="modelLine.name">
                </div>
                <div class="desc-content">
                  <h4>{{modelLine.name}}</h4>
                  <p>от {{model.min_price | spaceBetweenNum}} сум</p>
                </div>
              </div>
            </a>
          </figure>
        </template>
      </div>
    </div>
    <div class="conf-crs-main">
      <div class="owl-carousel owl-btn-2">
        <template v-for="(modelLine) in page.model_lines">
          <figure v-for="(model, key) in page.models" :key="key" v-if="model.model_line_id == modelLine.id" :model-id="model.id">
            <div class="fig-wrapper">
              <div class="desc-content">
                <h2>{{model.name}}</h2>
              </div>
              <div class="img-content m-t-30">
                <img :src="model.image" :alt="modelLine.name">
              </div>
            </div>
          </figure>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page']
}
</script>