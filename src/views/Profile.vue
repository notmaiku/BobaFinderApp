<template>
  <div id="profile">
    <div class="boxes">
      <div class="box1"/>
      <div class="box2"/>
      </div>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from '@/components/Nav.vue';

export default {
  name: "user",
  components: {
    HelloWorld,
    Nav
  }
};
</script>

<style scoped>
.profile{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
}
</style>

