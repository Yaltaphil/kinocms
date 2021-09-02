<template>
    <div class="card shadow m-3 border border-success rounded">
        <div class="card-header text-center">
            <small>
                <slot name="header"></slot>
            </small>
        </div>
        <img
            class="card-img-top img-responsive"
            :src="url"
            alt=""
            @click="$emit('film-clicked', film)"
        />
        <small
            class="card-footer text-center"
            @click="$emit('film-clicked', film)"
        >
            {{ title | cut }}
        </small>

        <div class="card-footer text-center">
            <button
                class="btn btn-success btn-sm"
                @click="$emit('buy-film', film)"
            >
                {{ $t("buy") }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteFilmCard",

    filters: {
        cut: function (value) {
            if (!value) return "";
            value = value.toString();
            if (value.length < 18) return value;
            return value.slice(0, 14) + " ...";
        },
    },

    props: {
        film: {
            type: Object,
            default: null,
        },
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        url() {
            return this.film[`mainPic${this.langAddon}`].url;
        },

        title() {
            return this.film[`title${this.langAddon}`];
        },
    },

    mounted() {},
};
</script>

<style lang="scss" scoped>
.card {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    min-width: 200px;
    max-width: 200px;
    height: 300px;
    cursor: pointer;
    & img {
        height: 55%;
    }
    & .card-header {
        height: 15%;
    }
}
</style>
