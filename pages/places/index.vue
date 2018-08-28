<template>

  <section class="places">
    <h1>Bienvenidos Places {{ project }}</h1>
    <button class="btn btn-primary" type="button" name="button">Primaty Button</button>
    <hr>
    <h2><nuxt-link to="/">< Inicio</nuxt-link></h2>

    <!-- <p>{{ data }}</p> -->

    <place
      v-for="place in data"
      thumbnail=""
      :title="place.artistName"
      :previewText="place.collectionName"
      :key="place.collectionId"
      :slug="place.artistName"
    />

  </section>

</template>


<style scoped>
  h1 { color: green; }
</style>

<script type="text/javascript">
  import place from '@/components/place';
  import axios from 'axios';

  export default {
    head: {
      title: 'Index 1'
    },

    data() {
      return {
        project: 'default'
      }
    },

    asyncData ({ params, error }) {
      return axios.get(`https://itunes.apple.com/search?term=jack&limit=2`)
      .then((response) => {
        return {
          data: response.data.results
        }
      })
      .catch((e) => {
        console.log(error);
        console.log(e);
        error({
          statusCode: 404,
          message: 'Post not found'
        })
      })
    },

    // asyncData(context) {
    //   return axios.get(`https://iitunes.apple.com/search?term=jack&limit=5`)
    //   .then((response) => {
    //     return {
    //       //loading: true,
    //       data: response.data.results,
    //       loading: false
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   // .then(() => {
    //   //   return {
    //   //     loading: false
    //   //   }
    //   // })
    //},

    components: {
      place
    },
    methods: {},
    mounted() {}

  }
</script>
