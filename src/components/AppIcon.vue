<template functional>
  <ul>
    <li v-for="(icon, index) in props.icons" :key="index">
      <slot name="icon" :icon="icon" />
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
    }
  }
};
</script>

<style lang="scss" scoped></style>