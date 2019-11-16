<template>
  <!-- Sales Chart -->
  <div class="sales">
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="chart">
            <h4 class="heading-2">2019 Income</h4>
            <span>All statistics including users</span>
            <apexcharts
              height="320px"
              width="100%"
              type="line"
              :options="chartOptions"
              :series="series"
            ></apexcharts>
          </div>
        </div>
        <div class="divider"></div>
        <span>
          <i class="fa fa-retweet"></i>
          Updated 1 hour ago
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import apexChart
import VueApexCharts from "vue-apexcharts";

export default {
  name: "LineChart",
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Session Duration",
          data: [20, 34, 38, 24, 33, 26, 21, 42, 48, 55, 60, 70]
        },
        {
          name: "Page Views",
          data: [7, 9, 13, 18, 24, 27, 36, 23, 38, 45, 50, 62]
        },
        {
          name: "Total Visits",
          data: [0, 10, 22, 37, 42, 38, 47, 52, 63, 56, 45, 47]
        }
      ],
      chartOptions: {
        chart: {
          zoom: {
            enabled: true
          },
          foreColor: "#b4b4b4"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 3, 5]
        },
        legend: {
          show: true,
          horizontalAlign: "left",
          position: "bottom"
        },

        markers: {
          size: 0,

          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },

        tooltip: {
          y: [
            {
              title: {
                formatter: function(val) {
                  return val + " (mins)";
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val + " per session";
                }
              }
            },
            {
              title: {
                formatter: function(val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: "#d7d7d7"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sales {
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
</style>
