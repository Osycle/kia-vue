
export const actions = {
  async fetchPageData(context, params){
    try{
      console.log(params);
      const models = await this.$axios.$get('http://kia-api-php/handler.php', {params})
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      const modelVideo = await this.$axios.$get('http://kia-api-php/video_bank.php', {params})
      return modelVideo
    }catch(e){
      throw e
    }
  },
  
}