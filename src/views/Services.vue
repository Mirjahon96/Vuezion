<template>
  <div id="services-page">
    <!-- Showcase -->
    <section class="services-showcase pb-40">
      <AppHero>
        <AppHero
          titleStyle="display-2 has-text-weight-bold mb-16"
          title="Services"
          text="Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          :img="require('@/assets/page-about-img1.png')"
          responsiveShowcase
        >
          <button
            slot="btn-content"
            class="btn navbar-item btn-rounded has-background-green is-borderless py-16 px-30"
          >
            <router-link to="/" class="has-text-darkgrey is-transitionless pr-4">
              <i class="fa fa-home"></i>
              Home
            </router-link>/
            <span class="has-text-white">Services</span>
          </button>
        </AppHero>
      </AppHero>
    </section>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";

export default {
  name: "Services",
  components: {
    AppHero
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#services-page {
  position: relative;
}
</style>
