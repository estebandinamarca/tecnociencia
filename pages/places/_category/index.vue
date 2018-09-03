<template>
  <div class="container-fluid">
    <section>
      <h2>{{ $route.params.category }}</h2>
    </section>

    <section class="row">
      <place
        v-for="(place, index) in data"
        thumbnail=""
        :title="place.artistName"
        :previewText="place.collectionName"
        :key="place.collectionId + index"
        :slug="place.artistName"
      />
    </section>
  </div>
</template>

<style scoped>
</style>

<script type="text/javascript">
  import place from '@/components/place';
  import axios from 'axios';
  export default {
    components: {
      place
    },
    data() {
      return {
        title: 'Category Page'
      }
    },
    asyncData ({ params, error }) {
      return axios.get(`https://itunes.apple.com/search?term=${params.category}&limit=10`)
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
    }
  }
</script>
