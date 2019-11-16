<template>
  <div class="edit-profile">
    <div class="card">
      <div class="card-content">
        <h4 class="heading-2">Edit Profile</h4>
        <div class="card-body">
          <!-- Form -->
          <Form></Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "EditProfile",
  components: {
    Form
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.edit-profile {
  display: flex;
  flex: 2;

  .card {
    border-radius: 6px;
    box-shadow: 0 2px 2px hsla(38, 16%, 76%, 0.5);
    background-color: #fff;
    color: #252422;
    position: relative;
    z-index: 1;
    border: none;
    margin: 1rem 1rem;

    &-content {
      padding: 10px 20px 10px;

      .heading-2 {
        margin-top: 1rem;
      }

      .card-body {
        padding: 10px 10px;
      }
    }
  }
  .divider {
    width: 100%;
    margin: 0 auto 1rem auto;
  }
}
</style>
