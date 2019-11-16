<template>
  <div id="products">
    <div class="product-content">
      <!-- InputSelect Component -->
      <InputSelect :selectItems="sortProducts" />

      <div class="box">
        <div class="card p-1" v-for="product in products" :key="product.id">
          <div class="edit-buttons">
            <button class="btn btn-blue">
              <i class="fa fa-pen"></i>
            </button>
            <button class="btn btn-red">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div>
            <img :src="product.img" alt="products" />
          </div>
          <div class="text-content">
            <h4 class="heading-4 m-0">{{ product.name }}</h4>
          </div>
          <div class="stars">
            <div>
              <i v-for="star in product.stars" :key="star.id" :class="star.stars"></i>
            </div>
            <div>
              <span class="bg-lightgrey">{{ product.price }}</span>
            </div>
          </div>
          <p>Stocks: {{ product.stock }} pcs</p>
        </div>
      </div>
      <!-- AppPagination -->
      <div class="text-right my-1 mr-1">
        <AppPagination />
      </div>
    </div>
  </div>
</template>

<script>
import AppPagination from "@/components/AppPagination";
import InputSelect from "@/components/InputSelect";

export default {
  name: "Products",
  components: {
    AppPagination,
    InputSelect
  },
  data() {
    return {
      sortProducts: [
        { value: "All" },
        { value: "Low" },
        { value: "Price Low" },
        { value: "Price Low" },
        { value: "Price High" },
        { value: "Sold Out" }
      ],
      products: [
        {
          img: require("@/assets/products/product-1.jpg"),
          name: "Z Watch",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$45",
          stock: "98"
        },
        {
          img: require("@/assets/products/product-2.jpg"),
          name: "Black Chair",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$97",
          stock: "41"
        },
        {
          img: require("@/assets/products/product-3.jpg"),
          name: "Modern Chair",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star-half" }
          ],
          price: "$59",
          stock: "101"
        },
        {
          img: require("@/assets/products/product-4.jpg"),
          name: "Awesome Something",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$29",
          stock: "12"
        },
        {
          img: require("@/assets/products/product-5.jpg"),
          name: "The Pink Clock",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$15",
          stock: "60"
        },
        {
          img: require("@/assets/products/product-6.jpg"),
          name: "Sweet Sweater",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$30",
          stock: "76"
        },
        {
          img: require("@/assets/products/product-7.jpg"),
          name: "Plastic Armchair",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star-half" }
          ],
          price: "$18",
          stock: "54"
        },
        {
          img: require("@/assets/products/product-8.jpg"),
          name: "Wing Chairs",
          stars: [
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" },
            { stars: "fa fa-star" }
          ],
          price: "$119",
          stock: "9"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.product-content {
  padding: 10px 10px 0 10px;

  .box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    position: relative;

    .card {
      margin: 0 0 5px 5px;
      overflow: hidden;

      &:hover .edit-buttons {
        opacity: 1;
        visibility: visible;
        transition: all 0.3s;
        transform: translateX(0);
      }
    }

    img {
      width: 100%;
    }

    .text-content {
      padding: 8px 0;

      .heading-4 {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }

    p {
      color: $lightgrey-font-color;
      margin: 6px 0;
    }

    .stars {
      display: flex;
      align-items: center;
      justify-content: space-between;

      i {
        color: #f7b84b;
      }
      span {
        padding: 10px;
        font-weight: 500;
        background: #a694bd;
        color: #fff;
        border-radius: 2px;
        font-size: 18px;
      }
    }

    .bg-lightgrey {
      background: #e6e6e6;
    }
  }

  .edit-buttons {
    position: absolute;
    top: 15px;
    right: 14px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);

    .btn {
      padding: 7px 12px;
      margin-right: 4px;
    }
  }
}
</style>
