
export const actions = {
  async fetchPageData(context, params){
    try{
      const models = await this.$axios.$post('http://sola/handler.php', params)
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      const modelVideo = await this.$axios.$post('http://sola/video_bank.php', params)
      return modelVideo
    }catch(e){
      throw e
    }
  },
  
}