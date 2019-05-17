<template>
<div id="profile">
    <div class="boxes">
        <div class="box1" />
        <div class="box2" />
    </div>
    <fav/>
    <ProfileCorner />
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
import ProfileCorner from '@/components/ProfileCorner.vue';
import fav from "@/components/Favorites.vue";

export default {
    name: "user",
    components: {
        HelloWorld,
        Nav,
        ProfileCorner,
        fav,
    }
};
</script>

<style>
</style>
