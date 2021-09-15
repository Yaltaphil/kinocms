
<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Войдите в аккаунт</p>

                <form action="../../index3.html" method="post">
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
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label for="remember"> Запомнить меня </label>
                            </div>
                        </div>
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


                <p class="mb-1">
                    <a href="#">Я забыл свой пароль</a>
                </p>
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
export default {};
</script>
