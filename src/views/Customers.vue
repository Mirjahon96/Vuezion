<template>
  <div id="customers">
    <div class="card m-1 p-1">
      <div class="top-nav mb-2">
        <div>
          <button class="btn btn-red">
            <i class="fa fa-plus-circle"></i>Add Customers
          </button>
        </div>
        <div>
          <button class="btn btn-blue">
            <i class="fa fa-cog"></i>
          </button>
          <button class="btn btn-light">Import</button>
          <button class="btn btn-light">Export</button>
        </div>
      </div>

      <div class="table-content">
        <table>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-for="customer in customers" :key="customer.id">
            <td class="pr-2">
              <!-- AppCheckbox -->
              <AppCheckbox />
            </td>
            <td>
              <div class="d-flex">
                <img :src="customer.img" :alt="customer.name" />
                <span>{{ customer.name }}</span>
              </div>
            </td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.location }}</td>
            <td>{{ customer.createDate }}</td>
            <td>
              <small class="badge-text" :class="customer.status">{{ customer.statusText }}</small>
            </td>
            <td>
              <i class="fa fa-edit"></i>
              <i class="fa fa-trash"></i>
            </td>
          </tr>
        </table>
      </div>
      <!-- AppPagination -->
      <div class="text-right my-2 mr-1">
        <AppPagination />
      </div>
    </div>
  </div>
</template>

<script>
import AppCheckbox from "@/components/AppCheckbox";
import AppPagination from "@/components/AppPagination";

export default {
  name: "Customers",
  components: {
    AppCheckbox,
    AppPagination
  },
  data() {
    return {
      customers: [
        {
          img: require("@/assets/customers/Heart-uzb.png"),
          name: "Mirjahon96",
          phone: "998(99) 859-41-75",
          email: "mirjahon.jamolidnov@gmail.com",
          location: "Bekabad",
          createDate: "10/04/2018",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/customers/lora.jpg"),
          name: "Lora Jansen",
          phone: "078 5054 8877",
          email: "lora@gmail.com",
          location: "Toronto",
          createDate: "30/09/2018",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/customers/robi.jpg"),
          name: "Robi Thompson",
          phone: "215-302-3376",
          email: "thompson.robi@gmail.com",
          location: "New York",
          createDate: "17/09/2018",
          status: "red",
          statusText: "Blocked"
        },
        {
          img: require("@/assets/customers/sarah.jpg"),
          name: "Sarah Anderson",
          phone: "828-216-2190",
          email: "sarahA@gmail.com",
          location: "Canada",
          createDate: "12/07/2018",
          status: "red",
          statusText: "Blocked"
        },
        {
          img: require("@/assets/customers/jane.jpg"),
          name: "Jane Doe",
          phone: "(216) 75 612 706",
          email: "jane@gmail.com",
          location: "France",
          createDate: "09/04/2019",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/customers/tania.jpg"),
          name: "Tania Mike",
          phone: "(+15) 73 483 758",
          email: "mike.tania@gmail.com",
          location: "Texas",
          createDate: "4/06/2019",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/person3.jpg"),
          name: "Daisy Silk",
          phone: "(216) 76 298 896",
          email: "daisy@gmail.com",
          location: "Vayoming",
          createDate: "15/06/2019",
          status: "red",
          statusText: "Blocked"
        },
        {
          img: require("@/assets/garry.jpg"),
          name: "Ozi",
          phone: "998(99) 005-55-66",
          email: "ozi@gmail.com",
          location: "Tashkent",
          createDate: "18/06/2019",
          status: "red",
          statusText: "Blocked"
        },
        {
          img: require("@/assets/customers/oudrey.jpg"),
          name: "Oudrey Hampton",
          phone: "078 5054 8877",
          email: "hampton.o@gmail.com",
          location: "London",
          createDate: "23/07/2019",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/customers/lora.jpg"),
          name: "Mora Jays",
          phone: "(02) 75 150 655",
          email: "mora@gmail.com",
          location: "California",
          createDate: "31/08/2019",
          status: "green",
          statusText: "Active"
        },
        {
          img: require("@/assets/customers/hobbit.jpg"),
          name: "Martin Freeman",
          phone: "(12) 91 135 231",
          email: "martin.SH@mail.com",
          location: "Sydney",
          createDate: "28/10/2019",
          status: "red",
          statusText: "Blocked"
        },
        {
          img: require("@/assets/customers/locky.jpg"),
          name: "Locky",
          phone: "078 7173 9261",
          email: "locky@asgard.as",
          location: "Asgard",
          createDate: "31/12/2019",
          status: "red",
          statusText: "Blocked"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#customers {
  .top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    i.fa-plus-circle {
      margin-right: 4px;
    }
  }

  .btn {
    padding: 12px 14px;
    margin-right: 10px;
  }

  .table-content table {
    overflow-x: auto;
    width: 100%;
    border-collapse: collapse;

    tr:nth-child(even) {
      background-color: #f4f4f4;

      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
      }
    }

    th {
      text-align: left;
    }

    th,
    td {
      padding: 15px;
      font-size: 14px;
    }

    td {
      font-weight: 500;
    }

    // Table Icons
    i {
      margin: 0 5px;
      color: $grey-font-color;
      &:hover {
        color: $darkgrey-font-color;
        cursor: pointer;
      }
    }
  }

  .d-flex {
    display: flex;
    align-items: center;
  }

  .badge-text {
    background: $grey-font-color;
    color: $darkgrey-font-color;
    border-radius: 2px;
    padding: 3px;
    font-weight: 600;
    font-size: 11px;

    &.green {
      background: #b0e4cd;
      color: #18a263;
    }
    &.red {
      background: #f1556c40;
      color: #f1556c;
    }
  }

  img {
    width: 34px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>