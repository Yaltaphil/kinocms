<template>
    <div class="container bg-dark">
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div class="card mb-5" style="background-color: rgba(0, 0, 0, 0)">
            <div class="card-header text-center">
                <h3>{{ $t("affiche") }}</h3>
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
                    @film-clicked="filmClicked(film)"
                >
                    <template v-slot:header>
                        {{ $t("watchToday") }}
                    </template>
                </SiteFilmCard>
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
    name: "SiteAffiche",

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
