<template>
    <div>
        <button :class="className" v-on:click="handleClick">
            <slot/>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
          type: String,
        },
        data: function(){
            return {
                className: "default",
            }
        },
        methods: {
            handleClick: function () {
                this.$emit('click')
            },
        },
    }
</script>

<style scoped>
    button{
        padding: 5px 15px 6px;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #fff;
        border-color: #dcdee2;
    }
    button:hover{
        cursor: pointer;
    }
    .default{

    }
    .default:hover{
        border-color: #57a3f3;
        color: #57a3f3;
    }
</style>