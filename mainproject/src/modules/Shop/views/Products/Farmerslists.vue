<template>
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>City</th>
          <th>House Name</th>
        </tr>
      </thead>
  
      <tbody>
        <tr v-for="(farm,index) in farmerDetail" v-bind:key="index">
          <td>{{ farm.fullName }}</td>
          <td>{{ farm.email }}</td>
          <td>{{ farm.phone }}</td>
          <td>{{ farm.city }}</td>
          <td>{{ farm.house_name }}</td>

          
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "farmerDetail",
    data() {
      return {
        farmerDetail: [],
        errors: [],
      };
    },
    methods: {
 
    },
    mounted() {
      axios
      .get("http://localhost:8080/api/users/farmers/getlist")
      .then((response) => {
        this.farmerDetail = response.data
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