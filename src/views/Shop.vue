    
<template>
    <div id="shop">
        <Search/>
        <div class="slider">
            <div>your content</div>
            <div>your content</div>
            <div>your content</div>
        </div>
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

export default {
    name: "Shop",
    components:{
        Nav,
        Search,
    }
}
$(document).ready(function(){
  $('.slider').slick({
  });
});
</script>
