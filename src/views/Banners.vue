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
                    <base-speed-select v-model="mainTopRotationSpeed">
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
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Фото на фоне"
                                    v-model="bigBackgroundBanner.bannerType"
                                />Фото на фоне</label
                            >
                        </div>
                        <div class="form-check m-3">
                            <label class="form-check-label"
                                ><input
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Просто фон"
                                    v-model="bigBackgroundBanner.bannerType"
                                />
                                Просто фон</label
                            >
                        </div>
                    </div>
                </div>

                <div class="col-9">
                    <PictureCard
                        :card="bigBackgroundBanner"
                        @remove-banner="removeBigBackgroundBanner"
                        @change-card="changeBigBackgroundBanner"
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
                <div class="col-7">
                    <base-speed-select v-model="actionsRotationSpeed">
                        Скорость вращения:
                    </base-speed-select>
                </div>
                <div class="col-5">
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
            mainTopRotationSpeed: "5",
            //bg
            bigBackgroundBanner: {
                URL: "/img/uploadPicture.jpg",
                bannerType: "Фото на фоне",
            },
            //actions
            actions: [],
            actionsSwitch: true,
            actionsRotationSpeed: "5",
        };
    },
    computed: {
        getBannersQuantity() {
            return this.banners.length;
        },
    },
    mounted() {
        this.fetchBanners();
        this.fetchActions();
    },
    methods: {
        //banner methods
        addBanner: function () {
            const banner = {
                id: Math.round(10000000 * Math.random()),
                URL: "/img/uploadPicture.jpg",
                text: "описание",
            };
            this.banners.push(banner);
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
            localStorage.setItem(
                "kinoCMSbanners",
                JSON.stringify(this.banners)
            );
            const payload = this.banners;
            const path = "/banners";
            this.$store.dispatch("writeToDatabase", { payload, path });
        },
        fetchBanners: async function () {
            const local = JSON.parse(localStorage.getItem("kinoCMSbanners"));
            if (local) this.banners = local;
            this.banners = await this.$store.dispatch("readFromDatabase", "/banners");
            console.log(this.banners)

        },

        //background banner methods
        changeBigBackgroundBanner: function () {},
        removeBigBackgroundBanner: function () {
            this.bigBackgroundBanner.URL = "/img/uploadPicture.jpg";
            this.bigBackgroundBanner.bannerType = "Просто фон";
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
            localStorage.setItem(
                "kinoCMSactions",
                JSON.stringify(this.actions)
            );
            const payload = this.actions;
            const path = "/actions";
            this.$store.dispatch("writeToDatabase", { payload, path });
        },
        fetchActions: function () {
            const local = JSON.parse(localStorage.getItem("kinoCMSactions"));
            if (local) this.actions = local;
        },
    },
};
</script>

<style lang="scss" scoped>
.card-group {
    gap: 0.5rem;
}
</style>
