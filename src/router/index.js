import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Main from "../views/Main.vue";

import siteRoutes from "./siteRoutes";
import adminRoutes from "./adminRoutes";

Vue.use(VueRouter);

const mainRoutes = [
    {
        path: "/",
        name: "Main",
        meta: { layout: "site" },
        component: Main,
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
        next({ name: `Login` });
    } else {
        next();
    }
});

export default router;
