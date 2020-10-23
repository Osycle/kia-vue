
export const actions = {
  async fetchPageData(context, params){
    try{
      const models = await this.$axios.$post('http://kia-api/handler.php', params)
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      const modelVideo = await this.$axios.$post('http://kia-api/video_bank.php', params)
      return modelVideo
    }catch(e){
      throw e
    }
  },
  
}