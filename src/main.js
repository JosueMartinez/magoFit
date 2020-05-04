import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Font-Awesome

import { library } from '@fortawesome/fontawesome-svg-core'

// Solid Icons
import { faUserSecret, 
         faMapMarkerAlt,
         faBaseballBall,
         faDumbbell,
         faCheckCircle, 
         faWeight, 
         faAppleAlt, 
         faCalendarCheck, 
         faAddressCard, 
         faThumbsUp } from '@fortawesome/free-solid-svg-icons'

// Brand Icons
import { faInstagram, 
         faFacebook, 
         faTwitter, 
         faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(
  faUserSecret, 
  faMapMarkerAlt, 
  faBaseballBall, 
  faDumbbell, 
  faCheckCircle, 
  faWeight, 
  faAppleAlt, 
  faCalendarCheck, 
  faAddressCard, 
  faThumbsUp, 
  faInstagram, 
  faFacebook, 
  faTwitter, 
  faYoutube
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
