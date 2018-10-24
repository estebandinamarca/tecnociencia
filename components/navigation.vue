<template>
  <div>
    <div class="w-100 d-block px-4 py-5 text-center">
      <img src="~static/imgs/logo.jpg" class="img-fluid px-5">
    </div>
    <div class="w-100 d-block pl-0 pr-3 m-0 text-left">
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/" @click.native.prevent="$emit('navclick', false);" exact>Inicio</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/arqueologia" @click.native.prevent="$emit('navclick', false);">Arqueología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/astronomia" @click.native.prevent="$emit('navclick', false);">Astronomía</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/geologia" @click.native.prevent="$emit('navclick', false);">Geología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/vulcanologia" @click.native.prevent="$emit('navclick', false);">Vulcanología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/paleontologia" @click.native.prevent="$emit('navclick', false);">Paleontología</nuxt-link>
      <nuxt-link class="d-block font-weight-bold py-3 pl-5 scale" to="/rutas/ecologia" @click.native.prevent="$emit('navclick', false);">Ecología</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  a { border-left: 8px solid #FFF; }
  a.nuxt-link-active { border-color: red; }
</style>
