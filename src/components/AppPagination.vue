<template>
  <div id="pagination">
    <div class="pagination-items">
      <button>
        <i class="fa fa-caret-left"></i>
      </button>
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>
        <i class="fa fa-caret-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPagination"
};
</script>

<style scoped lang="scss">
#pagination {
  .pagination-items {
    button {
      color: $text-secondary;
      background: #fff;
      border: 2px solid #fff;
      border-radius: 30px;
      padding: 10px 15px;
      outline: none;
      transition: background 0.3s;

      &:focus {
        border-color: #a694bd8f;
      }
      &:hover {
        background-color: $text-info;
        color: #fff;
      }
    }

    .active {
      background: $text-info;
      color: #fff;
    }
  }
}
</style>
