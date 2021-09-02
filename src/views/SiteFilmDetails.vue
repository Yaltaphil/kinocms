<template>
    <div class="container bg-dark">
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div v-if="film">
            <div class="d-flex flex-column">
                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3></h3>
                    </div>

                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                            class="embed-responsive-item"
                            :src="trailer"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>расписание</h3>
                    </div>
                </div>

                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3></h3>
                    </div>

                    <div class="row">
                        <div class="col-md-5">
                            <img
                                :src="mainPicture"
                                class="rounded img-fluid p-5"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-7 text-center">
                            <button class="btn btn-success px-5 my-5">
                                {{ $t("buy") }}
                            </button>

                            <h3 class="p-3">
                                {{ title }}
                            </h3>

                            <p class="p-3">
                                {{ description }}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="card mb-5 p-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3></h3>
                    </div>

                    <div class="row">
                        <div class="col-md-7">
                            <h3>film credits ...</h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ducimus magni praesentium
                                voluptatibus amet! Sint tenetur eligendi id
                                suscipit, commodi tempora blanditiis odio,
                                impedit quaerat animi at aliquid ipsum nobis
                                quisquam consequuntur ipsam, in libero eius
                                natus! Asperiores hic delectus perferendis
                                impedit porro, commodi tempora, voluptatem qui
                                temporibus quaerat, debitis aliquam.
                            </p>
                        </div>
                        <div class="col-md-5">
                            <div
                                id="postersCarousel"
                                class="carousel slide"
                                data-ride="postersCarousel"
                                data-interval="3000"
                                data-wrap="true"
                            >
                                <ol class="carousel-indicators">
                                    <li
                                        v-for="(poster, index) in posters"
                                        :key="poster.id"
                                        :class="{
                                            active: index == activePoster,
                                        }"
                                        data-target="#postersCarousel"
                                        :data-slide-to="index"
                                        @click="activePoster = index"
                                    ></li>
                                </ol>
                                <div
                                    class="carousel-inner"
                                    style="height: 400px"
                                >
                                    <div
                                        v-for="(poster, index) in posters"
                                        :key="poster.id"
                                        class="carousel-item"
                                        :class="{
                                            active: activePoster == index,
                                        }"
                                        @click="activePoster = index"
                                    >
                                        <img
                                            class="d-block w-100"
                                            :src="poster.url"
                                            alt="slide"
                                        />
                                    </div>
                                    <a
                                        class="carousel-control-prev"
                                        href="#postersCarousel"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            class="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a
                                        class="carousel-control-next"
                                        href="#postersCarousel"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            class="carousel-control-next-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
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
            </div>
        </div>

        <SiteFooter style="background-color: rgba(0, 0, 0, 0)" />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "SiteFilmDetails",

    components: { SiteHeader, SiteFooter },

    props: {
        filmIndex: {
            type: Number,
            required: true,
            default: 0,
        },
    },

    data() {
        return {
            film: null,
            activePoster: 0,
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        trailer() {
            const params = "?autoplay=1&amp;mute=1&amp;";
            return (
                this.film[`trailerLink${this.langAddon}`] + params
            ).toString();
        },

        mainPicture() {
            return this.film[`mainPic${this.langAddon}`].url;
        },

        description() {
            return this.film[`description${this.langAddon}`];
        },

        title() {
            return this.film[`title${this.langAddon}`];
        },

        posters() {
            return this.film[`pics${this.langAddon}`];
        },
    },

    async mounted() {
        this.loadFilm();
    },

    methods: {
        async loadFilm() {
            const path = `/films/${this.filmIndex}`;
            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.film = result;
        },
    },
};
</script>
