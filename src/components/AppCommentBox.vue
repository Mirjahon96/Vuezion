<template functional>
  <div id="comment-box">
    <div class="media">
      <figure class="media-left">
        <p class="image pb-8">
          <img
            :src="props.avatar"
            :style="{ width: props.avatarSize }"
            :class="{ 'is-rounded-img' : props.rounded  }"
          />
        </p>
      </figure>
      <slot name="media-content">
        <div class="media-content">
          <div>
            <h5 class="display-5 has-text-weight-medium mb-8">{{ props.title }}</h5>
            <a href="#!" class="is-subtitle-1" :class="{ 'is-hoverless': props.hoverlessLink}">
              <i class="fas fa-calendar has-text-primary"></i>
              {{ props.subtitle }}
            </a>
            <p class="is-subtitle-1 mt-20">{{ props.text }}</p>
          </div>
        </div>
      </slot>

      <div class="media-right" v-if="props.reply">
        <a href="#!">Reply</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppCommentBox",
  props: {
    avatar: {
      type: String,
      required: false,
      default: require("@/assets/blog-comment-1.jpg")
    },
    avatarSize: {
      type: String,
      required: false,
      default: "90px"
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    hoverlessLink: {
      type: Boolean,
      required: false,
      default: false
    },
    reply: {
      type: Boolean,
      require: false,
      default: false
    }
  }
};
</script>

<style lang="scss">
#comment-box {
  a {
    color: inherit;
    &:hover {
      color: $primary-color;
    }
  }
  p {
    line-height: 2;
  }
}
</style>
