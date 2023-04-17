<template>
    <div>
      <form @submit.prevent="submit">
        <label>Email:</label>
        <input type="email" v-model="email" required>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
      };
    },
    methods: {
      async submit() {
        try {
          const response = await axios.post("/api/forgot-password", {
            email: this.email,
          });
          alert("Password reset email sent.");
        } catch (error) {
          alert("Error sending password reset email.");
        }
      },
    },
  };
  </script>