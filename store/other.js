
export const actions = {
  async fetchPath(context, params){
    try {
      console.log(params.path);
      if(params.path.substring(params.path.length-1) == "/")
        params.path = params.path.substring(0, params.path.length-1)
      const data = await this.$axios.$get("https://api.kia-motors.uz"+params.path);
      return data;
    } catch (e) {
      throw e;
    }
  },
  async newsFetch(context, params){
    try {
      var path;
      console.log(params);
      if(!params.path)
         path = 0;
      // if(params.path.substring(params.path.length-1) == "/")
      //    params.path = params.path.substring(0, params.path.length-1)
      const model = await this.$axios.$get("https://api.kia-motors.uz/article/all/"+path);
      return model;
    } catch (e) {
      throw e;
    }
  }
}