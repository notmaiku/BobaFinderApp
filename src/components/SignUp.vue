<template>
<div class="sign-up">
    <div v-if="authUser">
        <h2>Signed in as {{authUser.email}}
            <img v-if="linkedGoogle" src="//www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" alt="google linked">
            <img v-if="linkedPassword" src="//www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_email.svg" alt="password linked">
        </h2>
            <img :src="authUser.photoURL" height="150">
            <p>What's up, {{authUser.displayName || 'friend'}} We know you love {{authUser.favoriteBoba || 'boba'}} </p>
            <button @click="signOut">Sign out</button>
            <button v-if="!linkedGoogle" @click="linkGoogle">Link Google</button>
            <button v-else @click="unLinkGoogle">Unlink Google</button>

            <form @submit.prevent="updateProfile">
                <h2>Update Profile</h2>
                <input v-model="displayName" placeholder="Name">
                <input v-model="photoURL" placeholder="Photo URL">
                <button>Update</button>
            </form>
            <form @submit.prevent="updateCustomDetails">
                <h2>Update Additional</h2>
                <input v-model="favoriteBoba" placeholder="Favorite Boba">
                <button>Update</button>
            </form>
            <form @submit.prevent="updateEmail">
                <h2>Update Email</h2>
                <input v-model="email" placeholder="Your email">
                <button>Update</button>
            </form>
            <form @submit.prevent="updatePassword">
                <h2>Update Password</h2>
                <input type="password" v-model="newPassword" placeholder="Your password">
                <button>Update</button>
            </form>
    </div>
    <div v-else>
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input type="email" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter password">
            <button>Register</button>
        </form>
        <form @submit.prevent="signIn">
            <h2>Sign in</h2>
            <input type="email" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter password">
            <button>Sign in</button>
        </form>
        <div>
            <h2>Sign in with Google</h2>
            <button @click="signInWithGoogle">Sign in</button>
        </div>
    </div>

</div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "SignUp",
    data() {
        return {
            email: "",
            password: "",
            displayName: null,
            photoURL: null,
            newPassword: null,
            authUser: null,
            favoriteBoba: null,
        }
    },
    computed: {
        linkedGoogle() {
            return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
        },
        linkedPassword() {
            return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
        },
    },
    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .catch(error => alert("🤕" + error.message))
        },
        signOut() {
            firebase.auth().signOut()
        },
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(error => alert("🤕" + error.message))
        },
        signInWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider)
                .catch(error => alert("🤕" + error.message))
                .then(data => console.log(data.user, data.credential.accessToken))
        },
        linkGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider()
            this.authUser.linkWithPopup(provider)
                .catch(error => alert("🤕" + error.message))
                .then(data => console.log(data.user, data.credential.accessToken))
        },
        unlinkGoogle() {
            this.authUser.unlink('google.com')
        },
        updateProfile() {
            this.authUser.updateProfile({
                displayName: this.displayName,
                photoURL: this.photoURL
            })
        },
        updateCustomDetails() {
            firebase.database().ref('users').child(this.authUser.uid)
                .update({
                    favoriteBoba: this.favoriteBoba
                })
        },
        updateEmail() {
            this.authUser.updateEmail(this.email)
        },
        updatePassword() {
            this.authUser.updatePassword(this.newPassword)
                .then(() => {
                    this.newPassword = null
                })
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user
            if (user) {
                this.displayName = user.displayName
                this.photoURL = user.photoURL
                this.email = user.email
                firebase.database().ref('users').child(user.uid).once('value', snap => {
                    if (snapshot.val()) {
                        this.favoriteBoba = snapshot.val().favoriteBoba
                        Vue.set(this.authUser, 'favoriteBoba', this.favoriteBoba)
                    }
                })
            }

        })
    }
};
</script>
