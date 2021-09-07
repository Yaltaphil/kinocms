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
                <div class="col-md-2 py-5">
                    <a
                        href="https://link-host.net/billing/pl.php?17382"
                        alt="Link-Host.net"
                        target="_blank"
                        ><img
                            src="https://link-host.net/billing/_rootimages/banners/125.gif"
                            border="0"
                    /></a>
                </div>
                <div class="col-md-10">
                    <div class="card-header text-center">
                        <h3>
                            {{ $t("schedule") }}
                        </h3>
                    </div>
                    <div class="card-body">111</div>
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
            activePoster: 0,
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

        posters() {
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
    },
};
</script>
