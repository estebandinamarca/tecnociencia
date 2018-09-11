<template>
  <div>

    <!-- Nav Desktop -->
    <nav class="d-none d-sm-block">
      <div class="w-100 d-block px-0 py-5 text-center">
        <h1 class="m-0">Logo</h1>
      </div>
      <div class="w-100 d-block px-5 m-0 text-left">
        <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/arqueologia">Arqueología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/astronomia">Astronomía</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/geologia">Geología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/vulcanologia">Vulcanología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/paleontologia">Paleontología</nuxt-link>
      </div>
    </nav>

    <!-- Nav Mobile -->
    <transition name="panel-left">
      <nav class="" v-if="navMobile" key="">
        <div class="w-100 d-block px-0 py-5 text-center">
          <h1 class="m-0">Logo</h1>
        </div>
        <div class="w-100 d-block px-5 m-0 text-left">
          <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/arqueologia" @click.native.prevent="toggleNav()">Arqueología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/astronomia" @click.native.prevent="toggleNav()">Astronomía</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/geologia" @click.native.prevent="toggleNav()">Geología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/vulcanologia" @click.native.prevent="toggleNav()">Vulcanología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-2" to="/rutas/paleontologia" @click.native.prevent="toggleNav()">Paleontología</nuxt-link>
        </div>
      </nav>
    </transition>

    <main>
      <a href="" @click.prevent="toggleNav()">Menu Mobile</a>
      <p>{{ navMobile }}</p>
      <div class="overlay" v-if="navMobile" @click="toggleNav()"></div>
      <nuxt/>
    </main>

  </div>
</template>

<style scoped>

  /* Nav */
  nav {
    position: fixed;
    z-index: 3;
    background: white;
    width: 20%;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
  }
  nav a.nuxt-link-active {
    background: #CCC;
  }
  .panel-left-enter-active,
  .panel-left-leave-active {
    transition: left .3s;
  }
  .panel-left-enter,
  .panel-left-leave-to {
    left: -100%;
  }

  .overlay {
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
  }

  main {
    margin-left: 20%;
  }


  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 575.98px) {
    main { margin: 0; }
    nav { width: 90%; }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (max-width: 767.98px) {}

  /* Large devices (desktops, 992px and up) */
  @media (max-width: 991.98px) {}

  /* Extra large devices (large desktops, 1200px and up) */
  @media (max-width: 1199.98px) {}
</style>

<script>
  //import navigation from '@/components/navigation';
  export default {
    data(){
      return {
        navMobile: false
      }
    },
    // components: {
    //   navigation
    // },
    methods: {
      toggleNav() {
        console.log('boolean');
        this.navMobile = this.navMobile ? false : true;
      }
    },
    mounted() {
      console.log(process.env.hello);
    }
  }
</script>
