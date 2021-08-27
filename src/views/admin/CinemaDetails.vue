<template>
    <div v-if="cinema" ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка кинотеатра</h3>
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
                                        v-model="cinema.title"
                                        type="text"
                                        class="form-control"
                                        placeholder="название"
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Описание</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="cinema.description"
                                        type="text"
                                        class="form-control"
                                        placeholder="описание"
                                    ></textarea>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Условия</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="cinema.conditions"
                                        type="text"
                                        class="form-control"
                                        placeholder="описание"
                                    ></textarea>
                                </div>

                                <div class="card">
                                    <div class="card-header">Логотип</div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="cinema.mainPic"
                                            @change-card="mainPictureChanged"
                                            @remove-banner="removeMainPic"
                                        />
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Фото верхнего баннера
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="cinema.topBanner"
                                            @change-card="topBannerChanged"
                                            @remove-banner="removeTopBanner"
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
                                                v-for="pic in cinema.pics"
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
                                            @click.prevent="addPicture"
                                        >
                                            Добавить картинку
                                        </button>
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
                                                v-model="cinema.SEO.url"
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
                                                v-model="cinema.SEO.title"
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
                                                v-model="cinema.SEO.keywords"
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
                                                v-model="cinema.SEO.description"
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
                                        v-model="cinema.titleUA"
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
                                        v-model="cinema.descriptionUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="опис"
                                    ></textarea>
                                </div>

                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Условия</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="cinema.conditionsUA"
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
                                            :card="cinema.mainPicUA"
                                            @change-card="mainPictureChangedUA"
                                            @remove-banner="removeMainPicUA"
                                        />
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        Фото верхнего баннера
                                    </div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="cinema.topBanner"
                                            @change-card="topBannerChangedUA"
                                            @remove-banner="removeTopBannerUA"
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
                                                v-for="pic in cinema.picsUA"
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
                                            @click.prevent="addPictureUA"
                                        >
                                            Добавить картинку
                                        </button>
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
                                                v-model="cinema.SEO.urlUA"
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
                                                v-model="cinema.SEO.titleUA"
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
                                                v-model="cinema.SEO.keywordsUA"
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
                                                    cinema.SEO.descriptionUA
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

                <div class="card border border-dark">
                    <div class="card-header">
                        <h3>Список залов</h3>
                        <button
                            type="button"
                            class="btn btn-outline-info btn-block"
                            @click="addHall"
                        >
                            Добавить зал
                        </button>
                    </div>

                    <div class="card-body table-responsive p-0">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Дата создания</th>
                                    <th>Редактировать/Удалить</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(hall, index) in cinema.halls"
                                    :key="hall.id"
                                >
                                    <td>{{ hall.hallNumber }}</td>
                                    <td>
                                        {{
                                            new Date(
                                                hall.date
                                            ).toLocaleDateString()
                                        }}
                                    </td>

                                    <td>
                                        <button
                                            class="btn btn-info mx-3"
                                            @click="editItem(index)"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button
                                            class="btn btn-danger mx-3"
                                            @click="removeItem(hall)"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="card-footer">
                    <button
                        type="button"
                        class="btn btn-info btn-block btn-lg"
                        @click="submitCinema"
                    >
                        Сохранить и выйти
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
    name: "CinemaDetails",

    components: { PictureCard, KinoCard },

    props: {
        cinemaIndex: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            cinema: null,
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadCinema());
    },

    methods: {
        async loadCinema() {
            const path = `/cinemas/${this.cinemaIndex}`;

            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.cinema = result;
        },

        submitCinema() {
            this.saveCinema().then(() => {
                this.$successMessage("Изменения сохранены");
            });
            this.$router.push({
                name: "Cinemas",
            });
        },

        async saveCinema() {
            const payload = this.cinema;
            const path = `/cinemas/${this.cinemaIndex}`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        mainPictureChanged(target) {
            this.cinema.mainPic.url = target.url;
        },

        mainPictureChangedUA(target) {
            this.cinema.mainPicUA.url = target.url;
        },
        topBannerChanged(target) {
            this.cinema.topBanner.url = target.url;
        },

        topBannerChangedUA(target) {
            this.cinema.topBannerUA.url = target.url;
        },

        removeMainPic: async function () {
            this.cinema.mainPic.url = CONFIG.PICTURE_PLUG_URL;
        },

        removeMainPicUA: async function () {
            this.cinema.mainPicUA.url = CONFIG.PICTURE_PLUG_URL;
        },
        removeTopBanner: async function () {
            this.cinema.topBanner.url = CONFIG.PICTURE_PLUG_URL;
        },

        removeTopBannerUA: async function () {
            this.cinema.topBannerUA.url = CONFIG.PICTURE_PLUG_URL;
        },

        addPicture() {
            this.cinema.pics.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        addPictureUA() {
            this.cinema.picsUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },

        removePicture: async function (target) {
            this.cinema.pics = this.cinema.pics.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        removePictureUA: async function (target) {
            this.cinema.picsUA = this.cinema.picsUA.filter(
                (element) => element != target
            );
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },

        editItem(index) {
            this.saveCinema();
            this.$router.push({
                name: "CinemaHallDetails",
                params: { cinemaIndex: this.cinemaIndex, hallIndex: index },
            });
        },

        async removeItem(target) {
            if (!window.confirm("Удалить?")) return;
            // удаление всех картинок по url
            this.removePictureFromStorage(target.schema);
            this.removePictureFromStorage(target.schemaUA);
            this.removePictureFromStorage(target.topBanner);
            this.removePictureFromStorage(target.topBannerUA);
            if (target.pics) {
                target.pics.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            if (target.picsUA) {
                target.picsUA.forEach((item) =>
                    this.removePictureFromStorage(item)
                );
            }
            this.cinema.halls = this.cinema.halls.filter(
                (item) => item != target
            );
            this.saveCinema().then(() => this.$successMessage("Зал удален"));
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
        },

        addHall() {
            const newHall = {
                id: `${Date.now()}${Math.random()}`,
                hallNumber: "№",
                date: Date.now(),
                description: "",
                descriptionUA: "",
                schema: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                schemaUA: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                topBanner: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                topBannerUA: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                pics: [
                    {
                        id: `${Date.now()}${Math.random()}`,
                        url: CONFIG.PICTURE_PLUG_URL,
                    },
                ],
                picsUA: [
                    {
                        id: `${Date.now()}${Math.random()}`,
                        url: CONFIG.PICTURE_PLUG_URL,
                    },
                ],
                SEO: {
                    url: "/img/uploadPicture.jpg",
                    urlUA: "/img/uploadPicture.jpg",
                    title: "/img/uploadPicture.jpg",
                    titleUA: "/img/uploadPicture.jpg",
                    keywords: "key words here",
                    keywordsUA: "key words here",
                    description: "/img/uploadPicture.jpg",
                    descriptionUA: "/img/uploadPicture.jpg",
                },
            };
            this.cinema.halls.push(newHall);
            this.saveCinema();
        },
    },
};
</script>
