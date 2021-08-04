<template>
    <section>
        <div class="card">
            <div class="card-header text-center">
                <h3>Список текущих фильмов</h3>
            </div>

            <div class="card-body card-group">
                <FilmCard
                    v-for="film in filmsNow"
                    :key="film.id"
                    :film="film"
                    @film-clicked="editFilm"
                    @remove-film="removeFilm"
                />
            </div>
            <button
                type="button"
                class="btn btn-info btn-lg btn-block"
                @click="addFilm(true)"
            >
                Добавить фильм
            </button>
        </div>
        <div class="card">
            <div class="card-header text-center">
                <h3>Список фильмов которые скоро покажут</h3>
            </div>
            <div class="card-body card-group">
                <FilmCard
                    v-for="film in filmsAhead"
                    :key="film.id"
                    :film="film"
                    @film-clicked="editFilm"
                    @remove-film="removeFilm"
                />
            </div>
            <button
                type="button"
                class="btn btn-info btn-lg btn-block"
                @click="addFilm(false)"
            >
                Добавить фильм
            </button>
        </div>
    </section>
</template>
<script>
import FilmCard from "@/components/FilmCard.vue";
import { eventBus } from "../main.js";

export default {
    name: "Films",

    components: {
        FilmCard,
    },

    data() {
        return {
            films: [],
            loading: true,
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

    created() {
        eventBus.$on("film-submitted", (data) => this.filmSubmitted(data));
    },

    mounted() {},

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFilmsFromDatabase());
    },

    methods: {
        addFilm(inShowcase) {
            const newFilm = {
                id: Date.now().toString(),
                inShowcaseNow: inShowcase,
                title: "новый фильм",
                titleUA: "новый фильм",
                description: "",
                descriptionUA: "",
                mainPic: {
                    URL: "/img/uploadPicture.jpg",
                },
                pics: [
                    {
                        id: 1231234123,
                        URL: "/img/uploadPicture.jpg",
                    },
                ],
                trailerLink: "http://youtube",
                filmType: ["2D"],
                SEO: {
                    url: "/img/uploadPicture.jpg",
                    title: "/img/uploadPicture.jpg",
                    keywords: "key words here",
                    description: "/img/uploadPicture.jpg",
                },
            };
            this.films.push(newFilm);
        },

        editFilm(target) {
            this.$router.push({
                name: "FilmDetails",
                params: { filmId: target.id, film: target },
            });
        },

        async filmSubmitted(film) {
            const index = this.films.findIndex((item) => item.id === film.id);
            this.films[index] = film;
            this.saveFilmsToDatabase().then(() =>
                this.$successMessage("Фильм успешно записан")
            );
        },

        async removeFilm(film) {
            this.films = this.films.filter((item) => item != film);
            this.saveFilmsToDatabase().then(() =>
                this.$successMessage("Фильм успешно удален")
            );
        },

        async saveFilmsToDatabase() {
            const payload = this.films;
            const path = "/films";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFilmsFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/films"
            );
            if (result) this.films = result;
            console.log("films loaded", result);
        },
    },
};
</script>
