<template>
  <footer class="footer px-0">
    <div class="container px-30">
      <div class="content-box">
        <div class="logo-img">
          <img src="@/assets/logo-white.png" alt="logo" />
        </div>
        <div class="links">
          <ul class="is-flex is-align-centered">
            <li>
              <a href="#!" class="navbar-item">Home</a>
            </li>
            <li>
              <a href="#!" class="navbar-item">About Us</a>
            </li>
            <li>
              <a href="#!" class="navbar-item">Services</a>
            </li>
            <li>
              <a href="#!" class="navbar-item">Contact Us</a>
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
            <li>
              <a href="#!" class="navbar-item">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!" class="navbar-item">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!" class="navbar-item">
                <i class="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#!" class="navbar-item pr-0">
                <i class="fab fa-pinterest"></i>
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
    return {};
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
