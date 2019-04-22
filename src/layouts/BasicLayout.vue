<template>
    <Container class="layout">
        <Sidebar></Sidebar>
        <Container>
            <Header>123</Header>
            <router-view/>
        </Container>
    </Container>

</template>

<script>
    export default {
        name: "BasicLayout",
    }
</script>

<style scoped>
    .layout{
        width: 100%;
        display: block;
        background-color: #f0f2f5;
    }
</style>