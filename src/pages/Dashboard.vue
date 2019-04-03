<template>
    <div>
        <h1>Dashboard</h1>
        <ul>
            <li v-for="item in items" v-bind:key="item.name"><span>{{item.name}}</span><span>{{item.age}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data () {
            return {
                items: this.$store.state.order.items
            }
        }
    }
</script>

<style scoped>

</style>