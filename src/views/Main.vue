<template>
    <div class="wrapper">
        <SiteHeader />

        <div class="small-box bg-warning">
            <p>Hello here</p>
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
};
</script>
