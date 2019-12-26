<template>
    <div class="container">
        <div class="info">
            <div>
                <img src="../../assets/img/tx.png">
            </div>
            <div class="name">王某某</div>
            <div class="role">超级管理员</div>
        </div>
        <Sider hide-trigger class="sidebar">
            <Menu active-name="1-2" class="menu">
                <Submenu name="1">
                    <template slot="title">
                        <Icon custom="icon sy"></Icon>
                        首页
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon custom="icon dwxx"></Icon>
                        单位信息
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon custom="icon dwda"></Icon>
                        单位档案
                    </template>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon custom="icon xcba"></Icon>
                        巡查备案
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon custom="icon wbxx"></Icon>
                        维保信息
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon custom="icon xksxx"></Icon>
                        消防控制室
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon custom="icon wll"></Icon>
                        消防物联网
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="8">
                    <template slot="title">
                        <Icon custom="icon xtgl"></Icon>
                        系统管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
    }
</script>

<style>
    .container .info {
        width: 250px;
        height: 344px;
        padding-top: 70px;
    }

    .container .info .name {
        color: #FFFFFF;
        font-size: 22px;
        line-height: 64px;
    }

    .container .info .role {
        width: 160px;
        height: 37px;
        color: #6390B4;
        font-size: 16px;
        line-height: 37px;
        background-color: #163961;
        border: 2px solid #2864A9;
        border-radius: 20px;
        margin: 0 auto;
    }

    .container {
        background: url("../../assets/img/bg_cl.png") no-repeat center;
        background-size: cover;
        width: 250px;
        position: absolute;
        border-bottom: 0;
        box-sizing: border-box;
        box-shadow: 2px 0 8px 0 rgba(29, 35, 41, .05);
        color: rgba(0, 0, 0, 0.65);
        top: 64px;
        bottom: 0;
    }

    .sidebar {
        width: 250px !important;
        max-width: 250px !important;
    }

    .sidebar .menu {
        width: 250px !important;
        max-width: 250px !important;
        border: none;
        background: transparent;
    }

    .sidebar .menu li {
        background-color: #082C4A;
        margin-bottom: 2px;
    }

    .sidebar .menu li:hover {
        background-color: #173C88;
    }

    .sidebar.ivu-layout-sider {
        background: transparent;
    }

    .sidebar ul.ivu-menu, .sidebar li.ivu-menu-item {
        color: #FFFFFF;
    }

    .sidebar .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
        color: #00A8FF;
        background: #173C88;
        z-index: 2;
    }

    .sidebar .logo h1 {
        margin: 0 0 0 12px;
        font-size: 20px;
        line-height: 64px;
    }

    .sidebar .ivu-menu-vertical.ivu-menu-light:after {
        width: 0;
    }

    .sidebar .ivu-menu-vertical .ivu-menu-item, .sidebar .ivu-menu-vertical .ivu-menu-submenu-title {
        text-align: left;
    }

    .sidebar .ivu-menu-vertical .ivu-menu-submenu-title:hover {
        color: #00A8FF;
    }

    .sidebar .icon {
        width: 20px;
        height: 20px;
        position: relative;
        top: 4px;
    }

    .sidebar .icon.sy {
        background: url("../../assets/img/sy.png") no-repeat center;
    }
    .sidebar .icon.dwxx {
        background: url("../../assets/img/dwxx.png") no-repeat center;
    }
    .sidebar .icon.dwda {
        background: url("../../assets/img/dwda.png") no-repeat center;
    }
    .sidebar .icon.xcba {
        background: url("../../assets/img/xcba.png") no-repeat center;
    }
    .sidebar .icon.wbxx {
        background: url("../../assets/img/wbxx.png") no-repeat center;
    }
    .sidebar .icon.xksxx {
        background: url("../../assets/img/xksxx.png") no-repeat center;
    }
    .sidebar .icon.wll {
        background: url("../../assets/img/wll.png") no-repeat center;
    }
    .sidebar .icon.xtgl {
        background: url("../../assets/img/xtgl.png") no-repeat center;
    }
</style>
