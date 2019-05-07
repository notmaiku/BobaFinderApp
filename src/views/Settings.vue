<template>
  <div id="settings">
    <vuetable
      ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="['name', 'email', 'birthdate']"
    ></vuetable>
    <div class="boxes">
      <div class="box1"/>
      <div class="box2"/>
    </div>
    <Nav/>
  </div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import Nav from "@/components/Nav.vue";

export default {
  name: "settings",
  components: {
    Vuetable,
    Nav
  }
};
</script>