<template>
    <div class="view" :style="bgStyle">
        <div
            class="container rounded h-100"
            style="background: rgba(49, 49, 49, 0.77)"
        >
            <SiteHeader />
            <router-view />
            <SiteFooter />
        </div>
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    components: { SiteHeader, SiteFooter },

    data() {
        return {
            bgBanner: "",
            settings: {},
            bgStyle: {
                ["background-image"]: "",
                ["background-repeat"]: "repeat-y",
                ["background-size"]: "cover",
                ["background-position"]: "center center",
            },
        };
    },

    async mounted() {
        this.loadSettings();
        this.loadBigBan();
        this.bgStyle["background-image"] = `url(${this.bgBanner.url})`;
    },

    methods: {
        async loadBigBan() {
            this.bgBanner = await this.$store.dispatch(
                "readFromDatabase",
                "/bigban"
            );
            this.bgStyle["background-image"] = `url(${this.bgBanner.url})`;
        },

        async loadSettings() {
            this.settings = await this.$store.dispatch(
                "readFromDatabase",
                "/settings"
            );
        },
    },
};
</script>
