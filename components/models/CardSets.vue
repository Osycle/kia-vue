<template>
  <div class="card-sets bg-color-gray-1">
    <div class="container-p p-v-45">
      <div class="entry-header text-center m-v-30">
        <h4 class="color-2 text-n1">КОМПЛЕКТАЦИИ</h4>
        <h2>Варианты {{modelName}}</h2>
        <p>{{complectations.complectations.length}} доступных комплектаций</p>
      </div>
      <div class="card-sets-items owl-carousel boxes-3 m-v-30 owl-nav-style-2-xs">
        <figure v-for="(set, key) in complectations.complectations" :key="key">
          <div class="fig-wrapper">
            <div class="cap-content">
              <h3>{{set.name}}</h3>
              <h4>от {{set.min_price | spaceBetweenNum}} сум</h4>
            </div>
            <div class="desc-content">
              <div>
                <p><b>Двигатель и трансмиссия</b></p>
                <p v-for="(modification, key) in set.modifications" :key="key">
                  <template v-for="(engine) in complectations.engines">
                    <template v-if="engine.id == modification.engine_id">
                      {{engine.name+" / "+engine.power_hp+" л. с. / "+engine.fuel_type_name+" / "}}
                    </template>
                  </template>
                  <template v-for="(transmission) in complectations.transmissions">
                    <template v-if="transmission.id == modification.transmission_id">
                      {{transmission.gearbox_name+" / "+transmission.drive_name}}
                    </template>
                  </template>
                </p>
                <br>
                <p><b>Основные опции</b></p>
                <p v-for="(optionId, key) in set.options" :key="'A'+key">
                  <template v-for="(option) in complectations.options">
                    <template v-if="option.id == optionId">
                      {{option.name}}
                    </template>
                  </template>
                </p>
              </div>
              <div class="link-content m-t-20">
                <div class="align-center font-w-6">
                  <a href="../models-options.html" class="hover-aunderline"><b>Комплектации и цены</b></a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class=""><path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['complectations', 'modelName']
}
</script>