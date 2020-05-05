<template functional>
  <div class="card" :class="props.styles">
    <div class="card-content p-0">
      <div class="card-image">
        <img :src="props.img" :alt="alt" class="responsive-img" />
      </div>
      <div class="social-links">
        <slot name="icon-content" />
      </div>

      <div class="text-content">
        <h4 class="display-5 has-text-weight-medium">{{ props.title }}</h4>
        <p>{{ props.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppImageCard",
  props: {
    styles: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true,
      default: "Title"
    },
    subtitle: {
      type: String,
      required: false,
      default: "Subtitle"
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &-content {
    position: relative;
    overflow: hidden;

    .card-image {
      img {
        width: 100%;
      }
    }

    .social-links {
      position: absolute;
      top: 16px;
      left: -45px;
      width: 40px;
    }

    .text-content {
      position: absolute;
      left: 0;
      bottom: -80px;
      background: #f2f2f2;
      text-align: center;
      padding: 12px 10px;
      width: 100%;
    }

    // Hover
    .card-image::before {
      content: "";
      bottom: 0;
      opacity: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(71, 38, 205, 0);
      background: linear-gradient(
        to bottom,
        rgba(71, 38, 205, 0) 0%,
        rgba(117, 205, 111, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#46c894', endColorstr='#46c894', GradientType=0);
      transition: all 0.3s ease-out 0s;
    }

    &:hover .card-image::before {
      opacity: 1;
    }

    &:hover .social-links {
      left: 16px;
    }
    &:hover .text-content {
      bottom: 0;
    }
  }
}
</style>
