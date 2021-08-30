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
                <div class="card mb-5">slider</div>

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

                <div class="card">actions</div>
                <div class="card">adv</div>
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

    provide: {
        changeLanguage(language) {
            this.$store.commit("changeSiteLanguage", language);
        },

        async loadFromDB(path) {
            return await this.$store.dispatch("readFromDatabase", path);
        },
    },

    computed: {
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
        this.loadBigBan();
        this.loadFilms();
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
    },
};
</script>
