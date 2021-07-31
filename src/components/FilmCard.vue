<template>
    <div class="card border shadow m-3" @click="$emit('film-clicked', film)">
        <img
            class="card-img-top img-responsive"
            :src="film.mainPic.URL"
            alt=""
        />

        <h5 class="card-footer text-center">
            {{ film.title }}
        </h5>
    </div>
</template>

<script>
export default {
    name: "FilmCard",
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
    height: 300px;
    cursor: pointer;
    & img {
        height: 80%;
    }
}
</style>
