<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Add  Crop Details</h1>

        <form @submit.prevent="submitForm">
          <div class="field">
            <label>Crop Name</label>
            <div class="control">
              <input type="text" class="input" v-model="cropname" />
            </div>
          </div>

          <div class="field">
            <label>Description</label>
            <div class="control">
              <input type="text" class="input" v-model="description" />
            </div>
          </div>

          <div class="field">
            <label>Temperature Needed</label>
            <div class="control">
              <input type="text" class="input" v-model="temp" />
            </div>
          </div>

          <div class="field">
            <label>Climate Needed</label>
            <div class="control">
              <input type="text" class="input" v-model="climate" />
            </div>
          </div>

          <div class="field">
            <label>Harvesting Time</label>
            <div class="control">
              <input type="text" class="input" v-model="harvest" />
            </div>
          </div>

          <div class="field">
            <label>Price per Kg</label>
            <div class="control">
              <input type="text" class="input" v-model="price" />
            </div>
          </div>

          <div class="field">
            <label>Soil Type</label>
            <div class="control">
              <input type="text" class="input" v-model="soil" />
            </div>
          </div>

          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-dark">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditShopDetails",
  data() {
    return {
      cropname: "",
      description: "",
      temp: "",
      climate: "",
      harvest: "",
      price: "",
      soil: "",
      errors: [],
    };
  },
  mounted() {},
  methods: {
    async submitForm() {
      const formData = {
        cropname: this.cropname,
        descrption: this.description,
        temperature: this.temp,
        climate: this.climate,
        harvesting_time: this.harvest,
        price: this.price,
        soil_type: this.soil,
      };

      await axios
        .put("http://localhost:8080/api/admin/shops", formData)
        .then((response) => {
          toast({
            message: "Crop Details successfully edited",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          });
          console.log(response.data);

          //   const toPath = this.$route.query.to || "/cart";

          //   this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            // this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>
