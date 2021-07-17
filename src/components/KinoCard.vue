<template>
  <div class="card text-center border-primary p-3">
    <button
      type="button"
      class="close card-header text-right"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <img
      class="card-img-top"
      src="@/assets/300x450.jpeg"
      alt="Card image cap"
    />
    <div class="card-body">
      <a href="#" class="btn btn-secondary w-100">Добавить</a>
      <input class="mt-3 w-100" placeholder="url" />
      <input class="mt-3 w-100" placeholder="описание" />
    </div>
  </div>
</template>
<button type="button" class="btn btn-primary">Primary</button>
<script>
export default {
  name: "KinoCard",
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
