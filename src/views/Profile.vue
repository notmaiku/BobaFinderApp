<template>
<div id="profile">
    <SignUp />
    <div class="boxes">
        <div class="box1" />
        <div class="box2" />
    </div>
    <Nav />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from '@/components/Nav.vue';
import SignUp from '@/components/SignUp.vue';

export default {
    name: "user",
    components: {
        HelloWorld,
        Nav,
        SignUp
    }
};
</script>

<style>
</style>
