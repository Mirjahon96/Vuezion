<template>
  <div class="tables">
    <div class="card">
      <div class="card-content">
        <h2 class="heading-2">Our Customers</h2>
        <div class="card-body">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Country</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody class="striped">
              <tr v-for="td in tableRows" :key="td.id">
                <td>{{ td.num }}</td>
                <td>{{ td.name }}</td>
                <td>{{ td.sum }}</td>
                <td>{{ td.country }}</td>
                <td>{{ td.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tables",
  data() {
    return {
      tableRows: [
        {
          num: "1",
          name: "John Doe",
          sum: "$36.738",
          country: "UK",
          city: "Manchester"
        },
        {
          num: "2",
          name: "Joan Doe",
          sum: "$16.738",
          country: "Korea",
          city: "Seul"
        },
        {
          num: "3",
          name: "Chel M96",
          sum: "$555.738",
          country: "UZB",
          city: "Bekabad"
        },
        {
          num: "4",
          name: "Brad Traversy",
          sum: "$96.738",
          country: "USA",
          city: "Boston"
        },
        {
          num: "5",
          name: "Morgan Freeman",
          sum: "$116.738",
          country: "Africa",
          city: "Nigeria"
        },
        {
          num: "6",
          name: "Mark Wahlberg",
          sum: "$79.257",
          country: "USA",
          city: "California"
        },
        {
          num: "7",
          name: "Evangeline Lilly",
          sum: "$49.533",
          country: "USA",
          city: "Los Angelas"
        },
        {
          num: "8",
          name: 'Dwayne "Rock" Johnson',
          sum: "$125.533",
          country: "USA",
          city: "California"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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

    .heading-2 {
      margin-top: 1rem;
    }

    .card-body {
      padding: 10px 0;

      table {
        text-align: left;
        width: 100%;
        position: relative;
        border-collapse: collapse;

        th {
          padding: 10px;
        }
        tr {
          color: $dark-font-color;
          font-size: 14px;
          border-bottom: 1px solid #ccc;

          &:last-child {
            border: 0;
          }

          &:hover {
            background-color: #f4f4f4;
            transition: none;
          }
        }

        td {
          padding: 10px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
