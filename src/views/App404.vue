<template functional>
  <div id="404">
    <div class="container">
      <div class="columns has-text-centered">
        <div class="column mt-50 pt-50">
          <img src="@/assets/error-404.png" alt="page not found" class="responsive-img" />
          <h2 class="display-2 has-text-weight-medium mt-20 mb-40">Sorry the page not found</h2>
          <router-link
            to="/"
            class="btn btn-green btn-rounded btn-large has-text-white"
          >Go To Home Page</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
  name: "NotFound"
};
</script>

<style lang="scss" scoped></style>
