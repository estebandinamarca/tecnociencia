<template>
  <article class="col-12 col-sm-6 col-md-4 align-self-stretch">
    <nuxt-link :to="href" class="w-100 h-100 p-0 m-0 d-block">
      <img class="img-fluid rounded m-0" src="https://images.unsplash.com/photo-1494137319847-a9592a0e73ed?ixlib=rb-0.3.5&ixid=&s=&auto=format&fit=crop&w=350&q=100" :alt="title">
      <h2 class="h5 font-weight-bold my-2">{{ title }}</h2>
      <p class="m-0 font-weight-light h6">{{ previewText }}</p>
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    props: [ 'title', 'previewText', 'slug', 'href' ]
  }
</script>
