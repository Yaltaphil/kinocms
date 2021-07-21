<template>
    <div class="card text-center border-primary p-2">
        <button
            type="button"
            class="close card-header text-right p-1"
            aria-label="Close"
            @click="$emit('remove-card', card)"
        >
            <span aria-hidden="true">&times;</span>
        </button>

        <div class="card-img-top">
            <img class="card-img-top" :src="previewURL" alt="Загрузите файл" />
        </div>

        <div class="card-body">
            <label for="file">
                <input
                    id="file"
                    type="file"
                    accept="image/*"
                    @change="previewImage"
                />Добавить
            </label>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">URL</span>
                </div>
                <input
                    class="form-control"
                    type="text"
                    :value="previewURL"
                    aria-label="Current URL"
                />
            </div>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Текст</span>
                </div>
                <input
                    class="form-control"
                    type="text"
                    :value="card.text"
                    placeholder="описание"
                />
            </div>
        </div>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
    name: "KinoCard",
    data: function () {
        return {
            image: null, // выбранный файл - объект
            previewURL: "",
            storageURL: "",
        };
    },

    props: {
        card: {
            type: Object,
            default: () => ({}),
            required: true,
        },
    },

    created() {
        this.previewURL = this.card.URL;
    },

    methods: {
        previewImage: function (event) {
            const file = event.target.files[0];
            if (!file) return false;
            const reader = new FileReader();
            const that = this;
            reader.onload = function (event) {
                that.previewURL = event.target.result;
            };
            reader.readAsDataURL(file);
            this.image = file;
            this.uploadImage();

            // this.$emit("change-url", this.card, this.storageURL);
        },

        uploadImage: async function () {
            const storageRef = firebase.storage().ref();
            this.storageURL = await storageRef
                .child("images/" + Math.random() + this.image.name)
                .put(this.image)
                .then(async function (snapshot) {
                    console.log("Uploaded", snapshot.totalBytes, "bytes.");
                    console.log("File metadata:", snapshot.metadata);
                    const url = await snapshot.ref.getDownloadURL();
                    return url;
                })
                .catch(function (error) {
                    console.error("Upload failed:", error);
                });
            this.previewURL = this.storageURL;
            this.card.URL = this.previewURL;
        },
    },
};
</script>

<style scoped lang="scss">
.card {
    max-width: 270px;
    & .card-img-top {
        height: 120px;
    }
    #file {
        display: none;
    }
    .card-body {
        & label {
            border: solid 1px;
            padding: 0.5rem 1rem;
            cursor: cell;
        }
    }
}
</style>
