<template>
    <ul class="menu"><slot/></ul>
</template>

<script>
    export default {
        name: "Menu",
        mounted() {
            console.log(this);
        },
        addItem(item){

        },
    }
</script>

<style scoped>

</style>