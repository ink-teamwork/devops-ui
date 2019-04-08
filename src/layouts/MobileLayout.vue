<template>
    <div>
        <router-view/>
        <TabBar active="123" v-model="count"/>
    </div>
</template>

<script>
    import TabBar from "../components/TabBar";
    export default {
        name: "MobileLayout",
        components: {TabBar},
        data(){
            return{
                count: 7
            }
        },
        created() {
            var t = this;
            setInterval(function () {
                t.count += 1;
            }, 1000)
        }
    }
</script>

<style scoped>

</style>