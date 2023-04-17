<template>
  
    <div class="page-log-in">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1 class="title">Edit Land Details</h1>
  
          <div class="modal" v-bind:class="{ 'is-active': modalActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Similar Lands</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="hideSimilarLands"
                ></button>
              </header>
            </div>
          </div>
  
          <form @submit.prevent="submitForm">
            <div class="field has-addons">
              <div class="control is-expanded" >
  
                <input type="text" class="input" placeholder="Owner Name" v-model="ownerName" required/>
              </div>
            </div>

            
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Ph Of Soil" v-model="ph" required/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Pottasium value in soil" v-model="ppot" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="humidity" v-model="state" required/>
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Temperature" v-model="district" required/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Rainfall in mm" v-model="rainfall" required/>
              </div>
            </div>
            <div class="field">
              
              <div class="control">
                <input type="text" class="input" placeholder="Nitrogen Value in Soil" v-model="nitro" required/>
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Phosphorous Value in Soil" v-model="phos" required />
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Lease Period" v-model="leasepp" required/>
              </div>
            </div>
  
            <div class="notification is-danger" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
  
            <div class="field">
              <div class="control">
                <button class="button is-dark">Update</button>
              </div>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
  name: "display",
  data() {
      return {
          pagriland: []
      };
  },
  name: "AddShopDetails",
  data() {
    return {
      ownerName: "",
      image:"",
      ph: "",
      ppot: "",
      state: "",
      district: "",
      rainfall: "",
      nitro: "",
      phos: "",
      leasepp: "",
      errors: [],
    };
  },
  mounted() {},
  methods: {
   
    async submitForm() {
      const formData = {
        ownername: this.ownerName,
        ph: this.ph,
        humidity: this.state,
        temper: this.district,
        rainfall: this.rainfall,
        phosphorous: this.phos,
        nitrogen: this.nitro,
        leaseperiod: this.leasepp,
        pottasium: this.ppot,
      };

      await axios
        .post("http://localhost:8080/api/users/shop/product/updateland/"+this.$route.query.lid, formData)
        .then((response) => {
          toast({
            message: " successfully updated",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          }); 

          
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
  },
};
</script> 
