import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import UserProfile from './views/UserProfile.vue';
import Products from './views/Products.vue';
import TableList from './views/TableList.vue';
import Location from './views/Location.vue';
import Customers from './views/Customers.vue';
import Partners from './views/Partners.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: UserProfile
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/tablelist',
      name: 'tablelist',
      component: TableList
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    }
  ]
});
