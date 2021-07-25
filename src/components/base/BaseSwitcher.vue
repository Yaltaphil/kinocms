/** Bootstrap switch component for Vue2 - yaltaphil */
<template>
    <button class="custom-control custom-switch" v-bind="$attrs">
        <input
            type="checkbox"
            id="customSwitch"
            :checked="checked"
            v-bind="$attrs"
            v-on="$listeners"
            class="custom-control-input bg-info"
            @change="$emit('change', $event.target.checked)"
        />
        <slot />
    </button>

    <!-- <div class="custom-control custom-switch">
        <input
            type="checkbox"
            class="custom-control-input bg-info"
            id="customSwitch"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        />
        <label class="custom-control-label" for="customSwitch">
            <slot />
        </label>
    </div> -->
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
