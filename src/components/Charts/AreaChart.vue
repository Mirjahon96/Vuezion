<template>
  <div class="chart-card">
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="chart">
            <h4 class="heading-2">Users behavior</h4>
            <span>24 hours performance</span>
            <apexchart
              width="100%"
              height="275px"
              type="area"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div class="divider"></div>
        <span>
          <i class="fa fa-retweet"></i>
          Updated 5 minutes ago
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "AreaChart",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: ["#95c9d8", "#f3bb45", "#eb5e28"],
        legend: {
          show: true,
          horizontalAlign: "left",
          position: "bottom",

          labels: {
            colors: ["#b4b4b4"]
          }
        },

        markers: {
          colors: ["#3bcff8", "#ffb10e", "#ff520e"]
        },
        chart: {
          id: "users"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997]
        }
      },

      series: [
        {
          name: "Open",
          data: [23, 30, 40, 50, 55, 70]
        },
        {
          name: "Click",
          data: [10, 17, 25, 35, 43, 55]
        },
        {
          name: "Click Second Time",
          data: [4, 7, 12, 18, 25, 35]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.chart-card {
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

        // Chart Styles
        .chart {
          p {
            color: $dark-font-color;
            margin-bottom: 0;
          }
        }
      }

      .divider {
        width: 100%;
        margin: 0 auto 1rem auto;
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
