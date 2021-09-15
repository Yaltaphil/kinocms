<template>
    <div v-if="pages" class="container" style="color: white">
        <div class="row">
            <img
                :src="picture"
                class="img-responsive w-100 m-3"
                style="height: 400px"
            />
        </div>
        <div class="row mb-5">
            <div class="col-md-10 p-3">
                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>{{ $t("rekl") }}</h3>
                    </div>

                    <div class="card-body">
                        <p>
                            {{ description }}
                        </p>

                        <div class="card">
                            <div
                                id="picsCarousel"
                                class="carousel slide"
                                data-ride="picsCarousel"
                            >
                                <div
                                    class="carousel-inner"
                                    style="height: 460px"
                                >
                                    <div
                                        v-for="(pic, index) in pics"
                                        :key="pic.id"
                                        class="carousel-item"
                                        :class="{
                                            active: activePic == index,
                                        }"
                                        @click="activePic = index"
                                    >
                                        <img
                                            class="d-block w-100"
                                            :src="pic.url"
                                        />
                                    </div>
                                    <a
                                        class="carousel-control-prev"
                                        href="#picsCarousel"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span
                                            class="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a
                                        class="carousel-control-next"
                                        href="#picsCarousel"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            class="carousel-control-next-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-header text-center">
                        <h3>Объекты рекламы</h3>
                    </div>

                    <div class="card-body table-responsive p-0">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th>Рекламные площади</th>
                                    <th>Описание</th>
                                    <th>Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>плакат</td>
                                    <td>супер</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>постер</td>
                                    <td>класс</td>
                                    <td>1050</td>
                                </tr>
                                <tr>
                                    <td>афиша</td>
                                    <td>очень</td>
                                    <td>50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-2">
                <a
                    href="https://link-host.net/billing/pl.php?17382"
                    alt="Link-Host.net"
                    target="_blank"
                    ><img
                        src="https://link-host.net/billing/_rootimages/banners/160x600.gif"
                        border="0"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteAboutAdvertisment",

    data() {
        return {
            pages: null,
            activePic: 0,
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        description() {
            return this.pages[5][`description${this.langAddon}`];
        },

        picture() {
            return this.pages[5][`mainPic${this.langAddon}`].url;
        },

        pics() {
            return this.pages[5][`pics${this.langAddon}`];
        },
    },

    async mounted() {
        this.load();
    },

    methods: {
        async load() {
            this.pages = await this.$store.dispatch(
                "readFromDatabase",
                "/pages"
            );
        },
    },
};
</script>
