<template>
    <div class="border-primary p-2 shadow" style="max-width: 740px">
        <div class="row">
            <div class="col">
                <img
                    :src="localCard.URL"
                    class="card-img img-thumbnail"
                    alt=""
                />
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
                                @change="uploadImage"
                                hidden
                            />
                        </label>
                    </div>
                    <div class="col">
                        <button
                            class="btn btn-danger px-5"
                            @click="$emit('remove-banner')"
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
import firebase from "firebase";

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
            const storageRef = firebase.storage().ref();
            this.localCard.URL = await storageRef
                .child(path + Math.random() + file.name)
                .put(file)
                .then(async function (snapshot) {
                    console.log("Uploaded", snapshot.totalBytes, "bytes.");
                    console.log("File metadata:", snapshot.metadata);
                    return await snapshot.ref.getDownloadURL();
                })
                .catch(function (error) {
                    console.error("Upload failed:", error);
                });
            console.log(this.localCard);
            this.$emit("change-card", this.localCard);
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
