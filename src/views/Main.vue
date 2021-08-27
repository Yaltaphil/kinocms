<template>
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
</template>
