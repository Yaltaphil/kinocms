import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/stats",
        name: "Stats",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "stats" */ "../views/Stats.vue"),
    },

    {
        path: "/banners",
        name: "Banners",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "banners" */ "../views/Banners.vue"),
    },

    {
        path: "/films",
        name: "Films",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "films" */ "../views/Films.vue"),
    },

    {
        path: "/films/:filmIndex",
        name: "FilmDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "films" */ "../views/FilmDetails.vue"),
    },

    {
        path: "/cinemas",
        name: "Cinemas",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "cinemas" */ "../views/Cinemas.vue"),
    },

    {
        path: "/cinemas/:cinemaIndex",
        name: "CinemaDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/CinemaDetails.vue"
            ),
    },

    {
        path: "/cinemas/:cinemaIndex/:hallIndex",
        name: "CinemaHallDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/CinemaHallDetails.vue"
            ),
    },

    {
        path: "/news",
        name: "News",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "news" */ "../views/News.vue"),
    },

    {
        path: "/news/:newsIndex",
        name: "NewsDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "films" */ "../views/NewsDetails.vue"),
    },

    {
        path: "/actions",
        name: "Actions",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "actions" */ "../views/Actions.vue"),
    },

    {
        path: "/actions/:actionIndex",
        name: "ActionDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(
                /*webpackChunkName: "actions" */ "../views/ActionDetails.vue"
            ),
    },

    {
        path: "/pages",
        name: "Pages",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "pages" */ "../views/Pages.vue"),
    },

    {
        path: "/users",
        name: "Users",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "users" */ "../views/Users.vue"),
    },

    {
        path: "/users/:userIndex",
        name: "UserDetails",
        props: true,
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "users" */ "../views/UserDetails.vue"),
    },

    {
        path: "/mailing",
        name: "Mailing",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "mailing" */ "../views/Mailing.vue"),
    },

    {
        path: "/mailing/choose",
        name: "ChooseUsers",
        meta: { layout: "main" },
        component: () =>
            import(/*webpackChunkName: "mailing" */ "../views/ChooseUsers.vue"),
    },

    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { layout: "main" },
    },

    {
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () =>
            import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
