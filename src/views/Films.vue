<template>
    <section>
        <div class="card">
            <div class="card-header text-center">
                <h3>Список текущих фильмов</h3>
            </div>

            <div class="card-body card-group">
                <FilmCard
                    v-for="film in films"
                    :key="film.id"
                    :film="film"
                    @film-clicked="editFilm"
                />
            </div>
            <button
                type="button"
                class="btn btn-info btn-lg btn-block"
                @click="addFilm"
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
                    v-for="film in filmsComingSoon"
                    :key="film.id"
                    :film="film"
                />
            </div>
            <button
                type="button"
                class="btn btn-info btn-lg btn-block"
                @click="addFilm"
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
            filmsComingSoon: [],
            loading: true,
        };
    },
    created() {
        eventBus.$on("film-submitted", (data) => this.filmSubmitted(data));
    },
    mounted() {
        this.loadFilmsFromDatabase();
    },
    methods: {
        addFilm() {
            const newFilm = {
                id: Date.now().toString(),
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

        filmSubmitted(film) {
            const index = this.films.findIndex((item) => item.id === film.id);
            this.films[index] = film;
            this.saveFilmsToDatabase();
        },

        async saveFilmsToDatabase() {
            const payload = this.films;
            const path = "/films";
            await this.$store.dispatch("writeToDatabase", { payload, path });
        },

        async loadFilmsFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/films"
            );
            if (result) this.films = result;
            console.log("films loaded", result);
        },

        // TODO add remove film button and method
    },
};
</script>

// TODO move fetching to router hook
