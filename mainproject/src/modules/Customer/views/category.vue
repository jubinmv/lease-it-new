<!-- <template>
    <br>

    <div class="gallery" v-for="(category, index) in landCategories" :key="index">
        <a target="_blank">
            <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
        </a>
        <div class="desc">{{category.category}}</div>
        <div class="desc">{{category.description}}</div>

    </div>

    



</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "Addcrop",
    data() {
        return {
            landCategories: []
        };
    },
    mounted() { 
        this.fetchData()
    },
    methods: {
        async fetchData() {
            
            await axios
                .get("http://localhost:8080/api/users/lands/categories")
                .then((response) => {
                   this.landCategories = response.data
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
div.gallery {
    margin: 10px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 20px;
    text-align: center;
}
</style> -->
