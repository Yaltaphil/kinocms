<template>
    <div class="container" style="color: white">
        <div class="row">
            <img
                src="../assets/pexels-clem-onojeghuo-375885.jpg"
                class="img-responsive w-100 m-3"
                style="height: 400px"
                alt=""
            />
        </div>
        <div class="row mb-5">
            <div class="col-md-10 p-3">
                <div
                    class="card mb-5"
                    style="background-color: rgba(0, 0, 0, 0)"
                >
                    <div class="card-header text-center">
                        <h3>{{ $t("aboutCinema") }}</h3>
                    </div>

                    <div
                        v-if="pages.length"
                        class="
                            card-body
                            d-flex
                            flex-row flex-wrap
                            justify-content-center
                        "
                    >
                        <p>
                            {{ pages[0][`seoBlock${langAddon}`] }}
                        </p>
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
    name: "SiteAboutCinema",

    data() {
        return {
            pages: [],
        };
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
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
