<template>
  <section>
    <h1>Error 404</h1>
    <nuxt-link :to="'/'">Home</nuxt-link>
  </section>
</template>

<style lang="scss" scoped>
  h1{
    color: red;
  }
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>