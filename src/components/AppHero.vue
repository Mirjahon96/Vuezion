<template functional>
  <div class="hero" :class="{'responsive-showcase' : props.responsiveShowcase}">
    <div class="hero-body px-0" :class="{'p-0' : props.paddingless}">
      <div class="container">
        <div
          class="columns"
          :class="{ 'is-row-reverse': props.rowReverse, 'responsive-showcase' : props.responsiveShowcase}"
        >
          <!-- 1 -->
          <div
            class="column flex-item is-align-self-centered pt-40"
            :class="{'p-0' : props.paddingless}"
          >
            <h4 :class="props.topTitleStyle">{{ props.topTitle }}</h4>
            <h2 :class="props.titleStyle">{{ props.title }}</h2>
            <p class="mb-24">{{ props.text }}</p>
            <div class="is-flex is-align-centered">
              <slot name="btn-content">
                <button class="btn btn-green btn-rounded btn-large">Read More</button>
              </slot>
              <a v-if="props.link" :href="props.href" class="is-video has-text-centered ml-20">
                <i class="fa fa-play ml-4"></i>
              </a>
            </div>
          </div>
          <!-- 2 -->
          <div class="column flex-item">
            <div class="image px-24">
              <img :src="props.img" class="responsive-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "AppHero",
  props: {
    rowReverse: {
      type: Boolean,
      required: false,
      default: false
    },
    centerAlign: {
      type: Boolean,
      required: false,
      default: false
    },
    responsiveShowcase: {
      type: Boolean,
      required: false,
      default: false
    },
    topTitleStyle: {
      type: String,
      required: false
    },
    topTitle: {
      type: String,
      required: false,
      default: null
    },
    titleStyle: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: "#!"
    },
    paddingless: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="scss">
</style>
