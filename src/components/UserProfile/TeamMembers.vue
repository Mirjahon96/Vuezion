<template>
  <div class="team-members">
    <div class="card">
      <div class="card-content">
        <h2 class="heading-2">Team Members</h2>
        <div class="card-body">
          <div
            class="team-content"
            v-for="(member, index) in members"
            :key="index"
          >
            <div class="team-images">
              <img :src="member.img" alt="member" />
            </div>
            <div class="team-text">
              <p>{{ member.text }}</p>
              <small :class="member.color">{{ member.smallText }}</small>
            </div>
            <div class="team-icons">
              <button>
                <i :class="member.icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMembers",

  data() {
    return {
      members: [
        {
          img: require("../../assets/person1.jpg"),
          text: "John Doe",
          smallText: "Online",
          icon: "fas fa-envelope",
          color: "text-success"
        },
        {
          img: require("../../assets/person3.jpg"),
          text: "Joan Doe",
          smallText: "Busy",
          icon: "fas fa-envelope",
          color: "text-danger"
        },
        {
          img: require("../../assets/garry.jpg"),
          text: "Garry",
          smallText: "Offline",
          icon: "fas fa-envelope",
          color: "text-secondary"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.team-members {
  display: flex;
  align-items: center;

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

  .team-content {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 1rem;
    padding-top: 1rem;
    align-items: center;

    .team-images {
      img {
        display: block;
        // width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .team-text {
      p {
        margin: 0;
        font-size: 15px;
      }

      small {
        font-size: 12px;
        font-weight: 500;
      }
    }

    .team-icons {
      margin: 0 15px 0 auto;

      button {
        border: 2px solid $text-success;
        background-color: #fff;
        border-radius: 50%;
        padding: 8px;
        outline: none;
        cursor: pointer;
        transition: background-color 0.2s;

        .fas {
          font-size: 18px;
          color: $text-success;
        }

        &:hover {
          .fas {
            color: #c3e8d8;
            transition: color 0.4s;
          }
          background-color: $text-success;
          transition: background-color 0.2s;
        }
      }
    }
  }
}
</style>
