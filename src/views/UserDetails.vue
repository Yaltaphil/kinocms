<template>
    <div ref="form">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Карточка пользователя</h3>
            </div>

            <div v-if="user" class="card-body">
                <div class="row">
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Имя</span>
                            </div>
                            <input
                                v-model="user.name"
                                type="text"
                                class="form-control"
                                placeholder="имя "
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Фамилия</span>
                            </div>
                            <input
                                v-model="user.surname"
                                type="text"
                                class="form-control"
                                placeholder="фамилия "
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Псевдоним</span>
                            </div>
                            <input
                                v-model="user.nick"
                                type="text"
                                class="form-control"
                                placeholder="псевдоним "
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">email</span>
                            </div>
                            <input
                                v-model="user.email"
                                type="email"
                                class="form-control"
                                placeholder="email "
                            />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Адрес</span>
                            </div>
                            <input
                                v-model="user.adress"
                                type="text"
                                class="form-control"
                                placeholder="адрес "
                            />
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    >Номер карты</span
                                >
                            </div>
                            <input
                                v-model="user.cardNumber"
                                type="text"
                                class="form-control"
                                placeholder="карта "
                            />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Язык</span>
                            </div>
                            <div class="form-group">
                                <div class="form-check m-3">
                                    <label class="form-check-label"
                                        ><input
                                            v-model="user.language"
                                            class="form-check-input"
                                            type="radio"
                                            name="radio1"
                                            value="ru"
                                        />Русский</label
                                    >
                                </div>
                                <div class="form-check m-3">
                                    <label class="form-check-label"
                                        ><input
                                            v-model="user.language"
                                            class="form-check-input"
                                            type="radio"
                                            name="radio1"
                                            value="ua"
                                        />
                                        Украинский</label
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">пол</span>
                            </div>
                            <div class="form-group">
                                <div class="form-check m-3">
                                    <label class="form-check-label"
                                        ><input
                                            v-model="user.sex"
                                            class="form-check-input"
                                            type="radio"
                                            name="radio2"
                                            value="male"
                                        />Мужской</label
                                    >
                                </div>
                                <div class="form-check m-3">
                                    <label class="form-check-label"
                                        ><input
                                            v-model="user.sex"
                                            class="form-check-input"
                                            type="radio"
                                            name="radio2"
                                            value="female"
                                        />
                                        Женский</label
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Телефон</span>
                            </div>
                            <input
                                v-model="user.phone"
                                type="phone"
                                class="form-control"
                                placeholder="телефон"
                            />
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    >Дата рождения</span
                                >
                            </div>
                            <InputDate v-model="birthdayDate" />
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Город</span>
                            </div>
                            <input
                                v-model="user.town"
                                type="text"
                                class="form-control"
                                placeholder="город "
                            />
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Пароль</span>
                        </div>
                        <input
                            v-model="user.password"
                            type="text"
                            class="form-control"
                            placeholder="пароль "
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"
                                >Повторите пароль</span
                            >
                        </div>
                        <input
                            v-model="user.password"
                            type="text"
                            class="form-control"
                            placeholder="пароль "
                        />
                    </div>
                </div>

                <div class="card-footer">
                    <button
                        class="btn btn-info btn-block"
                        @click="submitDetails()"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputDate from "@/components/base/InputDate.vue";

export default {
    name: "UserDatails",

    components: { InputDate },

    props: {
        userIndex: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            user: null,
        };
    },

    computed: {
        birthdayDate: {
            get: function () {
                return new Date(this.user.birthday);
            },
            set: function (d) {
                this.user.birthday = Date.parse(d);
            },
        },
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    methods: {
        submitDetails() {
            this.saveToDatabase().then(() => {
                this.$successMessage("Записано");
            });

            this.$router.push({
                name: "Users",
            });
        },

        async saveToDatabase() {
            const payload = this.user;
            const path = `/users/${this.userIndex}`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFromDatabase() {
            const path = `/users/${this.userIndex}`;

            const result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.user = result;
        },
    },
};
</script>
