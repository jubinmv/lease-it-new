<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Log in</h1>

        <form @submit.prevent="submitForm" class="pakaran">
          <div class="field">
            <label>Email</label>
            <div class="control">
              <input type="text" class="input" v-model="state.email" id="emailLogin" />
              <span v-if="v$.email.$error" class="has-text-danger">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
          </div>

          <div class="field">
            <label>Password</label>
            <div class="control">
              <input type="password" class="input" v-model="state.password" id="passLogin" />
              <span v-if="v$.password.$error" class="has-text-danger">
                {{ v$.password.$errors[0].$message }}
              </span>
            </div>
          </div>
          <vue-recaptcha sitekey="6LcTVn0kAAAAAPisr9_hgsq_wAYnAHXmZhPwgUjQ" ></vue-recaptcha>



         

          <div class="field">
            <div class="control">
              <button class="button is-dark" id="submitLogin">Log in</button>
            </div>
          </div>
        <!-- <div>
         <router-link to="/ForgotPassword">  Forgot Password</router-link>
        </div> -->

          Don't have an Account? <router-link to="/signup">Sign Up</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { toast } from "bulma-toast";

import useValidate from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { VueRecaptcha } from 'vue-recaptcha';

  
export default {
  name: "LogIn",
  components: { VueRecaptcha },

  
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(131),
          containsPasswordRequirement: helpers.withMessage(
            () =>
              `The password requires an uppercase, lowercase, number and special character`,
            (value) =>
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
          ),
        },
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },

  mounted() {
    document.title = "Log In | Lease It";

    (function (d, m) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);

    }) ()

  },
  methods: {
    
    async submitForm() {
      this.v$.$validate();

      if (!this.v$.$error) {
        axios.defaults.headers.common["Authorization"] = "";

        localStorage.removeItem("token");

        const formData = {
          email: this.state.email,
          password: this.state.password,
        };

        this.$store.commit("setIsLoading", true);

        await axios
          .post("http://localhost:8080/api/users/login", formData)
          .then((response) => {
            
            const token = response.data.token;

            this.$store.commit("setToken", token);

            axios.defaults.headers.common["Authorization"] = "Bearer " + token;

            localStorage.setItem("token", token);


            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
              window
                .atob(base64)
                .split("")
                .map(function(c) {
                  return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );


            let decoded = JSON.parse(jsonPayload);
            console.log('decoded', decoded)
            let decodedRole = decoded.role;
            let decodedId = decoded.userId

            this.$store.commit("setUserRole", decodedRole);
            this.$store.commit("setUserId", decodedId)
            let toPath = this.$route.query.to || "/";
            if (decoded.role) {
              toPath = decoded.role === 'farmer'? '/customer': decoded.role === 'land_owner'? '/shop': '/admin'
            } else {
              toPath = this.$route.query.to || "/";
            }
            

            this.$router.push(toPath);
          })
          .catch((error) => {
            toast({
              message: "Not Logged In, Try again",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          });

          this.$store.commit("setIsLoading", false);
      }
    },
  },
};
</script>
<style>
.pakaran{
color: rgb(43, 13, 239);
}
</style>