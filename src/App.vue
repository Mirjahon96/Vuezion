<template>
  <div id="app">
    <Navbar></Navbar>

    <Sidebar></Sidebar>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  .divider {
    border-bottom: 1px solid #ddd;
    width: 100%;
    margin: 1rem auto;
  }
}
body {
  background-color: $bg-light;
  margin: 0;
  line-height: 1.5;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

.router-link {
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: $dark-grey-color;
}

* {
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem 1rem;
}

.text {
  &-white {
    color: #fff;
  }

  &-warning {
    color: $text-warning;
  }

  &-success {
    color: $text-success;
  }

  &-danger {
    color: $text-danger;
  }

  &-info {
    color: $text-info;
  }
}

.main-wrapper {
  background-color: #f4f3ef;
  position: relative;
  z-index: 2;
  float: right;
  width: calc(100% - 260px);
  min-height: 100%;
  overflow: auto;
}

.fas {
  font-weight: 600;
}

// Chart Styles

line {
  border-style: dashed;
}

.apexcharts-legend {
  bottom: 0 !important;
  padding: 0 !important;
}

// Pie Chart
.resize-triggers,
.resize-triggers > div,
.contract-trigger:before {
  display: none !important;
}
</style>
