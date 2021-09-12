<template>
    <div class="container bg-dark">
        <SiteHeader />

        <div class="card mb-5" style="background-color: rgba(0, 0, 0, 0)">
            <div class="card-header text-center">
                <h3>{{ $t("soon") }}</h3>
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
                    @film-clicked="filmClicked(film)"
                >
                    <template v-slot:header>
                        {{ $t("soon") }}
                    </template>
                </SiteFilmCard>
            </div>
        </div>

        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteFilmCard from "@/components/SiteFilmCard.vue";

export default {
    name: "SiteSoon",

    components: { SiteHeader, SiteFooter, SiteFilmCard },

    data() {
        return {
            films: [],
        };
    },

    computed: {
        filmsNow() {
            return this.films.filter((item) => item.inShowcaseNow);
        },

        filmsAhead() {
            return this.films.filter((item) => !item.inShowcaseNow);
        },
    },

    async mounted() {
        this.loadFilms();
    },

    methods: {
        async loadFilms() {
            this.films = await this.$store.dispatch(
                "readFromDatabase",
                "/films"
            );
        },

        filmClicked(target) {
            const index = this.films.findIndex((item) => item.id == target.id);
            this.$router.push({
                name: "SiteFilmDetails",
                params: { filmIndex: index },
            });
        },
    },
};
</script>
