<template>
  <div class="top-nav card p-1">
    <div>
      <input type="text" placeholder="Search.." />
      <span class="label">
        <slot name="selectText">Sort By:</slot>
      </span>
      <select>
        <option v-for="value in selectItems" :key="value.id">{{ value.value }}</option>
      </select>
    </div>
    <div>
      <button class="btn btn-blue">
        <i class="fa fa-cog m-0"></i>
      </button>
      <button class="btn btn-red">
        <i class="fa fa-plus-circle"></i>Add New
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.top-nav.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 20px 5px;

  .label {
    font-size: 14px;
    margin-right: 10px;
  }

  input,
  select {
    padding: 10px 16px;
    border: 1px solid #e9e9e9;
    outline: none;
    border-radius: 3px;
    display: inline-block;
    color: $darkgrey-font-color;
    margin-right: 1rem;
  }

  .btn {
    padding: 12px 14px;
    margin-right: 6px;
  }

  i {
    margin-right: 5px;
  }
}
</style>
