<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <KinoNavbar />
            <KinoSidebar />
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <transition mode="out-in" name="fade">
                            <router-view />
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KinoSidebar from "@/components/KinoSidebar.vue";
import KinoNavbar from "@/components/KinoNavbar.vue";

export default {
    components: {
        KinoSidebar,
        KinoNavbar,
    },

    mounted: async function () {
        await this.$store.dispatch("login", {});
    },

    methods: {},
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opasity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-15%);
}
</style>
