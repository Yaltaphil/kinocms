<template>
  <div class="card text-center border-primary p-3">
    <button
      type="button"
      class="close card-header text-right"
      aria-label="Close"
      @click="$emit('remove-card', banner)"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <img
      class="card-img-top"
      :src="this.banner.bannerURL"
      alt="Card image cap"
    />
    <div class="card-body">
      <a href="#" class="btn btn-secondary w-100">Добавить</a>
      <input
        v-model="this.banner.bannerURL"
        class="mt-3 w-100"
        placeholder="url"
      />
      <input
        v-model="this.banner.bannerText"
        class="mt-3 w-100"
        placeholder="описание"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "KinoCard",
  props: {
    banner: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  max-width: 250px;
  & .card-img-top {
    height: 100px;
  }
}
</style>
