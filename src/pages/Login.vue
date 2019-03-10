<template>
    <div class="login">
        <el-row class="row-bg">
            <h1>DevOps</h1>
        </el-row>
        <el-row class="row-bg">
            <el-input v-model="input" placeholder="请输入内容">
                <i slot="prefix" class="el-input__icon ali-icon-user"></i>
            </el-input>
        </el-row>
        <el-row class="row-bg">
            <el-input placeholder="请输入密码" v-model="input11" show-password>
                <i slot="prefix" class="el-input__icon ali-icon-lock"></i>
            </el-input>
        </el-row>
        <el-row class="row-bg">
            <el-button type="primary" v-on:click="login" class="loginBtn">登录</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                input: '',
                input11: ''
            }
        },
        methods: {
            login: () => {
                alert(123);
            }
        }
    }
</script>

<style>
    body {
        background-color: #f9fafc;
    }

    .login {
        width: 400px;
        margin: 0 auto;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .loginBtn {
        width: 100%;
    }
</style>