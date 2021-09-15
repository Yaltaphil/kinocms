<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
import siteLayout from "@/layouts/siteLayout.vue";
import adminLayout from "@/layouts/adminLayout.vue";
import emptyLayout from "@/layouts/emptyLayout.vue";

export default {
    components: {
        siteLayout,
        adminLayout,
        emptyLayout,
    },

    computed: {
        layout() {
            return `${this.$route.meta.layout}-layout`;
        },
    },

    watch: {
        layout(newValue) {
            const body = document.querySelector("body");
            if (newValue === "admin-layout") {
                body.classList.add("layout-fixed");
                body.classList.remove("layout-top-nav");
            } else {
                body.classList.add("layout-top-nav");
                body.classList.remove("layout-fixed");
            }
        },
    },
};
</script>
