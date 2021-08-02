<template>
    <div>
        <!-- first block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной верх
            </div>
            <div class="row p-3">
                <small class="col-6 text-muted">Pазмер 1000x190</small>
                <div class="col-6 text-right">
                    <Switches
                        v-model="bannersSwitch"
                        theme="bootstrap"
                        color="success"
                    ></Switches>
                </div>
            </div>
            <div class="row pl-3">
                <div class="col-10">
                    <div class="card-group">
                        <KinoCard
                            v-for="banner in banners"
                            :key="banner.id"
                            :card="banner"
                            @remove-card="removeBanner"
                            @change-card="changeBanner"
                        />
                    </div>
                </div>
                <div
                    class="
                        col-2
                        d-flex
                        align-items-center
                        justify-content-center
                        my-3
                        p-1
                    "
                >
                    <button
                        class="btn-lg btn-outline-info h-100 shadow"
                        @click="addBanner"
                    >
                        Добавить
                    </button>
                </div>
            </div>

            <div class="row my-5 p-3">
                <div class="col">
                    <base-speed-select v-model="bannersRotationSpeed">
                        Скорость вращения:
                    </base-speed-select>
                </div>
                <div class="col-6">
                    <base-button @click="saveBanners"> Сохранить </base-button>
                </div>
            </div>
        </div>

        <!-- second block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                Сквозной баннер на заднем фоне
            </div>
            <div class="row p-3">
                <small class="col-6 text-muted">Pазмер 2000x3000</small>
            </div>

            <div class="row py-5 px-3">
                <div class="col-3">
                    <div class="form-group">
                        <div class="form-check m-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="bigBanner.bannerType"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Фото на фоне"
                                />Фото на фоне</label
                            >
                        </div>
                        <div class="form-check m-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="bigBanner.bannerType"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Просто фон"
                                />
                                Просто фон</label
                            >
                        </div>
                    </div>
                </div>

                <div class="col-9">
                    <PictureCard
                        :card="bigBanner"
                        @remove-banner="removeBigBanner"
                        @change-card="changeBigBanner"
                    />
                </div>
            </div>
        </div>

        <!-- third block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной новости и акции
            </div>

            <div class="row p-3">
                <small class="col-6 text-muted">Pазмер 1000x190</small>
                <div class="col-6 text-right">
                    <Switches
                        v-model="actionsSwitch"
                        theme="bootstrap"
                        color="success"
                    ></Switches>
                </div>
            </div>

            <div class="row pl-3">
                <div class="col-10">
                    <div class="card-group p-3">
                        <KinoCard
                            v-for="action in actions"
                            :key="action.id"
                            :card="action"
                            @remove-card="removeAction"
                        />
                    </div>
                </div>
                <div
                    class="
                        col-2
                        d-flex
                        align-items-center
                        justify-content-center
                        my-3
                        p-1
                    "
                >
                    <button
                        class="btn-lg btn-outline-info h-100 shadow"
                        @click="addAction"
                    >
                        Добавить
                    </button>
                </div>
            </div>

            <div class="row p-3">
                <div class="col">
                    <base-speed-select v-model="actionsRotationSpeed">
                        Скорость вращения:
                    </base-speed-select>
                </div>
                <div class="col-6">
                    <base-button @click="saveActions"> Сохранить </base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KinoCard from "@/components/KinoCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseSpeedSelect from "@/components/base/BaseSpeedSelect.vue";
import Switches from "vue-switches";
import PictureCard from "@/components/PictureCard.vue";

export default {
    name: "Banners",
    components: {
        KinoCard,
        BaseButton,
        BaseSpeedSelect,
        Switches,
        PictureCard,
    },
    data: function () {
        return {
            //banners
            banners: [],
            bannersSwitch: true,
            bannersRotationSpeed: "5",
            //bg
            bigBanner: {
                URL: "/img/uploadPicture.jpg",
                bannerType: "Фото на фоне",
            },
            //actions
            actions: [],
            actionsSwitch: true,
            actionsRotationSpeed: "5",
        };
    },

    mounted() {
        this.fetchBanners();
        this.fetchActions();
        this.fetchBigBanner();
    },
    methods: {
        //banner methods
        addBanner: function () {
            this.banners.push({
                id: Math.round(10000000 * Math.random()),
                URL: "/img/uploadPicture.jpg",
                text: "описание",
            });
        },

        removeBanner: async function (target) {
            this.banners = this.banners.filter((element) => element != target);
            if (target.URL == "/img/uploadPicture.jpg") return;
            await this.$store.dispatch("removeFromStorage", target.URL);
        },

        changeBanner: function (card) {
            const index = this.banners.findIndex((item) => item.id == card.id);
            if (index != -1) this.banners[index] = card;
        },

        saveBanners: function () {
            const payload = this.banners;
            const path = "/banners";
            this.$store.dispatch("writeToDatabase", { payload, path });
            console.log("banners saved");
        },
        fetchBanners: async function () {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/banners"
            );
            if (result) this.banners = result;
            console.log("banners loaded", result);
        },

        //background banner methods
        changeBigBanner: async function () {
            const path = "/bigban";
            const payload = this.bigBanner;
            await this.$store.dispatch("writeToDatabase", { payload, path });
            console.log("saved");
        },
        removeBigBanner: async function () {
            this.bigBanner.URL = "/img/uploadPicture.jpg";
            this.bigBanner.bannerType = "Просто фон";
        },
        fetchBigBanner: async function () {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/bigban"
            );
            if (result) {
                this.bigBanner.URL = result.URL;
                this.bigBanner.bannerType = result.bannerType;
            }
            console.log("Big banner loaded", result);
        },

        //actions methods
        addAction: function () {
            const action = {
                id: Math.round(10000000 * Math.random()),
                URL: "/img/uploadPicture.jpg",
            };
            this.actions.push(action);
            console.log(this.actions);
        },
        removeAction: async function (target) {
            this.actions = this.actions.filter((element) => element != target);
            if (target.URL == "/img/uploadPicture.jpg") return;
            await this.$store.dispatch("removeFromStorage", target.URL);
        },

        saveActions: function () {
            const payload = this.actions;
            const path = "/actions";
            this.$store.dispatch("writeToDatabase", { payload, path });
            console.log("saved");
        },
        fetchActions: async function () {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/actions"
            );
            if (result) this.actions = result;

            console.log("actions loaded", result);
        },
    },
};
</script>

<style lang="scss" scoped>
.card-group {
    gap: 0.5rem;
}
</style>
