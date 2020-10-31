<template>
  <div class="breadcrumb-container">
    <div class="container-p">
      <ol class="breadcrumb ">
        <li v-for="(item, key) in breadcrumpItems" :key="key">
          <nuxt-link :to="item.link" v-if="key < breadcrumpItems.length-1">{{item.title}}</nuxt-link>
          <span v-else>{{item.title}}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['breadcrumpItems'],
    computed: {
      crumbs () {
        let crumbs = []
        this.$route.matched.forEach((item, e) => {
          //console.log(item, e)
        })
        return crumbs
      }
    },
    created(){
      //console.log(this.$route);
    }
  }
</script>