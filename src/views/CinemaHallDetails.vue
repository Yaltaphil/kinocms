<template>
    <div v-if="cinema" ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка зала</h3>
            </div>

            <div class="card-body">
                <div
                    class="
                        card card-primary card-outline card-outline-tabs
                        mt-5
                    "
                >
                    <div class="input-group my-5">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Номер зала</span>
                        </div>
                        <input
                            v-model="cinema.halls[hallIndex].hallNumber"
                            type="text"
                            class="form-control"
                            placeholder="номер"
                        />
                    </div>
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
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Описание</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="
                                            cinema.halls[hallIndex].description
                                        "
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
                                        v-model="
                                            cinema.halls[hallIndex].conditions
                                        "
                                        type="text"
                                        class="form-control"
                                        placeholder="описание"
                                    ></textarea>
                                </div>

                                <div class="card">
                                    <div class="card-header">Логотип</div>
                                    <div class="card-body">
                                        <PictureCard
                                            :card="
                                                cinema.halls[hallIndex].mainPic
                                            "
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
                                            :card="
                                                cinema.halls[hallIndex]
                                                    .topBanner
                                            "
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
                                                v-for="pic in cinema.halls[
                                                    hallIndex
                                                ].pics"
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
                                                v-model="
                                                    cinema.halls[hallIndex].SEO
                                                        .url
                                                "
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
                                                    cinema.halls[hallIndex].SEO
                                                        .title
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
                                                    cinema.halls[hallIndex].SEO
                                                        .keywords
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
                                                    cinema.halls[hallIndex].SEO
                                                        .description
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
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Опис</span
                                        >
                                    </div>
                                    <textarea
                                        v-model="
                                            cinema.halls[hallIndex]
                                                .descriptionUA
                                        "
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
                                        v-model="
                                            cinema.halls[hallIndex].conditionsUA
                                        "
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
                                            :card="
                                                cinema.halls[hallIndex]
                                                    .mainPicUA
                                            "
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
                                            :card="
                                                cinema.halls[hallIndex]
                                                    .topBanner
                                            "
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
                                                v-for="pic in cinema.halls[
                                                    hallIndex
                                                ].picsUA"
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
                                                v-model="
                                                    cinema.halls[hallIndex].SEO
                                                        .urlUA
                                                "
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
                                                    cinema.halls[hallIndex].SEO
                                                        .titleUA
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
                                                    cinema.halls[hallIndex].SEO
                                                        .keywordsUA
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
                                                    cinema.halls[hallIndex].SEO
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
                        class="btn btn-info btn-block btn-lg"
                        @click="submitHall"
                    >
                        Сохранить и выйти
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import CONFIG from "@/config.js";
import PictureCard from "@/components/PictureCard.vue";
import KinoCard from "@/components/KinoCard.vue";

export default {
    name: "CinemaHallDetails",

    components: { PictureCard, KinoCard },

    props: {
        hallIndex: {
            type: Number,
            required: true,
        },
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
                name: "CinemaDetails",
                params: { cinemaIndex: this.cinemaIndex },
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

        //     mainPictureChanged(target) {
        //         this.cinema.halls[this.hallIndex].mainPic.url = target.url;
        //     },

        //     mainPictureChangedUA(target) {
        //         this.cinema.halls[this.hallIndex].mainPicUA.url = target.url;
        //     },
        //     topBannerChanged(target) {
        //         this.cinema.halls[this.hallIndex].topBanner.url = target.url;
        //     },

        //     topBannerChangedUA(target) {
        //         this.cinema.halls[this.hallIndex].topBannerUA.url = target.url;
        //     },

        //     removeMainPic: async function () {
        //         this.cinema.halls[this.hallIndex].mainPic.url =
        //             CONFIG.PICTURE_PLUG_URL;
        //     },

        //     removeMainPicUA: async function () {
        //         this.cinema.halls[this.hallIndex].mainPicUA.url =
        //             CONFIG.PICTURE_PLUG_URL;
        //     },
        //     removeTopBanner: async function () {
        //         this.cinema.halls[this.hallIndex].topBanner.url =
        //             CONFIG.PICTURE_PLUG_URL;
        //     },

        //     removeTopBannerUA: async function () {
        //         this.cinema.halls[this.hallIndex].topBannerUA.url =
        //             CONFIG.PICTURE_PLUG_URL;
        //     },

        //     addPicture() {
        //         this.cinema.halls[this.hallIndex].pics.push({
        //             id: `${Date.now()}${Math.random()}`,
        //             url: CONFIG.PICTURE_PLUG_URL,
        //         });
        //     },

        //     addPictureUA() {
        //         this.cinema.halls[this.hallIndex].picsUA.push({
        //             id: `${Date.now()}${Math.random()}`,
        //             url: CONFIG.PICTURE_PLUG_URL,
        //         });
        //     },

        //     removePicture: async function (target) {
        //         this.cinema.halls[this.hallIndex].pics = this.cinema.halls[
        //             this.hallIndex
        //         ].pics.filter((element) => element != target);
        //         if (target.url == CONFIG.PICTURE_PLUG_URL) return;
        //         await this.$store.dispatch("removeFromStorage", target.url);
        //     },

        //     removePictureUA: async function (target) {
        //         this.cinema.halls[this.hallIndex].picsUA = this.cinema.halls[
        //             this.hallIndex
        //         ].picsUA.filter((element) => element != target);
        //         if (target.url == CONFIG.PICTURE_PLUG_URL) return;
        //         await this.$store.dispatch("removeFromStorage", target.url);
        //     },
    },
};
</script>
