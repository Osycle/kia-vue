<template>
  <section class="container">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user">
        <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    users: [
      1, 2, 3, 4, 5
    ]
  }),
  methods: {
    goTo(user){
      this.$router.push('/users/' + user)
    }
  }
}
</script>

<style>

</style>
