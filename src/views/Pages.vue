<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h1>Список страниц</h1>
                    <h2 class="card-title">
                        Всего страниц: {{ pages.length }}
                    </h2>
                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить страницу
                        </button>
                    </div>
                </div>
                <div class="card-body table-responsive p-0">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Дата создания</th>
                                <th>Статус</th>
                                <th>Редактировать/Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(page, index) in pages" :key="page.id">
                                <td>{{ page.title }}</td>
                                <td>
                                    {{
                                        new Date(page.date).toLocaleDateString()
                                    }}
                                </td>
                                <td>
                                    <span v-if="page.status">Включена</span>
                                    <span v-else>Выключена</span>
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
                                        :disabled="!page.removable"
                                        @click="removeItem(page)"
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer mt-5">
                    <button class="btn btn-info btn-lg btn-block" @click="back">
                        Вернуться
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";
// import mockStandartPage from "@/mock/standartPage.js";
// import mockMainPage from "@/mock/mainPage.js";
// import mockContactsPage from "@/mock/contactsPage.js";

export default {
    name: "Pages",

    data() {
        return {
            pages: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    methods: {
        async saveToDatabase() {
            const payload = this.pages;
            const path = "/pages";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFromDatabase() {
            // //mocking
            // this.pages.push(mockMainPage, mockContactsPage, mockStandartPage);

            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/pages"
            );
            if (result) this.pages = result;
        },

        async removeItem(target) {
            if (!window.confirm("Удалить?")) return;
            // удаление всех картинок по url
            this.removePictureFromStorage(target.mainPic);
            this.removePictureFromStorage(target.mainPicUA);
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
            this.pages = this.pages.filter((item) => item != target);
            this.saveToDatabase().then(() =>
                this.$successMessage("Новость удалена")
            );
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
        },

        editItem(index) {
            switch (index) {
                case 0:
                    this.$router.push({
                        name: "MainPageDetails",
                        params: { pageIndex: index },
                    });
                    break;
                case 1:
                    this.$router.push({
                        name: "ContactsPageDetails",
                        params: { pageIndex: index },
                    });
                    break;
                default:
                    this.$router.push({
                        name: "StandartPageDetails",
                        params: { pageIndex: index },
                    });
                    break;
            }
        },

        back() {
            this.$router.push({
                name: "Home",
            });
        },

        addItem() {
            this.pages.push({
                // other pages

                id: `${Date.now()}${Math.random()}`,
                date: Date.now(),
                status: true,
                removable: true,
                title: "новая страница",
                titleUA: "новыая",
                description: "",
                descriptionUA: "",
                mainPic: {
                    url: CONFIG.PICTURE_PLUG_URL,
                },
                mainPicUA: {
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
                    url: "type url here",
                    urlUA: "type url here",
                    title: "title",
                    titleUA: "title",
                    keywords: "key words here",
                    keywordsUA: "key words here",
                    description: "description",
                    descriptionUA: "description",
                },
            });

            this.saveToDatabase().then(() =>
                this.$successMessage("Страница добавлена")
            );
        },
    },
};
</script>
