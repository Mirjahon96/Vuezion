import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyCqWovXX0jtlG53Rgjtif0kyHMghq7r83Y",
//     libraries: "places" // This is required if you use the Autocomplete plugin
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
