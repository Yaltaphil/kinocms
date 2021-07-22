<template>
    <div class="about">
        <div class="card">
            <div class="card-header text-center font-weight-bold">
                На главной верх
            </div>
            <div class="row p-3">
                <div class="col-md-6 text-muted">Pазмер 1000x190</div>
                <div class="col-md-6 text-right">
                    <input
                        v-model="mainTopIsOn"
                        type="checkbox"
                        aria-label="Checkbox for on/off"
                    />
                </div>
            </div>

            <div class="card-group p-3">
                <KinoCard
                    v-for="banner in banners"
                    :key="banner.id"
                    :card="banner"
                    @remove-card="removeBanner"
                    @change-card="changeBanner"
                ></KinoCard>

                <button class="btn btn-outline-success" @click="addBanner">
                    Добавить баннер
                </button>
            </div>

            <div class="row p-3">
                <div class="col-md-6">
                    Скорость вращения
                    <input
                        v-model="mainTopRotationSpeed"
                        type="text"
                        class="w-25"
                        id="dropdown"
                    />
                </div>
                <div class="col-md-6">
                    <button
                        type="button"
                        class="btn btn-primary text-center"
                        @click="saveBanners"
                    >
                        Сохранить в БД
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KinoCard from "@/components/KinoCard.vue";

export default {
    name: "Banners",
    components: {
        KinoCard,
    },
    data: function () {
        return {
            banners: [],
            mainTopIsOn: true,
            mainTopRotationSpeed: 5,
        };
    },

    mounted() {
        this.fetchBanners();
    },
    methods: {

        addBanner: function () {
            const banner = {
                id: Math.round(1000000*Math.random()),
                URL: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                text: "sometext",
            };
            this.banners.push(banner);
        },

        removeBanner: function (target) {
            this.banners = this.banners.filter((element) => element != target);
        },

        changeBanner: function (card) {
            const index = this.banners.findIndex( item => item.id == card.id)
            console.log(index)
            if (index!=-1) this.banners[index].URL = card.URL;
            console.log(this.banners)
        },

        saveBanners: function () {
            localStorage.setItem(
                "kinoCMSbanners",
                JSON.stringify(this.banners)
            );
        },
        fetchBanners: function () {
            const local = JSON.parse(localStorage.getItem("kinoCMSbanners"));
            if (local) this.banners = local;
        },
    },
};
</script>

<style lang="scss" scoped>
.card-group {
    gap: 1rem;
}
</style>
