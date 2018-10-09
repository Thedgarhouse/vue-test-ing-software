// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Also this comment is added to test git on 08/Oct/2016 @ 20:10
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import axios from 'axios'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('192.168.10.10/api/users')
      .then(response => (this.info = response))
  }
})
