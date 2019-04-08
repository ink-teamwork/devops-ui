<template>
    <div>
        <router-view/>
        <NavBar/>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    export default {
        name: "MobileLayout",
        components: {NavBar}
    }
</script>

<style scoped>

</style>