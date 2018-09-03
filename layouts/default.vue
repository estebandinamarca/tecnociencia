<template>
  <div>

    <nav>
      <div class="w-100 d-block p-0 my-5 text-center">
        <h1>Logo</h1>
      </div>
      <div class="w-100 d-block pl-5 pr-3">
        <nuxt-link class="d-block font-weight-bold py-2" to="/places/astronomia">Astronomía</nuxt-link>
        <nuxt-link class="d-block font-weight-bold py-2" to="/places/geologia">Geología</nuxt-link>
      </div>
    </nav>

    <main>
      <nuxt/>
    </main>

  </div>
</template>

<style scoped>
  nav {
    position: fixed;
    left: 0;
    background: white;
    width: 20%;
    height: 100vh;
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
      display: none
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (max-width: 767.98px) {}

  /* Large devices (desktops, 992px and up) */
  @media (max-width: 991.98px) {}

  /* Extra large devices (large desktops, 1200px and up) */
  @media (max-width: 1199.98px) {}
</style>

<script></script>
