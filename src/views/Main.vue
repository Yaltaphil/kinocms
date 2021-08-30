<template>
    <div class="view container" :style="bgStyle">
        <button
            class="btn btn-outline-info btn-block btn-sm mb-5"
            @click="
                {
                    $router.push({ name: 'Login' });
                }
            "
        >
            to admin
        </button>
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div class="d-flex flex-column">
            <div class="box">
              slider
            </div>
            <div class="box">
            films
            </div>
            <div class="box">
              Soon
            </div>
            <div class="box">
              actions
            </div>

        </div>

        <SiteFooter style="background-color: rgba(0, 0, 0, 0)" />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "Main",

    components: { SiteHeader, SiteFooter },

    data() {
        return {
            bgBanner: "",
            bgStyle: {
                ["background-image"]: "",
                ["background-repeat"]: "no-repeat",
                ["background-size"]: "cover",
                ["background-position"]: "center center",
            },
        };
    },

    provide: {
        changeLanguage(language) {
            this.$store.commit("changeSiteLanguage", language);
        },

        async loadFromDB(path) {
            return await this.$store.dispatch("readFromDatabase", path);
        },
    },

    created() {
        document.querySelector("body").classList.remove("layout-fixed");
        document.querySelector("body").classList.add("layout-top-nav");
    },

    async mounted() {
        this.bgBanner = await this.$store.dispatch(
            "readFromDatabase",
            "/bigban"
        );
        this.bgStyle["background-image"] = `url(${this.bgBanner.url})`;
    },
};
</script>
