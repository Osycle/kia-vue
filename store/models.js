
export const actions = {
  async fetchPageData(context, params){
    try{
      //const models = await this.$axios.$get('http://kia-api-php/handler.php', {params})
      const models = await this.$axios.$get('/handler.php', {params})
      return models
    }catch(e){
      throw e
    }
  },
  async fetchVideo(context, params){
    try{
      //const modelVideo = await this.$axios.$get('http://kia-api-php/video_bank.php', {params})
      const modelVideo = await this.$axios.$get('/video_bank.php', {params})
      return modelVideo
    }catch(e){
      throw e
    }
  },
  async configuratorModels(context, params){
    try{
      const models = await this.$axios.$get('https://api.kia-motors.uz/configurator/get/1');
      var selectModel;
      if (Object.keys(params).length == 0) {
        return {
          models
        }
      }
      models.forEach(m => {
        if (m.url == params.modelName) 
          selectModel = m;
      });
      const model = await this.$axios.$get('https://api.kia-motors.uz/configurator/get/2/'+selectModel.id)
      return {
        models,
        model
      };
    }catch(e){
      throw e
    }
  },
  async modelsAll(context, params){
    try {
      const models = await this.$axios.$get("https://api.kia-motors.uz/models/");
      return models;
    } catch (e) {
      throw e;
    }
  },
  async model(context, params){
    try {
      const model = await this.$axios.$get("https://api.kia-motors.uz/models/"+params.model_name+"/"+params.path);
      return model;
    } catch (e) {
      throw e;
    }
  }
}