<template>
    <div
        v-if="action.status"
        class="card shadow m-3 rounded"
        @click="$emit('action-clicked', action)"
    >
        <img class="card-img-top img-responsive" :src="url" alt="" />
        <a
            class="card-footer text-center"
            @click="$emit('action-clicked', action)"
        >
            {{ title }}
        </a>
        <p class="p-1">{{ date }}</p>
        <p class="p-1">
            <span class="badge badge-primary mx-2 p-2">now</span>
            <span class="badge badge-success mx-2 p-2">new</span>
        </p>
        <p class="p-1">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    name: "SiteActionCard",

    props: {
        action: {
            type: Object,
            default: null,
        },
    },

    computed: {
        langAddon() {
            return this.$i18n.locale === "ru" ? "" : "UA";
        },

        url() {
            return this.action[`mainPic${this.langAddon}`].url;
        },

        title() {
            return this.action[`title${this.langAddon}`];
        },

        description() {
            return this.action[`description${this.langAddon}`];
        },

        date() {
            const event = new Date(this.action.date);
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            };
            return event.toLocaleDateString("ru-RU", options);
        },
    },

    mounted() {},
};
</script>

<style lang="scss" scoped>
.card {
    background-color: rgba(11, 33, 46, 0.5);
    color: white;

    min-width: 250px;
    max-width: 250px;
    & img {
        height: 200px;
    }
    & .card-header {
        height: 50px;
    }
}
</style>
