<template>
    <div class="page-log-in">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1 class="title">Add New  Crop Category</h1>
  
          <form @submit.prevent="submitCategory">
            <div class="field">
              <label>Category Name</label>
              <div class="control">
                <input type="text" class="input" v-model="categoryName" />
              </div>
            </div>
            <div class="field">
              <label>Description</label>
              <div class="control">
                <input type="text" class="input" v-model="Description" />
              </div>
            </div>
  
            <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Category Image</label>
                  </div>
                  <div class="field-body">
                    <div class="file is-medium">
                      <label class="file-label">
                        <input class="file-input" type="file" name="document" @change="documentFileSelect" />
                        <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label"> Upload Image </span>
                        </span>
                      </label>
                      </div>
                    </div>
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
      data(){
          return{
              categoryName: ""
          }
      },
      methods: {
          async submitCategory(){
              axios
              .post(`/admin/product/category?category=${this.categoryName}`)
              .then((response) => {
                  console.log(response);
                  alert("Successfully added the category")
              })
          }
      }
  }
  </script>
  