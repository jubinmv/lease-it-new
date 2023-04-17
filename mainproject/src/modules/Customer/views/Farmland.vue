<template>
    <div class="galle" v-for="(land, index) in farmlands" :key="index">

        <img :src="land.image">
        <div class="desco">Place: {{ land.locationName }}</div>
        <div class="desco">Description: {{ land.description }}</div>
        <div class="desco">Extend: {{ land.extend }} Acer</div>
        <div class="desco">Price: {{ land.price }}</div>
        <div class="desco">Survey Number: {{ land.survey_number }}</div>
        <div class="desco">Owner Name: {{ land.ownername }}</div>
        <div class="desco">Advance Amount: {{ land.advance }}</div>       
         <div class="desco">pH of soli: {{ land.ph }}</div>
        <div class="desco">Nitrogen: {{ land.nitrogen }}</div>
        <div class="desco">Pottassium: {{ land.pottassium }}</div>
        <div class="desco">Phosphorous: {{ land.phosphorous }}</div>
        <div class="desco">Temperature: {{ land.temp }}</div>
        <div class="desco">Humidity: {{ land.humidity }}</div>
        <div class="desco">Rainfall: {{ land.rainfall }}</div>

        <button class="button is-dark" @click="createOrder()" style="margin-bottom: 5px;  margin-left: 50px">Lease Now</button>
        <button class="button is-dark" @click="loadReactWebsite" style="margin-bottom: 5px;  margin-left: 50px">Predict Crop</button>



    </div>
</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "Addcrop",
    data() {
        return {
            farmlands: []
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
                    receipt: "order_rcptid_11"
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
                "amount": "100000",
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
                .get("http://localhost:8080/api/users/lands/get")
                .then((response) => {
                    this.farmlands = response.data
                    console.log('response', response);

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
    margin: 10px;
    border: 1px solid #ccc;
    float: left;
    width: 400px;
    height: 380;
}



div.desco {
    padding: 2px;
    text-align: left;
    font-weight: 600;
    color: aqua;
}
</style>
