<template>
  <article class="place">
    <h1>{{ title }}</h1>
    <p>{{ previewText }}</p>
    <!-- <img :src="thumbnail" :alt="title"> -->
    <nuxt-link :to="'/places/' + slug">Ver más ></nuxt-link>
    <hr>
  </article>
</template>


<style scoped>
  .place { background: #CCC; }
  h1 { color: red; }
</style>

<script>
  export default {
    props: ['thumbnail', 'title', 'previewText', 'slug' ]
  }
</script>
