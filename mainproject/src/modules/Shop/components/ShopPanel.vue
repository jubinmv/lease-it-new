<template>
  <aside class="menu left-panel">
    <ul class="menu-list">

      <li>
        <router-link
          to="/shop"
          v-bind:class="{
            'is-active': 'shop-dashboard' == this.$route.name,
          }"
          > Landowners Dashboard</router-link
        >
      </li>

      <li>
        <router-link
          to="/shop/profile"
          v-bind:class="{
            'is-active': 'shop-profile' == this.$route.name,
          }"
          >Profile</router-link
        >
      </li>

      <li>
        <router-link
          to=""
          >Activities</router-link>
        <ul>
          <li>
            <router-link
              to="/shop/products/add"
              v-bind:class="{
                'is-active': 'shop-product-add' == this.$route.name,
              }"
              >Add Land</router-link
            >
          </li>
          <!-- <li>
            <router-link
              to="/"
              v-bind:class="{
                'is-active': 'shop-product-edit' == this.$route.name,
              }"
              ></router-link
            >
          </li> -->
          <li>
            <router-link
              to="/shop/products/Farmerslists"
              v-bind:class="{
                'is-active': 'Farmerslists' == this.$route.name,
              }"
              >View Farmers</router-link
            >
          </li>
          <li>
            <router-link
              to="/shop/products/Landownerslists"
              v-bind:class="{
                'is-active': 'Landownerslists' == this.$route.name,
              }"
              >View Landowners</router-link
            >
          </li>
          <li>
            <router-link
              to="/shop/products/Postedlands"
              v-bind:class="{
                'is-active': 'Postedlands' == this.$route.name,
              }"
              >Posted Lands</router-link
            >
          </li>
          <li>
        <router-link
          to=""
          v-bind:class="{
            'is-active': ''
          }"
         > <label @click="feedback" >Feedback </label> </router-link
        >
        </li>
        <li>
            <router-link
              to="/shop/products/Farmerswishes"
              v-bind:class="{
                'is-active': 'Farmerswishes' == this.$route.name,
              }"
              >View Wishlists</router-link
            >
          </li> 

        </ul>
      </li>
      
      <!-- <li>
        <router-link
          to="/shop/transactions"
          v-bind:class="{
            'is-active': 'shop-transactions' == this.$route.name,
          }"
          >Transactions</router-link
        >
      </li> -->
      <!-- <li>
        <router-link
          to="/shop/log"
          v-bind:class="{
            'is-active': 'shop-log' == this.$route.name,
          }"
          >Log</router-link
        >
      </li> -->
      <!-- <li>
        <router-link
          to="/shop/settings"
          v-bind:class="{
            'is-active': 'shop-settings' == this.$route.name,
          }"
          >Settings</router-link
        >
      </li> -->
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
      .delete("/user/shop")
      .then((response) => {
        console.log(response)
      })
    }
  }
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
/* .style-section{
        padding: 0px;
    } */
</style>
