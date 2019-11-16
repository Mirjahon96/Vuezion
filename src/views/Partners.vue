<template>
  <div id="partners">
    <div class="partners-content">
      <!-- InputSelect component -->
      <InputSelect :selectItems="sortPartners" />

      <div class="box">
        <div class="card text-center p-1" v-for="partner in partners" :key="partner.id">
          <div class="mt-1">
            <img :src="partner.img" :alt="partner.company" />
          </div>
          <div class="text-content">
            <h4 class="heading-4 mb-0">{{ partner.company }}</h4>
            <h5>{{ partner.location }}</h5>
            <p>{{ partner.description }}</p>
            <a href="#!" class="btn btn-light">View more info</a>
          </div>
          <footer class="card-footer pt-1">
            <div>
              <h5 class="mb-0">Revenue (USD)</h5>
              <p>{{ partner.revenue }}</p>
            </div>
            <div>
              <h5 class="mb-0">Number of Employees</h5>
              <p>{{ partner.employees }}</p>
            </div>
          </footer>
        </div>
      </div>
      <!-- AppPagination component-->
      <div class="text-right py-1">
        <AppPagination />
      </div>
    </div>
  </div>
</template>

<script>
import InputSelect from "@/components/InputSelect";
import AppPagination from "@/components/AppPagination";

export default {
  name: "Partners",
  components: {
    InputSelect,
    AppPagination
  },
  data() {
    return {
      sortPartners: [
        { value: "Select" },
        { value: "Date" },
        { value: "Name" },
        { value: "Revenue" },
        { value: "Employees" }
      ],
      partners: [
        {
          img: require("@/assets/partners/amazon.png"),
          company: "Amazon Inc.",
          location: "Seattle, Washington",
          description:
            "Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle..",
          revenue: "17,786 $",
          employees: "566k"
        },
        {
          img: require("@/assets/partners/apple.png"),
          company: "Apple Inc.",
          location: "Cupertino, California",
          description:
            "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells..",
          revenue: "800 bn",
          employees: "47k"
        },
        {
          img: require("@/assets/partners/google.png"),
          company: "Google LLC.",
          location: "Menlo Park, California",
          description:
            "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include..",
          revenue: "750 bn",
          employees: "72k"
        },
        {
          img: require("@/assets/partners/airbnb.png"),
          company: "Airbnb Inc.",
          location: "San Francisco, California",
          description:
            "A‌i‌r‌b‌n‌b‌, ‌ ‌I‌n‌c‌.‌ is a company based in San Francisco that operates an online marketplace and hospitality service for people to lease...",
          revenue: "25.954 $",
          employees: "3.1k"
        },
        {
          img: require("@/assets/partners/facebook.png"),
          company: "Facebook Inc.",
          location: "Cambridge, Massachusetts",
          description:
            "Facebook is an American online social media and social networking service company based in Menlo Park, California..",
          revenue: "9.3 bn",
          employees: "25.5k"
        },
        {
          img: require("@/assets/partners/cisco.png"),
          company: "Cisco Systems.",
          location: "San Jose, California",
          description:
            "Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California..",
          revenue: "4800.6 $",
          employees: "90.8k"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
#partners {
  .partners-content {
    padding: 10px 10px 0px 10px;
  }

  p {
    font-size: 15px;
  }

  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    .card {
      margin: 0 0 5px 5px;
      background-image: url("../assets/partners/bg-pattern-2.png");
      background-size: cover;
    }

    .text-content {
      h5 {
        font-size: 15px;
        margin: 5px 0 10px 0;
        font-weight: 500;
      }

      .btn {
        padding: 12px 25px;
      }
    }

    img {
      width: 95px;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px;

      h5 {
        font-size: 15px;
        font-weight: 500;
      }

      p {
        font-weight: 600;
      }
    }
  }
}
</style>
