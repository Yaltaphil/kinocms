<template>
    <div class="login-box">
        <div class="login-logo">
            <span><b>Kino</b>CMS</span>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Войдите в аккаунт</p>

                <form @submit.prevent="submitHandler">
                    <div class="input-group mb-3">
                        <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            :class="{ 'is-invalid': $v.email.$error }"
                            placeholder="Email"
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
                            v-model.trim="password"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': $v.password.$error }"
                            placeholder="Password"
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
                    <div class="row my-3">
                        <div class="col-8"></div>
                        <div class="col-4">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                </form>

                <p class="mb-0">
                    <router-link :to="{ name: 'Register' }" class="text-center"
                        >Зарегистрироваться</router-link
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
        };
    },

    validations: {
        email: {
            email,
            required,
        },
        password: {
            required,
            minLength: minLength(6),
        },
    },

    methods: {
        submitHandler() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            const formData = {
                email: this.email,
                password: this.password,
            };

            this.$store
                .dispatch("login", formData)
                .then(() => this.$router.push({ name: "Home" }))
                .catch(() => this.$errorMessage(" авторизации"));
        },
    },
};
</script>
