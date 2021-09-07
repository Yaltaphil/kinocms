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

                    <p class="py-5">{{ $t("watchToday") }}:</p>

                    <button
                        v-for="item in cinema.halls"
                        :key="item.id"
                        class="btn btn-block btn-secondary"
                    >
                        Сеанс {{ item.hallNumber }}
                    </button>

                    <button class="btn btn-block btn-success">
                        {{ $t("allSessionSchedule") }}
                    </button>
                </div>
                <div class="col-md-10 p-3">
                    <div class="card-header text-center">
                        <h3>Зал: {{ cinema.halls[hallIndex].hallNumber }}</h3>
                    </div>

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

                    <div class="card p-5 bg-dark">
                        <h6 class="card-header text-center">{{$t("hallMap")}}</h6>
                        <img :src="schema" style="height: 400px" alt="" />
                    </div>

                    <div class="card-body">
                        <div class="card mb-5 bg-dark">
                            <div class="card-header text-center">
                                {{ $t("photogallery") }}
                            </div>
                            <div
                                id="hallCarousel"
                                class="carousel slide"
                                data-ride="hallCarousel"
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
                                        data-target="#hallCarousel"
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
                                        href="#hallCarousel"
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
                                        href="#hallCarousel"
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
    name: "SiteCinemaHallDetails",

    components: { SiteHeader, SiteFooter },

    props: {
        hallIndex: {
            type: Number,
            required: true,
            default: 0,
        },
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

        topBanner() {
            return this.cinema.halls[this.hallIndex][
                `topBanner${this.langAddon}`
            ].url;
        },

        schema() {
            return this.cinema.halls[this.hallIndex][`schema${this.langAddon}`]
                .url;
        },

        description() {
            return this.cinema.halls[this.hallIndex][
                `description${this.langAddon}`
            ];
        },

        conditions() {
            return this.cinema.halls[this.hallIndex][
                `conditions${this.langAddon}`
            ];
        },

        title() {
            return this.cinema.halls[this.hallIndex][`title${this.langAddon}`];
        },

        pictures() {
            return this.cinema.halls[this.hallIndex][`pics${this.langAddon}`];
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
    },
};
</script>
