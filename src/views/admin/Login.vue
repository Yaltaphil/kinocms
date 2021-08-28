<template>
    <div class="card">
        <h1 class="card-header">login</h1>
        <button @click="login">login</button>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {};
    },
    mounted() {
        document.querySelector("body").classList.remove("layout-top-nav");
        document.querySelector("body").classList.add("layout-fixed");
    },
    methods: {
        async login() {
            await this.$store
                .dispatch("login", {})
                .then(() => this.$successMessage("Вы вошли в систему"));
            this.$router.push({ name: "Home" });
        },
    },
};
</script>
