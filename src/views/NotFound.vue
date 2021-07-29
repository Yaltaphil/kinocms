<template>
  <div>
    <h1>
      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      Not Found
    </h1>
    <p>
      Не можем найти страницу. Попробуйте перейти
      <router-link :to="{ name: 'Home' }">на начальную</router-link>
    </p>
  </div>
</template>
