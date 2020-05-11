<template>
  <footer class="footer px-0">
    <div class="container px-30">
      <div class="content-box">
        <div class="logo-img">
          <img src="@/assets/logo-white.png" alt="logo" />
        </div>
        <div class="links">
          <ul class="is-flex is-align-centered">
            <li v-for="(link, i) in links" :key="i">
              <router-link :to="link.route" class="navbar-item">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="has-background-white mt-40 mb-20 pt-1"></div>
      <div class="is-flex is-justified-between is-align-centered">
        <div>
          <p class="has-text-white">
            Copied with
            <span class="px-1">
              <i class="fas fa-heart has-text-danger"></i>
            </span>
            by
            <a class="has-text-white" href="#!">M96</a>
          </p>
        </div>

        <div class="social-links">
          <ul class="is-flex is-align-centered">
            <li v-for="s in socialLinks" :key="s.id">
              <a href="#!" class="navbar-item">
                <i :class="s"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      links: [
        { route: "/", name: "Home" },
        { route: "/about", name: "About Us" },
        { route: "/services", name: "Services" },
        { route: "/contact", name: "Contact Us" }
      ],
      socialLinks: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-google",
        "fab fa-pinterest"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 2.5rem;
  background: $linear-bg;

  .content-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-img {
    img {
      height: 40px;
      max-width: 100%;
      max-height: inherit;
    }
  }

  ul {
    li {
      a {
        color: #fff;
        background: none;
        font-size: 18px;
        padding: 8px 16px;
        &:hover {
          color: $dark-font-color;
        }
      }
    }
  }
}
</style>
