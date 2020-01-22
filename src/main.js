import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  currency
} from '@/currency';

import Email from 'vue-material-design-icons/Email.vue';
import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import PhoneInTalk from 'vue-material-design-icons/PhoneInTalk.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';

Vue.component('email', Email);
Vue.component('cart-plus', CartPlus);
Vue.component('phone-in-talk', PhoneInTalk);
Vue.component('map-marker', MapMarker);

export const eventBus = new Vue({
  methods: {
    sendToCart(cart) {
      this.$emit('productWasEdited', cart);
    }
  }
});

Vue.config.productionTip = false;

Vue.filter('currency', currency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');