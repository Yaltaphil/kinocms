<template>
    <div class="container d-flex flex-column py-5">
        <div class="row headBanner"></div>

        <div class="row" style="background-color: rgba(0, 0, 0, 0)">
            <div class="col-md-4">
                <form class="form-inline ml-0 ml-md-3">
                    <div class="input-group input-group-sm">
                        <input
                            class="form-control form-control"
                            type="search"
                            placeholder="..."
                        />
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <a href="">
                    <i
                        class="fab fa-facebook-f fa-2x px-2"
                        style="color: #3b5998"
                    ></i>
                </a>
                <a
                    href="
"
                    ><i
                        class="fab fa-twitter fa-2x px-2"
                        style="color: #55acee"
                    ></i
                ></a>
                <a
                    href="
"
                >
                    <i class="fab fa-vk fa-2x px-2" style="color: #4c75a3"></i
                ></a>
                <a
                    href="
    "
                    ><i
                        class="fab fa-google fa-2x px-2"
                        style="color: #dd4b39"
                    ></i
                ></a>
                <a
                    href="
                    "
                >
                    <i
                        class="fab fa-instagram fa-2x px-2"
                        style="color: #bc2a8d"
                    ></i
                ></a>
            </div>
            <div class="col-md-2 text-light">
                <strong>
                    <p>(999) 787-45-87</p>
                    <p>(999) 787-45-88</p>
                </strong>
            </div>
        </div>

        <nav
            class="
                navbar navbar-expand navbar-dark
                d-flex
                flex-row
                justify-content-between
                align-items-center
            "
            style="background-color: rgba(0, 0, 0, 0.33)"
        >
            <a class="navbar-brand" href="/">
                <img
                    src="@/assets/logo.png"
                    width="30"
                    height="30"
                    alt="KINO"
                />
            </a>
            <div>
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

                    <li class="nav-right pl-5">
                        <select
                            id="language"
                            v-model="$i18n.locale"
                            name="language"
                            class="px-2 py-1"
                        >
                            <option value="ru">рус</option>
                            <option value="ua">укр</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "SiteHeader",
};
</script>
