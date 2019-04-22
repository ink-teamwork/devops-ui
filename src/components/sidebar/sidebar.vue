<template>
    <section class="sidebar">
        <div class="logo"><a><h1>DevOps</h1></a></div>
        <slot/>
    </section>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    .sidebar {
        background-color: #fff;
        color: rgba(0,0,0,.65);
        width: 240px;
        height: 100%;
        position: absolute;
        border-bottom: 0;
        box-sizing: border-box;
        box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    }

    .sidebar .logo {
        height: 64px;
        display: block;
        background-color: #fff;
    }

    .sidebar .logo h1 {
        margin: 0 0 0 12px;
        color: #fff;
        font-size: 20px;
        line-height: 64px;
    }
</style>