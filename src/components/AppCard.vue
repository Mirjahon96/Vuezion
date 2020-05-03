<template functional>
  <div
    class="card p-30 has-text-centered"
    :class="{ 'is-hoverable': props.hoverable, 'is-shadowless': props.shadowless }"
  >
    <div class="card-image mb-16">
      <img :src="props.card.img" class="is-responsive-img" />
    </div>
    <div class="card-content p-0">
      <h4 class="display-4 mb-16 has-text-weight-medium">{{ props.card.title }}</h4>
      <p>{{ props.card.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    card: {
      type: Object,
      required: true
    },
    hoverable: {
      type: Boolean,
      required: false,
      default: false
    },
    shadowless: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="scss"></style>
