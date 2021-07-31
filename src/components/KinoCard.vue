<template>
    <div class="card text-center border-primary m-2 p-2 shadow">
        <button
            type="button"
            class="close card-header text-right p-1"
            aria-label="Close"
            @click="$emit('remove-card', localCard)"
        >
            <span aria-hidden="true">&times;</span>
        </button>

        <div class="card-img-top">
            <img
                :src="localCard.URL"
                class="card-img-top img-thumbnail"
                alt=""
            />
        </div>

        <div class="card-body">
            <label class="btn btn-secondary px-5">
                Загрузить
                <i class="fas fa-file ml-1"></i>
                <input
                    type="file"
                    class="custom-file-input"
                    accept="image/*"
                    hidden
                    @change="uploadImage"
                />
            </label>

            <div class="input-group input-group-sm mt-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">URL</span>
                </div>
                <input
                    class="form-control"
                    type="text"
                    :value="localCard.URL"
                    aria-label="Current URL"
                />
            </div>

            <div v-if="localCard.text" class="input-group input-group-sm mt-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">Текст</span>
                </div>
                <input
                    v-model="localCard.text"
                    class="form-control"
                    type="text"
                    placeholder="описание"
                    @change="$emit('change-card', localCard)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KinoCard",

    props: {
        card: {
            type: Object,
            required: true,
        },
        showText: { type: Boolean, default: true, required: false },
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
    },
};
</script>

<style scoped lang="scss">
.card {
    max-width: 250px;
    min-width: 250px;
    & .card-img-top {
        height: 140px;
    }
}
</style>
