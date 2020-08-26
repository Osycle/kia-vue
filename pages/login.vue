<template>
  <form action="">
    <h1>Login</h1>
    <div class="input-content m-v-30">
      <input type="text" class="form-control" placeholder="Login">
    </div>
    <div class="input-content m-v-30">
      <input type="text" class="form-control" placeholder="Password">
    </div>

    <p><nuxt-link to="/">Home</nuxt-link></p>

    <span class="btn-def m-v-30">
      <button>Login</button>
    </span>
  </form>
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
  form{
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>