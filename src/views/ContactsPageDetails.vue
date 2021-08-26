<template>
    <div v-if="page" ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка страницы контактов</h3>
            </div>

            <div class="card-body p-5">
                <div
                    v-for="(cinema, index) in page.cinemas"
                    :key="cinema._id"
                    class="card border"
                >
                    <div class="card-header">
                        <div v-if="index !== 0" class="card-tools">
                            <BaseSwitcher v-model="cinema.status"
                                >Видимость</BaseSwitcher
                            >
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        >Кинотеатр</span
                                    >
                                </div>
                                <input
                                    v-model="cinema.title"
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                />
                            </div>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Адрес</span>
                                </div>
                                <input
                                    v-model="cinema.adress"
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                />
                            </div>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        >Координаты на карте</span
                                    >
                                </div>
                                <input
                                    v-model="cinema.coordinates"
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <PictureCard
                            :card="cinema.logo"
                            @remove-banner="removeLogo(index)"
                            @change-card="changeLogo($event, index)"
                        />
                    </div>
                </div>
                <button
                    class="btn btn-outline-info btn-block my-3"
                    @click="addCinemaInfo"
                >
                    Добавить кинотеатр
                </button>

                <button
                    class="btn btn-outline-danger btn-block my-3"
                    :disabled="page.cinemas.length === 1"
                    @click="delCinemaInfo"
                >
                    Удалить кинотеатр из контактов
                </button>

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
                                                v-model="page.SEO.url"
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
                                                v-model="page.SEO.title"
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
                                                v-model="page.SEO.keywords"
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
                                                v-model="page.SEO.description"
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
                                                v-model="page.SEO.urlUA"
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
                                                v-model="page.SEO.titleUA"
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
                                                v-model="page.SEO.keywordsUA"
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
                                                v-model="page.SEO.descriptionUA"
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
                        @click="submitDetails"
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
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";
import PictureCard from "@/components/PictureCard.vue";

export default {
    components: { BaseSwitcher, PictureCard },

    props: {
        pageIndex: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            page: null,
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    methods: {
        changeLogo(target, index) {
            this.page.cinemas[index].logo.url = target.url;
        },

        removeLogo(index) {
            this.page.cinemas[index].logo.url = CONFIG.PICTURE_PLUG_URL;
        },

        addCinemaInfo() {
            this.page.cinemas.push({
                _id: Date.now(),
                status: true,
                title: "кино",
                adress: "Киев 5",
                coordinates: "14 15",
                logo: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
            });
        },

        delCinemaInfo() {
            if (this.page.cinemas.length >= 2) {
                this.page.cinemas.pop();
                this.$successMessage("Кинотеатр удален из контактов");
            }
        },

        submitDetails() {
            this.saveToDatabase().then(() => {
                this.$successMessage("Страница записана");
            });

            this.$router.push({
                name: "Pages",
            });
        },

        async saveToDatabase() {
            const payload = this.page;
            const path = `/pages/${this.pageIndex}`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFromDatabase() {
            const path = `/pages/${this.pageIndex}`;

            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.page = result;
        },
    },
};
</script>
