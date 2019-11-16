<template>
  <div
    v-on:click="toggleDarkMode()"
    class="toggle"
    v-bind:class="{ 'light-toggle': !darkMode, 'dark-toggle': darkMode }"
  >
    <div
      class="toggle-switch"
      v-bind:class="{ 'toggle-left': !darkMode, 'toggle-right': darkMode }"
    >
      <img v-if="darkMode" src="@/assets/moon.svg">
      <img v-if="!darkMode" src="@/assets/sun.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  data() {
    return {};
  },
  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  border-radius: 10px;
  width: 45px;
  display: flex;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s;
}

img {
  vertical-align: middle;
  padding: 0 5px 3px;
}

.light-toggle {
  background: linear-gradient(346, 78deg, #f7fcfc 0%, #fafcfa);
  // border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.9);
  // border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  border-radius: 8px;
  // padding: 15px 35px;
  // margin: 2px;
}

.toggle-left {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
}

.toggle-right {
  // background: #1b233f;
  background: linear-gradient(
    176deg,
    rgba(71, 31, 189, 1) 0%,
    rgba(156, 39, 179, 1) 100%
  );
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(70%);
}
</style>
