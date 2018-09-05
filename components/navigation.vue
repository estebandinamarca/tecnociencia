<template>
  <div>
    <div class="w-100 d-block p-0 my-5 text-center">
      <h1 v-on:click="toggleNav()">Logo</h1>
    </div>
    <div class="w-100 d-block pl-5 pr-3">
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/arqueologia"><span v-on:click="toggleNav()">Arqueología</span></nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/astronomia" v-on:click.native="toggleNav()">Astronomía</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/geologia">Geología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/vulcanologia">Vulcanología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/paleontologia">Paleontología</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  a.nuxt-link-active {
    background: #CCC;
  }
</style>
