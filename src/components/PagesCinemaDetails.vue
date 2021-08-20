<template>
    <div class="card">
        <div class="card-header">
            <div class="card-tools">
                <BaseSwitcher v-model="item.status">Видимость</BaseSwitcher>
            </div>
        </div>
        <div class="card-body">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Кинотеатр</span>
                </div>
                <input
                    v-model="item.title"
                    type="text"
                    class="form-control"
                    placeholder=""
                />
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Адрес</span>
                </div>
                <input
                    v-model="item.adress"
                    type="text"
                    class="form-control"
                    placeholder=""
                />
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Координаты на карте</span>
                </div>
                <input
                    v-model="item.coordinates"
                    type="text"
                    class="form-control"
                    placeholder=""
                />
            </div>
            <PictureCard
                :card="item"
                @remove-banner="removeLogo"
                @change-card="changeLogo"
            />
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";
import PictureCard from "@/components/PictureCard.vue";

export default {
    name: "PagesCinemaDetails",

    components: { BaseSwitcher, PictureCard },

    props: {
        cinema: {
            type: Object,
            required: true,
            default: () => {},
        },
    },

    data: function () {
        return {
            item: {
                status: true,
                title: "кино",
                adress: "Киев 5",
                coordinates: "14 15",
                url: CONFIG.PICTURE_PLUG_URL,
            },
        };
    },

    methods: {
      
    },
};
</script>
