<template>
    <div class="container bg-dark">
        <SiteHeader />
        <div class="card bg-dark">
            <div class="card-header text-center">
                <h3>{{ $t("schedule") }}</h3>
            </div>
        </div>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "SiteSchedule",

    components: { SiteHeader, SiteFooter },

    data() {
        return {
            cinemas: [],
        };
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
