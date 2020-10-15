
export const actions = {
  async fetchPageData(context, params){
    try{
      const models = await this.$axios.$post('http://sola/handler.php', params)
      console.log(context,  models)
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      const models = await this.$axios.$post('http://sola/video_bank.php', params)
      console.log(context,  models)
      return models
    }catch(e){
      throw e
    }
  },
  
}