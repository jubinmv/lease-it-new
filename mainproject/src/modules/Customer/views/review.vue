<template>
     <div>
    <h1>Rate this page</h1>
    <Rating :maxStars="5" :initialRating="3" @rated="onRated"></Rating>
  </div>
    <div>
      <span v-for="(star, index) in stars" :key="index" @click="rate(index)">
        <i :class="starClass(star)"></i>
      </span>
    </div>
  </template>
  
  <script>
    import Rating from './review.vue';

  export default {
    name: 'Page',
  components: {
    Rating
  },
    name: 'Rating',
    props: {
      maxStars: {
        type: Number,
        default: 5
      },
      initialRating: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        stars: []
      }
    },
    methods: {
        onRated(rating) {
      console.log(`Rated ${rating} stars`);
    },
      rate(index) {
        this.$emit('rated', index + 1);
      },
      starClass(star) {
        return star ? 'fas fa-star' : 'far fa-star';
      },
      setStars() {
        this.stars = Array(this.maxStars).fill(false);
        for (let i = 0; i < this.initialRating; i++) {
          this.stars[i] = true;
        }
      }
    },
    mounted() {
      this.setStars();
    },
    watch: {
      initialRating() {
        this.setStars();
      }
    }
  }


    
  
  </script>
  
  <style>
    .fa-star {
      color: orange;
    }
  </style>