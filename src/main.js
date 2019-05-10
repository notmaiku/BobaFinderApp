import Vue from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/assets/css/app.css"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp8rH-tPQEgpInkygnzssY2Lq8iQ6HpwU",
  authDomain: "boba-e8b29.firebaseapp.com",
  databaseURL: "https://boba-e8b29.firebaseio.com",
  projectId: "boba-e8b29",
  storageBucket: "boba-e8b29.appspot.com",
  messagingSenderId: "996451165455",
  appId: "1:996451165455:web:fc0339a731c23e3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");