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
                    @film-clicked="editFilm(film)"
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
                    @film-clicked="editFilm(film)"
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
import CONFIG from "@/config.js";
import FilmCard from "@/components/FilmCard.vue";

export default {
    name: "Films",

    components: {
        FilmCard,
    },

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

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFilmsFromDatabase());
    },

    methods: {
        addFilm(inShowcase) {
            const newFilm = {
                id: `${Date.now()}${Math.random()}`,
                inShowcaseNow: inShowcase, //сейчас в показе
                title: "новый фильм",
                titleUA: "новый фильм",
                description: "",
                descriptionUA: "",
                mainPic: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                mainPicUA: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                pics: [
                    {
                        id: `${Date.now()}${Math.random()}`,
                        url: CONFIG.PICTURE_PLUG_URL,
                    },
                ],
                picsUA: [
                    {
                        id: `${Date.now()}${Math.random()}`,
                        url: CONFIG.PICTURE_PLUG_URL,
                    },
                ],
                trailerLink: "http://youtube",
                trailerLinkUA: "http://youtube",
                filmType: ["2D"],
                filmTypeUA: ["2D"],
                SEO: {
                    url: "/img/uploadPicture.jpg",
                    urlUA: "/img/uploadPicture.jpg",
                    title: "/img/uploadPicture.jpg",
                    titleUA: "/img/uploadPicture.jpg",
                    keywords: "key words here",
                    keywordsUA: "key words here",
                    description: "/img/uploadPicture.jpg",
                    descriptionUA: "/img/uploadPicture.jpg",
                },
            };
            this.films.push(newFilm);
            this.saveFilmsToDatabase();
        },

        editFilm(film) {
            const index = this.films.findIndex((item) => item == film);
            this.$router.push({
                name: "FilmDetails",
                params: { filmIndex: index },
            });
        },

        async removeFilm(film) {
            if (!window.confirm("Удалить фильм?")) return;
            // удаление всех картинок по url
            this.removePictureFromStorage(film.mainPic);
            this.removePictureFromStorage(film.mainPicUA);
            if (film.pics) {
                film.pics.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            if (film.picsUA) {
                film.picsUA.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            this.films = this.films.filter((item) => item != film);
            this.saveFilmsToDatabase().then(() =>
                this.$successMessage("Фильм удален")
            );
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
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
        },
    },
};
</script>
