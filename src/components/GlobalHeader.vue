<template>
    <Header class="header">
        <Menu mode="horizontal" theme="dark" class="menu">
            <div class="logo"></div>
            <div class="nav">
                <span class="time">{{time}}</span>
                <MenuItem name="1">
                    <Icon custom="icon bell"></Icon>
                    提示
                </MenuItem>
                <MenuItem name="2">
                    <Icon custom="icon user"></Icon>
                    <Dropdown>
                        王某某
                        <Icon type="md-arrow-dropdown" class="arrow"/>
                        <DropdownMenu slot="list">
                            <DropdownItem>选项一</DropdownItem>
                            <DropdownItem>选项二</DropdownItem>
                            <DropdownItem>选项三</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </MenuItem>
                <MenuItem name="3" class="logout">
                    <Icon custom="icon logout"></Icon>
                    退出
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    let moment = require("moment");
    export default {
        name: "GlobalHeader",
        data() {
            return {
                time: '',
                flag: false,
            }
        },
        mounted() {
            let time = setInterval(() => {
                if (this.flag == true) {
                    clearInterval(time)
                }
                this.time = moment().format('YYYY-MM-DD HH:mm:ss');
            }, 500)
        },
    }
</script>

<style scoped>
    @font-face {
        font-family: LCD;
        src: url("../assets/font/lcd.ttf");
    }

    .header {
        background: url("../assets/img/bg_top.png");
        padding: 0 32px;
        height: 64px;
        line-height: 64px;
    }

    .header .menu {
        background: none;
        border: none;
    }

    .header .logo {
        float: left;
        width: 352px;
        height: 32px;
        border-radius: 3px;
        position: relative;
        top: 16px;
        background: url("../assets/img/bt.png");
        background-size: 352px 32px;
    }

    .header .nav {
        float: right;
        position: relative;
        right: 0px;
        line-height: 64px;
    }

    .header .nav .time {
        font-family: LCD, sans-serif;
        float: left;
        font-size: 20px;
        color: #00A8FF;
    }

    .header .nav .arrow {
        color: #8BC7FF;
    }

    .header .nav .icon {
        height: 16px;
        width: 14px;
    }

    .header .nav .icon.bell {
        background: url("../assets/img/ts.png") no-repeat center;
        background-size: cover;
    }

    .header .nav .icon.user {
        background: url("../assets/img/yh.png") no-repeat center;
        background-size: cover;
    }

    .header .nav .logout {
        color: #D81E06;
    }

    .header .nav .icon.logout {
        background: url("../assets/img/tc.png") no-repeat center;
        background-size: cover;
    }
</style>
