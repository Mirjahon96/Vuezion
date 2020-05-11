<template>
  <div id="home-page">
    <!-- Showcase -->
    <section class="home-showcase">
      <AppHero
        topTitle="Artificial Intelligence"
        topTitleStyle="is-size-4 has-text-weight-medium has-text-success"
        titleStyle="display-1 has-text-weight-bold mb-16"
        title="AI for Marketing"
        text="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
        :img="require('@/assets/showcase.png')"
        link
        responsiveShowcase
      />
    </section>
    <!-- How it works -->
    <section class="how-it-works pt-50 pb-30">
      <div class="container">
        <div class="columns">
          <div class="column is-4" v-for="box in howItWorks" :key="box.id">
            <AppCard :card="box" hoverable />
          </div>
        </div>
      </div>
    </section>

    <!-- Features - 1 -->
    <section class="features-1 pb-40">
      <AppHero
        row-reverse
        titleStyle="display-3 has-text-weight-bold mb-16"
        title="Fully dedicated to finding the best solutions."
        text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :img="require('@/assets/04.png')"
      />
    </section>

    <!-- Stats -->
    <section class="stats-box py-40">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column" v-for="(stat, i) in statBoxes" :key="i">
            <AppStats
              :stat="stat"
              headingStyle="display-1 has-text-weight-normal has-text-white mb-12"
              subheadingStyle="display-5 has-text-weight-medium has-text-white"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features - 2 -->
    <section class="features-2 py-50">
      <AppHero
        titleStyle="display-3 has-text-weight-bold mb-16"
        title="Get tips & tricks on how to skyrocket your sales."
        text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :img="require('@/assets/05.png')"
      />
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <AppHeadingTitle title="Service Provide" />
        <div class="columns is-multiline">
          <div class="column is-4" v-for="box in services" :key="box.id">
            <AppCard :card="box" hoverable />
          </div>
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section class="blog">
      <div class="container">
        <AppHeadingTitle title="Recent Stories" />
        <AppCarousel />
      </div>
    </section>

    <!-- Our Clients -->
    <section class="our-clients">
      <div class="container">
        <AppHeadingTitle title="They Trust Me" />
        <AppSlider :img="clients">
          <template v-slot:item="{ item }">
            <img :src="item.img" :title="item.name" />
          </template>
        </AppSlider>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHero from "../components/AppHero.vue";
import AppCard from "../components/AppCard.vue";
import AppStats from "../components/AppStats.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppSlider from "../components/AppSlider.vue";
import AppHeadingTitle from "../components/AppHeadingTitle.vue";

export default {
  name: "Home",
  components: {
    AppHero,
    AppCard,
    AppStats,
    AppCarousel,
    AppSlider,
    AppHeadingTitle
  },
  data() {
    return {
      // How it works
      howItWorks: [
        {
          img: require("@/assets/01.png"),
          title: "Fully Support",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/02.png"),
          title: "Product Review",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/03.png"),
          title: "Product Analysis",
          text:
            "There are many variations of passages of the have suffered in some form."
        }
      ],
      // Stats
      statBoxes: [
        {
          title: 575,
          text: "Increase in Leads"
        },
        {
          title: 1540,
          text: "Lift in ROI"
        },
        {
          title: 110,
          text: "Increase in Conversions"
        },
        {
          title: 90,
          text: "Decrease in ECPA"
        }
      ],

      // Services
      services: [
        {
          img: require("@/assets/services-1.png"),
          title: "Targeting Autonomous",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/services-2.png"),
          title: "Media Buying",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/services-3.png"),
          title: "Analytics & Insights",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/services-4.png"),
          title: "Optimization & Testing",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/services-5.png"),
          title: "Cross-Channel Execution",
          text:
            "There are many variations of passages of the have suffered in some form."
        },
        {
          img: require("@/assets/services-6.png"),
          title: "Advanced Monitoring",
          text:
            "There are many variations of passages of the have suffered in some form."
        }
      ],

      // Our clients
      clients: [
        { img: require("@/assets/clients-img1.png"), name: "HTML5" },
        { img: require("@/assets/clients-img5.png"), name: "Adobe Xd" },
        { img: require("@/assets/clients-img6.png"), name: "Bulma" },
        { img: require("@/assets/clients-img4.png"), name: "Vue" },
        { img: require("@/assets/clients-img2.png"), name: "CSS3" },
        { img: require("@/assets/clients-img3.png"), name: "Vuetify" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#home-page {
  position: relative;
  padding-top: 50px;

  // Showcase
  .home-showcase {
    position: relative;
    &::before {
      content: url("../assets/shap.png");
      position: absolute;
      width: 50%;
      height: 50%;
      left: 0;
      top: 10%;
      background-repeat: no-repeat;
      animation: bounce 2s infinite alternate;
    }
    &::after {
      content: url("../assets/banner-shap.png");
      position: absolute;
      width: 70%;
      height: 70%;
      background-repeat: no-repeat;
      right: -61%;
      top: -15%;
      animation: bounce 2s infinite alternate;
    }
  }

  // How it Works
  .how-it-works {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background: url("../assets/conection-shap.png");
      width: 21%;
      height: 63%;
      background-repeat: no-repeat;
      right: 0;
      top: 33%;
      z-index: 2;
      animation: bounce 2s infinite alternate;
    }
  }

  // Features-1
  .features-1 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background: url("../assets/finding-shap.png");
      width: 50%;
      height: 83%;
      background-repeat: no-repeat;
      top: 33%;
      left: -140px;
      animation: bounce 2s infinite alternate;
    }
  }

  // Stats
  .stats-box {
    background: $linear-bg;
  }

  // Features-2
  .features-2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background: url("../assets/tricks-shap.png");
      width: 7%;
      height: 64%;
      background-repeat: no-repeat;
      right: 0;
      top: 25%;
      animation: bounce 2s infinite alternate;
    }
  }

  // Blog
  .blog {
    position: relative;
    padding-bottom: 80px;
  }

  // Services
  .services {
    position: relative;
    padding-bottom: 80px;
    &::before {
      content: "";
      position: absolute;
      background: url("../assets/service-shap.png");
      width: 23%;
      height: 55%;
      background-repeat: no-repeat;
      left: 0;
      bottom: 0;
      z-index: 2;
      animation: bounce 2s infinite alternate;
    }
  }

  // Our Clients
  .our-clients {
    position: relative;
    padding-bottom: 100px;
    &::before {
      content: "";
      position: absolute;
      background: url("../assets/footer-shap.png");
      width: 15%;
      height: 89%;
      background-repeat: no-repeat;
      top: -30px;
      right: -70px;
      animation: bounce 2s infinite alternate;
    }

    img {
      width: auto;
      margin: 0 auto;
    }
  }
}
</style>
