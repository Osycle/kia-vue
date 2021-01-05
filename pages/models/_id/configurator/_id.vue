<template>
  <h1>{{this.$route.params.id}}</h1>
</template>
<script>


export default {
  async asyncData(context){
    console.log(context)
    //if((context.route.name == "models-id"))
    //  context.redirect(context.route.path+"/desc")
  }
}
</script>