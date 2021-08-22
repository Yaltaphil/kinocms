<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                        Всего пользователей: {{ users.length }}
                    </h2>

                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить пользователя
                        </button>
                    </div>
                </div>
                <div class="card-body table-responsive p-0">
                    <table class="table text-nowrap">
                        <thead>
                            <div class="input-group m-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><i
                                            class="fa fa-search"
                                            aria-hidden="true"
                                        ></i
                                    ></span>
                                </div>
                                <input
                                    v-model="searchPattern"
                                    type="text"
                                    class="form-control"
                                />
                                <div class="input-group-append">
                                    <button
                                        class="btn btn-default"
                                        @click="searchPattern = ''"
                                    >
                                        Очистить поиск
                                    </button>
                                    <span class="input-group-text"
                                        >найдено {{ foundUsers.length }}</span
                                    >
                                </div>
                            </div>
                            <tr>
                                <th>ID</th>
                                <th>Дата регистрации</th>
                                <th>День рождения</th>
                                <th>email</th>
                                <th>Телефон</th>
                                <th>ФИО</th>
                                <th>псевдоним</th>
                                <th>город</th>
                                <th>редактировать/удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="user in usersToShowOnPage"
                                :key="user._id"
                            >
                                <td>{{ user._id }}</td>
                                <td>
                                    {{
                                        new Date(
                                            user._date
                                        ).toLocaleDateString()
                                    }}
                                </td>
                                <td>
                                    {{
                                        new Date(
                                            user.birthday
                                        ).toLocaleDateString()
                                    }}
                                </td>
                                <td>
                                    {{ user.email }}
                                </td>
                                <td>
                                    {{ user.phone }}
                                </td>
                                <td>
                                    <strong>
                                        {{ `${user.name} ${user.surname}` }}
                                    </strong>
                                </td>
                                <td>
                                    {{ user.nick }}
                                </td>
                                <td>
                                    {{ user.town }}
                                </td>
                                <td>
                                    <button
                                        class="btn btn-info mx-3"
                                        @click="editItem(user)"
                                    >
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button
                                        class="btn btn-danger mx-3"
                                        @click="removeItem(user)"
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer clearfix">
                    <ul class="pagination float-left">
                        <li
                            class="page-item"
                            :class="page <= 1 ? 'disabled' : ''"
                        >
                            <a class="page-link" @click="page--">&laquo;</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link"
                                >{{ `${page} из ${quantityOfPages}` }}
                            </a>
                        </li>

                        <li
                            class="page-item"
                            :class="page >= quantityOfPages ? 'disabled' : ''"
                        >
                            <a class="page-link" @click="page++">&raquo;</a>
                        </li>
                    </ul>
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
import matchingUsers from "@/utils/matchingUsers.js";

export default {
    name: "Users",

    data() {
        return {
            users: [],
            page: 1,
            perPage: 9,
            searchPattern: "",
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    computed: {
        quantityOfPages() {
            return Math.ceil(this.foundUsers.length / this.perPage);
        },

        foundUsers() {
            return matchingUsers(this.users, this.searchPattern);
        },

        usersToShowOnPage() {
            return this.foundUsers.slice(
                (this.page - 1) * this.perPage,
                this.page * this.perPage
            );
        },
    },

    watch: {
        foundUsers() {
            this.page = 1;
        },
    },

    methods: {
        async saveToDatabase() {
            const payload = this.users;
            const path = "/users";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/users"
            );
            if (result) this.users = result;
        },

        async removeItem(target) {
            if (!window.confirm("Удалить?")) return;
            this.users = this.users.filter((item) => item != target);
            this.saveToDatabase().then(() =>
                this.$successMessage("Пользователь удален")
            );
        },

        editItem(target) {
            const index = this.users.findIndex(
                (item) => item._id == target._id
            );
            this.$router.push({
                name: "UserDetails",
                params: { userIndex: index },
            });
        },

        addItem() {
            this.users.push({
                _id: `${Date.now()}${Math.random()}`,
                _date: Date.now(),
                name: "",
                surname: "",
                nick: "",
                email: "email@com.com",
                adress: "",
                password: "",
                cardNumber: "",
                language: "ru",
                sex: "male",
                phone: "777-77-77",
                birthday: Date.now(),
                town: "",
                choosen: false,
            });

            this.saveToDatabase().then(() =>
                this.$successMessage("Пользователь добавлен")
            );

            this.searchPattern = "";
        },

        back() {
            this.$router.push({
                name: "Home",
            });
        },
    },
};
</script>
