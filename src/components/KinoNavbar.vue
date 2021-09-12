<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a
                    class="nav-link"
                    data-widget="pushmenu"
                    href="#"
                    role="button"
                    ><i class="fas fa-bars"></i
                ></a>
            </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" role="button" href="/">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    На сайт
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" role="button" @click="login">
                    <i class="nav-icon fas fa-user"></i>
                    Мой кабинет
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" role="button" @click="logout">
                    <i class="nav-icon fas fa-power-off"></i>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script>
export default {
    name: "KinoNavbar",

    methods: {
        async login() {
            await this.$store
                .dispatch("login", {})
                .then(() => this.$successMessage("Вы вошли в систему"));
            this.$router.push({ name: "Home" });
        },

        async logout() {
            await this.$store
                .dispatch("logout", {})
                .then(() => this.$successMessage("Вы вышли из системы"));
            this.$router.push({ name: "Login" });
        },
    },
};
</script>
