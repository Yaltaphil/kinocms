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

export default {
    components: {
        siteLayout,
        adminLayout,
    },

    computed: {
        layout() {
            return `${this.$route.meta.layout}-layout`;
        },
    },

    // watch: {
    //     layout(newValue) {
    //         const body = document.querySelector("body");
    //         if (newValue === "site-layout") {
    //             body.classList.add("layout-top-nav");
    //             body.classList.remove("layout-fixed");
    //         } else if (newValue === "admin-layout") {
    //             body.classList.add("layout-fixed ");
    //             body.classList.remove("layout-topnav ");
    //         }
    //     },
    // },
};
</script>
