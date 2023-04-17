<template>
  <div class="home">
    <!-- <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Cloud Store
            </p>
            <p class="subtitle">
                The best Store for buying anything
            </p>
        </div>
    </section> -->

    <div class="columns is-multiline">
      <div class="column is-12">
        <!-- <h2 class="is-size-2 has-text-centered">Latest products</h2> -->
      </div>

      <ProductBox
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ProductBox from "@/components/ProductBox";

import * as locationService from "@/views/location";

export default {
  name: "Home",
  data() {
    return {
      latestProducts: [],
      address: "",
    };
  },
  components: {
    ProductBox,
  },
  mounted() {
    // this.getLocationAddress()

    // this.getLatestProductsByPincode()

    (function (d, m) {
      var kommunicateSettings = {
        appId: "209724be3ac5b0dcebd87c6e4c71e92b0",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    this.getLatestProducts();

    document.title = "Home | Lease_It";
  },
  data: function () {},

  methods: {
    async getLatestProducts() {
      this.$store.commit("setIsLoading", true);

      // axios
      //   .get('/products')
      //   .then(response => {
      //     this.latestProducts = response.data
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })

      // this.$store.commit('setIsLoading', false)

      await this.getLocationAddress();

      // await this.getLatestProductsByPincode()
    },

    getLatestProductsByPincode(pincode) {
      // var pincode = await this.$store.state.pincode
      axios
        // .get(`/productsbypin?pincode=${pincode}`)
        .get(`/product/allByPin?pincode=${pincode}`)
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getLocationAddress() {
      this.address = await locationService.currentAddress();
      await this.$store.commit("setCustPincode", this.address);
      console.log("Address: " + this.address);

      this.getLatestProductsByPincode(this.address);
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>




