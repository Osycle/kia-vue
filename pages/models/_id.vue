<template>
  <div>
    <h1>(_id.vue) Project: {{ $route.params.id }}</h1>
    <nuxt-child :lol="$route.params.id" keep-alive :keep-alive-props="{ exclude: ['modal'] }" :nuxt-child-key="'666'"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      modal: "11111"
    }
  }
}
</script>