<template>
    <div class="form-group d-flex align-items-start px-3">
        <div class="col-5">
            <slot />
        </div>
        <div class="col-3">
            <select class="form-control shadow" v-model="choice">
                <option value="1" label="1 сек"></option>
                <option value="3" label="3 сек"></option>
                <option value="5" label="5 сек"></option>
                <option value="10" label="10 сек"></option>
                <option value="15" label="15 сек"></option>
            </select>
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
    computed: {
        choice: {
            get: function () {
                return this.selected;
            },
            set: function (value) {
                this.$emit("change", value);
            },
        },
    },
};
</script>
