import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//admin-lte
import "admin-lte/plugins/bootstrap/js/bootstrap.min.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";

import toastMessage from "./plugins/toastMessage";
Vue.use(toastMessage);

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

// Event bus
export const eventBus = new Vue();

const firebaseConfig = {
    apiKey: "AIzaSyDu-sDXoABOEFYqz7BEX9eEYf111IP3zVg",
    authDomain: "kinocms-vue2.firebaseapp.com",
    projectId: "kinocms-vue2",
    storageBucket: "kinocms-vue2.appspot.com",
    messagingSenderId: "803288075236",
    appId: "1:803288075236:web:8df94e4213a7c9bb7e15f1",
    measurementId: "G-TLJJ5ZKMPZ",
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
