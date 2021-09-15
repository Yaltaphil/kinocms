<template>
    <div class="register-box">
        <div class="register-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Новая регистрация</p>

                <form action="../../index.html" method="post">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Full name"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Retype password"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="icheck-primary">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="terms"
                                    value="agree"
                                />
                                <label for="agreeTerms">
                                    Согласен с <a href="#">условиями</a>
                                </label>
                            </div>
                        </div>
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
export default {};
</script>
