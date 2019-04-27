<template>
    <li class="item">
        <div class="title" v-on:click="expanded">
            <Icon v-if="icon" class="icon" :icon="icon"/>
            <span>{{title}}</span>
        </div>
        <transition name="fade">
            <slot v-if="show"/>
        </transition>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props: {
            title: String,
            icon: String,
        },
        data() {
            return {
                expand: false,
                show: true,
            }
        },
        methods: {
            expanded: function (e) {
                const menu = e.currentTarget.nextElementSibling;

                const display = menu.style.display || 'block';

                // if (display === 'block'){
                //     menu.style.display = 'none';
                // } else {
                //     menu.style.display = 'block';
                //     console.log(menu.clientHeight)
                //     menu.style.display = 'none';
                // }
                let menus = document.getElementsByClassName('menu');
                console.log(menus);
                let height = menu.clientHeight;
                if (display === 'none') {
                    menu.style.display = 'block';
                    height = menu.clientHeight;
                    menu.style.height = '0px';
                    const timer = setInterval(function () {
                        if (menu.clientHeight === height) {
                            window.clearInterval(timer);
                        } else {
                            menu.style.height = `${menu.clientHeight + 10}px`;
                        }
                    }, 1);
                } else {
                    const timer = setInterval(function () {
                        if (menu.clientHeight == 0) {
                            window.clearInterval(timer);
                            menu.style.display = 'none';
                            menu.style.height = `${height}px`;
                        } else {
                            menu.style.height = `${menu.clientHeight - 10}px`;
                        }
                    }, 1);
                }


            }
        },
    }
</script>

<style scoped>
    .item .title {
        padding-left: 24px;
    }

    .item .title:hover {
        color: #1890ff;
        cursor: pointer;
    }

    .item .icon {
        font-size: 14px;
        margin-right: 10px;
    }

    .item {
        line-height: 40px;
    }

    .item:hover {
        color: #1890ff;
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.5s;
    }

    .fade-enter, .fade-leave-to {
        height: 0;
    }

</style>