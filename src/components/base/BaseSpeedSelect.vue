<template>
    <div class="form-group d-flex align-items-start px-3">
        <div class="input-group">
            <slot class="input-group-prepend" />
            <div class="mx-3">
                <select
                    v-model="choice"
                    class="form-control shadow"
                    @change="$emit(`change`, $event.target.value)"
                >
                    <option value="1" label="1 сек"></option>
                    <option value="3" label="3 сек"></option>
                    <option value="5" label="5 сек"></option>
                    <option value="10" label="10 сек"></option>
                    <option value="15" label="15 сек"></option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseSpeedSelect",

    model: {
        prop: "value",
        event: "change",
    },

    props: {
        selected: { type: String, default: "5" },
    },

    data() {
        return {
            choice: this.selected,
        };
    },
};
</script>
