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
         faThumbsUp,
         faHeartbeat, 
         faSync,
         faCalendar,
         faFire
        } from '@fortawesome/free-solid-svg-icons'

// Brand Icons
import { faInstagram, 
         faFacebook, 
         faTwitter, 
         faYoutube } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// Font Awesome END


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
  faYoutube,
  faHeartbeat,
  faSync,
  faCalendar,
  faFire
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// No message specified.
extend('email', {
  ...email,
  message: 'please provide a valid e-mail'
});

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
