/** Bootstrap switch component for Vue2 - yaltaphil */
<template>
    <div class="custom-control custom-switch custom-switch-on-success">
        <input
            id="customSwitch"
            type="checkbox"
            class="custom-control-input"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        />
        <label class="custom-control-label" for="customSwitch"> <slot /></label>
    </div>
</template>

<script>
export default {
    name: "BaseSwitcher",

    // vue2 v-model binding
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        checked: Boolean,
    },
};
</script>
