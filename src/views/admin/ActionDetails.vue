<template>
    <div v-if="action" ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка акции</h3>
            </div>

            <div class="card-body">
                <div class="card-header">
                    <BaseSwitcher v-model="action.status"
                        >Видимость акции</BaseSwitcher
                    >
                </div>

                <div class="form-group col-4">
                    <div class="input-group date">Дата</div>
                    <InputDate v-model="thisDate" />
                </div>

                <div
                    class="
                        card card-primary card-outline card-outline-tabs
                        mt-5
                    "
                >
                    <div class="card-header p-0 border-bottom-0">
                        <ul
                            id="custom-tabs-two-tab"
                            class="nav nav-tabs"
                            role="tablist"
                        >
                            <li class="nav-item">
                                <a
                                    id="custom-tabs-two-ru-tab"
                                    class="nav-link active"
                                    data-toggle="pill"
                                    href="#custom-tabs-two-ru"
                                    role="tab"
                                    >Русский</a
                                >
                            </li>
                            <li class="nav-item">
                                <a
                                    id="custom-tabs-two-ua-tab"
                                    class="nav-link"
                                    data-toggle="pill"
                                    href="#custom-tabs-two-ua"
                                    role="tab"
                                    >Украинский</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div
                            id="custom-tabs-two-tabContent"
                            class="tab-content"
                        >
                            <div
                                id="custom-tabs-two-ru"
                                class="tab-pane fade show active"
                                role="tabpanel"
                            >
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Название</span
                                        >
                                    </div>
                                    <input
                                        v-model="action.title"
                                        type="text"
                                        class="form-control"
                                        placeholder="название "
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Описание</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="action.description"
                                        type="text"
                                        class="form-control"
                                        placeholder="описание"
                                    ></textarea>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Главная картинка
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="action.mainPic"
                                            @change-card="mainPictureChanged"
                                            @remove-banner="removeMainPic"
                                        />
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Галерея картинок
                                    </div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <KinoCard
                                                v-for="pic in action.pics"
                                                :key="pic.id"
                                                :card="pic"
                                                @remove-card="removePicture"
                                            />
                                        </div>
                                        <button
                                            class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                                            @click="addPicture"
                                        >
                                            Добавить картинку
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        Ссылка на трейлер
                                    </div>
                                    <div class="card-body">
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >url</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.trailerLink"
                                                type="text"
                                                class="form-control"
                                                placeholder="url"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">SEO</div>
                                    <div class="card-body">
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >url</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.url"
                                                type="text"
                                                class="form-control"
                                                placeholder="url"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Title</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.title"
                                                type="text"
                                                class="form-control"
                                                placeholder="title"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Keywords</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.keywords"
                                                type="text"
                                                class="form-control"
                                                placeholder="keywords"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-3
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Description</span
                                                >
                                            </div>
                                            <textarea
                                                v-model="action.SEO.description"
                                                type="text"
                                                class="form-control"
                                                placeholder="описание"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="custom-tabs-two-ua"
                                class="tab-pane fade"
                                role="tabpanel"
                            >
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Назва</span
                                        >
                                    </div>
                                    <input
                                        v-model="action.titleUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="назва"
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Опис</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="action.descriptionUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="опис"
                                    ></textarea>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Главная картинка
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="action.mainPicUA"
                                            @change-card="mainPictureChangedUA"
                                            @remove-banner="removeMainPicUA"
                                        />
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Галерея картинок
                                    </div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <KinoCard
                                                v-for="pic in action.picsUA"
                                                :key="pic.id"
                                                :card="pic"
                                                @remove-card="removePictureUA"
                                            />
                                        </div>
                                        <button
                                            class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                                            @click="addPictureUA"
                                        >
                                            Добавить картинку
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        Ссылка на трейлер
                                    </div>
                                    <div class="card-body">
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >url</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.trailerLinkUA"
                                                type="text"
                                                class="form-control"
                                                placeholder="url"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">SEO</div>
                                    <div class="card-body">
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >url</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.urlUA"
                                                type="text"
                                                class="form-control"
                                                placeholder="url"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Title</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.titleUA"
                                                type="text"
                                                class="form-control"
                                                placeholder="title"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Keywords</span
                                                >
                                            </div>
                                            <input
                                                v-model="action.SEO.keywordsUA"
                                                type="text"
                                                class="form-control"
                                                placeholder="keywords"
                                            />
                                        </div>
                                        <div
                                            class="
                                                input-group input-group-sm
                                                mb-3
                                            "
                                        >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"
                                                    >Description</span
                                                >
                                            </div>
                                            <textarea
                                                v-model="
                                                    action.SEO.descriptionUA
                                                "
                                                type="text"
                                                class="form-control"
                                                placeholder="описание"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <button
                        class="btn btn-info btn-block"
                        @click="submitActionDetails()"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";
import PictureCard from "@/components/PictureCard.vue";
import KinoCard from "@/components/KinoCard.vue";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";
import InputDate from "@/components/base/InputDate.vue";

export default {
    components: { PictureCard, KinoCard, BaseSwitcher, InputDate },

    props: {
        actionIndex: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            action: null,
        };
    },

    computed: {
        thisDate: {
            get: function () {
                return new Date(this.action.date);
            },
            set: function (d) {
                this.action.date = Date.parse(d);
            },
        },
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadActionElementFromDatabase());
    },

    methods: {
        submitActionDetails() {
            this.saveActionElementToDatabase().then(() => {
                this.$successMessage("Акция записана");
            });

            this.$router.push({
                name: "Actions",
            });
        },

        async saveActionElementToDatabase() {
            const payload = this.action;
            const path = `/actions/${this.actionIndex}`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadActionElementFromDatabase() {
            const path = `/actions/${this.actionIndex}`;

            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.action = result;
        },

        mainPictureChanged(target) {
            this.action.mainPic.url = target.url;
        },

        mainPictureChangedUA(target) {
            this.action.mainPicUA.url = target.url;
        },

        removeMainPic: function () {
            if (this.action.mainPic.url == CONFIG.PICTURE_PLUG_URL) return;
            this.$store.dispatch("removeFromStorage", this.action.mainPic.url);
            this.action.mainPic.url = CONFIG.PICTURE_PLUG_URL;
        },

        removeMainPicUA: async function () {
            if (this.action.mainPicUA.url == CONFIG.PICTURE_PLUG_URL) return;
            this.$store.dispatch(
                "removeFromStorage",
                this.action.mainPicUA.url
            );
            this.action.mainPicUA.url = CONFIG.PICTURE_PLUG_URL;
        },

        addPicture() {
            if (!this.action.pics) {
                this.action.pics = [];
            }
            this.action.pics.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },
        addPictureUA() {
            this.action.picsUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        removePicture: async function (target) {
            this.action.pics = this.action.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        removePictureUA: async function (target) {
            this.action.pics = this.action.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
    },
};
</script>
