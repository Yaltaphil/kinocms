<template>
    <div
        class="card border shadow m-3 border-success"
        style="background-color: rgba(0, 0, 0, 0.15)"
    >
        <img
            class="card-img-top img-responsive"
            :src="mainPicture"
            alt=""
            @click="$emit('clicked', cinema)"
        />

        <h5 class="card-footer text-center" @click="$emit('clicked', cinema)">
            {{ title | cut }}
        </h5>
    </div>
</template>

<script>
export default {
    name: "SiteCinemaCard",

    filters: {
        cut: function (value) {
            if (!value) return "";
            value = value.toString();
            if (value.length < 18) return value;
            return value.slice(0, 14) + " ...";
        },
    },

    props: {
        cinema: {
            type: Object,
            default: null,
        },
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        mainPicture() {
            return this.cinema[`mainPic${this.langAddon}`].url;
        },

        title() {
            return this.cinema[`title${this.langAddon}`];
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    min-width: 350px;
    max-width: 350px;
    height: 300px;
    cursor: pointer;
    & img {
        height: 80%;
    }
}
</style>
