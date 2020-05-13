<template>
  <div class="backToTop">
    <a
      href="#!"
      class="has-text-weight-bold has-text-white btn btn-green"
      @scroll="onScroll()"
      @click="toTop"
    >
      <i class="fas fa-long-arrow-alt-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    // Back To Top
    onScroll() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.querySelector(".backToTop").style.display = "block";
      } else {
        document.querySelector(".backToTop").style.display = "none";
      }
    },
    toTop() {
      document.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.backToTop {
  position: fixed;
  right: 40px;
  bottom: 10px;
  z-index: 200;
}
</style>
