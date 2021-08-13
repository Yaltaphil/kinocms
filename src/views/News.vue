<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                        Всего новостей: {{ news.length }}
                    </h2>
                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить новость
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
                            <tr v-for="(story, index) in news" :key="story.id">
                                <td>{{ story.title }}</td>
                                <td>
                                    {{
                                        new Date(
                                            story.date
                                        ).toLocaleDateString()
                                    }}
                                </td>
                                <td>
                                    <span v-if="story.status">Включена</span>
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
                                        @click="removeItem(story)"
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from "@/config.js";

export default {
    name: "News",

    data() {
        return {
            news: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadNewsFromDatabase());
    },

    methods: {
        async saveNewsToDatabase() {
            const payload = this.news;
            const path = "/news";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadNewsFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/news"
            );
            if (result) this.news = result;
        },

        async removeItem(target) {
            if (!window.confirm("Удалить новость?")) return;
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
            this.news = this.news.filter((item) => item != target);
            this.saveNewsToDatabase().then(() =>
                this.$successMessage("Новость удалена")
            );
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
        },

        editItem(index) {
            this.$router.push({
                name: "NewsDetails",
                params: { newsIndex: index },
            });
        },

        addItem() {
            this.news.push({
                id: `${Date.now()}${Math.random()}`,
                date: Date.now(),
                status: true,
                title: "Новая новость новейшая новость новая",
                titleUA: "новый фильм",
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
                trailerLink: "http://youtube.com",
                trailerLinkUA: "http://youtube.com",
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

            this.saveNewsToDatabase().then(() =>
                this.$successMessage("Новость добавлена")
            );
        },
    },
};
</script>
