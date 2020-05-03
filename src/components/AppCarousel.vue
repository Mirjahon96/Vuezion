<template>
  <carousel :loop="true" :autoplay="true" :nav="false" :dots="false" :responsive="responsive">
    <div class="item" v-for="(item, i) in listCarousel" :key="i">
      <div class="columns is-gapless">
        <div class="column has-background-lightblue">
          <div class="text-content p-30">
            <h5 class="display-4 has-text-weight-medium mb-12">{{ item.title }}</h5>
            <div class="is-flex is-align-centered">
              <span class="is-subtitle-1 has-text-weight-bold">By:</span>
              <a href="#!" class="is-subtitle-1 has-text-grey-darker pl-8">Admin</a>
              <span class="is-subtitle-1 has-text-weight pl-16">May 10, 2020</span>
            </div>
            <p class="is-subtitle-1 my-20">
              Build virtual agents to automate business processes such
              as front desk customer engagement.
            </p>
            <div class="buttons">
              <button class="button btn-green-inverse is-borderless is-subtitle-1">Design</button>
              <button class="button btn-green-inverse is-borderless is-subtitle-1">Style</button>
            </div>
          </div>
        </div>

        <div class="column image">
          <img :src="item.img" style="height: 100%" />
        </div>
      </div>
    </div>
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "AppCarousel",
  components: { carousel },
  data() {
    return {
      responsive: {
        0: {
          items: 1,
          dots: false
        },
        600: {
          items: 1,
          dots: false
        },
        990: {
          items: 2
        }
      },
      listCarousel: [
        {
          title: "Established fact that a reader will be",
          img: require("@/assets/blog-img1.jpg")
        },
        {
          title: "Established fact that a reader will be",
          img: require("@/assets/blog-img2.jpg")
        },
        {
          title: "Established fact that a reader will be",
          img: require("@/assets/blog-img1.jpg")
        },
        {
          title: "Established fact that a reader will be",
          img: require("@/assets/blog-img2.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.text-content {
  position: relative;
  &::after {
    position: absolute;
    right: -15px;
    top: 40px;
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid #e8f8f2;
    border-bottom: 10px solid transparent;
    z-index: 9;
  }
}
</style>