<template>
    <div ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка новости</h3>
            </div>

            <div class="card-body">
                <div class="card-header">
                    <BaseSwitcher v-model="currentNews.status"
                        >Видимость новости</BaseSwitcher
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
                                        v-model="currentNews.title"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                this.$v.currentNews.title
                                                    .$invalid,
                                        }"
                                        placeholder="название фильма"
                                    />
                                    <small
                                        v-if="
                                            !this.$v.currentNews.title.$required
                                        "
                                        class="invalid-feedback"
                                        >Поле некорректно, исправьте,
                                        пожалуйста.
                                    </small>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Описание</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="currentNews.description"
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
                                            :card="currentNews.mainPic"
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
                                                v-for="pic in currentNews.pics"
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
                                                v-model="
                                                    currentNews.trailerLink
                                                "
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
                                                v-model="currentNews.SEO.url"
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
                                                v-model="currentNews.SEO.title"
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
                                                v-model="
                                                    currentNews.SEO.keywords
                                                "
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
                                                    currentNews.SEO.description
                                                "
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
                                        v-model="currentNews.titleUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="назва фильму"
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Опис</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="currentNews.descriptionUA"
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
                                            :card="currentNews.mainPicUA"
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
                                                v-for="pic in currentNews.picsUA"
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
                                                v-model="
                                                    currentNews.trailerLinkUA
                                                "
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
                                                v-model="currentNews.SEO.urlUA"
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
                                                v-model="
                                                    currentNews.SEO.titleUA
                                                "
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
                                                v-model="
                                                    currentNews.SEO.keywordsUA
                                                "
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
                                                    currentNews.SEO
                                                        .descriptionUA
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
                    <!-- /.card -->
                </div>

                <div class="card-footer">
                    <button
                        class="btn btn-info btn-block"
                        @click="submitNewsDetails()"
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
import { required } from "vuelidate/lib/validators";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";
import InputDate from "@/components/base/InputDate.vue";

export default {
    components: { PictureCard, KinoCard, BaseSwitcher, InputDate },

    props: {
        news: {
            type: Object,
            requred: true,
            default: () => {},
        },
        newsId: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            currentNews: this.news,
            dirty: false,
            loading: true,
        };
    },

    computed: {
        thisDate: {
            get: function () {
                return new Date(this.currentNews.date);
            },
            set: function (d) {
                this.currentNews.date = Date.parse(d);
            },
        },
    },

    validations: {
        currentNews: {
            title: { required },
        },
    },

    methods: {
        submitNewsDetails() {
            this.$root.$emit("news-submitted", this.currentNews);
            this.$router.push({
                name: "News",
            });
        },

        mainPictureChanged(target) {
            this.currentNews.mainPic.url = target.url;
        },
        mainPictureChangedUA(target) {
            this.currentNews.mainPicUA.url = target.url;
        },

        removeMainPic: function () {
            if (this.currentNews.mainPic.url == CONFIG.PICTURE_PLUG_URL) return;
            this.$store.dispatch(
                "removeFromStorage",
                this.currentNews.mainPic.url
            );
            this.currentNews.mainPic.url = CONFIG.PICTURE_PLUG_URL;
        },
        removeMainPicUA: async function () {
            if (this.currentNews.mainPicUA.url == CONFIG.PICTURE_PLUG_URL)
                return;
            this.$store.dispatch(
                "removeFromStorage",
                this.currentNews.mainPicUA.url
            );
            this.currentNews.mainPicUA.url = CONFIG.PICTURE_PLUG_URL;
        },

        addPicture() {
            if (!this.currentNews.pics) {
                this.currentNews.pics = [];
            }
            this.currentNews.pics.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },
        addPictureUA() {
            this.currentNews.picsUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        removePicture: async function (target) {
            this.currentNews.pics = this.currentNews.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
        removePictureUA: async function (target) {
            this.currentNews.pics = this.currentNews.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
    },
};
</script>
