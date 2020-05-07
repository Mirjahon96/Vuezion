<template>
  <carousel
    :loop="loop"
    :autoplay="autoplay"
    :items="items"
    :nav="nav"
    :margin="20"
    :responsive="responsive"
  >
    <div class="item" v-for="item in img" :key="item.id">
      <slot name="item" :item="item"></slot>
    </div>
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  // functional: true,
  name: "AppSlider",
  components: { carousel },
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    items: {
      type: Number,
      required: false,
      default: 6
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    nav: {
      type: Boolean,
      required: false,
      default: false
    },
    img: {
      type: [Array, Object],
      required: true
    },
    tooltip: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      responsive: {
        0: {
          items: 2,
          dots: false
        },
        600: {
          items: 3,
          dots: false
        },
        990: {
          items: 6
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 20px;
  background: #fff;
  transition: all 0.3s !important;
  border: none !important;
  &:hover {
    border: 1px solid #ffffff;
    margin-top: -6px;
    box-shadow: 0px 10px 46px -4px rgba(70, 200, 148, 0.5);
    transition: all 0.3s !important;
  }
}
</style>
