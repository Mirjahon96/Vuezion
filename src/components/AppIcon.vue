<template functional>
  <ul id="app-icon">
    <li v-for="(icon, index) in props.icons" :key="index" :class="{ fab: props.fab }">
      <slot name="icon" :icon="icon"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  functional: true,
  name: "AppIcon",
  props: {
    icons: {
      type: [Array, Object],
      required: true
    },
    fab: {
      type: Boolean,
      required: false,
      default: false
    },
    hrefStyle: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: Number,
      required: false,
      default: 20
    }
  }
};
</script>

<style lang="scss">
ul {
  position: relative;
  li.fab {
    margin: 5px 0;
    border-radius: 50%;
    background: #fff;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 42px;
  }
  li.fab:hover {
    background: $linear-bg;
    a {
      color: #fff;
      transition: none !important;
    }
  }
}
</style>
