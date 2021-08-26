<template>
    <!-- <div class="input-group">
            <slot class="input-group-prepend" /> -->
    <select
        v-model="choice"
        class="form-control shadow mx-3"
        @change="$emit(`change`, $event.target.value)"
    >
        <option
            v-for="time in times"
            :key="time"
            :value="time.toString()"
            :label="`${time} сек`"
        ></option>
    </select>
    <!-- </div> -->
</template>

<script>
export default {
    name: "BaseSpeedSelect",

    model: {
        prop: "value",
        event: "change",
    },

    props: {
        value: { type: String, default: "5" },
    },

    data() {
        return {
            choice: this.value,
            times: [1, 3, 5, 10, 15],
        };
    },
};
</script>
