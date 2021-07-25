<template>
    <!-- first block -->
    <div class="about">
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной верх
            </div>
            <div class="row p-3">
                <div class="col-md-6 text-muted">Pазмер 1000x190</div>
                <div class="col-md-6 text-right">
                    <Switches
                        v-model="bannersSwitch"
                        theme="bootstrap"
                        color="success"
                    ></Switches>
                </div>
            </div>

            <div class="card-group p-3">
                <KinoCard
                    v-for="banner in banners"
                    :key="banner.id"
                    :card="banner"
                    @remove-card="removeBanner"
                    @change-card="changeBanner"
                />

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
                    <base-button @click="saveBanners"> Сохранить </base-button>
                </div>
            </div>
        </div>

        <!-- second block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                Сквозной баннер на заднем фоне
            </div>
            <div class="row p-3">
                <div class="col-md-6 text-muted">Pазмер 2000x3000</div>
            </div>

            <div class="row p-3">
                <div class="col-md-2">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            checked
                        />
                        <label class="form-check-label" for="exampleRadios1">
                            Фото на фоне
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                            Просто фон
                        </label>
                    </div>
                </div>

                <div class="col-md-4">
                    <KinoCard :card="bigBackgroundBanner" />
                </div>

                <div class="col-md-4">
                    <button type="button" class="btn btn-primary text-center">
                        Добавить
                    </button>
                    <button type="button" class="btn btn-danger text-center">
                        Удалить
                    </button>
                </div>
            </div>
        </div>

        <!-- third block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной новости и акции
            </div>
            <div class="row p-3">
                <div class="col-md-6 text-muted">Pазмер 1000x190</div>
                <div class="col-md-6 text-right">
                    <Switches
                        v-model="actionsSwitch"
                        theme="bootstrap"
                        color="success"
                    ></Switches>
                </div>
            </div>

            <div class="card-group p-3">
                <KinoCard
                    v-for="action in actions"
                    :key="action.id"
                    :card="action"
                    @remove-card="removeAction"
                />

                <button class="btn btn-outline-success" @click="addAction">
                    Добавить фото
                </button>
            </div>

            <div class="row p-3">
                <div class="col-md-6">
                    Скорость вращения
                    <input
                        v-model="actionsRotationSpeed"
                        type="text"
                        class="w-25"
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
                    <base-button @click="saveBanners"> Сохранить </base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KinoCard from "@/components/KinoCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import Switches from "vue-switches";

export default {
    name: "Banners",
    components: {
        KinoCard,
        BaseButton,
        Switches,
    },
    data: function () {
        return {
            banners: [],
            bannersSwitch: true,
            mainTopRotationSpeed: 5,

            bigBackgroundBanner: {
                id: 1212,
                URL: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },

            actions: [
                {
                    id: 121654652,
                    URL: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
            ],
            actionsSwitch: true,
            actionsRotationSpeed: 15,
        };
    },

    mounted() {
        this.fetchBanners();
    },
    methods: {
        //banner methods
        addBanner: function () {
            const banner = {
                id: Math.round(10000000 * Math.random()),
                URL: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                text: "sometext",
            };
            this.banners.push(banner);
        },

        removeBanner: function (target) {
            this.banners = this.banners.filter((element) => element != target);
        },

        changeBanner: function (card) {
            const index = this.banners.findIndex((item) => item.id == card.id);
            console.log(index);
            if (index != -1) this.banners[index] = card;
            console.log(this.banners);
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

        //background banner

        //actions methods
        addAction: function () {
            const action = {
                id: Math.round(10000000 * Math.random()),
                URL: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            };
            this.actions.push(action);
        },
        removeAction: function (target) {
            this.actions = this.actions.filter((element) => element != target);
        },
    },
};
</script>

<style lang="scss" scoped>
.card-group {
    gap: 1rem;
}
</style>
