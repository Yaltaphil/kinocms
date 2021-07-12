<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <router-link to="/news">News</router-link>
        </div>
        <transition name="fade"> <router-view /> </transition>>
    </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
