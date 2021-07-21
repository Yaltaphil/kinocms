<template>
  <div id="app">
    <div class="wrapper">
      <!-- <Preloader /> -->
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
// import Preloader from "@/components/Preloader.vue";
import KinoSidebar from "@/components/KinoSidebar.vue";
import KinoNavbar from "@/components/KinoNavbar.vue";

export default {
  components: {
    // Preloader,
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
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
