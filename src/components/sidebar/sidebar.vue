<template>
    <section class="sidebar">
        <div class="logo"><a><h1>DevOps</h1></a></div>
        <Menu>
            <Item icon="user" title="first title1">
                <SubMenu>
                    <Item title="second title11">

                    </Item>
                    <Item title="second title12">

                    </Item>
                    <Item title="second title13">

                    </Item>
                    <Item title="second title14">

                    </Item>
                </SubMenu>
            </Item>
            <Item icon="user" title="first title2">
                <SubMenu>
                    <Item title="second title21">

                    </Item>
                    <Item title="second title22">

                    </Item>
                    <Item title="second title23">

                    </Item>
                </SubMenu>
            </Item>
        </Menu>
    </section>
</template>

<script>
    import SubMenu from "../menu/sub-menu";
    export default {
        name: "Sidebar",
        components: {SubMenu},
        mounted() {
        },
        methods:{
        },
    }
</script>

<style scoped>
    .sidebar {
        background-color: #ffffff;
        width: 240px;
        height: 100%;
        position: absolute;
        border-bottom: 0;
        box-sizing: border-box;
        box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
        color: rgba(0, 0, 0, 0.65);
    }

    .sidebar .logo {
        height: 64px;
        display: block;
        background-color: #fff;
        box-shadow: 1px 1px 0 0 #e8e8e8;
    }

    .sidebar .logo h1 {
        margin: 0 0 0 12px;
        font-size: 20px;
        line-height: 64px;
    }

</style>