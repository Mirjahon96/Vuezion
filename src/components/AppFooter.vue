<template>
  <footer class="footer">
    <p>Copyright &copy; 2019</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  border-top: solid 1px #ddd;
  text-align: center;
  clear: both;

  p {
    padding: 1.2rem 1.2rem;
    margin: 0;
    color: $darkgrey-font-color;
    font-size: 14px;
  }
}
</style>
