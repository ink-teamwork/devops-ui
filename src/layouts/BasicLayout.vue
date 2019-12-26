<template>
    <div class="layout">
        <Layout>
            <GlobalHeader></GlobalHeader>
            <Layout>
                <Sidebar></Sidebar>
                <Layout class="main">
                    <Content :style="{padding: '20px', minHeight: '280px'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import GlobalHeader from '../components/GlobalHeader';
    import Sidebar from "../components/sidebar/sidebar";
    export default {
        components: {
            Sidebar,
            GlobalHeader,
        }

    }
</script>
<style scoped>
    .layout{
        background: #0D2136;
        position: relative;
        overflow: hidden;
    }
    .main {
        background-color: #0D2136;
        width: calc(100% - 250px);
        margin-left: 250px;
    }
</style>
