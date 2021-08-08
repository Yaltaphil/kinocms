<template>
    <input
        ref="input"
        type="date"
        :value="dateToYYYYMMDD(value)"
        @input="updateValue($event.target)"
        @focus="selectAll"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: Date,
            default: () => new Date(),
        },
    },
    methods: {
        dateToYYYYMMDD(d) {
            // alternative implementations in https://stackoverflow.com/q/23593052/1850609
            return (
                d &&
                new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
            );
        },
        updateValue: function (target) {
            this.$emit("input", target.valueAsDate);
        },
        selectAll: function (event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function () {
                event.target.select();
            }, 0);
        },
    },
};
</script>
