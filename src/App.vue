<template>
  <div id="app">
    <AppTopNav v-if="showError" />
    <AppNavbar v-if="showError" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <AppBackToTop />
    <AppFooter v-if="showError" />
  </div>
</template>

<script>
import AppTopNav from "@/components/AppTopNav.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppBackToTop from "@/components/AppBackToTop.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppTopNav,
    AppNavbar,
    AppBackToTop,
    AppFooter
  },
  computed: {
    showError() {
      return this.$route.name !== "NotFound";
    }
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
