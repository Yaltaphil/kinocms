<template>
    <footer class="main-footer">
        <div class="row">
            <div class="col-md-3">
                <h3>
                    {{ $t("mobiles") }}
                </h3>
            </div>
            <div class="col-md-3">
                <h3>{{ $t("affiche") }}</h3>
                <p>{{ $t("schedule") }}</p>
                <p>{{ $t("soon") }}</p>
                <p>{{ $t("cinemas") }}</p>
                <p>{{ $t("actions") }}</p>
            </div>
            <div class="col-md-3">
                <h3>{{ $t("aboutCinema") }}</h3>
                <p>{{ $t("news") }}</p>
                <p>{{ $t("rekl") }}</p>
                <p>{{ $t("cafe") }}</p>
                <p>{{ $t("contacts") }}</p>
            </div>
            <div class="col-md-3">
                <div class="col-6">
                    <!-- Facebook -->
                    <i
                        class="fab fa-facebook-f fa-2x pr-1"
                        style="color: #3b5998"
                    ></i>
                    <!-- Twitter -->
                    <i
                        class="fab fa-twitter fa-2x px-1"
                        style="color: #55acee"
                    ></i>
                    <!-- Vkontakte -->
                    <i class="fab fa-vk fa-2x px-1" style="color: #4c75a3"></i>
                    <!-- Google -->
                    <i
                        class="fab fa-google fa-2x px-1"
                        style="color: #dd4b39"
                    ></i>
                    <!-- Instagram -->
                    <i
                        class="fab fa-instagram fa-2x px-1"
                        style="color: #4c75a3"
                    ></i>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "SiteFooter",

    // computed: {
    //     language() {
    //         return this.$i18n.locale
    //     }
    // },

    //  watch: {
    //         language(newValue) {
    //             this.$i18n.locale = newValue;
    //         },
    //     },
};
</script>
