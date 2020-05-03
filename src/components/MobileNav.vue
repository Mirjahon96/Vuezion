<template>
  <div id="mobile-nav">
    <!-- Sidenav -->
    <div id="sidenav">
      <div class="content">
        <p class="router-link">{{ this.$route.name }}</p>
      </div>
      <span @click="toggleSidenav()" class="closebtn">&#9776;</span>
      <div v-show="sidenav" class="sidenav">
        <ul>
          <li v-for="link in links" :key="link.text">
            <router-link :to="link.route">
              <i :class="link.icon"></i>
              <span>{{ link.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      sidenav: false,
      links: [
        // { icon: "fa fa-sliders-h", text: "Dashboard", route: "/" },
        // { icon: "fa fa-user", text: "User Profile", route: "/userprofile" },
        // { icon: "fa fa-list-alt", text: "Table List", route: "/tablelist" },
        // { icon: "fa fa-folder", text: "Products", route: "/products" },
        // { icon: "fa fa-users", text: "Customers", route: "/customers" },
        // { icon: "fa fa-handshake", text: "Partners", route: "/partners" },
        // { icon: "fa fa-map-marker", text: "Location", route: "/location" }
      ]
    };
  },
  methods: {
    toggleSidenav: function() {
      this.sidenav = !this.sidenav;
    }
  }
};
</script>

<style lang="scss" scoped>
#mobile-nav {
  display: none;
  margin-bottom: 1rem;

  #sidenav {
    position: relative;
    width: 100%;
    margin: 0 auto;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: $bg-light;
      height: 50px;
      color: $dark-font-color;
      padding: 5px 15px;
      border-bottom: 1px solid #ddd;

      p {
        text-transform: uppercase;
      }
    }

    .closebtn {
      position: absolute;
      top: 12px;
      right: 25px;
      font-size: 25px;
      color: #333333;
      cursor: pointer;
    }

    .sidenav {
      margin-top: -1rem;
      width: 100%;
      background-color: #fff;
      transition: 0.5s;
      padding-top: 0;
      display: block;
      position: relative;

      ul {
        padding: 1rem;
        list-style: none;
        li {
          // border-bottom: 1px solid #e8e8e8;
          padding: 1rem;

          a {
            color: $dark-font-color;
            opacity: 0.8;

            &:hover {
              opacity: 1;
            }
          }

          .fa {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
