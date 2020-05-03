<template functional>
  <div class="heading-title has-text-centered mb-50 pb-16">
    <h2 :class="headingStyle" class="display-2 has-text-weight-bold">{{ props.title }}</h2>
    <p :class="subheadingStyle">{{ props.text }}</p>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    text: {
      type: String,
      required: false,
      default: "Simply dummy has been the industry's standard dummy text."
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

<style lang="scss" scoped></style>