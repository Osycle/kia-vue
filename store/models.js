
export const actions = {
  async fetchPageData(context, params){
    try{
      //const models = await this.$axios.$get('http://kia-api-php/handler.php', {params})
      const models = await this.$axios.$get('http://html.lifestyle.uz/kia-api/handler.php', {params})
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      //const modelVideo = await this.$axios.$get('http://kia-api-php/video_bank.php', {params})
      const modelVideo = await this.$axios.$get('http://html.lifestyle.uz/kia-api/video_bank.php', {params})
      return modelVideo
    }catch(e){
      throw e
    }
  },
  
}