<template>
  <div id="top-nav">
    <nav class="navbar" role="topnav" aria-label="top navigation">
      <div class="container">
        <div id="topnav" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown" @click="dropdown = !dropdown">
              <a
                class="navbar-link"
                :class="[
                  dropdown ? 'has-text-success' : 'has-text-grey-darker'
                ]"
              >English</a>
              <div v-show="dropdown" class="navbar-dropdown">
                <a class="navbar-item">Uzbek</a>
                <a class="navbar-item">Arabic</a>
                <a class="navbar-item">French</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <router-link to="/login" class="navbar-item">Login</router-link>
            <span class="navbar-item is-size-7 is-paddingless">/</span>
            <router-link to="/register" class="navbar-item">Register</router-link>
            <div class="navbar-item py-0">
              <a
                class="button is-green is-radiusless is-borderless is-bold fullheight"
              >Request a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppTopNav",
  data() {
    return {
      dropdown: false
    };
  }
};
</script>

<style lang="scss"></style>
