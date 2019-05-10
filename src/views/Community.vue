<template>
  <div id="community">
    <h1>Where is the hype</h1>
    <Chat/>
    <div class="boxes">
      <div class="box1">.</div>
      <div class="box2">.</div>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Chat from "@/components/Chat.vue";

export default {
  name: "community",
  components: { Nav, 
  Chat 
  }
};
</script>

<style>

</style>


