<template>
  <star-rating class="rating" 
               v-model="rating"
               v-bind:show-rating="false"  
  ></star-rating>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "Star-rating",
  components: {
    StarRating
  }
};
</script>
