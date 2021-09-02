<template>
    <div class="container bg-dark">
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div>
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
                        <h3>описание</h3>
                    </div>
                </div>

                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>постеры</h3>
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
            film: {},
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
