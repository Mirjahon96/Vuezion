<template>
  <div id="blog-page">
    <!-- Showcase -->
    <div class="blog-showcase pb-40">
      <AppHero
        titleStyle="display-2 has-text-weight-bold mb-16"
        title="Blog Details"
        text="Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book."
        :img="require('@/assets/about-us-5.png')"
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
          <span class="has-text-white">Blog Details</span>
        </button>
      </AppHero>
    </div>

    <!-- Blog Content -->
    <section class="blog-content">
      <div class="container">
        <div class="columns">
          <!-- 1 -->
          <div class="column is-2 has-text-centered">
            <button class="has-background-green has-text-white badge title is-3">
              12
              <p class="subtitle is-6 has-text-white">Aug</p>
            </button>
            <AppIcon fab :icons="socialIcons">
              <template v-slot:icon="{ icon }">
                <a :href="icon.href" class="has-text-green">
                  <i :class="icon.name"></i>
                </a>
              </template>
            </AppIcon>
          </div>
          <!-- 2 -->
          <div class="column is-7">
            <div class="image">
              <img src="@/assets/blog-img1.jpg" alt="blog img" class="responsive-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import AppIcon from "@/components/AppIcon";

export default {
  name: "Blog",
  components: {
    AppHero,
    AppIcon
  },
  data() {
    return {
      socialIcons: [
        { name: "fab fa-facebook-f", href: "#!" },
        { name: "fab fa-twitter", href: "#!" },
        { name: "fab fa-google", href: "#!" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#blog-page {
  position: relative;

  // Content
  .blog-content {
    .badge {
      border-radius: 50%;
      border: none;
      outline: none;
      height: 80px;
      width: 80px;
      padding-top: 10px;
    }
  }
}

// AppIcon component
ul#app-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
}
</style>
