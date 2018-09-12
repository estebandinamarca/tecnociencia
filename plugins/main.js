import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      navMobile: false
    }
  },
  methods: {
    toggleNav() {
      console.log('------- toggleNav() ------------');
      this.navMobile = !this.navMobile;
      console.log(this.navMobile);
    }
  },
  mounted() {
    console.log('---------- MIXIN -------------');
    console.log(this.navMobile);
  }
})
