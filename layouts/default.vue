<template>
  <div>

    <!-- Nav Desktop -->
    <nav class="d-none d-sm-block">
      <navigation></navigation>
    </nav>

    <!-- Nav Mobile -->
    <transition name="panel-left">
      <nav v-if="navMobile">
        <navigation @navclick="toggleNav"></navigation>
      </nav>
    </transition>

    <main>

      <!-- Overlay -->
      <div class="overlay" v-if="navMobile" @click="toggleNav()"></div>

      <!-- Header Mobile -->
      <header class="fixed-top d-sm-none bg-white">
        <div class="container-fluid px-0">
          <div class="row no-gutters align-items-center">
            <div class="col-3">
              <a class="h4 d-block py-3 m-0 text-center" href="" @click.prevent="toggleNav()"><i class="fas fa-bars"></i></a>
            </div>
            <div class="col-6">
              <p class="text-center p-0 m-0"><nuxt-link to="/">Tecnociencia</nuxt-link></p>
            </div>
            <div class="col-3">
              <a class="h4 d-block py-3 m-0 text-center" href="" @click.prevent="toggleNav()"><i class="fas fa-map-marker-alt"></i></a>
            </div>
          </div>
        </div>
      </header>

      <!-- Nuxt App -->
      <nuxt></nuxt>

    </main>

  </div>
</template>

<style lang="scss" scoped>

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
    // padding-top: 57px;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 575.98px) {
    main {
      margin: 0;
      padding-top: 57px
    }
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
  import navigation from '@/components/navigation';

  export default {
    data(){
      return {
        navMobile: false
      }
    },
    components: {
      navigation
    },
    methods: {
      toggleNav() {
        this.navMobile = !this.navMobile //? false : true;
      }
    },
    mounted() {
      //console.log(process.env.contentful);
    }
  }
</script>
