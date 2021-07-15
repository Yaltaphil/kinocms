import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//admin-lte
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.min.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAtgcmRF4kAEEUqUTa3n6CnivhhUTdXcxs",
//     authDomain: "kinocms-vue.firebaseapp.com",
//     projectId: "kinocms-vue",
//     storageBucket: "kinocms-vue.appspot.com",
//     messagingSenderId: "1039046669560",
//     appId: "1:1039046669560:web:ab36f7cda937d308c5f70d",
//     measurementId: "G-V2K9MEGC5N"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

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
