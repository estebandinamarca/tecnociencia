<template>
  <div>
    <h2><nuxt-link to="/">< Inicio</nuxt-link></h2>
    <h2><nuxt-link to="/places/">< Volver</nuxt-link></h2>
    <hr>
    <h1>{{ $route.params.slug }}</h1>
    <p v-for="(item, index) in data">{{ item.collectionName }} - {{ item.artistName }}</p>
  </div>
</template>

<style scoped>
</style>

<script type="text/javascript">
  import axios from 'axios';
  export default {
    layout: 'dark',
    head: {
      title: 'Slug'
    },
    asyncData ({ params }) {
      return axios.get(axios.baseURL + `search?term=${params.slug}&limit=10`).then((response) => {
        return {
          data: response.data.results
        }
      })
    }
  }
</script>
