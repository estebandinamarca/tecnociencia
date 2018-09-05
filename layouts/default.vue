<template>
  <div>

    <!-- Nav Desktop -->
    <nav class="d-none d-sm-block">
      <navigation/>
    </nav>

    <!-- Nav Mobile -->
    <transition name="panel-right">
      <nav class="" v-if="navMobile">
        <h1 v-on:click="toggleNav()">cerrar</h1>
        <navigation/>
      </nav>
    </transition>

    <main>
      <button type="button" name="button" v-on:click="navMobile = !navMobile">Menu Mobile</button>
      <p>{{ navMobile }}</p>
      <div class="overlay" v-if="navMobile" v-on:click="navMobile = false"></div>
      <nuxt/>
    </main>

  </div>
</template>

<style lang="scss" scoped>

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
    transition: right .3s;
    -webkit-transition: right .3s;
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



  .panel-right-enter-active,
  .panel-right-leave-active {
    transition: right .3s;
    -webkit-transition: right .3s;
  }

  .panel-right-enter {
    right: -100%;
  }

  .panel-right-enter-to,
  .panel-right-leave {
    right: 0;
  }

  .panel-right-leave-to {
    right: -100%;
  }


  main {
    margin-left: 20%;
  }


  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 575.98px) {
    main {
      margin: 0;
    }
    nav {
      width: 80%;
    }
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
        console.log('boolean');
        //this.navMobile = this.navMobile ? false : true;
      }
    }
  }
</script>
