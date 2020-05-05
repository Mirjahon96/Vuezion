<template>
  <div id="about-page">
    <!-- Showcase -->
    <section class="about-showcase pb-40">
      <AppHero
        titleStyle="display-2 has-text-weight-bold mb-16"
        title="About Us"
        text="Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        :img="require('@/assets/page-about-img1.png')"
        responsiveShowcase
      >
        <button
          slot="btn-content"
          class="btn navbar-item btn-rounded has-background-green is-borderless py-16 px-30"
        >
          <router-link to="/" class="has-text-darkgrey is-transitionless pr-4">
            <i class="fa fa-home"></i>
            Home
          </router-link>/
          <span class="has-text-white">About Us</span>
        </button>
      </AppHero>
    </section>

    <!-- About Us -->
    <section class="about-us-1 pb-40">
      <AppHero
        topTitleStyle="display-5 has-text-weight-medium"
        topTitle="About Us"
        titleStyle="display-3 has-text-weight-bold mb-16"
        title="We Are An Agency That Focuses On Digital Design Solutions"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :img="require('@/assets/page-about-img2.png')"
        row-reverse
      >
        <span slot="btn-content"></span>
      </AppHero>
    </section>

    <!-- About Us 2 -->
    <section class="about-us-2 pb-50">
      <AppTabs tabStyle="mb-24">
        <div class="container px-50">
          <AppTab :name="tab.name" v-for="tab in tabs" :key="tab.name">
            <AppHero
              paddingless
              topTitleStyle="display-5 has-text-weight-medium"
              :topTitle="tab.toptitle"
              titleStyle="display-3 has-text-weight-bold mb-16"
              :title="tab.title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              :img="tab.img"
              :row-reverse="tab.reverseRow"
            >
              <span slot="btn-content"></span>
            </AppHero>
          </AppTab>
        </div>
      </AppTabs>
    </section>

    <!-- Team -->
    <section class="about-team pt-30 pb-50">
      <div class="container px-50">
        <AppHeadingTitle title="Our Team" />
        <div class="columns">
          <div class="column is-3" v-for="(team, i) of teamCards" :key="i">
            <AppImageCard
              styles="is-shadowless"
              :img="team.img"
              :title="team.title"
              :subtitle="team.subtitle"
            >
              <template slot="icon-content">
                <!-- AppIcon -->
                <AppIcon :icons="socialIcons" fab>
                  <template v-slot:icon="{ icon }">
                    <a :href="icon.href" class="has-text-green">
                      <i :class="icon.name"></i>
                    </a>
                  </template>
                </AppIcon>
              </template>
            </AppImageCard>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Clients -->
    <section class="about-clients pt-30">
      <div class="container">
        <AppHeadingTitle title="They Trust Me" />
        <AppSlider :img="clients">
          <template v-slot:item="item">
            <img :src="item.item" />
          </template>
        </AppSlider>
      </div>
    </section>
  </div>
</template>

<script>
import AppHero from "../components/AppHero";
import AppTabs from "../components/AppTabs";
import AppTab from "../components/AppTab";
import AppImageCard from "../components/AppImageCard";
import AppIcon from "@/components/AppIcon";
import AppHeadingTitle from "@/components/AppHeadingTitle";
import AppSlider from "@/components/AppSlider";

export default {
  name: "About",
  components: {
    AppHero,
    AppTabs,
    AppTab,
    AppImageCard,
    AppIcon,
    AppHeadingTitle,
    AppSlider
  },
  data() {
    return {
      tabs: [
        {
          name: "Financial",
          reverseRow: false,
          toptitle: "We’re Creative Agency",
          title: "That Focuses On Digital Design Solutions",
          text:
            "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.",
          img: require("@/assets/about-us-1.png")
        },
        {
          name: "Commercial",
          reverseRow: true,
          toptitle: "Finibus Bonorum et Malorum",
          title: "There are many variations of passages",
          text:
            "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
          img: require("@/assets/about-us-2.png")
        },
        {
          name: "Safety",
          reverseRow: false,
          toptitle: "The standard Lorem Ipsum passage",
          title: "We Are An Agency That Focuses On Digital Design Solutions",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          img: require("@/assets/about-us-3.png")
        },
        {
          name: "Transport",
          reverseRow: true,
          toptitle: "AWS has the broadest and deepest",
          title: "Simple dummy text of the printing and typesetting",
          text:
            "Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
          img: require("@/assets/about-us-4.png")
        },
        {
          name: "Government",
          reverseRow: false,
          toptitle: "Denouncing pleasure and praising",
          title: "Agency That Focuses On Digital Design Solutions",
          text:
            "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, and scrambled it to make a type specimen book.",
          img: require("@/assets/about-us-5.png")
        },
        {
          name: "Other",
          reverseRow: true,
          toptitle: "Galley of type and scrambled",
          title: "On the other hand, we denounce with righteous",
          text:
            "Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
          img: require("@/assets/about-us-6.png")
        }
      ],

      // Team
      teamCards: [
        {
          img: require("@/assets/team-1.jpg"),
          title: "John Doe",
          subtitle: "Web Developer"
        },
        {
          img: require("@/assets/team-2.jpg"),
          title: "Jane Doe",
          subtitle: "Web Designer"
        },
        {
          img: require("@/assets/team-3.jpg"),
          title: "Sarah Clear",
          subtitle: "Market Expert"
        },
        {
          img: require("@/assets/team-4.jpg"),
          title: "Jason West",
          subtitle: "SEO Expert"
        }
      ],

      socialIcons: [
        { name: "fab fa-facebook-f", href: "#!" },
        { name: "fab fa-twitter", href: "#!" },
        { name: "fab fa-google", href: "#!" },
        { name: "fab fa-github", href: "#!" }
      ],

      // Clients
      clients: [
        require("@/assets/clients-img1.png"),
        require("@/assets/clients-img5.png"),
        require("@/assets/clients-img6.png"),
        require("@/assets/clients-img4.png"),
        require("@/assets/clients-img2.png"),
        require("@/assets/clients-img3.png")
      ]
    };
  }
};
</script>

<style lang="scss">
#about-page {
  position: relative;

  .about-us {
    &-2 {
      .btn:hover {
        color: #fff;
        background-image: $linear-bg;
      }
    }
  }

  .about-clients {
    padding-bottom: 100px;
    img {
      width: auto;
      margin: 0 auto;
    }
  }
}
</style>
