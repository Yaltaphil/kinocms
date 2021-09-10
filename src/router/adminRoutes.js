const adminRoutes = [
    // {
    //     path: "/admin/404",
    //     alias: "*",
    //     name: "notFound",
    //     meta: { layout: "admin", auth: false },
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "NotFound" */ "../views/admin/NotFound.vue"
    //         ),
    // },

    {
        path: "/admin",
        name: "Login",
        meta: { layout: "admin", auth: false },
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/admin/Login.vue"),
    },

    {
        path: "/admin/banners",
        name: "Banners",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "banners" */ "../views/admin/Banners.vue"
            ),
    },

    {
        path: "/admin/films",
        name: "Films",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(/*webpackChunkName: "films" */ "../views/admin/Films.vue"),
    },

    {
        path: "/admin/films/:filmIndex",
        name: "FilmDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "films" */ "../views/admin/FilmDetails.vue"
            ),
    },

    {
        path: "/admin/cinemas",
        name: "Cinemas",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/admin/Cinemas.vue"
            ),
    },

    {
        path: "/admin/cinemas/:cinemaIndex",
        name: "CinemaDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/admin/CinemaDetails.vue"
            ),
    },

    {
        path: "/admin/cinemas/:cinemaIndex/:hallIndex",
        name: "CinemaHallDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "cinemas" */ "../views/admin/CinemaHallDetails.vue"
            ),
    },

    {
        path: "/admin/news",
        name: "News",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(/*webpackChunkName: "news" */ "../views/admin/News.vue"),
    },

    {
        path: "/admin/news/:newsIndex",
        name: "NewsDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "films" */ "../views/admin/NewsDetails.vue"
            ),
    },

    {
        path: "/admin/actions",
        name: "Actions",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "actions" */ "../views/admin/Actions.vue"
            ),
    },

    {
        path: "/admin/actions/:actionIndex",
        name: "ActionDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "actions" */ "../views/admin/ActionDetails.vue"
            ),
    },

    {
        path: "/admin/pages",
        name: "Pages",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(/*webpackChunkName: "pages" */ "../views/admin/Pages.vue"),
    },
    {
        path: "/admin/pages/:pageIndex",
        name: "MainPageDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "pages" */ "../views/admin/MainPageDetails.vue"
            ),
    },
    {
        path: "/admin/pages/:pageIndex",
        name: "ContactsPageDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "pages" */ "../views/admin/ContactsPageDetails.vue"
            ),
    },
    {
        path: "/admin/pages/:pageIndex",
        name: "StandartPageDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "pages" */ "../views/admin/StandartPageDetails.vue"
            ),
    },

    {
        path: "/admin/users",
        name: "Users",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(/*webpackChunkName: "users" */ "../views/admin/Users.vue"),
    },

    {
        path: "/admin/users/:userIndex",
        name: "UserDetails",
        props: true,
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "users" */ "../views/admin/UserDetails.vue"
            ),
    },

    {
        path: "/admin/mailing",
        name: "Mailing",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "mailing" */ "../views/admin/Mailing.vue"
            ),
    },

    {
        path: "/admin/mailing/choose",
        name: "ChooseUsers",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "mailing" */ "../views/admin/ChooseUsers.vue"
            ),
    },

    {
        path: "/admin/schedule",
        name: "Schedule",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(
                /*webpackChunkName: "schedule" */ "../views/admin/Schedule.vue"
            ),
    },

    {
        path: "/admin/home",
        name: "Home",
        meta: { layout: "admin", auth: true },
        component: () =>
            import(/*webpackChunkName: "home" */ "../views/admin/Home.vue"),
    },
];

export default adminRoutes;
