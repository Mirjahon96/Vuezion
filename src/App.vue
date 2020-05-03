<template>
  <div id="app">
    <AppTopNav />
    <AppNavbar />
    <!-- <MobileNav /> -->
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppTopNav from "@/components/AppTopNav.vue";
import AppNavbar from "@/components/AppNavbar.vue";
// import MobileNav from "@/components/MobileNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppTopNav,
    AppNavbar,
    // MobileNav,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  * {
    transition: linear 0.2s;
  }
}
</style>
