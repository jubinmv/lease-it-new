<template>
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th> Prefered Place</th>
          <th>Description</th>
          <th>Category</th>
          <th>Extension Of Land</th>
          <th>Price</th>
          <th>Lease Period</th>

        </tr>
      </thead>
  
      <tbody>
        <tr v-for="(getwish,index) in mywishlist" v-bind:key="index">
          <td>{{ getwish.prefered_location }}</td>
          <td>{{ getwish.prefered_category }}</td>
          <td>{{ getwish.Description }}</td>
          <td>{{ getwish.prefered_extension }}</td>
          <td>{{ getwish.prefered_price }}</td>
          <td>{{ mywish.lease_period }}</td>
  
          
          
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "mywishlist",
    data() {
      return {
        mywishlist: [],
        errors: [],
      };
    },
    methods: {
     
    },
    mounted() {
     
     
      axios
        .get("http://localhost:8080/api/users/shop/wishlists/getwish")
        .then((response) => {
          this.mywishlist = response.data
            console.log('response',response);
  
  
   
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