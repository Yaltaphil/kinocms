<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                        Всего акций: {{ actions.length }}
                    </h2>
                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить акцию
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
                            <tr
                                v-for="(story, index) in actions"
                                :key="story.id"
                            >
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

export default {
    name: "Actions",

    data() {
        return {
            actions: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadActionsFromDatabase());
    },

    methods: {
        async saveActionsToDatabase() {
            const payload = this.actions;
            const path = "/actions";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadActionsFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/actions"
            );
            if (result) this.actions = result;
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
            this.actions = this.actions.filter((item) => item != target);
            this.saveActionsToDatabase().then(() =>
                this.$successMessage("Новость удалена")
            );
        },

        async removePictureFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", picture.url);
        },

        editItem(index) {
            this.$router.push({
                name: "ActionDetails",
                params: { actionIndex: index },
            });
        },

        back() {
            this.$router.push({
                name: "Home",
            });
        },

        addItem() {
            this.actions.push({
                id: `${Date.now()}${Math.random()}`,
                date: Date.now(),
                status: true,
                title: "Акция новейшая новая",
                titleUA: "новыая акция",
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

            this.saveActionsToDatabase().then(() =>
                this.$successMessage("Акция добавлена")
            );
        },
    },
};
</script>
