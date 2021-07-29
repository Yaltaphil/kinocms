import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/stats',
        name: 'Stats',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "stats" */ '../views/Stats.vue'),
    },
    {
        path: '/banners',
        name: 'Banners',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "banners" */ '../views/Banners.vue'),
    },
    {
        path: '/films',
        name: 'Films',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "films" */ '../views/Films.vue'),
    },
    {
        path: '/films/:filmId',
        name: 'FilmDetails',
        props: true,
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "films" */ '../views/FilmDetails.vue'),
        // beforeEnter: (to, from, next) => {
        //     const exists = this.films.find(
        //         (film) => film.id === to.params.filmId
        //     );
        //     if (exists) {
        //         next();
        //     } else {
        //         next({ name: 'notFound' });
        //     }
        // },
    },

    {
        path: '/cinemas',
        name: 'Cinemas',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "cinemas" */ '../views/Cinemas.vue'),
    },
    {
        path: '/news',
        name: 'News',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "news" */ '../views/News.vue'),
    },
    {
        path: '/actions',
        name: 'Actions',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "actions" */ '../views/Actions.vue'),
    },
    {
        path: '/pages',
        name: 'Pages',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "pages" */ '../views/Pages.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "users" */ '../views/Users.vue'),
    },
    {
        path: '/mailing',
        name: 'Mailing',
        meta: { layout: 'main' },
        component: () =>
            import(/*webpackChunkName: "mailing" */ '../views/Mailing.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'main' },
    },
    {
        path: '/404',
        alias: '*',
        name: 'notFound',
        component: () =>
            import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
