<template>
    <div class="hello">
      

        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
                >vue-cli documentation</a
            >.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener"
                    >babel</a
                >
    
                >
            </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank" rel="noopener"
                    >Core Docs</a
                >
            </li>
   
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/awesome-vue"
                    target="_blank"
                    rel="noopener"
                    >awesome-vue</a
                >
            </li>
        </ul>
        <span class="fas fa-camera"></span>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>


<style scoped lang="scss">
@import url('/node_modules/admin-lte/plugins/fontawesome-free/webfonts/');

</style>
