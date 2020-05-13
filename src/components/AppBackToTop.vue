<template>
  <div id="back-to-top">
    <a href="#!" @click="toTop" class="backToTop">
      Scroll Up
      <i class="fas fa-arrow-up"></i>
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
#back-to-top {
  position: absolute;
  right: 40px;
  bottom: 0;
}
</style>
