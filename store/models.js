
export const actions = {
  async fetchModels(context, params){
    try{
      const models = await this.$axios.$post('http://sola/handler.php', {
        path: params.path
      })
      console.log(context,  models)
      return models
    }catch(e){
      throw e
    }
  }
}