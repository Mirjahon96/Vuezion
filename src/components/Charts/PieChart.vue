<template>
  <div class="email-sales-charts">
    <!-- Email Statistics -->
    <div class="pie-chart">
      <div class="card">
        <div class="card-content">
          <div class="card-body">
            <h4 class="heading-2">Email Statistics</h4>
            <span>Last campaign performance</span>
            <div class="chart">
              <apexcharts
                type="pie"
                width="380px"
                :options="chartOptions"
                :series="series1"
              />
            </div>
          </div>
          <div class="divider"></div>
          <span>
            <i class="fas fa-stopwatch"></i>
            Campaign set 2 days ago
          </span>
        </div>
      </div>
    </div>
    <!-- Sales (Line) Chart -->
    <LineChart></LineChart>
  </div>
</template>

<script>
// import apexChart
import VueApexCharts from "vue-apexcharts";
import LineChart from "@/components/Charts/LineChart.vue";

export default {
  name: "PieChart",
  components: {
    apexcharts: VueApexCharts,
    LineChart
  },
  data() {
    return {
      series1: [35, 12, 47, 70],
      chartOptions: {
        labels: ["Requests", "Unsubscribes", "Subscribes", "Feedbacks"],
        legend: {
          show: true,
          horizontalAlign: "left",
          position: "bottom"
        },

        chart: {
          foreColor: "#b4b4b4"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.email-sales-charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-bottom: 2rem;

  .pie-chart {
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
          padding: 0 10px;

          // Chart Styles
          .chart {
            position: relative;
            padding: 0.5rem 0;

            p {
              color: $dark-font-color;
              margin-bottom: 0;
            }
          }
        }

        .divider {
          width: 100%;
          margin: 1rem auto 1rem auto;
        }

        span {
          font-size: 14px;
          color: $lightgrey-font-color;
          display: block;
          padding-bottom: 10px;

          .fas {
            margin-right: 5px;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
