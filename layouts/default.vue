<template>
  <div>

    <!-- Nav Desktop -->
    <nav class="d-none d-sm-block">
      <div class="w-100 d-block px-0 py-5 text-center">
        <h1 class="m-0">Logo</h1>
      </div>
      <div class="w-100 d-block pl-0 pr-3 m-0 text-left">
        <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/arqueologia">Arqueología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/astronomia">Astronomía</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/geologia">Geología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/vulcanologia">Vulcanología</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/paleontologia">Paleontología</nuxt-link>
      </div>
    </nav>

    <!-- Nav Mobile -->
    <transition name="panel-left">
      <nav class="" v-if="navMobile" key="">
        <div class="w-100 d-block px-0 py-5 text-center">
          <h1 class="m-0">Logo</h1>
        </div>
        <div class="w-100 d-block pl-0 pr-3 m-0 text-left">
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/" @click.native.prevent="toggleNav()" exact>Inicio</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/arqueologia" @click.native.prevent="toggleNav()">Arqueología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/astronomia" @click.native.prevent="toggleNav()">Astronomía</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/geologia" @click.native.prevent="toggleNav()">Geología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/vulcanologia" @click.native.prevent="toggleNav()">Vulcanología</nuxt-link>
          <nuxt-link class="d-block font-weight-bold py-3 pl-5" to="/rutas/paleontologia" @click.native.prevent="toggleNav()">Paleontología</nuxt-link>
        </div>
      </nav>
    </transition>

    <main>

      <header class="fixed-top d-sm-none bg-white">
        <div class="container-fluid px-0">
          <div class="row no-gutters align-items-center">
            <div class="col-3">
              <a class="h4 d-block py-3 m-0 text-center" href="" @click.prevent="toggleNav()"><i class="fas fa-bars"></i></a>
            </div>
            <div class="col-6">
              <p class="text-center p-0 m-0"><nuxt-link class="" to="/">Tecnociencia</nuxt-link></p>
            </div>
            <div class="col-3">
              <a class="h4 d-block py-3 m-0 text-center" href="" @click.prevent="toggleNav()"><i class="fas fa-map-marker-alt"></i></a>
            </div>
          </div>
        </div>
      </header>

      <div class="overlay" v-if="navMobile" @click="toggleNav()"></div>

      <nuxt/>
    </main>

  </div>
</template>

<style scoped>

  /* Nav */
  nav {
    position: fixed;
    z-index: 1032;
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

  nav a {
    border-left: 8px solid #FFF;
  }

  nav a.nuxt-link-active {
    border-color: red;
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
    z-index: 1031;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
  }

  main {
    margin-left: 20%;
    padding-top: 57px;
  }


  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 575.98px) {
    main { margin: 0; }
    nav { width: 85%; }
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
      console.log(process.env.contentful);
    }
  }
</script>
