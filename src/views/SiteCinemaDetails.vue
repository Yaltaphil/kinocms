<template>
    <div class="container bg-dark">
        <SiteHeader />

        <div v-if="cinema">
            <div>
                <img
                    :src="topBanner"
                    class="w-100 mb-5"
                    style="height: 400px"
                    alt=""
                />
            </div>
            <div class="row">
                <div class="col-md-2">
                    <a
                        href="https://link-host.net/billing/pl.php?17382"
                        alt="Link-Host.net"
                        target="_blank"
                        ><img
                            src="https://link-host.net/billing/_rootimages/banners/125.gif"
                            border="0"
                    /></a>
                    <p class="pt-5">
                        {{ $t("hallQuantity") }}: {{ cinema.halls.length }}
                    </p>
                    <button
                        v-for="hall in cinema.halls"
                        :key="hall.id"
                        class="btn btn-block btn-secondary"
                        @click="hallSelected(hall)"
                    >
                        Зал: {{ hall.hallNumber }}
                    </button>

                    <p class="pt-5">{{ $t("watchToday") }}:</p>
                </div>
                <div class="col-md-10 p-3">
                    <div class="card-header text-center">
                        <h3>
                            {{ $t("schedule") }}
                        </h3>
                    </div>
                    <button class="btn btn-outline-info btn-block px-5 my-5">{{ $t("schedule") }}</button>
                    <p class="p-1">
                        <span class="badge badge-primary mx-2 p-2">now</span>
                        <span class="badge badge-success mx-2 p-2">new</span>
                    </p>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Exercitationem dolores, tempora iure quidem sint
                        illo odio veritatis! Saepe cum odio sapiente iusto
                        nobis, fugiat, voluptatem a dignissimos ut aspernatur
                        sint amet accusamus ad natus similique corrupti vitae
                        consequatur aliquid est expedita dolore quibusdam
                        quisquam voluptatibus dolor? Cupiditate aspernatur
                        mollitia architecto!
                    </p>
                    <h6>{{ $t("conditions") }}</h6>
                    <p>{{ conditions }}</p>

                    <div class="card-body">
                        <div class="card mb-5 bg-dark">
                            <div class="card-header text-center">
                                {{ $t("photogallery") }}
                            </div>
                            <div
                                id="cinemaPhotoCarousel"
                                class="carousel slide"
                                data-ride="cinemaPhotoCarousel"
                                :data-interval="5000"
                                data-wrap="true"
                            >
                                <ol class="carousel-indicators">
                                    <li
                                        v-for="(photo, index) in pictures"
                                        :key="photo.id"
                                        :class="{
                                            active: index == activePhoto,
                                        }"
                                        data-target="#cinemaPhotoCarousel"
                                        :data-slide-to="index"
                                        @click="activePhoto = index"
                                    ></li>
                                </ol>
                                <div
                                    class="carousel-inner"
                                    style="height: 460px"
                                >
                                    <div
                                        v-for="(photo, index) in pictures"
                                        :key="photo.id"
                                        class="carousel-item"
                                        :class="{
                                            active: index == activePhoto,
                                        }"
                                        @click="activePhoto = index"
                                    >
                                        <img
                                            class="d-block w-100"
                                            :src="photo.url"
                                            alt="slide"
                                        />
                                    </div>
                                    <a
                                        class="carousel-control-prev"
                                        href="#cinemaPhotoCarousel"
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
                                        href="#cinemaPhotoCarousel"
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
            </div>
        </div>

        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "SiteCinemaDetails",

    components: { SiteHeader, SiteFooter },

    props: {
        cinemaIndex: {
            type: Number,
            required: true,
            default: 0,
        },
    },

    data() {
        return {
            cinema: null,
            activePhoto: 0,
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        mainPicture() {
            return this.cinema[`mainPic${this.langAddon}`].url;
        },

        topBanner() {
            return this.cinema[`topBanner${this.langAddon}`].url;
        },

        description() {
            return this.cinema[`description${this.langAddon}`];
        },

        conditions() {
            return this.cinema[`conditions${this.langAddon}`];
        },

        title() {
            return this.cinema[`title${this.langAddon}`];
        },

        pictures() {
            return this.cinema[`pics${this.langAddon}`];
        },
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            const path = `/cinemas/${this.cinemaIndex}`;
            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.cinema = result;
        },

        hallSelected(target) {
            const index = this.cinema.halls.findIndex(
                (item) => item.id == target.id
            );

            this.$router.push({
                name: "SiteCinemaHallDetails",
                params: { cinemaIndex: this.cinemaIndex, hallIndex: index },
            });
        },
    },
};
</script>
