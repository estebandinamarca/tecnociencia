<template>
  <div class="w-100">

    <div class="container-fluid">
      <section class="row py-5">
        <div class="col-12">
          <h2 class="h3 display-4-md m-0 p-0 d-inline underline font-weight-bold">{{ $route.params.category | replaceCat }}</h2>
        </div>
      </section>
    </div>

    <div class="container-fluid">
      <section class="row">
        <place
          v-for="(place, index) in data.items"
          :title="place.fields.nombre"
          :previewText="place.fields.extracto"
          :key="place.sys.id + index"
          :slug="place.fields.nombre"
          :covers="data.includes.Asset"
          :coverid="place.fields.imgmain.sys.id"
          :href="'/rutas/' + place.fields.categoria + '/' + place.fields.slug"
        />
      </section>
    </div>

  </div>
</template>

<style>
</style>

<script type="text/javascript">
  import place from '@/components/place';
  import axios from 'axios';

  export default {
    data() {},
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
      //return axios.get(process.env.contentful.apiUrl + process.env.contentful.apiId + `/entries?content_type=place&fields.categoria=${params.category}&access_token=`+ process.env.contentful.accessToken +`&limit=10`)
      return axios.get(process.env.contentful.apiUrl + process.env.contentful.apiId + '/entries', {
        params: {
          'access_token': process.env.contentful.accessToken,
          'content_type': 'place',
          'fields.categoria': params.category,
          'limit': 10
        }
      }).then((response) => {
        return {
          data: response.data
        }
      })
      .catch((e) => {
        console.log(error);
        console.log(e);
        error({
          statusCode: 404,
          message: 'Contenido no encontrado'
        })
      })
    },
    methods: {},
    mounted() {}
  }
</script>
