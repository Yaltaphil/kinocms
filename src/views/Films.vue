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
                    @film-submitted="saveFilm"
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

export default {
    name: "Films",
    components: {
        FilmCard,
    },
    data() {
        return {
            films: [
                {
                    id: "111111111111",
                    title: "nbnek",
                    titleUA: "sdf gsdf gsdf gsd",
                    description: "sdghsdfh",
                    descriptionUA: " sdfg sdfg sdfgs dfg",
                    mainPic: {
                        URL: "/img/uploadPicture.jpg",
                    },
                    pics: [
                        {
                            id: 1231234123,
                            URL: "/img/uploadPicture.jpg",
                        },
                        {
                            id: 432432432324,
                            URL: "/img/uploadPicture.jpg",
                        },
                        {
                            id: 4323432432324,
                            URL: "/img/uploadPicture.jpg",
                        },
                        {
                            id: 43243245423432324,
                            URL: "/img/uploadPicture.jpg",
                        },
                        {
                            id: 4324323242432324,
                            URL: "/img/uploadPicture.jpg",
                        },
                    ],
                    trailerLink: "http://youtube",
                    filmType: [],
                    SEO: {
                        url: "/img/uploadPicture.jpg",
                        title: "/img/uploadPicture.jpg",
                        keywords: "key words here",
                        description: "/img/uploadPicture.jpg",
                    },
                },
            ],
            filmsComingSoon: [
                {
                    id: "1656146",
                    language: "ru-RU",
                    title: "терминатор 3",
                },
            ],

            loading: true,
        };
    },
    mounted() {},
    methods: {
        addFilm() {
            const newFilm = {
                id: Date.now().toString(),
            };
            this.films.push(newFilm);
        },
        editFilm(target) {
            this.$router.push({
                name: "FilmDetails",
                params: { filmId: target.id, film: target },
            });
        },
        saveFilm() {},
    },
};
</script>
