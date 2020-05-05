<template>
  <div id="app-tabs">
    <ul class="tab-content" :class="tabStyle">
      <li v-for="(tab, index) in tabs" :key="index">
        <button
          class="btn btn-rounded is-borderless px-50"
          :class="{'active' : tab.active}"
          @click.prevent="switchTab(tab.hash, true)"
        >{{ tab.name }}</button>
      </li>
    </ul>
    <!-- tab content -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppTabs",
  props: {
    tabStyle: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      tabs: []
    };
  },
  methods: {
    findTab(hash) {
      return this.tabs.find(tab => {
        return tab.hash === hash || `#${tab.hash}` === hash;
      });
    },
    switchTab(hash, switchHash = true) {
      const selectedTab = this.findTab(hash);

      if (typeof selectedTab === "undefined") {
        return;
      }

      this.tabs.forEach(tab => {
        tab.active = tab.hash === selectedTab.hash;
      });

      if (switchHash) {
        this.$router.replace({
          hash: selectedTab.hash
        });
      }
    }
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.switchTab(this.tabs[0].hash, false);

    if (this.$route.hash) {
      this.switchTab(this.$route.hash, false);
    }
  }
};
</script>

<style lang="scss" scoped>
#app-tabs {
  .tab-content {
    padding: 8px;
    background: #d8f3e8;
    border: 1px solid #d8f3e8;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0 auto;
  }

  .btn:hover {
    color: #fff;
    background-image: $linear-bg;
  }
}

.hero-body {
  padding: 0 !important;
}

.active {
  color: #fff;
  background: $linear-bg;
}
</style>