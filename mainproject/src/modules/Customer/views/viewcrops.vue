<template>
    <br>

    <div class="galle" v-for="(cropss, index) in viewcrop" :key="index">
    
        <img :src="cropss.image">
        
        <div class="desco">Crop Name: {{cropss.cropname}}</div>
        <div class="desco">Description: {{cropss.description}}</div>
        <div class="desco">Soil Needed: {{cropss.soil_type}} Acer</div>
        <div class="desco">Climate Needed: {{cropss.climate}}</div>
        <div class="desco">Temperature Needed: {{cropss.temperature}}</div>
        <div class="desco">Harvesting Time: {{cropss.harvesting_time}}</div>
        <div class="desco">Price: {{cropss.price}}</div>


    </div>

    



</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "displaycrop",
    data() {
        return {
            viewcrop: []
        };
    },
    mounted() { 
        this.fetchData()
    },
    methods: {
        async fetchData() {
            
            await axios
                .get("http://localhost:8080/api/users/crops/view")
                .then((response) => {
                   this.viewcrop = response.data
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
    margin: 10px;
    border: 1px solid #ccc;
    float: left;
    width: 400px;
    height: 380;
}



div.desco {
    padding: 5px;
    text-align:left;
    font-weight: 600;
    color: aqua;
}
</style>
