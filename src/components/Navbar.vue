<template>
  <div class="navbar">
    <router-link to="/dashboard" class="router-link">Dashboard</router-link>
    <ul>
      <li><i class="fa fa-sliders-h fa-2x"></i> Stats</li>
      <li v-on:click="dropdownToggle()">
        <i class="fa fa-bell"></i> 5 Notifications
        <i class="fa fa-sort-down"></i>
        <ul v-show="dropdown">
          <li>Notification 1</li>
          <li>Notification 2</li>
          <li>Notification 3</li>
          <li>Notification 4</li>
          <li>Notification 5</li>
        </ul>
      </li>
      <li><i class="fa fa-cog"></i> Settings</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    dropdownToggle: function() {
      this.dropdown = !this.dropdown;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 5px 5%;
  padding: 5px 20px 5px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  position: relative;

  margin: 0 0 0 auto;
  width: calc(100% - 260px);

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $grey-font-color;

      &:nth-child(2) {
        color: $dark-grey-color;
      }

      &:hover {
        color: grey;
      }

      .fa.fa-sort-down {
        float: right;
        margin-left: 5px;
      }

      .fa:not(:nth-child(2)) {
        font-size: 1rem;
        color: $lightgrey-font-color;
        position: relative;
        top: 1px;
      }

      ul {
        display: block;
        position: absolute;
        background: #fff;
        box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
        padding: 0;
        margin: 0;
        text-align: left;
        margin-top: 1.84rem;
        border-radius: 6px;
        z-index: 10;

        li {
          padding: 10px 45px 10px 15px;
          color: $dark-grey-color;
          font-size: 14px;
          text-transform: none;
          font-weight: 400;
        }

        li:hover {
          color: #fff;
          background: $dark-grey-color;
        }
      }
    }
  }
}
</style>
