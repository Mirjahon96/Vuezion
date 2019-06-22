<template>
  <div class="sidebar">
    <nav class="main-menu">
      <div class="divider">
        <a href="#" class="logo">
          <img src="@/assets/logo.png" alt />
          <span>Epicweb Dashboard</span>
        </a>
      </div>
      <ul>
        <!-- <li v-for="(link, index) in links" :key="index" router :to="link.route">
          {{ link.text }}
          <i>{{ link.icon }}</i>
          <span class="nav-text">{{ link.text }}</span>
        </li>-->
        <router-link to="/">
          <li>
            <i class="fa fa-sliders-h"></i>
            <span class="nav-text">Dashboard</span>
          </li>
        </router-link>

        <router-link to="/userprofile">
          <li>
            <i class="fa fa-user"></i>
            <span class="nav-text">User Profile</span>
          </li>
        </router-link>

        <router-link to="/tablelist">
          <li>
            <i class="fa fa-list-alt"></i>
            <span class="nav-text">Table Lists</span>
          </li>
        </router-link>

        <router-link to="/projects">
          <li>
            <i class="fa fa-folder"></i>
            <span class="nav-text">Projects</span>
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
      // links: [
      //   { icon: "dashboard", text: "Dashboard", route: "/" },
      //   { icon: "user", text: "User Profile", route: "/userprofile" },
      //   { icon: "table", text: "Table List", route: "/tablelist" },
      //   { icon: "folder", text: "Projects", route: "/projects" }
      // ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: #fff;
  background-size: cover;
  background-position: center center;

  .main-menu {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    width: 260px;
    z-index: 4;
    display: block;

    img {
      width: 70px;
    }

    .logo {
      color: $dark-grey-color;
      font-size: 14px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-bottom: 1.2rem;
      padding: 5px;
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      margin-bottom: 1rem;
      padding: 10px 2rem;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      .nav-text {
        color: $dark-font-color;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .fa {
        margin-right: 15px;
        color: $dark-grey-color;
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        float: left;
      }
    }
  }
}
</style>
