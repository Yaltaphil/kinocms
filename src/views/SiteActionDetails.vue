<template>
    <div class="container bg-dark">
        <SiteHeader />

        <div v-if="action" class="row my-5">
            <div class="col-md-10 p-3">
                <div class="card-header text-center">
                    <h3>
                        {{ title }}
                    </h3>
                </div>

                <p class="p-1">
                    <span class="badge badge-primary mx-2 p-2">now</span>
                    <span class="badge badge-success mx-2 p-2">new</span>
                </p>

                <div class="row">
                    <div class="col">
                        <img
                            :src="mainPicture"
                            class="w-100 mb-5"
                            style="height: 400px"
                            alt=""
                        />
                    </div>
                    <div class="col">
                        <p>
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-2">
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
        actionIndex: {
            type: Number,
            required: true,
            default: 0,
        },
    },

    data() {
        return {
            action: null,
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        mainPicture() {
            return this.action[`mainPic${this.langAddon}`].url;
        },

        description() {
            return this.action[`description${this.langAddon}`];
        },

        title() {
            return this.action[`title${this.langAddon}`];
        },

        pictures() {
            return this.action[`pics${this.langAddon}`];
        },
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            const path = `/actions/${this.actionIndex}`;
            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.action = result;
        },
    },
};
</script>
