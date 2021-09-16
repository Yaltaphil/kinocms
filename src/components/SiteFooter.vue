<template>
    <div class="container">
        <footer
            class="main-footer"
            style="background-color: rgba(0, 0, 0, 0.33)"
        >
            <div class="row d-flex">
                <div class="col-md-3 text-center">
                    <h3 class="my-5 d-flex flex-column">
                        {{ $t("mobiles") }}
                    </h3>
                    <router-link :to="{ name: 'SiteAboutMobile' }">
                        <img
                            src="@/assets/app-store-badge-android-get-it-on-google-play.png"
                            class="rounded mx-auto d-block w-50 mb-1"
                            alt=""
                    /></router-link>
                    <router-link :to="{ name: 'SiteAboutMobile' }">
                        <img
                            src="@/assets/app-store-badge-ios-download-on-the-app-store.png"
                            class="rounded mx-auto d-block w-50 mb-1"
                            alt=""
                    /></router-link>
                    <a class="mx-auto d-block" href="https://avada-media.ua/">
                        <small>{{ $t("avadaDev") }}: AVADA-MEDIA</small>
                    </a>
                </div>
                <div class="col-md-3 my-5 text-center d-flex flex-column">
                    <h3 class="">{{ $t("affiche") }}</h3>
                    <router-link
                        :to="{ name: 'SiteAffiche' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("schedule") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteSoon' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("soon") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteCinemas' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("cinemas") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteActions' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("actions") }}
                    </router-link>
                </div>
                <div class="col-md-3 my-5 text-center d-flex flex-column">
                    <h3>{{ $t("aboutCinema") }}</h3>
                    <router-link
                        :to="{ name: 'SiteAboutNews' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("news") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteAboutAdvertisement' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("rekl") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteAboutCafe' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("cafe") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'SiteAboutContacts' }"
                        class="btn btn-outline-secondary border-0"
                        >{{ $t("contacts") }}
                    </router-link>
                </div>

                <div class="col-md-3 my-5 text-center">
                    <div class="col">
                        <a href="">
                            <i
                                class="fab fa-facebook-f fa-2x pr-1"
                                style="color: #3b5998"
                            ></i>
                        </a>
                        <a
                            href="
"
                            ><i
                                class="fab fa-twitter fa-2x px-1"
                                style="color: #55acee"
                            ></i
                        ></a>
                        <a
                            href="
"
                        >
                            <i
                                class="fab fa-vk fa-2x px-1"
                                style="color: #4c75a3"
                            ></i
                        ></a>
                        <a
                            href="
    "
                            ><i
                                class="fab fa-google fa-2x px-1"
                                style="color: #dd4b39"
                            ></i
                        ></a>
                        <a
                            href="
                    "
                        >
                            <i
                                class="fab fa-instagram fa-2x px-1"
                                style="color: #bc2a8d"
                            ></i
                        ></a>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">
                © KinoCMS 2021, All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "SiteFooter",
};
</script>
