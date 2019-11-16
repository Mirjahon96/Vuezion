<template>
  <div>
    <form>
      <div class="form-field" v-for="field in fields" :key="field.id">
        <label :for="field.id">{{ field.name }}</label>
        <input :type="field.type" :placeholder="field.placeholder" :id="field.id" />
      </div>

      <div class="form-field">
        <label for="message">About Me</label>
        <textarea
          id="message"
          rows="1"
          cols="100"
          placeholder="I'm a frontend developer & designer"
        ></textarea>
      </div>
    </form>
    <div class="text-center">
      <button v-on:click="UpdateButton()" class="btn btn-blue">Update Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      fields: [
        {
          id: "company",
          name: "Company",
          type: "text",
          placeholder: "Epickweb"
        },
        { id: "username", name: "Username", type: "text", placeholder: "M96" },
        {
          id: "email",
          name: "Email",
          type: "email",
          placeholder: "chel@mail.com"
        },
        {
          id: "firstname",
          name: "First Name",
          type: "text",
          placeholder: "Chel"
        },
        {
          id: "lastname",
          name: "Last Name",
          type: "text",
          placeholder: "Chelov"
        },
        {
          id: "address",
          name: "Address",
          type: "text",
          placeholder: "Uzb, Bekabad st. 13"
        },
        { id: "city", name: "City", type: "text", placeholder: "Bekabad" },
        {
          id: "country",
          name: "Country",
          type: "text",
          placeholder: "Uzbekistan"
        },
        {
          id: "postalcode",
          name: "Postal Code",
          type: "number",
          placeholder: "Zip code"
        }
      ]
    };
  },
  methods: {
    UpdateButton: function() {
      alert("Profile Updated!");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0;

  .form-field {
    padding: 0 30px 0 0;
    margin: 1rem 0;

    label {
      font-size: 15px;
      color: $grey-font-color;
      display: inline-block;
    }

    input,
    textarea {
      padding: 10px 16px;
      border: 1px solid #e9e9e9;
      outline: none;
      border-radius: 3px;
      display: block;
      width: 90%;
      color: $darkgrey-font-color;
    }
  }
}
</style>
