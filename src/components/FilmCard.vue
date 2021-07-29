<template>
  <div class="card border shadow m-3" @click="$emit('film-clicked', film)">
    <img class="card-img-top" src="/img/uploadPicture.jpg" alt="" />

    <div class="card-footer text-center">
      {{ film.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard",
  props: {
    film: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 200px;
  max-width: 200px;
  height: 250px;
  cursor: pointer;
}
</style>
