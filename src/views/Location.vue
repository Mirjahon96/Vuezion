<template>
  <div id="location">
    <Map />
  </div>
</template>

<script>
import ThemeSwitch from "../components/ThemeSwitch.vue";
import Map from "../components/Map.vue";

export default {
  name: "location",
  components: {
    Map,
    ThemeSwitch
  }
};
</script>

<style lang="scss" scoped>
</style>
