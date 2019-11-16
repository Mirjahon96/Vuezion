<template>
  <div id="checkbox">
    <label class="checkbox-container">
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "AppCheckbox"
};
</script>

<style scoped lang="scss">
#checkbox {
  .checkbox-container {
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  /* Hide the browser's default checkbox */
  .checkbox-container input {
    // position: absolute;

    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    background: #fff;
    transition: none !important;
    &:active {
      background-color: #8fe1f8;
    }
  }
  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #2196f3;
    &:active {
      background-color: #8fe1f8;
    }
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>