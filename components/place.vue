<template>
  <article class="col-12 col-sm-6 col-md-6 align-self-stretch">
    <nuxt-link :to="href" class="w-100 h-100 py-5 mb-1 d-block">
      <div v-for="img in covers" v-if="coverid === img.sys.id">
        <img class="img-fluid rounded m-0" :src="img.fields.file.url + '?w=600&h=400&fit=fill'" :alt="title">
      </div>
      <h2 class="font-weight-bold my-3">{{ title }}</h2>
      <p class="m-0 h5 font-weight-light">{{ previewText }}</p>
    </nuxt-link>
  </article>
</template>

<style scoped>
  /* img {
    -webkit-clip-path: polygon(17% 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(17% 0, 100% 0, 100% 100%, 0 100%);
  } */
</style>


<script>
  export default {
    props: [ 'title', 'previewText', 'slug', 'href', 'covers', 'coverid' ]
  }
</script>
