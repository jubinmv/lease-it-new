<template>
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th> Prefered Place</th>
          <th>Description</th>
          <th>Category</th>
          <th>Extension Of Land</th>
          <th>Price</th>
          <th>Lease Period</th>

        </tr>
      </thead>
  
      <tbody>
        <tr v-for="(mywish,index) in mywishlist" v-bind:key="index">
          <td>{{ mywish.name }}</td>
          <td>{{ mywish.prefered_location }}</td>
          <td>{{ mywish.prefered_category }}</td>
          <td>{{ mywish.Description }}</td>
          <td>{{ mywish.prefered_extension }}</td>
          <td>{{ mywish.prefered_price }}</td>
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
        .get("http://localhost:8080/api/users/customer/wishlists/mywish")
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