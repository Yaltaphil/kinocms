<template>
    <section>
        <div class="card">
            <div class="card-header text-center">
                <h3>Список текущих фильмов</h3>
            </div>

            <div class="card-body card-group">
                <FilmCard
                    @film-clicked="editFilm"
                    v-for="film in films"
                    :key="film.id"
                    :film="film"
                />
            </div>
            <button
                @click="addFilm"
                type="button"
                class="btn btn-outline-info btn-lg btn-block"
            >
                Добавить фильм
            </button>
        </div>
        <div class="card">
            <div class="card-header text-center">
                <h3>Список фильмов которые скоро покажут</h3>
            </div>
            <div class="card-body card-group">
                <FilmCard
                    v-for="film in filmsComingSoon"
                    :key="film.id"
                    :film="film"
                />
            </div>
            <button
                @click="addFilm"
                type="button"
                class="btn btn-outline-info btn-lg btn-block"
            >
                Добавить фильм
            </button>
        </div>
    </section>
</template>
<script>
import FilmCard from "@/components/FilmCard.vue";

export default {
    name: "Films",
    components: {
        FilmCard,
    },
    data() {
        return {
            films: [
                {
                    id: "1656146546",
                    language: "ru-RU",
                    title: "терминатор 3",
                },
                {
                    id: "16556546",
                    language: "ru-RU",
                    title: "терминатор 3",
                },
            ],
            filmsComingSoon: [
                {
                    id: "1656146",
                    language: "ru-RU",
                    title: "терминатор 3",
                },
            ],

            loading: true,
        };
    },
    mounted() {},
    methods: {
        addFilm(target) {
            console.log(target);
            const newFilm = {
                id: (Date.now()).toString(),
            };
            this.films.push(newFilm);

        },
        editFilm(target){
           console.log(target.id);
           this.$router.push({
                name: "FilmDetails",
                params: { filmId: target.id },
            });
        },
    },
};
</script>
