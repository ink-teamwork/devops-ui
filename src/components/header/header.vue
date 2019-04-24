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
        padding: 0 10px;
        color: #fff;
        height: 64px;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
</style>