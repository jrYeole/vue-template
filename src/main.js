// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/assets/css/bootstrap.min.css'
// import VueI18n from 'vue-i18n'

// Vue.use(VueI18n)
// Vue.use(vueI18n.plugin, i18n)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // i18n,
  template: '<App/>',
  components: { App }
})
