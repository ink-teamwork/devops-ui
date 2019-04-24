<template>
    <li class="item">
        <div class="title" v-on:click="expanded()">
            <Icon v-if="icon" class="icon" :icon="icon" />
            <span>{{title}}</span>
        </div>
        <slot/>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props: {
          title: String,
          icon: String,
        },
    }
</script>

<style scoped>
    .item .title{
        padding-left: 24px;
    }
    .item .title:hover{
        color: #1890ff;
        cursor: pointer;
    }
    .item .icon{
        font-size: 14px;
        margin-right: 10px;
    }
    .item{
        line-height: 40px;
    }
    item:hover{
        color: #1890ff;
        cursor: pointer;
    }
</style>