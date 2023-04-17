<template>
  <br>
   <div><a href="Postedfarmland"><button style="margin-left: 7%;" class="button is-dark">Farm Lands</button></a>
   <a href="postedagrilands"><button  style="margin-left: 17%;" class="button is-dark">Agri Lands</button></a></div>

  <div class="gall" v-for="(categ, index) in landCate" :key="index">
      <a >
        <img :src="categ.image">
      </a>
      <div class="desc">{{categ.category}}</div>
      <div class="desc">{{categ.description}}</div>

  </div>


</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
  name: "Addcat",
  data() {
      return {
          landCate: []
      };
  },
  mounted() { 
      this.fetchData()
  },
  methods: {
      async fetchData() {
          
          await axios
              .get("http://localhost:8080/api/users/land/posts")
              .then((response) => {
                 this.landCate = response.data
                  console.log('response',response);

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
<style>
.gall {
  margin: 10px;
  border: 1px solid #ccc;
  float: left;
  width: 300px;
  height: 450px;
}

.desc {
  padding: 20px;
  color: aqua;
  text-align: center;
}
</style>
