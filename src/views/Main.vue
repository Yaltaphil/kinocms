<template>
    <div class="view" :style="bgStyle">
        <SiteHeader style="background-color: rgba(0, 0, 0, 0)" />

        <div class="row">
            <div class="small-box">
                <div class="card card-image" style="background-image: url()">
                    <div class="align-items-center rgba-black-strong">
                        <div>
                            <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Repellat fugiat, laboriosam,
                                voluptatem, optio vero odio nam sit officia
                                accusamus minus error nisi architecto nulla
                                ipsum dignissimos. Odit sed qui, dolorum!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-box">
                <div class="card card-image" style="background-image: url()">
                    <div class="align-items-center rgba-black-strong">
                        <div>
                            <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Repellat fugiat, laboriosam,
                                voluptatem, optio vero odio nam sit officia
                                accusamus minus error nisi architecto nulla
                                ipsum dignissimos. Odit sed qui, dolorum!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-box">
                <div class="card card-image" style="background-image: url()">
                    <div class="align-items-center rgba-black-strong">
                        <div>
                            <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Repellat fugiat, laboriosam,
                                voluptatem, optio vero odio nam sit officia
                                accusamus minus error nisi architecto nulla
                                ipsum dignissimos. Odit sed qui, dolorum!.
                            </p>
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
