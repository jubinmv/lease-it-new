<template>
    <div>
      <h2>Hello from Vue.js!</h2>
      <button @click="loadReactWebsite">Load React Website</button>
    </div>
  </template>
  <script>
export default {
    methods: {
      loadReactWebsite() {
        window.location.href = 'https://www.example.com'; // Replace with your React website's URL
      }
    }
  }
</script>    