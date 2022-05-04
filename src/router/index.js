import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/users/Index.vue";
import Store from "../views/users/Store.vue";
import View from "../views/users/View.vue";
import Update from "../views/users/Update.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/create",
    name: "user-create",
    component: Store,
  },
  {
    path: "/user/detail/{id}",
    name: "view-user",
    component: View,
  },

  {
    path: "/user/update/{id}",
    name: "user-update",
    component: Update,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
