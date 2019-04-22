<template>
    <section><slot/></section>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    section{
        background-color: #fff;
        padding: 10px;
        color: #fff;
        height: 64px;
    }
</style>