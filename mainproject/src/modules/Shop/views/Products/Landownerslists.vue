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
        <tr v-for="(cust,index) in custDetails" v-bind:key="index">
          <td>{{ cust.fullName }}</td>
          <td>{{ cust.email }}</td>
          <td>{{ cust.phone }}</td>
          <td>{{ cust.city }}</td>
          <td>{{ cust.house_name }}</td>
          
          
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "custDetails",
    data() {
      return {
        custDetails: [],
        errors: [],
      };
    },
    methods: {

    },
    mounted() {
      axios
      .get("http://localhost:8080/api/users/landownerss/viewlist")
      .then((response) => {
        this.custDetails = response.data
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