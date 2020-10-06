
export const actions = {
  async fetchModels(context, params){
    try{
      const models = await this.$axios.$post('http://sola/handler.php', {
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
      console.log(context,  models)
      return models
    }catch(e){
      throw e
    }
  }
}