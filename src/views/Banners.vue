<template>
  <div class="about">
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        На главной верх
      </div>
      <div class="row p-3">
        <div class="col-md-6 text-muted">Pазмер 1000x190</div>
        <div class="col-md-6 text-right">
          <input
            v-model="mainTopIsOn"
            type="checkbox"
            aria-label="Checkbox for on/off"
          />
        </div>
      </div>

      <div class="card-group p-3">
        <KinoCard />
        <KinoCard />
        <KinoCard />
        <KinoCard />
      </div>

      <div class="row p-3">
        <div class="col-md-6">
          Скорость вращения
          <input v-model="mainTopRotationSpeed" type="text" class="w-25" />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            сек
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">5</a>
            <a class="dropdown-item" href="#">10</a>
            <a class="dropdown-item" href="#">15</a>
          </div>
        </div>
        <div class="col-md-6">
          <button type="button" class="btn btn-primary text-center">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KinoCard from "@/components/KinoCard.vue";

export default {
  name: "Banners",
  components: {
    KinoCard,
  },
  data: function () {
    return {
      mainTopIsOn: true,
      mainTopRotationSpeed: 5,
      banners: [],
    };
  },
  watch: {
    mainTopIsOn: function () {
      console.log(this.mainTopIsOn);
      return;
    },
  },
  mounted: {
    // async fetchBanners() {}
  },
};
</script>

<style lang="scss" scoped>
.card-group {
  gap: 1rem;
}
</style>
