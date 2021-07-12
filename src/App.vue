<template>
    <div id="app">
        <div class="wrapper">
            <!-- Preloader -->
            <div
                class="
                    preloader
                    flex-column
                    justify-content-center
                    align-items-center
                "
            >
                <i class="fas fa-film"></i>
                <p>KinoCMS</p>
            </div>
            <KinoSidebar />
            <KinoNavbar />
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
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
