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
      return axios.get(`https://cdn.contentful.com/spaces/t72z2lh7n4xf/entries?content_type=place&fields.categoria=${params.category}&access_token=965bcecaa8a53e1ff31fde30437b9cfb2bf4a48657ec12bfbe5e4d570e524b21&limit=10`)
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
    methods: {
      // replaceCatText(text) {
      //   if(text === 'arqueologia'){
      //     return 'Arqueología'
      //   } else {
      //     return text
      //   }
      // }
    },
    mounted() {
      // console.log('data: ' + JSON.stringify(this.data));
      // this.title = this.data.sys.type;
      // console.log('this.title: ' + this.title);
    }
  }
</script>
