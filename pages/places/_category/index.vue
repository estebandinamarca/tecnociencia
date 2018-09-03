<template>
  <div class="container-fluid">
    <section>
      <h2>{{ title }} : {{ $route.params.category }}</h2>
    </section>

    <section class="row">
      <place
        v-for="(place, index) in data.items"
        thumbnail=""
        :title="place.fields.nombre"
        :previewText="place.fields.extracto"
        :key="place.sys.id + index"
        :slug="place.fields.nombre"
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
    head: {
      title: 'Category Page'
    },
    components: {
      place
    },
    data() {
      return {
        title: 'Category'
      }
    },
    asyncData ({ params, error }) {
      //return axios.get(`https://itunes.apple.com/search?term=${params.category}&limit=10`)
      return axios.get(`https://cdn.contentful.com/spaces/t72z2lh7n4xf/entries?access_token=965bcecaa8a53e1ff31fde30437b9cfb2bf4a48657ec12bfbe5e4d570e524b21&content_type=place&fields.categoria=${params.category}&limit=10`)
      .then((response) => {
        return {
          data: response.data
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
    methods: {},
    mounted() {}
  }
</script>
