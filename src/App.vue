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
};
</script>
