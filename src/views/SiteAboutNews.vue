<template>
    <div class="row mb-5">
        <div class="col-md-10 p-3">
            <div
                class="card mb-5"
                style="background-color: rgba(0, 0, 0, 0); color: white"
            >
                <div class="card-header text-center">
                    <h3>{{ $t("news") }}</h3>
                </div>

                <div
                    class="
                        card-body
                        d-flex
                        flex-row flex-wrap
                        justify-content-center
                    "
                >
                    <SiteActionCard
                        v-for="action in news"
                        :key="action.id"
                        :action="action"
                    >
                    </SiteActionCard>
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
</template>

<script>
import SiteActionCard from "@/components/SiteActionCard.vue";

export default {
    name: "SiteAboutNews",

    components: { SiteActionCard },

    data() {
        return {
            news: [],
        };
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            this.news = await this.$store.dispatch("readFromDatabase", "/news");
        },
    },
};
</script>
