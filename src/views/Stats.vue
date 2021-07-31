<template>
    <div>
        <h1>Statistic page</h1>

        <!-- Custom tabs (Charts with tabs)-->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-chart-pie mr-1"></i>
                    Sales
                </h3>
                <div class="card-tools">
                    <ul class="nav nav-pills ml-auto">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="#revenue-chart"
                                data-toggle="tab"
                                >Area</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#sales-chart"
                                data-toggle="tab"
                                >Donut</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <div class="tab-content p-0">
                    <!-- Morris chart - Sales -->
                    <div
                        id="revenue-chart"
                        class="chart tab-pane active"
                        style="position: relative; height: 300px"
                    >
                        <canvas
                            id="revenue-chart-canvas"
                            height="300"
                            style="height: 300px"
                        ></canvas>
                    </div>
                    <div
                        id="sales-chart"
                        class="chart tab-pane"
                        style="position: relative; height: 300px"
                    >
                        <canvas
                            id="sales-chart-canvas"
                            height="300"
                            style="height: 300px"
                        ></canvas>
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
</template>

<script>
export default {
    name: "Stats",
};
</script>
