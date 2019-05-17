<template>
<div id="settings">
    <ProfileCorner />
    <fav />
    <div class="boxes">
        <div class="box1" />
        <div class="box2" />
    </div>
    <Nav />
</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ProfileCorner from '@/components/ProfileCorner.vue';
import fav from '@/components/Favorites.vue';

export default {
    name: "settings",
    components: {
        Nav,
        fav
    }
};
</script>
