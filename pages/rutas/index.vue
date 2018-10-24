<template>
  <div class="w-100">


    <section class="row">
      <div class="col-12">
        <h1>Bienvenidos Places {{ project }}</h1>
        <button class="btn btn-primary" type="button" name="button">Primaty Button</button>
        <hr>
        <p><nuxt-link to="/" class="text-link d-inline-block">< Inicio</nuxt-link></p>
      </div>
    </section>

    <!-- <p>{{ data }}</p> -->
    <section class="row">
      <place
        v-for="(place, index) in data"
        :title="place.artistName"
        :previewText="place.collectionName"
        :key="place.collectionId + index"
        :slug="place.artistName"
      />
    </section>

  </div>
</template>


<style scoped>
  h1 { color: green; }
</style>

<script type="text/javascript">
  import place from '@/components/place';
  import axios from 'axios';

  export default {

    head: {
      title: 'Places'
    },

    data() {
      return {
        project: 'default'
      }
    },

    asyncData ({ params, error }) {
      return axios.get(`https://itunes.apple.com/search?term=jack&limit=15`)
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

    components: {
      place
    },

    methods: {},
    mounted() {}

  }
</script>
