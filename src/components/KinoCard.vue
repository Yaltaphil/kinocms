<template>

        <div class="card text-center border-primary p-2">
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
                    class="card-img-top"
                    :src="localCard.URL"
                    alt="Загрузите файл"
                />
            </div>

            <div class="card-body">
                <small> id: {{ localCard.id }}</small>

                <input
                    id="file"
                    type="file"
                    accept="image/*"
                    @change="uploadImage"
                />

                <!-- <label for="file">    Добавить
                 </label> -->

                <div class="input-group mt-3">
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

                <div class="input-group mt-3" v-if="localCard.text">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Текст</span>
                    </div>
                    <input v-if="localCard.text"
                        class="form-control"
                        type="text"
                        v-model="localCard.text"
                        @change="$emit('change-card', localCard)"
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

        uploadImage: async function (event) {
            event.stopPropagation();
            event.preventDefault();
            const file = event.target.files[0];
            if (!file) return false;
            const storageRef = firebase.storage().ref();
            this.localCard.URL = await storageRef
                .child("images/" + Math.random() + file.name)
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
    max-width: 270px;
    & .card-img-top {
        height: 120px;
    }
    #file {
        // display: none;
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
