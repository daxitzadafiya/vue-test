import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(VueSweetalert2);
Vue.use(BootstrapVueIcons);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
