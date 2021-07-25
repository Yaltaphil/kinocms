import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//admin-lte
// import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.min.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAtgcmRF4kAEEUqUTa3n6CnivhhUTdXcxs",
  authDomain: "kinocms-vue.firebaseapp.com",
  projectId: "kinocms-vue",
  storageBucket: "kinocms-vue.appspot.com",
  messagingSenderId: "1039046669560",
  appId: "1:1039046669560:web:ab36f7cda937d308c5f70d",
  measurementId: "G-V2K9MEGC5N",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
