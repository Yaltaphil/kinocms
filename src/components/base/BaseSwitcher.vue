/** only single booleans no arrays */
<template>
    <div class="form-group">
        <div
            class="
                custom-control
                custom-switch
                custom-switch-off-danger
                custom-switch-on-success
            "
        >
            <input
                :id="_uid"
                :checked="checked"
                type="checkbox"
                class="custom-control-input"
                @change="$emit('change', $event.target.checked)"
            />
            <label class="custom-control-label" :for="_uid"><slot /></label>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseSwitcher",
    model: {
        prop: "checked",
        event: "change",
    },
    props: {
        checked: Boolean,
    },
};
</script>
