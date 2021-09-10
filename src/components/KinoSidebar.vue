<template>
    <aside class="main-sidebar sidebar-dark-gray elevation-3">
        <router-link
            :to="{ name: `Home` }"
            class="brand-link text-center text-xl"
        >
            <span class="brand-text justify-content-center">KinoCMS </span>
        </router-link>

        <div class="sidebar">
            <nav class="mt-3">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li class="nav-item mt-3">
                        <router-link :to="{ name: `Home` }" class="nav-link">
                            <i class="nav-icon fas fa-chart-bar mr-3"></i>
                            <p>Статистика</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: `Banners` }" class="nav-link">
                            <i class="nav-icon fas fa-window-maximize mr-3"></i>
                            <p>Баннеры</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: `Films` }" class="nav-link">
                            <i class="nav-icon fas fa-film mr-3"></i>
                            <p>Фильмы</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: `Cinemas` }" class="nav-link">
                            <i class="nav-icon fas fa-video mr-3"></i>
                            <p>Кинотеатры</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: `Schedule` }"
                            class="nav-link"
                        >
                            <i class="nav-icon fas fa-video mr-3"></i>
                            <p>Расписание сеансов</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: `News` }" class="nav-link">
                            <i class="nav-icon fas fa-exclamation mr-3"></i>
                            <p>Новости</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: `Actions` }" class="nav-link">
                            <i class="nav-icon fab fa-adversal mr-3"></i>
                            <p>Акции</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: `Pages` }" class="nav-link">
                            <i class="nav-icon far fa-file mr-3"></i>
                            <p>Страницы</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Users' }" class="nav-link">
                            <i class="nav-icon fas fa-user-friends mr-3"></i>
                            <p>Пользователи</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: `Mailing` }" class="nav-link">
                            <i class="nav-icon fas fa-mail-bulk mr-3"></i>
                            <p>Рассылка</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: "KinoSidebar",
};
</script>

<style lang="scss" scoped></style>
