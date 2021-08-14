<template>
    <div v-if="currentFilm" ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка фильма</h3>
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

                                <div class="card">
                                    <div class="card-header">
                                        Главная картинка
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="currentFilm.mainPic"
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
                                                v-for="pic in currentFilm.pics"
                                                :key="pic.id"
                                                :card="pic"
                                                @remove-card="removeFilmPicture"
                                            />
                                        </div>
                                        <button
                                            class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                                            @click.prevent="addFilmPicture"
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
                                                    >URL</span
                                                >
                                            </div>
                                            <input
                                                v-model="
                                                    currentFilm.trailerLink
                                                "
                                                type="text"
                                                class="form-control"
                                                placeholder="type url here"
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
                                                        id="3D"
                                                        v-model="
                                                            currentFilm.filmType
                                                        "
                                                        value="3D"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >3D</label
                                                    >
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input
                                                        id="2D"
                                                        v-model="
                                                            currentFilm.filmType
                                                        "
                                                        value="2D"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >2D</label
                                                    >
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input
                                                        id="IMAX"
                                                        v-model="
                                                            currentFilm.filmType
                                                        "
                                                        value="IMAX"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >IMAX</label
                                                    >
                                                </div>
                                            </div>
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
                                                    >URL</span
                                                >
                                            </div>
                                            <input
                                                v-model="currentFilm.SEO.url"
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
                                                v-model="currentFilm.SEO.title"
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
                                                    currentFilm.SEO.keywords
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
                                                    currentFilm.SEO.description
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
                                <div class="card">
                                    <div class="card-header">
                                        Главная картинка
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="currentFilm.mainPicUA"
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
                                                v-for="pic in currentFilm.picsUA"
                                                :key="pic.id"
                                                :card="pic"
                                                @remove-card="
                                                    removeFilmPictureUA
                                                "
                                            />
                                        </div>
                                        <button
                                            class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                                            @click.prevent="addFilmPictureUA"
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
                                                    >URL</span
                                                >
                                            </div>
                                            <input
                                                v-model="
                                                    currentFilm.trailerLinkUA
                                                "
                                                type="text"
                                                class="form-control"
                                                placeholder="type url here"
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
                                                        id="3D"
                                                        v-model="
                                                            currentFilm.filmTypeUA
                                                        "
                                                        value="3D"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >3D</label
                                                    >
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input
                                                        id="2D"
                                                        v-model="
                                                            currentFilm.filmTypeUA
                                                        "
                                                        value="2D"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >2D</label
                                                    >
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input
                                                        id="IMAX"
                                                        v-model="
                                                            currentFilm.filmTypeUA
                                                        "
                                                        value="IMAX"
                                                        class="form-check-input"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        >IMAX</label
                                                    >
                                                </div>
                                            </div>
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
                                                    >URL</span
                                                >
                                            </div>
                                            <input
                                                v-model="currentFilm.SEO.urlUA"
                                                type="text"
                                                class="form-control"
                                                placeholder=""
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
                                                    currentFilm.SEO.titleUA
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
                                                    currentFilm.SEO.keywordsUA
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
                                                    currentFilm.SEO
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
                </div>

                <div class="card-footer">
                    <button
                        type="button"
                        class="btn btn-info col-4 offset-1"
                        @click="submitFilmDetails"
                    >
                        Сохранить и выйти
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
    </div>
</template>

<script>
import CONFIG from "@/config.js";
import PictureCard from "@/components/PictureCard.vue";
import KinoCard from "@/components/KinoCard.vue";

export default {
    components: { PictureCard, KinoCard },

    props: {
        filmIndex: {
            type: Number,
            required: true,
            default: 0,
        },
    },

    data() {
        return {
            currentFilm: null,
        };
    },

    // beforeRouteLeave(to, from, next) {
    //     const answer = window.confirm("Выйти? Есть несохраненные данные.");
    //     if (answer) {
    //         next();
    //     } else {
    //         next(false);
    //     }
    // },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFilmsElementFromDatabase());
    },

    methods: {
        async loadFilmsElementFromDatabase() {
            const path = `/films/${this.filmIndex}`;

            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.currentFilm = result;
        },

        submitFilmDetails() {
            this.saveFilmsElementToDatabase().then(() => {
                this.$successMessage("Фильм записан");
            });
            this.$router.push({
                name: "Films",
            });
        },

        async saveFilmsElementToDatabase() {
            const payload = this.currentFilm;
            const path = `/films/${this.filmIndex}`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        mainPictureChanged(target) {
            this.currentFilm.mainPic.url = target.url;
        },

        mainPictureChangedUA(target) {
            this.currentFilm.mainPicUA.url = target.url;
        },

        removeMainPic: async function () {
            this.currentFilm.mainPic.url = CONFIG.PICTURE_PLUG_URL;
        },

        removeMainPicUA: async function () {
            this.currentFilm.mainPicUA.url = CONFIG.PICTURE_PLUG_URL;
        },

        resetCurrentFilm() {
            // maybe clear some garbage
            this.$router.go();
            this.$successMessage("Базовая версия восстановлена");
        },

        addFilmPicture() {
            this.currentFilm.pics.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        addFilmPictureUA() {
            this.currentFilm.picsUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        removeFilmPicture: async function (target) {
            this.currentFilm.pics = this.currentFilm.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        removeFilmPictureUA: async function (target) {
            this.currentFilm.picsUA = this.currentFilm.picsUA.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
    },
};
</script>
