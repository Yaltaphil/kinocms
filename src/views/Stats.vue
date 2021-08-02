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
    </div>
</template>

<script>
export default {
    name: "Stats",
    methods: {
        act() {
            this.$successMessage("Hello");
            this.$errorMessage("Hello");
        },
    },
};
</script>
