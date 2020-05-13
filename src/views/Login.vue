<template>
  <div id="register-page" class="pb-50 mb-30">
    <div class="container">
      <div class="columns is-align-centered pt-40">
        <!-- 1 -->
        <div class="column px-30">
          <h2 class="display-2 has-text-weight-medium mb-16">Login</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div class="my-20">
            <h5 class="display-5 has-text-weight-medium mb-12">You can Login With</h5>
            <AppIcon fab :icons="socialIcons">
              <template v-slot:icon="{ icon }">
                <a :href="icon.href" class="has-text-white">
                  <i :class="icon.name"></i>
                </a>
              </template>
            </AppIcon>
          </div>
        </div>
        <!-- 2 -->
        <div class="column">
          <form class="form-box p-30">
            <AppInput
              v-for="(field, index) in fields"
              :key="index"
              styles="is-rounded is-medium"
              :label="field.label"
              :placeholder="field.placeholder"
            />
            <div class="field py-20">
              <div class="control">
                <button type="submit" class="btn btn-green btn-rounded btn-large">Login</button>
              </div>
            </div>
            <div class="is-flex is-justified-between">
              <p class="has-text-weight-bold">Forgot Password?</p>
              <p class="has-text-weight-bold has-text-right">
                Don't Have an Account?
                <br />
                <router-link to="/login" class="has-text-green has-text-weight-bold">Register Now</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon";
import AppInput from "@/components/AppInput";
export default {
  name: "Login",
  components: {
    AppIcon,
    AppInput
  },
  data() {
    return {
      socialIcons: [
        { name: "fab fa-facebook-f", href: "#!" },
        { name: "fab fa-twitter", href: "#!" },
        { name: "fab fa-google", href: "#!" },
        { name: "fab fa-github", href: "#!" }
      ],
      fields: [
        { label: "Email", placeholder: "Email" },
        { label: "Password", placeholder: "Password" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#register-page {
  position: relative;

  .form-box {
    border: 2px solid $primary-color;
    border-radius: 10px;

    button {
      width: 100%;
    }
  }
}

ul#app-icon {
  li.fab {
    margin-right: 1rem;
    &:hover {
      opacity: 0.8;
      background: initial;
    }

    &:nth-child(1) {
      background-color: #3d5f9a;
    }
    &:nth-child(2) {
      background-color: #44c0f3;
    }
    &:nth-child(3) {
      background-color: #dd4b39;
    }
    &:nth-child(4) {
      background-color: #252729;
    }
  }
}

#input-field {
  .field {
    .label {
      font-weight: 600 !important;
    }
  }
}
</style>
