<template>
    <div class="card" style="background-color: rgba(0, 0, 0, 0); color: white">
        <div class="card-header text-center text-light">
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
                        v-model="filter.cinemaId"
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
                        v-model="filter.hallId"
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
                <div class="col">
                    <button
                        class="btn btn-outline-warning"
                        @click="clearFilters"
                    >
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        убрать
                    </button>
                </div>
            </div>

            <div v-if="schedule" class="card-body table-responsive">
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
                        <tr v-for="item in filteredSchedule" :key="item._id">
                            <td>
                                {{ item.time }}
                            </td>

                            <td>
                                <router-link
                                    to="/schedule"
                                    @click.native="clicked(item.filmId)"
                                >
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
                                    @click="booking(item)"
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
</template>

<script>
export default {
    name: "SiteSchedule",

    data() {
        return {
            cinemas: [],
            films: [],
            schedule: [],
            filter: null,
        };
    },

    computed: {
        halls() {
            let arr = [];
            this.cinemas.forEach((item) => (arr = [...arr, ...item.halls]));
            return arr;
        },

        filteredSchedule() {
            let result = this.schedule;
            if (this.filter.date) {
                result = result.filter((item) => item.date == this.filter.date);
            }
            if (this.filter.cinemaId != "Все") {
                result = result.filter(
                    (item) => item.cinemaId == this.filter.cinemaId
                );
            }
            if (this.filter.filmId != "Все") {
                result = result.filter(
                    (item) => item.filmId == this.filter.filmId
                );
            }
            if (this.filter.hallId != "Все") {
                result = result.filter(
                    (item) => item.hallId == this.filter.hallId
                );
            }
            if (this.filter.showIMAX) {
                result = result.filter((item) =>
                    this.getFilmById(item.filmId).filmType.includes("IMAX")
                );
            }
            if (this.filter.show3D) {
                result = result.filter((item) =>
                    this.getFilmById(item.filmId).filmType.includes("3D")
                );
            }
            if (this.filter.show2D) {
                result = result.filter((item) =>
                    this.getFilmById(item.filmId).filmType.includes("2D")
                );
            }

            return result;
        },
    },

    created() {
        this.clearFilters();
    },

    async mounted() {
        this.load();
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

        clicked(id) {
            const index = this.films.findIndex((item) => item.id == id);
            this.$router.push({
                name: "SiteFilmDetails",
                params: { filmIndex: index },
            });
        },

        clearFilters() {
            this.filter = {
                show2D: true,
                show3D: false,
                showIMAX: false,
                date: null,
                cinemaId: "Все",
                filmId: "Все",
                hallId: "Все",
            };
        },

        booking(item) {
            this.$router.push({
                name: "SiteScheduleBooking",
                params: { scheduleItem: item },
            });
        },
    },
};
</script>
