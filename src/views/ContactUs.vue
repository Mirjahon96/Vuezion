<template>
  <div id="contact-us-page">
    <!-- Showcase -->
    <div class="contact-showcase pb-40">
      <AppHero
        titleStyle="display-2 has-text-weight-bold mb-16"
        title="Contact Us"
        text="Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        :img="require('@/assets/page-contact-img.png')"
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
          <span class="has-text-white">Contact Us</span>
        </button>
      </AppHero>
    </div>

    <!-- Contact Form -->
    <section></section>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";

export default {
  name: "ContactUs",
  components: {
    AppHero
  }
};
</script>

<style lang="scss" scoped>
#contact-us-page {
  position: relative;

  .contact-showcase {
  }
}
</style>
