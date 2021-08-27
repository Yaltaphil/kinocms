<template>
    <div
        class="view"
        style="
            background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/91.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        "
    >
        <SiteHeader style="opacity: 0.5" />

        <div class="small-box">
            <p>Hello here</p>
            <!-- Card -->
            <div
                class="card card-image"
                style="
                    background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);
                "
            >
                <!-- Content -->
                <div
                    class="
                        text-white text-center
                        d-flex
                        align-items-center
                        rgba-black-strong
                        py-5
                        px-4
                    "
                >
                    <div>
                        <h5 class="pink-text">
                            <i class="fas fa-chart-pie"></i> Marketing
                        </h5>
                        <h3 class="card-title pt-2">
                            <strong>This is the card title</strong>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repellat fugiat, laboriosam, voluptatem, optio
                            vero odio nam sit officia accusamus minus error nisi
                            architecto nulla ipsum dignissimos. Odit sed qui,
                            dolorum!.
                        </p>
                        <a class="btn btn-pink"
                            ><i class="far fa-clone left"></i> View project</a
                        >
                    </div>
                </div>
                <!-- Content -->
            </div>
            <!-- Card -->
            <button
                class="btn-danger btn"
                @click="
                    {
                        $router.push({ name: 'Login' });
                    }
                "
            >
                to admin
            </button>
        </div>

        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
    name: "Main",

    components: { SiteHeader, SiteFooter },

    mounted() {
        document.querySelector("body").classList.remove("layout-fixed");
        document.querySelector("body").classList.add("layout-top-nav");
    },
};
</script>
