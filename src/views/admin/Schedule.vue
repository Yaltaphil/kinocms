<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">
                        Всего сеансов: {{ schedule.length }}
                    </h2>

                    <div class="card-tools">
                        <button class="btn btn-lg btn-info" @click="addItem">
                            <i class="fas fa-plus"></i>
                            Добавить сеанс
                        </button>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th class="col-2">Дата сеанса</th>
                                <th class="col-2">Время сеанса</th>
                                <th class="col-3">Фильм</th>
                                <th class="col-2">Кинотеатр</th>
                                <th class="col-1">Зал</th>
                                <th class="col-1">цена</th>
                                <th class="col-1">цена VIP</th>
                                <th class="col-1">Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in schedule" :key="item.date">
                                <td>
                                    <div class="form-group">
                                        <input
                                            v-model="item.date"
                                            class="form-control"
                                            type="date"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input
                                            v-model="item.time"
                                            class="form-control"
                                            type="time"
                                        />
                                    </div>
                                </td>

                                <td>
                                    <select
                                        id="filmSelector"
                                        v-model="item.filmId"
                                        class="form-control"
                                        name="filmSelector"
                                    >
                                        <option
                                            v-for="film in films"
                                            :key="film.id"
                                            :value="film.id"
                                            :label="film.title"
                                        ></option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        id="cinemaSelector"
                                        v-model="item.cinemaId"
                                        class="form-control"
                                        name="cinemaSelector"
                                    >
                                        <option
                                            v-for="cinema in cinemas"
                                            :key="cinema.id"
                                            :value="cinema.id"
                                            :label="cinema.title"
                                        ></option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        v-if="
                                            item.cinemaId &&
                                            cinemas[selectCinema(item.cinemaId)]
                                        "
                                        id="hallSelector"
                                        v-model="item.hallId"
                                        class="form-control"
                                        name="hallSelector"
                                    >
                                        <option
                                            v-for="hall in cinemas[
                                                selectCinema(item.cinemaId)
                                            ].halls"
                                            :key="hall.id"
                                            :value="hall.id"
                                            :label="hall.hallNumber"
                                        ></option>
                                    </select>
                                </td>
                                <td>
                                    <input
                                        v-model="item.price"
                                        type="number"
                                        class="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        v-model="item.vipPrice"
                                        type="number"
                                        class="form-control"
                                    />
                                </td>

                                <td>
                                    <button
                                        class="btn btn-danger mx-3"
                                        @click="removeItem(item)"
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer mt-5">
                    <button class="btn btn-info btn-lg btn-block" @click="back">
                        Сохранить и выйти
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Schedule",

    components: {},

    data() {
        return {
            schedule: [],
            films: [],
            cinemas: [],
            selectedCinema: 0,
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    computed: {
        thisDate: {
            get: function () {
                return new Date(this.item.date);
            },
            set: function (d) {
                this.item.date = Date.parse(d);
            },
        },
    },

    methods: {
        async loadFromDatabase() {
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

        async saveToDatabase() {
            const payload = this.schedule;
            const path = "/schedule";
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async removeItem(target) {
            if (!window.confirm("Удалить?")) return;
            this.schedule = this.schedule.filter((item) => item != target);
            this.saveToDatabase().then(() =>
                this.$successMessage("Сеанс удален")
            );
        },

        addItem() {
            this.schedule.push({
                _id: `${Date.now()}${Math.random()}`,
                date: Date.now(),
                time: null,
                filmId: null,
                cinemaId: null,
                hallId: null,
                price: 300,
                vipPrice: 600,
            });
        },

        back() {
            this.saveToDatabase().then(() =>
                this.$successMessage("Расписание сохранено")
            );
            this.$router.push({
                name: "Home",
            });
        },

        selectCinema(id) {
            return this.cinemas.findIndex((item) => item.id == id);
        },
    },
};
</script>
