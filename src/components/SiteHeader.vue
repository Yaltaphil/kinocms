<template>
    <nav class="main-header navbar navbar-expand navbar-light navbar-white">
        <button
            class="btn btn-info"
            @click="
                {
                    $router.push({ name: 'Login' });
                }
            "
        >
            to admin
        </button>
        <div class="container flex-column">
            <div class="row">
                <div class="col-4">
                    <form class="form-inline ml-0 ml-md-3">
                        <div class="input-group input-group-sm">
                            <input
                                class="form-control form-control-navbar"
                                type="search"
                                placeholder="..."
                            />
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-6">
                    <!-- Facebook -->
                    <i
                        class="fab fa-facebook-f fa-2x pr-1"
                        style="color: #3b5998"
                    ></i>
                    <!-- Twitter -->
                    <i
                        class="fab fa-twitter fa-2x px-1"
                        style="color: #55acee"
                    ></i>
                    <!-- Vkontakte -->
                    <i class="fab fa-vk fa-2x px-1" style="color: #4c75a3"></i>
                    <!-- Google -->
                    <i
                        class="fab fa-google fa-2x px-1"
                        style="color: #dd4b39"
                    ></i>
                    <!-- Instagram -->
                    <i
                        class="fab fa-instagram fa-2x px-1"
                        style="color: #4c75a3"
                    ></i>
                </div>

                <div class="col">(999) 787-45-87</div>
            </div>

            <!-- <a href="" class="navbar-brand">
                <img
                    src=""
                    alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3"
                    style="opacity: 0.8"
                />
                <span class="brand-text font-weight-light">KINO</span>
            </a> -->

            <!--
            <button
                class="navbar-toggler order-1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="row">
                <div
                    id="navbarCollapse"
                    class="collapse navbar-collapse order-3"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'SiteAffiche' }"
                            >
                                {{ $t("affiche") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'SiteSchedule' }"
                            >
                                {{ $t("schedule") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'SiteSoon' }"
                            >
                                {{ $t("soon") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'SiteCinemas' }"
                            >
                                {{ $t("cinemas") }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'SiteActions' }"
                            >
                                {{ $t("actions") }}
                            </router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a
                                id="dropdownSubMenu1"
                                href="#"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="nav-link dropdown-toggle"
                            >
                                {{ $t("aboutCinema") }}</a
                            >
                            <ul
                                aria-labelledby="dropdownSubMenu1"
                                class="dropdown-menu border-0 shadow"
                            >
                                <li>
                                    <router-link
                                        :to="{ name: 'SiteCinemas' }"
                                        class="dropdown-item"
                                    >
                                        {{ $t("news") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'SiteCinemas' }"
                                        class="dropdown-item"
                                    >
                                        {{ $t("rekl") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'SiteCinemas' }"
                                        class="dropdown-item"
                                    >
                                        {{ $t("cafe") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'SiteCinemas' }"
                                        class="dropdown-item"
                                    >
                                        {{ $t("mobile") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'SiteCinemas' }"
                                        class="dropdown-item"
                                    >
                                        {{ $t("contacts") }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <select
                        id="language"
                        v-model="$i18n.locale"
                        name="language"
                    >
                        <option value="ru">рус</option>
                        <option value="ua">укр</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "SiteHeader",
};
</script>
