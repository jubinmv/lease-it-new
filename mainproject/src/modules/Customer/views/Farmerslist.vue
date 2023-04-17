<template>
  <table class="table is-fullwidth is-bordered is-striped is-hoverable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <!-- <th>Street Address</th> -->
        <th>House Name</th>
        <th>City</th>
        
      </tr>
    </thead>

    <tbody>
      <tr v-for="(farmers,index) in farmersDetails" v-bind:key="index">
        <td>{{ farmers.fullName }}</td>
        <td>{{ farmers.email }}</td>
        <td>{{ farmers.phone }}</td>

        <td>{{ farmers.house_name }}</td>
        <td>{{ farmers.city }}</td>

        <!-- <td>{{ customer.mobile }}</td> -->
        
        
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "farmersDetails",
  data() {
    return {
      farmersDetails: [],
      errors: [],
    };
  },
  methods: {
    // disableAccount(item) {
    //   axios
    //     .delete(`/admin/customers?deleteModel=${item.email}`)
    //     .then((response) => {
    //       console.log(response);
        // });
    // },
    // enableAccount(item){
    //   axios
    //   .patch(`/admin/customers?enableModel=${item.email}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    // }
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/users/farmerslist/list")
      .then((response) => {
        this.farmersDetails = response.data
          console.log('response',response);


  // ------------------What is responseDetails below? ----------------------------

        // this.$store.commit("setAdminCustomerDetails", responseDetails);

        // const toPath = this.$route.query.to || '/cart'

        // this.$router.push(toPath)
      })
      .catch((error) => {
        if (error.response) {
          for (const property in error.response.data) {
            this.errors.push(`${property}: ${error.response.data[property]}`);
          }
        } else {
          this.errors.push("Something went wrong. Please try again");

          console.log(JSON.stringify(error));
        }
      });
  },
};
</script>