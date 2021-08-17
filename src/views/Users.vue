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
                            <tr v-for="(user, index) in users" :key="user._id">
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
                                    {{ `${user.name} ${user.surname}` }}
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
                                        @click="editItem(index)"
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Users",

    data() {
        return {
            users: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    computed: {
        fullName(index) {
            return `${this.users[index].name} ${this.users[index].surname}`;
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

        editItem(index) {
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
            });

            this.saveToDatabase().then(() =>
                this.$successMessage("Пользователь добавлен")
            );
        },
    },
};
</script>
