<template>
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
        <thead>
        <tr>
            <th>Name </th>
          <th> Prefered Place</th>
          <th>Description</th>
          <th>Category</th>
          <th>Extension Of Land</th>
          <th>Price</th>
          <th>Lease Period</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(mywishs,index) in Detail" v-bind:key="index">
            <td>{{ mywishs.name }}</td>
            <td>{{ mywishs.prefered_location }}</td>
          <td>{{ mywishs.Description }}</td>
          <td>{{ mywishs.prefered_category }}</td>       
          <td>{{ mywishs.prefered_extension }}</td>
          <td>{{ mywishs.prefered_price }}</td>
          <td>{{ mywishs.lease_period }}</td>
  
        
          
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Detail",
    data() {
      return {
        Detail: [],
        errors: [],
      };
    },
    methods: {
 
    },
    mounted() {
      axios
      .get("http://localhost:8080/api/users/shop/wishlists/getwish")
      .then((response) => {
        this.Detail = response.data
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