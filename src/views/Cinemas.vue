<template>
    <div class="card">
        <div class="card-header text-center">
            <h3>Список кинотеатров</h3>
        </div>

        <div v-if="cinemas" class="card-body card-group">
            <FilmCard
                v-for="cinema in cinemas"
                :key="cinema.id"
                :film="cinema"
                @film-clicked="editCinema(cinema)"
                @remove-film="removeCinema"
            />
        </div>
        <button
            type="button"
            class="btn btn-info btn-lg btn-block mt-5"
            @click="addCinema()"
        >
            Добавить кинотеатр
        </button>
    </div>
</template>

<script>
import CONFIG from "@/config.js";
import FilmCard from "@/components/FilmCard";

export default {
    name: "Cinemas",

    components: {
        FilmCard,
    },

    data() {
        return {
            cinemas: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadCinemas());
    },

    methods: {
        addCinema() {
            const newCinema = {
                id: `${Date.now()}${Math.random()}`,
                title: "новый кинотеатр",
                titleUA: "новый фильм",
                description: "",
                descriptionUA: "",
                conditions: "",
                conditionsUA: "",

                mainPic: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                mainPicUA: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                topBanner: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                topBannerUA: {
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
                halls: [
                    {
                        id: `${Date.now()}${Math.random()}`,
                        hallNumber: "",
                        date: Date.now(),
                        description: "",
                        descriptionUA: "",

                        schema: {
                            url: CONFIG.PICTURE_PLUG_URL,
                        },
                        schemaUA: {
                            url: CONFIG.PICTURE_PLUG_URL,
                        },
                        topBanner: {
                            url: CONFIG.PICTURE_PLUG_URL,
                        },
                        topBannerUA: {
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
                    },
                ],
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
            this.cinemas.push(newCinema);
            this.saveCinemas();
        },

        editCinema(cinema) {
            const index = this.cinemas.findIndex((item) => item == cinema);
            this.$router.push({
                name: "CinemaDetails",
                params: { cinemaIndex: index },
            });
        },

        async removeCinema(cinema) {
            if (!window.confirm("Удалить?")) return;
            // удаление всех картинок по url
            this.removePictureFromStorage(cinema.mainPic);
            this.removePictureFromStorage(cinema.mainPicUA);
            this.removePictureFromStorage(cinema.topBanner);
            this.removePictureFromStorage(cinema.topBannerUA);
            if (cinema.pics) {
                cinema.pics.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            if (cinema.picsUA) {
                cinema.picsUA.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            this.cinemas = this.cinemas.filter((item) => item != cinema);
            this.saveCinemas().then(() =>
                this.$successMessage("Кинотеатр удален")
            );
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
        },

        async saveCinemas() {
            const payload = this.cinemas;
            const path = "/cinemas";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadCinemas() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/cinemas"
            );
            if (result) this.cinemas = result;
        },
    },
};
</script>

// TODO Full removal of nested pictures
