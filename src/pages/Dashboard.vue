<template>
    <div>
        <h1>Dashboard</h1>
        <ul>
            <li v-for="item in items" v-bind:key="item.name"><span>{{item.name}}</span><span>{{item.age}}</span></li>
        </ul>
        <Button type="primary" v-on:click="warn">
            asd
        </Button>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data () {
            return {
                items: this.$store.state.order.items
            }
        },
        methods: {
            warn: function(){
                alert(1);
            }
        }
    }
</script>

<style scoped>

</style>