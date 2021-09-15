const siteRoutes = [
    {
        path: "/404",
        alias: "*",
        name: "notFound",
        meta: { layout: "empty", auth: false },
        component: () =>
            import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
    },

    {
        path: "/login",
        name: "Login",
        meta: { layout: "empty", auth: false },
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },

    {
        path: "/register",
        name: "Register",
        meta: { layout: "empty", auth: false },
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Register.vue"),
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
        path: "/affiche/:filmIndex",
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
        path: "/actions/:actionIndex",
        name: "SiteActionDetails",
        meta: { layout: "site", auth: false },
        props: true,
        component: () =>
            import(
                /*webpackChunkName: "actions" */ "../views/SiteActionDetails.vue"
            ),
    },

    {
        path: "/cinemas",
        name: "SiteCinemas",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "cinemas" */ "../views/SiteCinemas.vue"),
    },

    {
        path: "/cinemas/:cinemaIndex",
        name: "SiteCinemaDetails",
        meta: { layout: "site", auth: false },
        props: true,
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/SiteCinemaDetails.vue"
            ),
    },

    {
        path: "/cinemas/:cinemaIndex/:hallIndex",
        name: "SiteCinemaHallDetails",
        meta: { layout: "site", auth: false },
        props: true,
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/SiteCinemaHallDetails.vue"
            ),
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
        path: "/schedule/booking",
        name: "SiteScheduleBooking",
        meta: { layout: "site", auth: false },
        prop: true,
        component: () =>
            import(
                /*webpackChunkName: "schedule" */ "../views/SiteScheduleBooking.vue"
            ),
    },

    {
        path: "/about",
        name: "SiteAboutCinema",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "about" */ "../views/SiteAboutCinema.vue"
            ),
    },

    {
        path: "/about/news",
        name: "SiteAboutNews",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "about" */ "../views/SiteAboutNews.vue"),
    },

    {
        path: "/about/cafe",
        name: "SiteAboutCafe",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "about" */ "../views/SiteAboutCafe.vue"),
    },

    {
        path: "/about/vip",
        name: "SiteAboutVip",
        meta: { layout: "site", auth: false },
        component: () =>
            import(/*webpackChunkName: "about" */ "../views/SiteAboutVip.vue"),
    },

    {
        path: "/about/children",
        name: "SiteAboutChildren",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "about" */ "../views/SiteAboutChildren.vue"
            ),
    },

    {
        path: "/about/advertisement",
        name: "SiteAboutAdvertisement",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "about" */ "../views/SiteAboutAdvertisement.vue"
            ),
    },

    {
        path: "/about/mobile",
        name: "SiteAboutMobile",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "about" */ "../views/SiteAboutMobile.vue"
            ),
    },

    {
        path: "/about/contacts",
        name: "SiteAboutContacts",
        meta: { layout: "site", auth: false },
        component: () =>
            import(
                /*webpackChunkName: "about" */ "../views/SiteAboutContacts.vue"
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
