<template>
    <button
        type="button"
        class="btn bg-gradient-info"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
};
</script>
