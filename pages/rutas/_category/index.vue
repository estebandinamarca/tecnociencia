<template>
  <div class="container-fluid">

    <section class="row">
      <h2>{{ $route.params.category | replaceCat }}</h2>
    </section>

    <section class="row">
      <place
        v-for="(place, index) in data.items"
        thumbnail=""
        :title="place.fields.nombre"
        :previewText="place.fields.extracto"
        :key="place.sys.id + index"
        :slug="place.fields.nombre"
        :href="'/rutas/' + place.fields.categoria + '/' + place.fields.slug"
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
    data() {
      return {
        //title: 'Tecnociencia'
      }
    },
    head() {
      return {
        title: 'Tecnociencia en ruta',
        titleTemplate: `%s | ` + this.$options.filters.replaceCat(this.$route.params.category) //this.data.sys.type
      }
    },
    components: {
      place
    },
    asyncData ({ params, error }) {
      return axios.get(process.env.contentful.apiUrl + process.env.contentful.apiId +`/entries?content_type=place&fields.categoria=${params.category}&access_token=`+ process.env.contentful.accessToken +`&limit=10`)
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
          message: 'Posts no encontrados.'
        })
      })
    },
    methods: {},
    mounted() {
      //console.log(process.env.contentful.accessToken);
    }
  }
</script>
