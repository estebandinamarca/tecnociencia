import Vue from 'vue';

// Replace Tilde Categoria
Vue.filter('replaceCat', text => {
  if(text.includes('gia')){
    return text.charAt(0).toUpperCase() + text.slice(1).replace('gia', 'gía');
  } else if(text.includes('mia')) {
    return text.charAt(0).toUpperCase() + text.slice(1).replace('mia', 'mía');
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
});
