<template>
    <form @submit.prevent="saveFilm">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">{{ currentFilm }}</h3>
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
                    <div class="card-header">Тип кино</div>
                    <div class="card-body">
                        <div class="col-sm-6">
                            <!-- checkbox -->
                            <div class="form-group d-flex">
                                <div class="form-check mx-3">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label">3D</label>
                                </div>
                                <div class="form-check mx-3">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        checked
                                    />
                                    <label class="form-check-label">2D</label>
                                </div>
                                <div class="form-check mx-3">
                                    <input
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
        };
    },

    methods: {
        saveFilm() {
            // TODO add film saving
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
                this.currentFilm.mainPic.URL,
            );
            this.currentFilm.mainPic.URL = "/img/uploadPicture.jpg";
        },
    },
};
</script>

<style lang="scss" scoped></style>
