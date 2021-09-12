<template>
    <div class="card bg-dark">
        <div class="card-header text-center">
            <h3>{{ $t("reserve") }}</h3>
            <div class="card-body">
                <img src="../assets/unnamed.jpg" alt="" />
            </div>
            <div class="row">
                <div class="col-2 offset-4">
                    <button class="btn btn-outline-danger mx-3">
                        {{ $t("reserve") }}
                    </button>
                </div>
                <div class="col-2">
                    <button class="btn btn-success mx-3">
                        {{ $t("buy") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteScheduleBooking",

    props: {
        scheduleItem: { type: String, required: true },
    },

    data() {
        return {
            cinemas: [],
            films: [],
            schedule: [],
            filter: null,
        };
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
    },
};
</script>
