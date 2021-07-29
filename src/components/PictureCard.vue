<template>
  <div class="border-primary p-2 my-3" style="max-width: 740px">
    <div class="row">
      <div class="col">
        <img :src="localCard.URL" class="card-img img-thumbnail" alt="" />
      </div>
      <div class="col">
        <div class="row pt-3">
          <div class="col">
            <label class="btn btn-info px-5">
              Добавить
              <input
                type="file"
                class="custom-file-input"
                accept="image/*"
                hidden
                @change="uploadImage"
              />
            </label>
          </div>
          <div class="col">
            <button class="btn btn-danger px-5" @click="removeImage">
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";

export default {
  name: "PictureCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  data: function () {
    return {
      localCard: this.card,
    };
  },

  methods: {
    uploadImage: async function (event, path = "images/") {
      event.stopPropagation();
      event.preventDefault();
      const file = event.target.files[0];
      if (!file) return false;
      this.localCard.URL = await this.$store.dispatch("uploadToStorage", {
        file,
        path,
      });
      this.$emit("change-card", this.localCard);
    },

    removeImage: async function () {
      if (this.localCard.URL == "/img/uploadPicture.jpg") return;
      await this.$store.dispatch("removeFromStorage", this.localCard.URL);
      this.$emit("remove-banner");
    },
  },
};
</script>

<style scoped lang="scss">
.card img {
  max-width: 300px;
  height: 200px;
}
</style>
