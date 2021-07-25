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
                class="card-img-top img-responsive img-thumbnail mx-auto"
                alt=""
            />
        </div>

        <div class="card-body">
            <label class="btn btn-outline-secondary px-5">
                <!-- <i class="fa fa-upload" aria-hidden="true"></i> -->
                Загрузить
                <i class="fas fa-file ml-1"></i>
                <input
                    type="file"
                    class="custom-file-input"
                    accept="image/*"
                    @change="uploadImage"
                    hidden
                />
            </label>
            <!--
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"
                        ><i class="fa fa-upload" aria-hidden="true"></i
                    ></span>
                </div>
                <div class="custom-file">
                    <input
                        id="file"
                        type="file"
                        class="custom-file-input"
                        accept="image/*"
                        @change="uploadImage"
                    />
                    <div class="custom-file-label">Загрузить</div>
                </div>
            </div> -->

            <div class="input-group input-group-sm mt-5">
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

            <div class="input-group input-group-sm mt-2" v-if="localCard.text">
                <div class="input-group-prepend">
                    <span class="input-group-text">Текст</span>
                </div>
                <input
                    v-if="localCard.text"
                    class="form-control"
                    type="text"
                    v-model="localCard.text"
                    @change="$emit('change-card', localCard)"
                    placeholder="описание"
                />
            </div>
        </div>
        <div class="card-footer">
            <!-- <small class="text-muted">--dev: id: {{ localCard.id }}</small> -->
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "KinoCard",

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
        // previewImage: function (event) {
        //     const file = event.target.files[0];
        //     if (!file) return false;
        //     const reader = new FileReader();
        //     reader.onload = function (event) {
        //         this.localCard.URL = event.target.result;
        //     };
        //     reader.readAsDataURL(file);
        // },

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
.card {
    max-width: 260px;
    min-width: 260px;
    & .card-img-top {
        height: 150px;
    }
}
</style>
