<template>
  <div class="sidebar">
    <nav class="main-menu">
      <div class="divider" :class="{'grey-border' : !darkMode, 'white-border' : darkMode}">
        <a href="#" class="logo">
          <img src="@/assets/logo.png" alt />
          <span
            class="title"
            :class="{ 'light-text': darkMode, 'grey-text': !darkMode }"
          >Epicweb Dashboard</span>
        </a>
      </div>
      <ul>
        <router-link v-for="link in links" :key="link.id" :to="link.route">
          <li class="list">
            <i :class="[link.icon, { 'light-text': darkMode, 'dark-text': !darkMode }]"></i>
            <span
              class="nav-text"
              :class="{ 'light-text': darkMode, 'dark-text': !darkMode }"
            >{{ link.text }}</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [
        { icon: "fa fa-sliders-h", text: "Dashboard", route: "/" },
        { icon: "fa fa-user", text: "User Profile", route: "/userprofile" },
        { icon: "fa fa-list-alt", text: "Table List", route: "/tablelist" },
        { icon: "fa fa-folder", text: "Products", route: "/products" },
        { icon: "fa fa-users", text: "Customers", route: "/customers" },
        { icon: "fa fa-handshake", text: "Partners", route: "/partners" },
        { icon: "fa fa-map-marker", text: "Location", route: "/location" }
      ]
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  background-size: cover;
  background-position: center center;

  .main-menu {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    width: 250px;
    z-index: 4;
    display: block;

    .divider {
      width: 90%;
      margin: 0.399rem auto;
    }

    img {
      width: 70px;
    }

    .logo {
      color: $darkgrey-font-color;
      font-size: 14px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-bottom: 1.1rem;
      padding: 5px;
    }

    ul {
      list-style: none;
      padding-left: 0;

      .list {
        margin-bottom: 1rem;
        padding: 10px 2rem;
        cursor: pointer;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }

        i.fa {
          margin-right: 15px;
          color: $dark-font-color;
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          float: left;
        }
      }

      .nav-text {
        // color: $dark-font-color;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
}
</style>
