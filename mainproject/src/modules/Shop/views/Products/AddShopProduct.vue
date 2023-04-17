<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Add New Land</h1>

        <div class="modal" v-bind:class="{ 'is-active': modalActive }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <!-- <header class="modal-card-head">
              <p class="modal-card-title">Similar Lands</p>
              <button
                class="delete"
                aria-label="close"
                @click="hideSimilarLands"
              ></button>
            </header> -->
<!-- 
            <section class="modal-card-body">
              <div class="columns is-multiline">
                <SimilarProductBox
                  v-for="product in similarLandss"
                  v-bind:key="product.id"
                  v-bind:product="product"
                />
              </div>
            </section> -->

            <!-- <footer class="modal-card-foot">
              <button class="button is-success">Save changes</button>
              <button class="button">Cancel</button>
            </footer> -->
          </div>
        </div>

        <form @submit.prevent="submitForm">
          <div class="field has-addons">
            <div class="control is-expanded" >

              <input type="text" class="input" placeholder="Location Name" v-model="LandName" required/>
            </div>
            <!-- <div class="control">
              <a class="button is-info" @click="showSimilarLandss"> Check </a>
            </div> -->
          </div>

          <!-- <div class="field">
            <label>Category</label>
            <div class="control">
              <input type="text" class="input" v-model="category" />
            </div>
          </div> -->

          <div class="field">
            <div class="control">
              <div class="select" >
                
                <select v-model="category" Category required>
                  <option value="" disabled selected hidden>Category</option>

                  <option selected value="Agriland">agriland</option>
                  <option value="Estatelandr">farmland</option>

                </select>
              </div>
            </div>
          </div>
        
          <div class="field">
            <!-- <div class="control">
              <input type="text" class="input" v-model="image" />
            </div> -->
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @change="imageFileSelect"
                  required/>
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Upload Land Image </span>
                </span>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Extension Of Land" v-model="mainUnit" required/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Price Per Acer" v-model="pprice" required />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Owner Name" v-model="namess" required/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Description" v-model="saleUnit" required/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Survey Number" v-model="weight" required/>
            </div>
          </div>

          <div class="field">
            
            <div class="control">
              <input type="text" class="input" placeholder="Total Price" v-model="price" required/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Advance Payment Amount" v-model="stock" required />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Lease Period" v-model="increment" required/>
            </div>
          </div>

         

           

          <!-- <div class="field">
            <label>User Residing Street</label>
            <div class="control">
              <input type="text" class="input" v-model="streetName" />
            </div>
          </div>

          <div class="field">
            <label>User Residing City</label>
            <div class="control">
              <input type="text" class="input" v-model="cityName" />
            </div>
          </div>

          <div class="field">
            <label>User Residing State</label>
            <div class="control">
              <input type="text" class="input" v-model="stateName" />
            </div>
          </div>  -->

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
import SimilarProductBox from "@/modules/Shop/components/SimilarProductBox.vue";
import { toast } from "bulma-toast";

export default {
  name: "AddShopDetails",
  data() {
    return {
      prodName: "",
      category: "",
      imageUrl: "",
      stock: "",
      namess: "",
      mainUnit: "",
      saleUnit: "",
      weight: "",
      price: "",
      increment: "",
pprice:"",
      productImage: "",
      errors: [],
      categories: [],

      modalActive: false,
      similarProducts: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  computed: {
    userid() {
      let token = this.$store.state.token
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload).userId;

    }
  },

  components: {
    SimilarProductBox,
  },

  methods: {
    showSimilarProducts() {
      this.modalActive = true;
      axios
        .get(`/user/shop/product/similar?prodName=${this.prodName}`)
        .then((response) => {
          this.similarProducts = response.data;
        });
    },
    hideSimilarProducts() {
      this.modalActive = false;
    },

    getCategories() {
      axios.get("/user/shop/product/category").then((response) => {
        console.log(response);
        var tempData = response.data;
        // console.log(tempData[0].category)
        var responseData = response.data;
        for (let item in responseData) {
          console.log(responseData[item].category);
          this.categories.push(responseData[item]);
        }
        // console.log(this.categories)
      });
    },

    imageFileSelect(event) {
      this.$store.commit("setIsLoading", true);
      console.log(event);
      var imageFile = event.target.files[0];
      this.createBase64Image(imageFile);
    },

    createBase64Image(fileObject) {
      var reader = new FileReader();
      reader.onload = (e) => {
        var imageFileData = e.target.result;
        this.productImage = imageFileData.slice(imageFileData.indexOf(",") + 1);
        console.log(this.productImage);
        this.uploadImage();
      };
      reader.readAsDataURL(fileObject);
    },

    async uploadImage() {
      var formData = new FormData();
      formData.append("image", this.productImage);

      const client = axios.create({
        transformRequest: [
          (data, headers) => {
            // add required "Content-Type" whenever body is defined
            delete headers.common.Authorization;
            return data;
          },
        ],
      });

      await client
        .post(
          "https://api.imgbb.com/1/upload?key=0f6650dbe5d582897945e5dd899204bd",
          formData
        )
        .then((response) => {
          console.log(response);
          var imageData = response.data.data;
          this.imageUrl = imageData.url;
        });
      this.$store.commit("setIsLoading", false);
    },

    async submitForm() {
      this.$store.commit("setIsLoading", true);
      let userid=this.userid
      const formData = {
        locationName: this.LandName,
        userid,
        category: this.category,
        image: this.imageUrl,
        ownername:this.namess,
        extend: this.mainUnit,
        description: this.saleUnit,
        survey_number: this.weight,
        price_per_acer: this.pprice,
        advance: this.stock,
        leaseperiod: this.increment,
      };

      await axios
        .post("http://localhost:8080/api/users/shop/product", formData)
        .then((response) => {
          toast({
            message: "New land successfully added",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          });

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
          this.$store.commit("setIsLoading", false);
        });
    },
  },
};
</script>
