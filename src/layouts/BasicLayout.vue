<template>
    <router-view/>
</template>

<script>
    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";
    import Header from "../components/Header";

    export default {
        name: "BasicLayout",
        components: {
            Header,
            Sidebar,
            Footer,
        },
    }
</script>

<style scoped>

</style>