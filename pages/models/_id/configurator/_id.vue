
<template>
  <div>
    <Configurator :page="page"></Configurator>
  </div>
</template>

<script>
import Configurator from '~/pages/models/_id/configurator/index';
export default {
  mounted(){
    //console.log(this.$route);
  },
  data(){
    return{
      page: null,
    }
  },
  async asyncData(context){
    try{
      console.log("context.route.params.id: ", context.route.params.id);
      const path = context.route.path
      const page = await context.store.dispatch("models/fetchPageData", {
        path: "/models/"+context.route.params.id+"/full"
      })
      console.log(page, context.route.params)
      return {page: page.content}
    }catch(e){
      context.error(e);
    }
  },
  components:{
    Configurator
  }
}
</script>
