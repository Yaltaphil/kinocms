<template>
    <div class="row mb-5">
        <div class="col-md-10 p-3">
            <div class="card mb-5" style="background-color: rgba(0, 0, 0, 0)">
                <div class="card-header text-center text-light">
                    <h3>{{ $t("actions") }}</h3>
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
                        v-for="action in actions"
                        :key="action.id"
                        :action="action"
                        @action-clicked="actionChoosed(action)"
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
    name: "SiteActions",

    components: { SiteActionCard },

    data() {
        return {
            actions: [],
        };
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            this.actions = await this.$store.dispatch(
                "readFromDatabase",
                "/actions"
            );
        },

        actionChoosed(target) {
            const index = this.actions.findIndex(
                (item) => item.id == target.id
            );
            this.$router.push({
                name: "SiteActionDetails",
                params: { actionIndex: index },
            });
        },
    },
};
</script>
