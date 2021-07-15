<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-gray elevation-3">
    <!-- Brand Logo -->
    <a href="#" class="brand-link text-center text-xl">
      <span class="brand-text justify-content-center">KinoCMS</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-3">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item mt-3">
            <router-link to="/stats" class="nav-link">
              <i class="nav-icon fas fa-chart-bar"></i>
              <p>Статистика</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/banners" class="nav-link">
              <i class="nav-icon fas fa-window-maximize"></i>
              <p>
                Баннеры
                <span class="badge badge-info right">222</span>
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/films" class="nav-link">
              <i class="nav-icon fas fa-film"></i>
              <p>
                Фильмы
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item ml-4">
                <router-link to="/films:id" class="nav-link">
                  <p>Страница фильма</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/cinemas" class="nav-link">
              <i class="nav-icon fas fa-video"></i>
              <p>
                Кинотеатры
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item ml-4">
                <router-link to="/cinemas:id" class="nav-link">
                  <p>Страница кинотеатра</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link">
              <i class="nav-icon fas fa-exclamation"></i>
              <p>
                Новости
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item ml-4">
                <router-link to="/news:id" class="nav-link">
                  <p>Страница новости</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/actions" class="nav-link">
              <i class="nav-icon fab fa-adversal"></i>
              <p>
                Акции
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item ml-4">
                <router-link to="/films:id" class="nav-link">
                  <p>Страница акции</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/pages" class="nav-link">
              <i class="nav-icon far fa-file"></i>
              <p>
                Страницы
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/pages:id" class="nav-link ml-4">
                  <p>Страница страницы :)</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">
              <i class="nav-icon fas fa-user-friends"></i>
              <p>
                Пользователи
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/films:id" class="nav-link ml-4">
                  <p>Редактировать</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/mailing" class="nav-link">
              <i class="nav-icon fas fa-mail-bulk"></i>
              <p>
                Рассылка
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/films:id" class="nav-link ml-4">
                  <p>Выбор пользователей</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "KinoSidebar",
};
</script>

<style lang="scss" scoped></style>
