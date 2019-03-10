<template>
    <el-container>
        <el-header><Header/></el-header>
        <el-container>
            <el-aside width="200px">
                <Sidebar/>
            </el-aside>
            <el-container>
                <el-main><router-view/></el-main>
                <el-footer><Footer/></el-footer>
            </el-container>
        </el-container>
    </el-container>
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