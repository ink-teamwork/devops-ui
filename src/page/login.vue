<template>
    <div>
        <el-row class="row-bg">
            <el-col :md = "6">
                <el-input v-model="input" placeholder="请输入内容"><v-icon name="beer"/></el-input>
            </el-col>
        </el-row>
        <el-row class="row-bg">
            <el-col :md = "6">
                <el-input placeholder="请输入密码" v-model="input11" prefix-icon="el-icon-lock" show-password></el-input>
            </el-col>
        </el-row>
        <el-row class="row-bg">
            <el-col :md = "3">
                <el-button type="primary" v-on:click="login">主要按钮</el-button>
            </el-col>
            <el-col :md = "3">
                <el-button type="primary">主要按钮</el-button>
            </el-col>
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

<style scoped>
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>