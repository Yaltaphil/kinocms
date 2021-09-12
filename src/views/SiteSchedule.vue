<template>
    <div class="container bg-dark">
        <SiteHeader />
        <div class="card bg-dark">
            <div class="card-header text-center">
                <h3>{{ $t("schedule") }}</h3>
                <div class="row">
                    <div class="form-group d-flex col">
                        Показывать:
                        <div class="form-check mx-3">
                            <input
                                id="3D"
                                v-model="filter.show3D"
                                class="form-check-input"
                                type="checkbox"
                            />
                            <label class="form-check-label">3D</label>
                        </div>
                        <div class="form-check mx-3">
                            <input
                                id="2D"
                                v-model="filter.show2D"
                                class="form-check-input"
                                type="checkbox"
                                checked
                            />
                            <label class="form-check-label">2D</label>
                        </div>
                        <div class="form-check mx-3">
                            <input
                                id="IMAX"
                                v-model="filter.showIMAX"
                                class="form-check-input"
                                type="checkbox"
                            />
                            <label class="form-check-label">IMAX</label>
                        </div>
                    </div>
                    <div class="col">
                        <select
                            id="cinemaSelector"
                            v-model="filter.cinema"
                            class="form-control col"
                            name="cinemaSelector"
                        >
                            <option value="Все">Все кинотеатры</option>
                            <option
                                v-for="cinema in cinemas"
                                :key="cinema.id"
                                :value="cinema.id"
                                :label="cinema.title"
                            ></option>
                        </select>
                    </div>

                    <div class="form-group col">
                        <input
                            v-model="filter.date"
                            class="form-control"
                            type="date"
                        />
                    </div>
                    <div class="col">
                        <select
                            id="filmSelector"
                            v-model="filter.filmId"
                            class="form-control"
                            name="filmSelector"
                        >
                            <option value="Все">Все фильмы</option>
                            <option
                                v-for="film in films"
                                :key="film.id"
                                :value="film.id"
                                :label="film.title"
                            ></option>
                        </select>
                    </div>
                    <div class="col">
                        <select
                            id="hallSelector"
                            v-model="filter.filmId"
                            class="form-control"
                            name="hallSelector"
                        >
                            <option value="Все">Все залы</option>
                            <option
                                v-for="hall in halls"
                                :key="hall.id"
                                :value="hall.id"
                                :label="hall.hallNumber"
                            ></option>
                        </select>
                    </div>
                </div>

                <div class="card-body table-responsive" v-if="schedule">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th class="col-1">{{ $t("sessionTime") }}</th>
                                <th class="col-3">{{ $t("film") }}</th>
                                <th class="col-1">{{ $t("hall") }}</th>
                                <th class="col-1">{{ $t("price") }}</th>
                                <th class="col-1">{{ $t("reserve") }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in schedule" :key="item._id">
                                <td>
                                    {{ item.time }}
                                </td>

                                <td>
                                    <router-link to="/">
                                        {{ getFilmById(item.filmId).title }}
                                    </router-link>
                                </td>
                                <td>
                                    {{
                                        getHallById(item.cinemaId, item.hallId)
                                            .hallNumber
                                    }}
                                </td>

                                <td>
                                    {{ item.price }}
                                </td>

                                <td>
                                    <button
                                        class="btn btn-outline-danger mx-3"
                                        @click="reserve(item)"
                                    >
                                        {{ $t("reserve") }}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "SiteSchedule",

    components: { SiteHeader, SiteFooter },

    data() {
        return {
            cinemas: [],
            films: [],
            schedule: [],

            filter: {
                show2D: true,
                show3D: true,
                showIMAX: true,
                date: null,
                cinema: "Все",
                film: "Все",
                hall: "Все",
            },
        };
    },

    async mounted() {
        this.load();
    },

    computed: {
        halls() {
            let arr = [];
            this.cinemas.forEach((item) => (arr = [arr, ...item.halls]));
            return arr;
        },
    },

    methods: {
        async load() {
            let result;

            result = await this.$store.dispatch(
                "readFromDatabase",
                "/schedule"
            );
            if (result) this.schedule = result;

            result = await this.$store.dispatch("readFromDatabase", "/films");
            if (result) this.films = result;

            result = await this.$store.dispatch("readFromDatabase", "/cinemas");
            if (result) this.cinemas = result;
        },

        getFilmById(id) {
            return this.films[this.films.findIndex((item) => item.id == id)];
        },

        getCinemaById(id) {
            return this.cinemas[
                this.cinemas.findIndex((item) => item.id == id)
            ];
        },

        getHallById(cinemaId, hallId) {
            const cinema =
                this.cinemas[
                    this.cinemas.findIndex((item) => item.id == cinemaId)
                ];
            return cinema.halls[
                cinema.halls.findIndex((item) => item.id == hallId)
            ];
        },

        clicked(target) {
            const index = this.cinemas.findIndex(
                (item) => item.id == target.id
            );
            this.$router.push({
                name: "SiteCinemaDetails",
                params: { cinemaIndex: index },
            });
        },
    },
};
</script>
