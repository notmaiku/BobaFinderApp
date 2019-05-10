    
<template>
  <div id="shop">
    <Search/>
    <div class="slider">
      <div class="slides">
        <div>
          <img src="@/assets/i/kcorgi.png">
        </div>
        <div>
          <img src="@/assets/i/ocorgi.png">
        </div>
      </div>
    </div>
    <Rating/>
    <div class="boxes">
      <div class="box1">.</div>
      <div class="box2">.</div>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search-bar.vue";
import Rating from "@/components/Star-rating.vue";

export default {
  name: "Shop",
  components: {
    Nav,
    Search,
    Rating,
  }
};

$(document).ready(function() {
  $(".slides").slick({
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  });
});
</script>
