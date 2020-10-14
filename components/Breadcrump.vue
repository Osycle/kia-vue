<template>
  <div class="breadcrumb-container">
    <div class="container-p">
      <ol class="breadcrumb">
        <li>
          <nuxt-link active-class="active" :to="'/'">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="$route.path">{{breadcrumpTitle}}</nuxt-link>
        </li>

      </ol>
    </div>
  </div>
</template>

<script>
  const breadcrumbs = {
    // You should use / + name for the root route
    '/profile': '/',
    // And just name of the page for child routes
   'models': 'Модели' 
  }
  export default {
    props: ['breadcrumpTitle'],
    computed: {
      crumbs () {
        let crumbs = []
        this.$route.matched.forEach((item) => {
          if (breadcrumbs[item.name] || breadcrumbs[item.path]) {
            item.breadcrumb = breadcrumbs[item.name] || breadcrumbs[item.path]
            crumbs.push(item)
          }
        })
        console.log(this.$route);
        return crumbs
      }
    },
    created(){
      //console.log(this);
    }
  }
</script>