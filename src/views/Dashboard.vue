<template>
  <div class="main-wrapper">
    <div class="dashboard">
      <Card></Card>
      <AreaChart></AreaChart>
      <PieChart></PieChart>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import AreaChart from "@/components/Charts/AreaChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";

export default {
  name: "dashboard",
  components: {
    Card,
    AreaChart,
    PieChart
  }
};
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
}
</style>
