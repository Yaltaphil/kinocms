<template>
    <div class="register-box" style="background-color: rgba(49, 49, 49, 0.5)">
        <div class="register-logo">
            <span><b>Kino</b>CMS</span>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Новая регистрация</p>

                <form @submit.prevent="submitHandler">
                    <div class="input-group mb-3">
                        <input
                            v-model.trim="name"
                            type="text"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.name.$error,
                            }"
                            placeholder="Имя"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            <span
                                ><small
                                    >Пожалуйста, введите свое имя</small
                                ></span
                            >
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            v-model.trim="email"
                            type="email"
                            class="form-control"
                            :class="{ 'is-invalid': $v.email.$error }"
                            placeholder="e-mail"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            <span
                                ><small
                                    >Пожалуйста, введите корректный
                                    e-mail</small
                                ></span
                            >
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            v-model.trim="password1"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': $v.password1.$error }"
                            placeholder="пароль"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            <span
                                ><small
                                    >Пожалуйста, введите свой пароль</small
                                ></span
                            >
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            v-model.trim="password2"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': $v.password2.$error }"
                            placeholder="повторите пароль"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            <span
                                ><small
                                    >Пожалуйста, повторите свой пароль</small
                                ></span
                            >
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-6"></div>
                        <div class="col-6">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                            >
                                Регистрация
                            </button>
                        </div>
                    </div>
                </form>

                <router-link :to="{ name: 'Login' }" class="text-center"
                    ><small> У меня уже есть аккаунт </small>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
    name: "Register",

    data() {
        return {
            name: "",
            email: "",
            password1: "",
            password2: "",
            users: null,
            user: null,
            userIndex: null,
        };
    },

    validations: {
        name: {
            required,
        },
        email: {
            email,
            required,
        },
        password1: {
            required,
            minLength: minLength(6),
        },
        password2: {
            required,
            sameAs: sameAs("password1"),
        },
    },

    created() {
        this.load();
    },

    methods: {
        submitHandler() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            const formData = {
                name: this.name,
                email: this.email,
                password: this.password1,
            };

            this.userIndex = this.getUserIndex(this.email);

            if (this.userIndex != -1) {
                this.$errorMessage(" Такой пользователь уже существует");
                return;
            }

            this.user = {
                _id: `${Date.now()}${Math.random()}`,
                _date: Date.now(),
                name: this.name,
                surname: "",
                nick: "",
                email: this.email,
                adress: "",
                password: this.password1,
                cardNumber: "",
                language: "ru",
                sex: "male",
                phone: "777-77-77",
                birthday: Date.now(),
                town: "",
                choosen: false,
                isAdmin: false,
            };

            this.users.push(this.user);

            this.save();

            this.$store
                .dispatch("register", formData)
                .catch(() => this.$errorMessage(" регистрации"));

            if (this.user.isAdmin) {
                this.$store
                    .dispatch("login", formData)
                    .then(() => this.$router.push({ name: "Home" }));
            } else {
                this.$router.push({ name: "Main" });
            }
        },

        getUserIndex(email) {
            const index = this.users.findIndex((item) => item.email == email);
            return index;
        },

        async load() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/users"
            );
            if (result) this.users = result;
        },

        async save() {
            const payload = this.users;
            const path = "/users";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },
    },
};
</script>
