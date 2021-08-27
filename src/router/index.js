import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Login from "../views/admin/Login.vue";

import adminRoutes from "./adminRoutes";
import siteRoutes from "./siteRoutes";

Vue.use(VueRouter);

const mainRoutes = [
    {
        path: "/admin",
        name: "Login",
        meta: { layout: "admin" },
        component: Login,
    },

    {
        path: "/",
        name: "Login",
        meta: { layout: "admin" },
        component: Login,
    },
];

const allRoutes = [...siteRoutes, ...adminRoutes, ...mainRoutes];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: allRoutes,
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const authRequired = to.matched.some((record) => record.meta.auth);

    if (authRequired && !currentUser) {
        next("/admin/login");
    } else {
        next();
    }
});

export default router;
