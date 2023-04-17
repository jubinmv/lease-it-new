<template>
  <aside class="menu left-panel">
    <ul class="menu-list">
      <li>
        <router-link
          to="/customer"
          v-bind:class="{
            'is-active': 'customer-dashboard' == this.$route.name,
          }"
          > Farmers  Dashboard</router-link
        >
      </li>
      <li>
        <router-link
          to="/customer/profile"
          v-bind:class="{
            'is-active': 'customer-profile' == this.$route.name,
          }"
          >Profile</router-link
        >
      </li>
      <li>
        <router-link
          to="/customer/Farmerslist"
          v-bind:class="{
            'is-active': 'Farmerslist' == this.$route.name,
          }"
          >Farmers</router-link
        >
      </li>
      <li>
        <router-link
          to="/customer/Landownerslist"
          v-bind:class="{
            'is-active': 'Landownerslist' == this.$route.name,
          }"
          >Landowners</router-link
        >
      </li>
      <li>
        <router-link
          to="/customer/Land"
          v-bind:class="{
            'is-active': 'Land' == this.$route.name,
          }"
          >View Lands</router-link
        >
      </li>
     
      <!-- <li>
        <router-link
          to="/customer/Leasedlands"
          v-bind:class="{
            'is-active': 'Leasedlands' == this.$route.name,
          }"
          >Leased Lands</router-link
        >
      </li> -->
      <li>
        <router-link
          to="/customer/viewcrops"
          v-bind:class="{
            'is-active': 'viewcrops' == this.$route.name,
          }"
          >View Crops</router-link
        >
      </li>
      <li>
        <router-link
          to="/customer/wishlist"
          v-bind:class="{
            'is-active': 'wishlist' == this.$route.name,
          }"
          >Add wishlist</router-link
        >
      </li>
      <li>
      <router-link
          to="/customer/mywishes"
          v-bind:class="{
            'is-active': 'mywishes' == this.$route.name,
          }"
         >View wishlist </router-link
        >
      </li>
      <!-- <li>
      <router-link
          to="/customer/review"
          v-bind:class="{
            'is-active': 'review' == this.$route.name,
          }"
         >Review </router-link
        >
      </li> -->
      <li>
        <router-link
          to=""
          v-bind:class="{
            'is-active': ''
          }"
         > <label @click="feedback" >Feedback </label> </router-link
        >
        </li>
    </ul>
  </aside>
</template>

<script>
import axios from 'axios';
export default {
  
  methods: {
    feedback() {
      window.open('http://localhost:3002/sentiment-analyzer', '_blank') // Replace with your React website's URL
    },
    disableAccount(){
      axios
      .delete("/user/customer")
      .then((response) => {
        console.log(response)
        this.logout();
      })
    },
    logout() {
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")

            this.$store.commit('removeToken')

            this.$router.push('/')
        },
  },
}
</script>

<style>
.section-contents {
  display: inline-flex;
  padding-block-start: inherit;
}
.left-panel {
  width: fit-content;
  margin-left: 0px;
}
.section-main-contents {
  margin-left: 30px;
}

</style>
