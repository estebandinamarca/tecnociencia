<template id="">
  <div class="">
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
    asyncData ({ params }) {
      return axios.get(`https://itunes.apple.com/search?term=${params.slug}&limit=10`).then((response) => {
        return {
          data: response.data.results
        }
      })
    }
  }
</script>
