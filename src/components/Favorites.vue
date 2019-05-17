<template>
<div id="favorites" class="container">
    <h2>Favorites</h2>
    <!-- Favorites -->
    <div v-for="favorite in favorites" :key="favorite.id" class="card">
        <div class="card-body">
            {{favorite.shop}}
            {{favorite.rating}}
            <!-- actions -->
            <div v-if="favorite !==editingFavorite">
                <a @click.prevent="deleteFavorite(favorite)" href="#" class="card-link">delete</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase';
const database = firebase.database()
const favoritesRef = database.ref('users')
export default {
    name: 'Favorites',
    data() {
        return {
            favorites: [],
            editingFavorite: null,
        }
    },
    methods: {
        updateCustomDetails() {
            firebase.database().ref('users').child(this.authUser.uid)
                .update({
                    favorites: this.favorites
                })
        },
        getFavorites() {
            favoritesRef.child(user.uid).on("child_added", snapshot => {
                var favorites = snapshot.val()
                console.log("Favorites is " + favorites.shop)
            })
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user
            if (user) {
                firebase.database().ref('users').child(user.uid).once('value', snapshot => {
                    if (snapshot.val()) {
                        this.favorites = snapshot.val().favorites
                        Vue.set(this.authUser, 'favorites', this.favorites)
                    }
                })
            }
            return this.favorties
        })
    },
    updated() {
    },
    mounted() {
    }
}
</script>