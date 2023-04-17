<template>
      <div class="galle" v-for="(lands, index) in agrilandss" :key="index">
    
<img :src="lands.image">
<div class="descoo">Place: {{lands.locationName}}</div>
        <div class="descoo">Description: {{lands.description}}</div>
        <div class="descoo">Extend: {{lands.extend}} Acer</div>
        <div class="descoo">Survey Number: {{lands.survey_number}}</div>
        <div class="descoo">Owner Name: {{lands.ownername}}</div>
        <div class="descoo">Price: {{lands.price}}</div>
        <div class="descoo">Advance Amount: {{lands.advance}}</div>
        <div class="descoo">pH of soli: {{ lands.ph }}</div>
        <div class="descoo">Nitrogen: {{ lands.nitrogen }}</div>
        <div class="descoo">Pottassium: {{ lands.pottassium }}</div>
        <div class="descoo">Phosphorous: {{ lands.phosphorous }}</div>
        <div class="descoo">Temperature: {{ lands.temp }}</div>
        <div class="descoo">Humidity: {{ lands.humidity }}</div>
        <div class="descoo">Rainfall: {{ lands.rainfall }}</div>

        <button class="button is-dark" @click="createOrder()" style="margin-bottom: 5px;  margin-left: 50px">Lease Now</button>
        <button class="button is-dark" @click="loadReactWebsite" style="margin-bottom: 5px;  margin-left: 50px">Predict Corp</button>


    </div>

    



</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "displayland",
    data() {
        return {
            agrilandss: []
        };
    },
    mounted() { 
        let razorPayScript = document.createElement('script')
        razorPayScript.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js')
        document.head.appendChild(razorPayScript)
        this.fetchData()
    },
    methods: {
        loadReactWebsite() {
      window.open('https://cropfusionai.vercel.app ', '_blank') // Replace with your React website's URL
    },
    async createOrder() {
            try {
                const response = await axios.post('http://localhost:8080/api/razor-pay/order', {
                    amount: 50000,  // amount in the smallest currency unit
                    currency: "INR",
                    receipt: "order_rcptid_1"
                })
                this.payment(response.id)
                console.log('response', response)
            } catch (error) {

            }
        },
        async payment(orderId) {
            const a= this
            // await 
            var options = {
                "key": "rzp_test_iJs9lNifWJnygM", // Enter the Key ID generated from the Dashboard
                "amount": "500000",
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function () {
                    // a.updateLandBuy()
                    a.$router.push('Agreement')
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();

        },
        async fetchData() {
            
            await axios
                .get("http://localhost:8080/api/users/agrilands/agri")
                .then((response) => {
                   this.agrilandss = response.data
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
.galle {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 350px;
    height: 330;
}



div.descoo {
    padding: 0.2px;
    text-align:left;
    font-weight: 500;
    color: aqua;
}
</style>
