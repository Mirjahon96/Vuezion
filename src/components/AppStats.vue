<template functional>
  <div class="has-text-centered">
    <div class="p-24">
      <h4 :class="props.headingStyle">{{ props.stat.title }}</h4>
      <p :class="props.subheadingStyle">{{ props.stat.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppStats",
  props: {
    stat: {
      type: Object,
      required: true
    },
    headingStyle: {
      type: String,
      required: false
    },
    subheadingStyle: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss"></style>
