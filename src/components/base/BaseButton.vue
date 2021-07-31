<template>
    <button
        type="button"
        class="btn bg-info shadow px-5"
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
