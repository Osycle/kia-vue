export default function(instance){
  return {
    getModels(payload) {
      return instance.post('handler.php', payload)
    }
  }
}