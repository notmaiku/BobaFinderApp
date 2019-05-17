<template>
  <div id="search">
    <Search/>
    <Results/>
    <div class="boxes">
      <div class="box1">.</div>
      <div class="box2">.</div>
    </div>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search-bar.vue";
import Results from "@/components/Results.vue";

export default {
  name: "search",
  components: {
    HelloWorld,
    Nav,
    Search,
    Results,
  }
};
</script>
