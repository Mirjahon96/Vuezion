<template>
  <div id="card-container">
    <div class="card" v-for="card in cards" :key="card.text">
      <div class="card-content">
        <div class="row">
          <div class="card-body">
            <div>
              <i v-bind:class="[card.icon, card.color]"></i>
            </div>
            <div class="numbers">
              <p>{{ card.text }}</p>
              <h2>{{ card.count }}</h2>
            </div>
          </div>
          <div class="divider"></div>
          <span>
            <i v-bind:class="card.spanIcon"></i>
            {{ card.spanText }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      cards: [
        {
          icon: "fas fa-database fa-3x",
          color: "text-warning",
          text: "Capacity",
          count: "1TB",
          spanIcon: "fas fa-retweet",
          spanText: "Updated Now"
        },
        {
          icon: "fas fa-wallet fa-3x",
          color: "text-success",
          text: "Revenue",
          count: "7,433",
          spanIcon: "fas fa-calendar-week",
          spanText: "Last Day"
        },
        {
          icon: "fas fa-window-close fa-3x",
          color: "text-danger",
          text: "Errors",
          count: "12",
          spanIcon: "fas fa-stopwatch",
          spanText: "In The Last Hour"
        },
        {
          icon: "fab fa-twitter fa-3x",
          color: "text-info",
          text: "Followers",
          count: "+10000",
          spanIcon: "fas fa-retweet",
          spanText: "Updated Now"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#card-container {
  display: flex;
  flex-wrap: wrap;

  .card {
    flex: 1;

    &-content {
      padding: 5px 15px 10px;

      .card-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        .numbers {
          text-align: right;

          p {
            color: $dark-font-color;
            margin-bottom: 0;
          }

          h2 {
            font-size: 28px;
            font-weight: 500;
            margin: 0;
          }
        }
      }

      .divider {
        width: 100%;
      }

      span {
        font-size: 14px;
        color: $lightgrey-font-color;

        .fas {
          margin-right: 4px;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
