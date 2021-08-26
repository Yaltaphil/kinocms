<template>
    <div>
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной верх
            </div>
            <div class="card-body">
                <div class="row p-3">
                    <small class="col-6 text-muted">Pазмер 1000x190</small>
                    <div class="col-6 text-right">
                        <BaseSwitcher
                            v-model="settings.bannersSwitch"
                        ></BaseSwitcher>
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
                </div>
                <button
                    class="btn-lg btn-outline-info btn-block my-5 shadow"
                    @click="addBanner"
                >
                    Добавить
                </button>
                <div class="row my-5 p-3">
                    <div class="input-group col">
                        <div class="input-group-prepend col-3">
                            Скорость вращения:
                        </div>
                        <select
                            v-model="settings.bannersRotationSpeed"
                            class="form-control shadow mx-3 col-3"
                        >
                            <option
                                v-for="time in times"
                                :key="time"
                                :value="time"
                                :label="`${time} сек`"
                            ></option>
                        </select>
                    </div>

                    <div class="col">
                        <base-button
                            class="btn btn-lg w-50"
                            @click="saveBanners"
                        >
                            Сохранить
                        </base-button>
                    </div>
                </div>
            </div>
        </div>

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
            <div class="card-body">
                <div class="row p-3">
                    <small class="col-6 text-muted">Pазмер 1000x190</small>
                    <div class="col-6 text-right">
                        <BaseSwitcher
                            v-model="settings.actionsSwitch"
                        ></BaseSwitcher>
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
                </div>
                <button
                    class="btn-lg btn-outline-info btn-block shadow m-3"
                    @click="addAction"
                >
                    Добавить
                </button>
                <div class="row p-3 mt-5 input-group">
                    <div class="input-group col">
                        <div class="input-group-prepend col-3">
                            Скорость вращения:
                        </div>
                        <select
                            v-model="settings.actionsRotationSpeed"
                            class="form-control shadow mx-3 col-3"
                        >
                            <option
                                v-for="time in times"
                                :key="time"
                                :value="time"
                                :label="`${time} сек`"
                            ></option>
                        </select>
                    </div>

                    <div class="col">
                        <base-button
                            class="btn btn-lg w-50"
                            @click="saveActions"
                        >
                            Сохранить
                        </base-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";
import KinoCard from "@/components/KinoCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import PictureCard from "@/components/PictureCard.vue";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";

export default {
    name: "Banners",

    components: {
        KinoCard,
        BaseButton,
        PictureCard,
        BaseSwitcher,
    },

    data() {
        return {
            settings: {
                bannersSwitch: true,
                bannersRotationSpeed: "1",
                actionsSwitch: true,
                actionsRotationSpeed: "1",
            },
            banners: [],

            bigBanner: {
                url: CONFIG.PICTURE_PLUG_URL,
                bannerType: "Фото на фоне",
            },
            actions: [],
            times: [" 5", "15", "30"],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.fetchBanners();
            vm.fetchActions();
            vm.fetchBigBanner();
            vm.loadSettings();
        });
    },

    watch: {
        settings: {
            handler() {
                this.saveSettings();
            },
            deep: true,
        },
    },

    methods: {
        async loadSettings() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/settings"
            );
            if (result) {
                this.settings = result;
            }
        },

        saveSettings() {
            const payload = this.settings;
            const path = "/settings";
            this.$store.dispatch("writeToDatabase", { payload, path });
        },

        addBanner() {
            this.banners.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
                text: "описание",
            });
        },

        async removeBanner(target) {
            this.banners = this.banners.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        changeBanner(card) {
            const index = this.banners.findIndex((item) => item.id == card.id);
            if (index != -1) this.banners[index] = card;
        },

        async saveBanners() {
            const payload = this.banners;
            const path = "/banners";
            await this.$store.dispatch("writeToDatabase", { payload, path });
            this.$successMessage("Данные сохранены");
        },

        async fetchBanners() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/banners"
            );
            if (result) this.banners = result;
        },

        async changeBigBanner() {
            const path = "/bigban";
            const payload = this.bigBanner;
            await this.$store.dispatch("writeToDatabase", { payload, path });
        },

        async removeBigBanner() {
            this.bigBanner.url = CONFIG.PICTURE_PLUG_URL;
            this.bigBanner.bannerType = "Просто фон";
        },

        async fetchBigBanner() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/bigban"
            );
            if (result) {
                this.bigBanner.url = result.url;
                this.bigBanner.bannerType = result.bannerType;
            }
        },

        addAction() {
            const action = {
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            };
            this.actions.push(action);
        },

        async removeAction(target) {
            this.actions = this.actions.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        async saveActions() {
            const payload = this.actions;
            const path = "/bannersActions";
            await this.$store.dispatch("writeToDatabase", { payload, path });
            this.$successMessage("Данные сохранены");
        },

        async fetchActions() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/bannersActions"
            );
            if (result) this.actions = result;
        },
    },
};
</script>

<style lang="scss" scoped>
.card-group {
    gap: 0.5rem;
}
</style>
