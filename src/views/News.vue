<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Список новостей</h3>

                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить новость
                        </button>
                    </div>
                </div>
                <!-- /.card-header -->
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
                            <tr v-for="story in news" :key="story.id">
                                <td>{{ story.title }}</td>
                                <td>{{ story.date }}</td>
                                <td>
                                    <span v-if="story.status">Включена</span>
                                    <span v-else>Выключена</span>
                                </td>

                                <td>
                                    <button
                                        class="btn btn-info mx-3"
                                        @click="editItem(story)"
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
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>
<script>
import { eventBus } from "../main.js";

export default {
    name: "News",

    data() {
        return {
            isNewsOn: true,
            news: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadNewsFromDatabase());
    },

    computed: {
        newsDate: () => {
            return this.story.date.toDateString();
        },
    },

    watch: {
        news() {
            this.saveNewsToDatabase();
        },
    },

    created() {
        eventBus.$on("news-submitted", (data) => this.newsSubmitted(data));
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
            console.log("news loaded", result);
        },

        removeItem(target) {
            this.news = this.news.filter((item) => item != target);
            this.$successMessage("Новость удалена");
        },

        editItem(target) {
            this.$router.push({
                name: "NewsDetails",
                params: { newsId: target.id, news: target },
            });
        },

        async newsSubmitted(news) {
            const index = this.news.findIndex((item) => item.id === news.id);
            this.news[index] = news;
            this.saveNewsToDatabase().then(() =>
                this.$successMessage("Новость успешно записана")
            );
        },

        addItem() {
            this.news.push({
                id: Date.now().toString(),
                date: new Date(),
                status: true,
                title: "Новая новость новейшая новость новая",
                titleUA: "новый фильм",
                description: "",
                descriptionUA: "",
                mainPic: {
                    URL: "/img/uploadPicture.jpg",
                },
                pics: [
                    {
                        id: 12312234123,
                        URL: "/img/uploadPicture.jpg",
                    },
                ],
                trailerLink: "http://youtube",
                SEO: {
                    url: "/img/uploadPicture.jpg",
                    title: "/img/uploadPicture.jpg",
                    keywords: "key words here",
                    description: "/img/uploadPicture.jpg",
                },
            });
            this.saveNewsToDatabase().then(() =>
                this.$successMessage("Новость добавлена")
            );
        },
    },
};
</script>
