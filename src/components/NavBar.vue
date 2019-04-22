<template>
    <div class="nav-menu">
        <router-link class="item" to="/m" v-bind:class="{ active: current == '/m' }" @click.native="hello('/m')">
            <i class="el-icon-tickets"></i>
            <span>首页</span>
        </router-link>
        <router-link class="item" to="/m/search" v-bind:class="{ active: current == '/m/search' }" @click.native="hello('/m/search')">
            <i class="el-icon-search"></i>
            <span>发现</span>
        </router-link>
        <router-link class="item" to="/m/share" v-bind:class="{ active: current == '/m/share' }" @click.native="hello('/m/share')">
            <i class="el-icon-upload"></i>
            <span>分享</span>
        </router-link>
        <router-link class="item" to="/m/task" v-bind:class="{ active: current == '/m/task' }" @click.native="hello('/m/task')">
            <i class="el-icon-time"></i>
            <span>任务</span>
        </router-link>
        <router-link class="item" to="/m/mine" v-bind:class="{ active: current == '/m/mine' }" @click.native="hello('/m/mine')">
            <i class="el-icon-star-off"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        created(){
          this.current = this.$route.path;
        },
        data: function () {
            return {
                active: 0,
                current: "",
            }
        },
        methods: {
            hello: function(path) {
                this.current = path;
            }
        }
    }
</script>

<style scoped>
    .nav-menu{
        width: 100%;
        height: 4rem;
        background-color: #A8A8A8;
        border-top: 0.1rem solid #333;

    }
    .nav-menu .item{
        height: 3rem;
        margin-top: 0.2rem;
        font-size: 1rem;
        width: 20%;
        float: left;
        display: inline-grid;
        border-right: 0.1rem solid #2c3e50;
        box-sizing: border-box;
        text-decoration: none;
        color: #333;
        line-height: 2rem;
    }
    .nav-menu .item:last-child{
        border: none;
    }
    .nav-menu .item i{
        line-height: 2rem;
        font-size: 1.5rem;
    }
    .active{
        background-color: #42b983;
    }
</style>