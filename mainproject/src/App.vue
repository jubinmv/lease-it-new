<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" id="logoText"><strong>Lease IT</strong></router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-end mx-auto">
          <div class="navbar-item">
            <!-- <div class="select is-success">
            </div> -->



            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control searchBox">
                  <input type="text" class="input" placeholder=" We are here for what you looking for?" name="query" />
                </div>

                <!-- <div class="control">
                  <button class="button is-success">
                    <span class="icon">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </button>
                </div> -->
              </div>
            </form>
          </div>
        </div>

        <div class="navbar-end ml-0">
          <!-- <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link> -->

          <div class="navbar-item">
            <div class="buttons">
              <template v-if="$store.state.isAuthenticated">
                <router-link to="/admin" class="button is-light" v-if="$store.state.userRole == 'ADMIN'">My
                  account</router-link>

                <router-link class="button is-light" v-if="$store.state.userRole == 'SHOP'" to="/shop">My
                  account</router-link>

                <router-link class="button is-light" v-if="$store.state.userRole == 'CUSTOMER'" to="/customer">My
                  account</router-link>

                <button @click="logout()" class="button is-danger" id="logoutButton">
                  Logout
                </button>
              </template>

              <template v-else>
                <router-link to="/" class="button is-light">Home </router-link>
                <router-link to="/About" class="button is-light">About</router-link>
                <router-link to="/Guide" class="button is-light">Guide</router-link>
                <router-link to="/login" class="button is-light">Log in</router-link>
                <router-link to="/signup" class="button is-light">Sign up</router-link>
              </template>

              <!-- <router-link to="/cart" class="button is-success" id="cartButton"
                v-if="$store.state.userRole !== 'SHOP' && $store.state.userRole !== 'ADMIN'"
              >
                 <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength }})</span> 
              </router-link>  -->

              <template v-if="$store.state.isAuthenticated">
                <div class="profile-dp-div">
                  {{ userName }}
                  <img class="profile-dp"
                    src="http://www.thegurughantal.com/uploads/7/5/8/2/75825867/delhinightclubs-5-bwxyimsnzqm_orig.jpg" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- 
    <div
      class="is-loading-bar has-text-centered"
      v-bind:class="{ 'is-loading': $store.state.isLoading }"
    >
      <div class="lds-dual-ring"></div>
    </div> -->








    <!-- I added 'style-section' class below in order to edit it's properties in other templates, if I want.
        But, when I changed the style properties, it reflects in every other page as well. That's a problem. -->
    <section class="gunda">
      <router-view />
    </section>

    <!-- <footer class="footer">
      <p class="has-text-centered">Lease IT</p>
    </footer> -->
  </div>
</template>

<script>
import axios from "axios";

/* eslint-disable no-undef */
// import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
// import { useGeolocation } from './useGeoLocation'

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: [],
      },
      userLoc: {
        city: "",
        region: "",
        country: "",
        latitude: "",
        longitude: "",
      },
      categories: [],
      selectedCategory: "Category",
    };
  },

  beforeCreate() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
    this.getGeolocationInformation();
    this.getCategories();

    (function (d, m) {
      var kommunicateSettings = { "appId": "a70a75e9b0024f5a8444826e9c43cc5c", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0;

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }

      return totalLength;
    },
    userName() {
      let token = this.$store.state.token
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload).name;

    }
  },

  methods: {

    getCategories() {
      axios.get(`/user/shop/product/category`).then((response) => {
        console.log(response);
        this.categories = response.data;
      });
    },



    getProductsByCategory(item) {
      this.$router.push(`/category?category=${item.category}`)
    },

    logout() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");

      this.$store.commit("removeToken");

      this.$store.commit("setUserRole", "");

      this.$router.push("/");
    },

    async getGeolocationInformation() {
      // const API_KEY = "ab5a99eb2c834bd5846f191401c2cfab";
      const API_KEY = "a081e277312e4671a6826d28a8496cb6";
      const API_URL =
        "https://ipgeolocation.abstractapi.com/v1/?api_key=" + API_KEY;
      const apiResponse = await fetch(API_URL);
      const data = await apiResponse.json();
      const { city, country, region, latitude, longitude } = data;
      this.city = city;
      this.region = region;
      this.country = country;
      this.latitude = latitude;
      this.longitude = longitude;
      console.log(data);
      console.log(
        "City: " +
        this.city +
        " Latitude: " +
        this.latitude +
        " Longitude: " +
        this.longitude
      );
    },
  },
};


</script>

<style lang="scss">
@import "../node_modules/bulma";

.profile-dp {
  width: max-width;
  height: max-width;
  border-radius: 50%;
}


.searchBox {
  width: 500px;
}

.gunda {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: calc(100vh - 65px);
  background-image: url("dd5.jpg");
  background-position: 70% 30%;
  background-size: cover;
}

.footer-slot {
  background: #991c1c;
}
</style>
 