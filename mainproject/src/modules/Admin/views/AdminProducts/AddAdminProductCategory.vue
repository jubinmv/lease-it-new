<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title">Add  New land Category</h2>

        <form @submit.prevent="submitForm">
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
                <span class="file-label"> Upload Image </span>
              </span>
            </label>
          </div>
        </div>
          <div class="field">
            <label>Category Name</label>
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
import { toast } from "bulma-toast";
export default {
  name: "Addcrop",
  data() {
    return {
      cropname: "",
      imageUrl: "",
      description: "",
       errors: [],
    };
  },
  mounted() {},
  methods: {
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
      const formData = {
        category: this.cropname,
        description: this.description,
         image: this.imageUrl,

      };

      await axios
        .post("http://localhost:8080/api/admin/products/category", formData)
        .then((response) => {
          toast({
            message: "Category added successfully",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          });
          console.log(response);

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
