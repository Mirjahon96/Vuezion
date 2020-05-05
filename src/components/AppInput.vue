<template functional>
  <div id="input-field">
    <div class="field">
      <label class="label has-text-weight-medium has-text-grey">{{ props.label }}</label>
      <div class="control">
        <input
          v-if="props.textarea == false"
          :class="props.styles"
          class="input custom-input"
          :type="props.type"
          :placeholder="props.placeholder"
        />

        <textarea
          v-else-if="props.textarea"
          :class="props.styles"
          class="textarea custom-textarea"
          :placeholder="props.placeholder"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppInput",
  props: {
    textarea: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: "label"
    },
    styles: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    placeholder: {
      type: String,
      required: false,
      default: "placeholder"
    }
  }
};
</script>

<style lang="scss"></style>
