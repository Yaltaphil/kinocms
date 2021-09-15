<template>
    <div class="register-box">
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
                            placeholder="Full name"
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
                            v-model.trim="password1"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': $v.password1.$error }"
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
                    <div class="input-group mb-3">
                        <input
                            v-model.trim="password2"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': $v.password2.$error }"
                            placeholder="Retype password"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            <span
                                ><small
                                    >Пожалуйста, введите свой пароль еще
                                    раз</small
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
                    >У меня уже есть аккаунт</router-link
                >
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

            this.$store
                .dispatch("register", formData)
                .then(() => this.$router.push({ name: "Login" }))
                .catch(() => this.$errorMessage(" регистрации"));
        },
    },
};
</script>
