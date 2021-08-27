const siteRoutes = [
    {
        path: "/404",
        alias: "*",
        name: "notFound",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    },

    {
        path: "/affiche",
        name: "SiteAffiche",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "affiche" */ "../views/SiteAffiche.vue"),
    },

    {
        path: "/soon",
        name: "SiteSoon",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "soon" */ "../views/SiteSoon.vue"),
    },

    {
        path: "/affiche/:id",
        name: "SiteFilmDetails",
        props: true,
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "affiche" */ "../views/SiteFilmDetails.vue"
            ),
    },

    {
        path: "/actions",
        name: "SiteActions",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "actions" */ "../views/SiteActions.vue"),
    },

    {
        path: "/cinemas",
        name: "SiteCinemas",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "cinemas" */ "../views/SiteCinemas.vue"),
    },

    {
        path: "/schedule",
        name: "SiteSchedule",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "schedule" */ "../views/SiteSchedule.vue"
            ),
    },

    {
        path: "/cabinet",
        name: "SiteCabinet",
        meta: { layout: "site", auth: true },
        component: () =>
            import(/*webpackChunkName: "cabinet" */ "../views/UserCabinet.vue"),
    },
];

export default siteRoutes;