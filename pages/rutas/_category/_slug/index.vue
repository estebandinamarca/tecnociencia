<template>
  <div class="container-fluid">

    <section class="row">
      <div class="col-12">
        <h2><nuxt-link to="/">< Inicio</nuxt-link></h2>
        <h2><nuxt-link :to="'/rutas/' + this.$route.params.category">Volver a {{ this.$route.params.category | replaceCat }}</nuxt-link></h2>
      </div>
    </section>

    <section class="row">
      <div class="col-12" v-for="(item, index) in data.items">
        <h3>{{ item.fields.nombre }}</h3>
        <p>{{ item.fields.extracto }}</p>
      </div>
    </section>

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
    asyncData ({ params, error }) {
      return axios.get(`https://cdn.contentful.com/spaces/t72z2lh7n4xf/entries?fields.slug=${params.slug}&content_type=place&access_token=965bcecaa8a53e1ff31fde30437b9cfb2bf4a48657ec12bfbe5e4d570e524b21&limit=1`)
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
    }
  }
</script>
