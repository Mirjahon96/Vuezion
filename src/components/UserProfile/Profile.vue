<template>
  <div class="profile">
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="profile-img">
            <img src="@/assets/me.jpg" alt />
          </div>
          <div class="profile-content">
            <h4>Chel M96</h4>
            <small>@ChelM96</small>
            <p>
              "I like the way you work it
              <br />No diggity <br />I wanna bag it up"
            </p>
          </div>

          <div class="divider"></div>

          <div class="footer-content">
            <p>
              98
              <small>Files</small>
            </p>
            <p>
              65GB
              <small>Used</small>
            </p>
            <p>
              177.5$
              <small>Spent</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex: 1;
  text-align: center;

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

      .card-body {
        padding: 10px 10px;

        h4 {
          font-size: 18px;
          font-weight: 600;
          margin: 2rem 0 0 0;
          color: #403d39;
        }

        .profile-img {
          img {
            display: block;
            width: 100%;
          }
        }

        .profile-content {
          margin: 1rem 0;

          p {
            font-size: 1rem;
            color: $darkgrey-font-color;
            margin-bottom: 2rem;
          }
        }
      }

      .divider {
        width: 100%;
        margin: 0 auto 2rem auto;
      }

      .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 1.5rem;

        p {
          margin: 0;
        }
      }

      small {
        color: $lightgrey-font-color;
        display: block;
      }
    }
  }
}
</style>
