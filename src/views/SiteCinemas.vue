<template>
    <div class="container bg-dark">
        <SiteHeader />

        <div class="card mb-5" style="background-color: rgba(0, 0, 0, 0)">
            <div class="card-header text-center">
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

        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteCinemaCard from "@/components/SiteCinemaCard.vue";

export default {
    name: "SiteCinemas",

    components: { SiteHeader, SiteFooter, SiteCinemaCard },

    data() {
        return {
            cinemas: [],
        };
    },

    computed: {
        filmsNow() {
            return this.cinemas.filter((item) => item.inShowcaseNow);
        },

        filmsAhead() {
            return this.cinemas.filter((item) => !item.inShowcaseNow);
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
