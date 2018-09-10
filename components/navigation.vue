<template>
  <div>
    <div class="w-100 d-block p-0 my-5 text-center">
      <h1 v-on:click="navMobile = false">Logo</h1>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/arqueologia"><span @click.prevent="$emit('toggleNav')">Arqueología</span></nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/astronomia" @click.prevent="toggleNav()">Astronomía</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/geologia">Geología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/vulcanologia">Vulcanología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/paleontologia">Paleontología</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  a.nuxt-link-active {
    background: #CCC;
  }
</style>
