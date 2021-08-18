<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                        Всего пользователей: {{ users.length }}
                    </h2>
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
                                <th>Выбрать</th>
                                <th>Дата регистрации</th>
                                <th>День рождения</th>
                                <th>email</th>
                                <th>Телефон</th>
                                <th>ФИО</th>
                                <th>псевдоним</th>
                                <th>город</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="user in usersToShowOnPage"
                                :key="user._id"
                            >
                                <td>
                                    <input
                                        id="choosing"
                                        v-model="user.choosen"
                                        class="form-check-input mx-3"
                                        type="checkbox"
                                    />
                                </td>
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
                    <button
                        class="btn btn-info btn-lg btn-block"
                        @click="submit"
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChooseUsers",

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
            return this.users.filter(
                (item) =>
                    item.name
                        .toString()
                        .includes(this.searchPattern.toString()) ||
                    item.surname
                        .toString()
                        .includes(this.searchPattern.toString()) ||
                    item.nick
                        .toString()
                        .includes(this.searchPattern.toString()) ||
                    item.phone
                        .toString()
                        .includes(this.searchPattern.toString()) ||
                    item.town
                        .toString()
                        .includes(this.searchPattern.toString()) ||
                    item.email
                        .toString()
                        .includes(this.searchPattern.toString())
            );
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
        async loadFromDatabase() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/users"
            );
            if (result) this.users = result;
        },

        submit() {
            this.saveToDatabase();

            this.$router.push({
                name: "Mailing",
            });
        },

        async saveToDatabase() {
            const payload = this.users;
            const path = `/users`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },
    },
};
</script>
