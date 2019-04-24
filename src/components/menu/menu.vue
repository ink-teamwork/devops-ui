<template>
    <ul class="menu"><slot/></ul>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
    .menu{
        font-size: 14px;
        line-height: 40px;
        width: 100%;
        padding: 16px 0;
        text-align: left;
    }

</style>