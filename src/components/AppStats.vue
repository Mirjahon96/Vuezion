<template>
  <div class="has-text-centered">
    <div class="p-24">
      <h4 :class="headingStyle">
        <ICountUp
          :start="0"
          :delay="delay"
          :endVal="endVal"
          :options="options"
          :duration="4"
          @ready="onReady"
        />
      </h4>
      <p :class="subheadingStyle">{{ stat.text }}</p>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  name: "AppStats",
  components: {
    ICountUp
  },
  props: {
    stat: {
      type: Object,
      required: true
    },
    headingStyle: {
      type: String,
      required: false
    },
    subheadingStyle: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      delay: 1300,
      endVal: this.stat.title,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ""
      }
    };
  },
  methods: {
    onReady: function(instance) {
      instance.update(this.endVal);
    }
  }
};
</script>

<style lang="scss"></style>
