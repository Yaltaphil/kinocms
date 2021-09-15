<template>
    <div v-if="pages" class="container" style="color: white">
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
                        <h3>{{ $t("contacts") }}</h3>
                    </div>

                    <div class="card-body flex-column justify-content-center">
                        <ContactCard
                            v-for="cinema in pages[1].cinemas"
                            :key="cinema._id"
                            :page="pages"
                        >
                            <template v-slot:title>
                                <div class="row">
                                    <div class="col m-1">
                                        <h3>{{ cinema.title }}</h3>
                                    </div>
                                    <div class="col">
                                        <img
                                            class="card-img img-responsive p-1"
                                            style="height: 98px"
                                            :src="cinema.logo.url"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </template>
                            <template v-slot:image>
                                <img
                                    class="card-img img-responsive p-1"
                                    style="height: 298px"
                                    :src="cinema.logo.url"
                                    alt=""
                                />
                            </template>
                            <template v-slot:info>
                                <p>{{ cinema.adress }}</p>
                                <p>{{ cinema.coordinates }}</p>
                            </template>
                            <template v-slot:map>
                                <img
                                    class="card-img img-responsive p-1"
                                    style="height: 298px"
                                    src="../assets/map.png"
                                    alt=""
                                />
                            </template>
                        </ContactCard>
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
import ContactCard from "@/components/ContactCard.vue";

export default {
    name: "SiteAboutContacts",

    components: { ContactCard },

    data() {
        return {
            pages: null,
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
// TODO Maybe insert real google maps!?
