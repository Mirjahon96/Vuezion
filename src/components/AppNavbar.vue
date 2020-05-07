<template>
  <div id="main-navbar">
    <nav
      v-on:srcoll="navbarScroll"
      ref="navbar"
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#!">
            <img ref="logoDark" src="@/assets/logo.png" />
            <img ref="logoLight" src="@/assets/logo-white.png" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="main-nav"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="main-nav" class="navbar-menu pr-16">
          <ul class="navbar-end">
            <li v-for="link in links" :key="link.id">
              <router-link :to="link.href" class="navbar-item custom-item">{{ link.name }}</router-link>
            </li>
            <div class="navbar-item has-dropdown" @click="dropdown = !dropdown">
              <li class="custom-item mr-0 pr-12">
                <a class="navbar-link py-0 pl-0">Pages</a>
              </li>
              <div v-show="dropdown" class="navbar-dropdown">
                <router-link to="/blog" class="navbar-item">Blog Details</router-link>
                <a class="navbar-item">Coming Soon</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  components: {},
  data() {
    return {
      dropdown: false,
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" }
      ]
    };
  },
  methods: {
    navbarScroll() {
      let navItem = document.querySelectorAll(".custom-item, .navbar-link"),
        i;
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        this.$refs.navbar.style.position = "fixed";
        this.$refs.navbar.style.top = "0";
        this.$refs.navbar.style.background =
          "linear-gradient(to right, rgba(117, 205, 111, 1) 0%, rgba(70, 200, 148, 1) 100%)";

        this.$refs.navbar.style.boxShadow =
          "0px 0px 30px 0px rgba(0, 0, 0, 0.1)";
        this.$refs.logoLight.style.display = "block";
        this.$refs.logoDark.style.display = "none";
        // links
        for (i = 0; i < navItem.length; ++i) {
          navItem[i].classList.add("light-custom-item");
        }
      } else {
        this.$refs.navbar.style.position = "relative";
        this.$refs.navbar.style.background = "#ffffff00";
        this.$refs.navbar.style.boxShadow = "none";
        this.$refs.logoLight.style.display = "none";
        this.$refs.logoDark.style.display = "block";
        for (i = 0; i < navItem.length; ++i) {
          // navItem[i].style.color = "initial";
          navItem[i].classList.remove("light-custom-item");
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.navbarScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.navbarScroll);
  }
};
</script>

<style lang="scss">
</style>
