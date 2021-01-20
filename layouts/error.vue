<template>
  <section class="m-b-100 p-v-60">
    <div class="img-content text-center">
      <img src="https://image.freepik.com/free-vector/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request-unavailable-website-communication-problem_335657-938.jpg" alt="">
      <div>
        <nuxt-link :to="'/'" class="hover-aunderline"><b>Вернуться на главную</b></nuxt-link>
      </div>
    </div>
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