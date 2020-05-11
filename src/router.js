import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import ContactUs from "./views/ContactUs.vue";
import Blog from "./views/Blog.vue";
import NotFound from "./views/App404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/services",
      name: "Services",
      component: Services
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
