<template>
    <div>
        <h1>Statistic page</h1>

        <!-- Custom tabs (Charts with tabs)-->
        <div class="card" @click="act">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-chart-pie mr-1"></i>
                    Sales
                </h3>
                <div class="card-tools">
                    <ul class="nav nav-pills ml-auto"></ul>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body"></div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
        <BaseSwitcher v-model="sw1"> Переключатель </BaseSwitcher>
        {{ sw1 }}
        <BaseSwitcher v-model="sw2"> Переключатель </BaseSwitcher>
        {{ sw2 }}
        <BaseSwitcher v-model="sw3"> Переключатель </BaseSwitcher>
        {{ sw3 }}

    </div>
</template>

<script>
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";
export default {
    name: "Stats",
    components: { BaseSwitcher },
    data() {
        return {
            sw1: true,
            sw2: false,
            sw3: true,
        };
    },
    methods: {
        act() {
            this.$successMessage("Hello");
            this.$errorMessage("Hello");
        },
    },
};
</script>
