<template>
  <div id="dashboard">
    <Card />
    <AreaChart />
    <PieChart />
    <div class="clear"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import AreaChart from "@/components/Charts/AreaChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";

export default {
  name: "Dashboard",
  components: {
    Card,
    AreaChart,
    PieChart
  },
  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
}
</style>
