
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



import ApiPlugin from '@/plugins/api'
Vue.use(ApiPlugin);



// import reactions from "../data/models.js"

// const loadModelsIndex = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(()=>{
//       resolve(reactions)
//     }, 1000)
//   })
// }

// const store = () =>
//   new Vuex.Store({
//     state: {
//       models: []
//     },
//     getters: {
//       getModels(state){
//         return state.models
//       }
//     },
//     mutations: {
//       SET_REACTIONS(state, payload){
//         state.models = payload
//       }
//     },
//     actions: {
//       async loadModelsIndex({ commit }, payload){
//         try {
//           const reactions = await loadModelsIndex(payload)
//           commit('SET_REACTIONS', reactions)
//           //console.log(modelsIndex);
//         }catch(error){
//           console.error(error);
//         }
//       }
//     }
//   })

// export default store
