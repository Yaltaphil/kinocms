<template>
    <div
        class="card border"
        style="background-color: rgba(0, 0, 0, 0); height: 400px"
    >
        <div class="row w-100">
            <div class="col">
                <slot name="title"></slot>
                <slot name="image"></slot>
            </div>
            <div class="col">
                <slot name="info">adress</slot>
                <slot name=" map"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactCard",

    props: {},
};
</script>
