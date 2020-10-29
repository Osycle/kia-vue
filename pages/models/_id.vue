<template>
  <nuxt-child />
</template>


<script>
export default {
  async asyncData(context){
    if((context.route.name == "models-id"))
      context.redirect(context.route.path+"/desc")
  },
}
</script>