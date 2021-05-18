
export const actions = {
  async newsFetch(context, params){
    try {
      var path;
      console.log(params);
      if(!params.path)
         path = 0;
      const model = await this.$axios.$get("https://api.kia-motors.uz/article/all/"+path);
      return model;
    } catch (e) {
      throw e;
    }
  }
}