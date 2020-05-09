<template functional>
  <div id="input-field">
    <div class="field">
      <label class="label has-text-weight-medium has-text-grey">{{ props.label }}</label>
      <div class="control" :class="{'has-icons-right': props.icon }">
        <input
          v-if="props.textarea == false"
          :class="props.styles"
          class="input custom-input"
          :type="props.type"
          :placeholder="props.placeholder"
          required
        />

        <textarea
          v-else-if="props.textarea"
          :class="props.styles"
          class="textarea custom-textarea"
          :placeholder="props.placeholder"
        ></textarea>

        <span class="icon is-small is-right">
          <i :class="props.iconName"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppInput",
  props: {
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    iconName: {
      type: String,
      required: false,
      default: ""
    },
    textarea: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false
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
