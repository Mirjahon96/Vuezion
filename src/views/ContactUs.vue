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
    <section class="contact-form pb-40">
      <div class="container">
        <div class="columns">
          <!-- 1 column -->
          <div class="column is-6">
            <h3 class="display-3 has-text-weight-bold">Get in Touch</h3>
            <p class="has-text-weight-medium mb-30">It is a long established fact</p>
            <form>
              <div class="columns is-multiline">
                <div class="column is-6">
                  <!-- 1 field -->
                  <AppInput styles="is-rounded is-medium" label="Name" placeholder="Your Name" />
                </div>
                <!-- 2 field -->
                <div class="column is-6">
                  <AppInput styles="is-rounded is-medium" label="Email" placeholder="Your Email" />
                </div>
                <!-- 3 field -->
                <div class="column is-12">
                  <AppInput
                    styles="is-rounded is-medium"
                    label="Phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <!-- 4 field -->
                <div class="column is-12">
                  <AppInput
                    textarea
                    styles="is-rounded is-medium"
                    label="Message"
                    placeholder="Type Your Message Number"
                  />
                  <div class="field py-30">
                    <div class="control">
                      <button type="submit" class="btn btn-green btn-rounded btn-large">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- 2 column -->
          <div class="column is-5 is-offset-1">
            <div class="notification has-background-green py-30 px-32">
              <h2 class="display-2 has-text-white has-text-weight-medium mb-20">Contact Info</h2>
              <p
                class="has-text-white mb-12 has-text-weight-medium"
                v-for="(info, i) in contactInfo"
                :key="i"
              >
                <span class="pr-16 subtitle is-5">
                  <i :class="info.icon"></i>
                </span>
                {{ info.text }}
              </p>

              <div class="map image pt-12">
                <img src="@/assets/contact-us-map.png" alt="map" class="responsive-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section class="contact-clients pt-30">
      <div class="container">
        <AppHeadingTitle title="They Trust Me" />
        <AppSlider :img="clients">
          <template v-slot:item="item">
            <img :src="item.item" />
          </template>
        </AppSlider>
      </div>
    </section>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import AppInput from "@/components/AppInput";
import AppSlider from "@/components/AppSlider";
import AppHeadingTitle from "@/components/AppHeadingTitle";

export default {
  name: "ContactUs",
  components: {
    AppHero,
    AppInput,
    AppSlider,
    AppHeadingTitle
  },
  data() {
    return {
      contactInfo: [
        { icon: "fa fa-phone", text: "+998998594175" },
        { icon: "fa fa-envelope", text: "auden.05@mail.ru" },
        {
          icon: "fa fa-map-marker",
          text: "Taskkent, Bekabad Muqumiy 13. 550110 UZB"
        }
      ],
      // Our clients
      clients: [
        require("@/assets/clients-img1.png"),
        require("@/assets/clients-img5.png"),
        require("@/assets/clients-img6.png"),
        require("@/assets/clients-img4.png"),
        require("@/assets/clients-img2.png"),
        require("@/assets/clients-img3.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#contact-us-page {
  position: relative;

  .contact-clients {
    padding-bottom: 100px;
    img {
      width: auto;
      margin: 0 auto;
    }
  }
}
</style>
