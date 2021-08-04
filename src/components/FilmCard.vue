<template>
    <div class="card border shadow m-3">
        <button
            type="button"
            class="close card-header text-right pr-1"
            aria-label="Close"
        >
            <span aria-hidden="true" @click="$emit('remove-film', film)"
                >&times;</span
            >
        </button>
        <img
            class="card-img-top img-responsive"
            :src="film.mainPic.URL"
            alt=""
            @click="$emit('film-clicked', film)"
        />

        <h5
            class="card-footer text-center"
            @click="$emit('film-clicked', film)"
        >
            {{ film.title | cut }}
        </h5>
    </div>
</template>

<script>
export default {
    name: "FilmCard",

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
            default: () => {},
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    min-width: 200px;
    max-width: 200px;
    height: 320px;
    cursor: pointer;
    & img {
        height: 75%;
    }
}
</style>
