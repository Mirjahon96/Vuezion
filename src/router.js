import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import UserProfile from "./views/UserProfile.vue";
import Projects from "./views/Projects.vue";
import TableList from "./views/TableList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: UserProfile

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/tablelist",
      name: "tablelist",
      component: TableList
    }
  ]
});
