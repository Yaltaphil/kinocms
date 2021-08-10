<template>
    <div class="border-primary p-2 my-3" style="max-width: 740px">
        <div class="row">
            <div class="col-7">
                <img
                    :src="localCard.url"
                    class="card-img img-thumbnail"
                    alt=""
                />
            </div>
            <div class="col">
                <div class="row ml-3">
                    <div class="col">
                        <label id="_uid" class="btn btn-info px-4">
                            Добавить
                            <input
                                id="_uid"
                                type="file"
                                class="custom-file-input"
                                accept="image/*"
                                hidden
                                @change="uploadImage"
                            />
                        </label>
                    </div>
                    <div class="col">
                        <button
                            class="btn btn-outline-danger px-4"
                            @click="removeImage"
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";

export default {
    name: "PictureCard",
    props: {
        card: {
            type: Object,
            required: true,
            default: () => {},
        },
    },

    data: function () {
        return {
            localCard: this.card,
        };
    },

    methods: {
        uploadImage: async function (event, path = "images/") {
            const file = event.target.files[0];
            if (!file) return false;
            this.localCard.url = await this.$store.dispatch("uploadToStorage", {
                file,
                path,
            });
            this.$emit("change-card", this.localCard);
        },

        removeImage: async function () {
            if (this.localCard.url == CONFIG.PICTURE_PLUG_URL) return;
            this.$store.dispatch("removeFromStorage", this.localCard.url);
            this.$emit("remove-banner");
        },
    },
};
</script>

<style scoped lang="scss">
.card img {
    max-width: 486px;
    height: 300px;
}
</style>
