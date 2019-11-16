<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <MobileNav />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    MobileNav,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  .light-text {
    color: #fff;
  }

  * {
    transition: 0.3s ease-in-out;
  }

  #dashboard,
  #user-profile,
  #table-list,
  #products,
  #customers,
  #location,
  .footer,
  #partners {
    // background-color: #f4f3ef;
    position: relative;
    z-index: 2;
    float: right;
    width: calc(100% - 260px);
    min-height: 100%;
    overflow: auto;
  }

  .dark-text {
    color: $dark-font-color;
  }

  .grey-text {
    color: $grey-font-color;

    &:hover {
      color: $dark-font-color;
    }
  }

  .grey-border {
    border-color: #ddd;
  }
  .white-border {
    border-color: #fff;
  }
}

.bg {
  &-lightgrey {
    background-color: $lightgrey-font-color;
  }
  &-dark {
    background-color: $darkgrey-font-color;
  }
}

body {
  background-color: $bg-light;
  margin: 0;
  line-height: 1.5;
  font-family: "Montserrat", sans-serif;
}

.divider {
  border-bottom: 1px solid #ddd;
  width: 100%;
  margin: 0.6rem auto;
  position: relative;
  padding: 0.1rem 0;
}

a {
  text-decoration: none;
}

.router-link {
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: $darkgrey-font-color;
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

  &-secondary {
    color: $text-secondary;
  }
}

.text {
  &-left {
    text-align: left;
  }
  &-center {
    text-align: center;
  }
  &-right {
    text-align: right;
  }
}

// Margin & Padding
$spaceamounts: (0, 1, 2, 3, 4, 5);

@each $space in $spaceamounts {
  // All around margin
  .m-#{$space} {
    margin: #{$space}rem !important;
  }

  // Bottom margin
  .mb-#{$space} {
    margin-bottom: #{$space}rem !important;
  }

  // Top margin
  .mt-#{$space} {
    margin-top: #{$space}rem !important;
  }

  // Right margin
  .mr-#{$space} {
    margin-right: #{$space}rem;
  }

  // Left margin
  .ml-#{$space} {
    margin-left: #{$space}rem;
  }

  // Vertical margin
  .my-#{$space} {
    margin-top: #{$space}rem;
    margin-bottom: #{$space}rem;
  }

  // All around padding
  .p-#{$space} {
    padding: #{$space}rem !important;
  }
  // Top padding
  .pt-#{$space} {
    padding-top: #{$space}rem;
  }
  // Bottom padding
  .pb-#{$space} {
    padding-bottom: #{$space}rem;
  }
  // Y padding
  .py-#{$space} {
    padding: #{$space}rem 0;
  }
  // Padding left
  .pl-#{$space} {
    padding-left: #{$space}rem;
  }
  // Padding right
  .pr-#{$space} {
    padding-right: #{$space}rem !important;
  }
}

.text-center {
  text-align: center;
}

.heading {
  font-weight: 500;
  color: $dark-font-color;
  margin: 0;
  &-2 {
    font-size: 21px;
  }
  &-4 {
    font-size: 18px;
  }
}

.btn {
  border: none;
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  outline: none;

  &-blue {
    background-color: $text-info;

    &:hover {
      background-color: #38b1d2;
    }
  }
  &-red {
    background-color: #e65252;

    &:hover {
      background-color: #d15050;
    }
  }
  &-light {
    background-color: #f1f5f7;
    color: #343a40;

    &:hover {
      background-color: #d9e4e9;
    }
  }
}

.card {
  border-radius: 6px;
  box-shadow: 0 2px 2px hsla(38, 16%, 76%, 0.5);
  background-color: #fff;
  color: #252422;
  position: relative;
  z-index: 1;
  border: none;
  margin: 1rem;
}

.fas,
.fa {
  font-weight: 600;
}

// Chart Styles
.apexcharts-legend {
  bottom: 0 !important;
  padding: 0 !important;
}

line {
  border-style: dashed;
}

// Pie Chart
.resize-triggers,
.resize-triggers > div,
.contract-trigger:before {
  display: none !important;
}
</style>
