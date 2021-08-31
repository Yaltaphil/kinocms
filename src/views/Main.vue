<template>
    <div class="view" :style="bgStyle">
        <button
            class="btn btn-outline-info btn-block btn-sm mb-5"
            @click="
                {
                    $router.push({ name: 'Login' });
                }
            "
        >
            to admin
        </button>
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div class="container">
            <div class="d-flex flex-column">
                <div class="card mb-5">
                    <div
                        id="bannersCarousel"
                        ref="bannersCarousel"
                        class="carousel slide"
                        data-ride="carousel"
                        :data-interval="`${bannersRotationSpeed}`"
                        data-wrap="false"
                    >
                        <ol class="carousel-indicators">
                            <li
                                v-for="(banner, index) in banners"
                                :key="banner.id"
                                :class="{ active: index === activeBanner }"
                                data-target="#carousel1"
                                :data-slide-to="index"
                                @click="activeBanner = index"
                            ></li>
                        </ol>
                        <div class="carousel-inner" style="height: 460px">
                            <div
                                v-for="(banner, index) in banners"
                                :key="banner.id"
                                class="carousel-item"
                                :class="{ active: activeBanner === index }"
                            >
                                <img
                                    class="d-block w-100"
                                    :src="banner.url"
                                    alt="slide"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>{{ $t("watchToday") }}</h3>
                    </div>

                    <div
                        class="
                            card-body
                            d-flex
                            flex-row flex-wrap
                            justify-content-center
                        "
                    >
                        <SiteFilmCard
                            v-for="film in filmsNow"
                            :key="film.id"
                            :film="film"
                        />
                    </div>
                </div>

                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>{{ $t("watchSoon") }}</h3>
                    </div>

                    <div
                        class="
                            card-body
                            d-flex
                            flex-row flex-wrap
                            justify-content-center
                        "
                    >
                        <SiteFilmCard
                            v-for="film in filmsAhead"
                            :key="film.id"
                            :film="film"
                        />
                    </div>
                </div>

                <div class="card">
                    <div
                        id="actionsCarousel"
                        class="carousel slide"
                        data-ride="carousel"
                        :data-interval="`${actionsRotationSpeed}`"
                        data-wrap="false"
                    >
                        <ol class="carousel-indicators">
                            <li
                                v-for="(action, index) in bannersActions"
                                :key="action.id"
                                :class="{ active: index === activeAction }"
                                data-target="#carousel1"
                                :data-slide-to="index"
                                @click="activeAction = index"
                            ></li>
                        </ol>
                        <div class="carousel-inner" style="height: 460px">
                            <div
                                v-for="(action, index) in bannersActions"
                                :key="action.id"
                                class="carousel-item"
                                :class="{ active: activeAction === index }"
                            >
                                <img
                                    class="d-block w-100"
                                    :src="action.url"
                                    alt="slide"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="card reklama text-center"
                    style="background-color: rgba(255, 255, 255, 0.05)"
                >
                    <a
                        href="https://link-host.net/billing/pl.php?17382"
                        alt="Link-Host.net"
                        target="_blank"
                        class="w-100"
                        ><img
                            src="https://link-host.net/billing/_rootimages/banners/728x90.gif"
                            border="0"
                    /></a>
                </div>
                <div class="card">seo</div>
            </div>
        </div>

        <SiteFooter style="background-color: rgba(0, 0, 0, 0)" />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteFilmCard from "@/components/SiteFilmCard.vue";

export default {
    name: "Main",

    components: { SiteHeader, SiteFooter, SiteFilmCard },

    data() {
        return {
            settings: {},
            banners: [],
            activeBanner: 0,
            bannersActions: [],
            activeAction: 0,
            bgBanner: "",
            films: [],
            bgStyle: {
                ["background-image"]: "",
                ["background-repeat"]: "repeat-y",
                ["background-size"]: "cover",
                ["background-position"]: "center center",
            },
        };
    },

    provide: {},

    computed: {
        bannersRotationSpeed() {
            return parseInt(this.settings.bannersRotationSpeed) * 1000;
        },

        actionsRotationSpeed() {
            return parseInt(this.settings.actionsRotationSpeed) * 1000;
        },

        filmsNow() {
            return this.films.filter((item) => item.inShowcaseNow);
        },

        filmsAhead() {
            return this.films.filter((item) => !item.inShowcaseNow);
        },
    },

    created() {
        document.querySelector("body").classList.remove("layout-fixed");
        document.querySelector("body").classList.add("layout-top-nav");
    },

    async mounted() {
        this.loadSettings();
        this.loadBigBan();
        this.bgStyle["background-image"] = `url(${this.bgBanner.url})`;
        this.loadFilms();
        this.loadBanners();
        this.loadBannersActions();
    },

    methods: {
        async loadBigBan() {
            this.bgBanner = await this.$store.dispatch(
                "readFromDatabase",
                "/bigban"
            );
            this.bgStyle["background-image"] = `url(${this.bgBanner.url})`;
        },

        async loadFilms() {
            this.films = await this.$store.dispatch(
                "readFromDatabase",
                "/films"
            );
        },

        async loadSettings() {
            this.settings = await this.$store.dispatch(
                "readFromDatabase",
                "/settings"
            );
        },

        async loadBanners() {
            this.banners = await this.$store.dispatch(
                "readFromDatabase",
                "/banners"
            );
        },

        async loadBannersActions() {
            this.bannersActions = await this.$store.dispatch(
                "readFromDatabase",
                "/bannersActions"
            );
        },
    },
};
</script>
