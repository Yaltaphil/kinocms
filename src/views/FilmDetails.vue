<template>
    <form @submit.prevent="submitFilmDetails()">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">
                    Карточка фильма "{{ currentFilm.title }}"
                </h3>
            </div>

            <div class="card-body">
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
                                        v-model="currentFilm.title"
                                        type="text"
                                        class="form-control"
                                        placeholder="название фильма"
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Описание</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="currentFilm.description"
                                        type="text"
                                        class="form-control"
                                        placeholder="описание"
                                    ></textarea>
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
                                        v-model="currentFilm.titleUA"
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
                                        v-model="currentFilm.descriptionUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="опис"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>

                <div class="card">
                    <div class="card-header">Главная картинка</div>
                    <div class="card-body">
                        <PictureCard
                            :card="currentFilm.mainPic"
                            @change-card="mainPictureChanged"
                            @remove-banner="removeMainPic"
                        />
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">Галерея картинок</div>
                    <div class="card-body">
                        <div class="card-group">
                            <KinoCard
                                v-for="pic in currentFilm.pics"
                                :key="pic.id"
                                :card="pic"
                                @remove-card="removeAction"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">Ссылка на трейлер</div>
                    <div class="card-body">
                        <div class="input-group input-group-sm mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text">URL</span>
                            </div>
                            <input
                                v-model="currentFilm.trailerLink"
                                type="text"
                                class="form-control"
                                placeholder="url"
                            />
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        Тип кино {{ currentFilm.filmType }}
                    </div>
                    <div class="card-body">
                        <div class="col-sm-6">
                            <!-- checkbox -->
                            <div class="form-group d-flex">
                                <div class="form-check mx-3">
                                    <input
                                        id="3D"
                                        v-model="currentFilm.filmType"
                                        value="3D"
                                        class="form-check-input"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label">3D</label>
                                </div>
                                <div class="form-check mx-3">
                                    <input
                                        id="2D"
                                        v-model="currentFilm.filmType"
                                        value="2D"
                                        class="form-check-input"
                                        type="checkbox"
                                        checked
                                    />
                                    <label class="form-check-label">2D</label>
                                </div>
                                <div class="form-check mx-3">
                                    <input
                                        id="IMAX"
                                        v-model="currentFilm.filmType"
                                        value="IMAX"
                                        class="form-check-input"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label">IMAX</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">SEO</div>
                    <div class="card-body">
                        <div class="input-group input-group-sm mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text">URL</span>
                            </div>
                            <input
                                v-model="currentFilm.SEO.url"
                                type="text"
                                class="form-control"
                                placeholder="url"
                            />
                        </div>
                        <div class="input-group input-group-sm mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Title</span>
                            </div>
                            <input
                                v-model="currentFilm.SEO.title"
                                type="text"
                                class="form-control"
                                placeholder="title"
                            />
                        </div>
                        <div class="input-group input-group-sm mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Keywords</span>
                            </div>
                            <input
                                v-model="currentFilm.SEO.keywords"
                                type="text"
                                class="form-control"
                                placeholder="keywords"
                            />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    >Description</span
                                >
                            </div>
                            <textarea
                                v-model="currentFilm.SEO.description"
                                type="text"
                                class="form-control"
                                placeholder="описание"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <button type="submit" class="btn btn-info col-4 offset-1">
                        Сохранить
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-warning col-4 offset-2"
                        @click="resetCurrentFilm"
                    >
                        Вернуть базовую версию
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import PictureCard from "@/components/PictureCard.vue";
import KinoCard from "@/components/KinoCard.vue";
import { eventBus } from "../main.js";
import lodash from "lodash";

export default {
    components: { PictureCard, KinoCard },
    props: {
        film: {
            type: Object,
            requred: true,
            default: () => {},
        },
        filmId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            currentFilm: this.film,
            filmDefaultState: this.film,
        };
    },
    created() {
        this.filmDefaultState = lodash.cloneDeep(this.film);
    },
    methods: {
        submitFilmDetails() {
            eventBus.$emit("film-submitted", this.currentFilm);
            this.$successMessage("Данные фильма сохранены");
            this.$router.push({
                name: "Films",
            });
        },
        removeAction() {},
        mainPictureChanged(target) {
            this.currentFilm.mainPic.URL = target.URL;
        },
        removeMainPic: async function () {
            if (this.currentFilm.mainPic.URL == "/img/uploadPicture.jpg")
                return;
            await this.$store.dispatch(
                "removeFromStorage",
                this.currentFilm.mainPic.URL
            );
            this.currentFilm.mainPic.URL = "/img/uploadPicture.jpg";
        },

        resetCurrentFilm() {
            this.currentFilm = lodash.cloneDeep(this.filmDefaultState);
            this.$successMessage("Базовая версия восстановлена");
        },

        // TODO film type

        // TODO add pic button
    },
};
</script>

<style lang="scss" scoped></style>
