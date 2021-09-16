<template>
    <div class="card mb-5" style="background-color: rgba(0, 0, 0, 0)">
        <div
            id="slider"
            class="carousel slide"
            data-ride="slider"
            :data-interval="5000"
            data-wrap="true"
        >
            <div class="carousel-inner" style="height: 420px">
                <div
                    v-for="(item, index) in cinemas"
                    :key="item.id"
                    class="carousel-item"
                    :class="{
                        active: index == activePhoto,
                    }"
                >
                    <img
                        class="d-block w-100"
                        :src="item[`topBanner${langAddon}`].url"
                        alt="slide"
                    />
                </div>
                <a
                    class="carousel-control-prev"
                    href="#slider"
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
                    href="#slider"
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

        <div class="card-header text-center text-light">
            <h3>{{ $t("cinemas") }}</h3>
        </div>

        <div class="row card-body">
            <div
                class="
                    col-md-10
                    d-flex
                    flex-row flex-wrap
                    justify-content-center
                "
            >
                <SiteCinemaCard
                    v-for="cinema in cinemas"
                    :key="cinema.id"
                    :cinema="cinema"
                    @clicked="clicked"
                />
            </div>
            <div class="col-md-2 py-5">
                <a
                    href="https://link-host.net/billing/pl.php?17382"
                    alt="Link-Host.net"
                    target="_blank"
                    ><img
                        src="https://link-host.net/billing/_rootimages/banners/160x600.gif"
                        border="0"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
import SiteCinemaCard from "@/components/SiteCinemaCard.vue";

export default {
    name: "SiteCinemas",

    components: { SiteCinemaCard },

    data() {
        return {
            cinemas: [],
            activePhoto: 0,
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            this.cinemas = await this.$store.dispatch(
                "readFromDatabase",
                "/cinemas"
            );
        },

        clicked(target) {
            const index = this.cinemas.findIndex(
                (item) => item.id == target.id
            );
            this.$router.push({
                name: "SiteCinemaDetails",
                params: { cinemaIndex: index },
            });
        },
    },
};
</script>
