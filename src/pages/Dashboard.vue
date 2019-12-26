<template>
    <div class="dashboard">
        <div class="unit todo">
            <span class="title">待办事项</span>
            <div class="list">
                <div class="item blue">
                    <span>每日防火巡查</span>
                </div>
                <div class="item blue">
                    <span>防火检查</span>
                </div>
                <div class="item blue">
                    <span>自我评估备案</span>
                </div>
                <div class="item yellow">
                    <span>消防室值班记录</span>
                </div>
                <div class="item blue">
                    <span>人员备案</span>
                </div>
                <div class="item yellow">
                    <span>消防培训</span>
                </div>
            </div>
        </div>
        <div class="unit trends">
            <span class="title">单位动态</span>
            <div class="table">
                <span class="table-header">自动火灾报警系统</span>
                <Table size="small" :columns="columns" :data="data"></Table>
                <div style="margin: 10px;overflow: hidden">
                    <Page :total="40" size="small"/>
                </div>
            </div>
            <div class="table">
                <span class="table-header">自动喷水灭火系统/室内消火栓系统</span>
                <Table size="small" :columns="columns" :data="data"></Table>
                <div style="margin: 10px;overflow: hidden">
                    <Page :total="40" size="small"/>
                </div>
            </div>
            <div class="table">
                <span class="table-header">消防水池/水箱/水位</span>
                <Table size="small" :columns="columns" :data="data"></Table>
                <div style="margin: 10px;overflow: hidden">
                    <Page :total="40" size="small"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                columns: [
                    {
                        title: '设备名称',
                        key: 'name'
                    },
                    {
                        title: '设备编号',
                        key: 'no',
                        render: (h, params) => {
                            return h('div', {
                                style: {
                                    color: '#04F0FF',
                                }
                            }, params.row.no);
                        }
                    },
                    {
                        title: '设备类型',
                        key: 'type'
                    },
                    {
                        title: '设备位置',
                        key: 'position'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            return h('div', {
                                style: {
                                    color: '#FF5F5F',
                                }
                            }, params.row.status);
                        }
                    },
                    {
                        title: '时间',
                        key: 'time'
                    }
                ],
                data: [
                    {
                        name: 'XXX室内烟感报警设备',
                        no: 'ZDHZ_200810510005',
                        type: 'XXX设备类型',
                        position: 'XXX单位XXX楼层XXX位置',
                        status: '报警',
                        time: '2019-12-05 15:35:11',
                    },
                    {
                        name: 'XXX室内烟感报警设备',
                        no: 'ZDHZ_200810510005',
                        type: 'XXX设备类型',
                        position: 'XXX单位XXX楼层XXX位置',
                        status: '报警',
                        time: '2019-12-05 15:35:11',
                    },
                    {
                        name: 'XXX室内烟感报警设备',
                        no: 'ZDHZ_200810510005',
                        type: 'XXX设备类型',
                        position: 'XXX单位XXX楼层XXX位置',
                        status: '报警',
                        time: '2019-12-05 15:35:11',
                    },
                    {
                        name: 'XXX室内烟感报警设备',
                        no: 'ZDHZ_200810510005',
                        type: 'XXX设备类型',
                        position: 'XXX单位XXX楼层XXX位置',
                        status: '报警',
                        time: '2019-12-05 15:35:11',
                    },
                ]
            }
        },
    }
</script>

<style>
    .dashboard {
    }

    .dashboard .unit .title {
        padding-left: 26px;
        margin-bottom: 4px;
        color: #00C0FF;
        display: block;
        text-align: left;
    }

    .dashboard .todo .title {
        background: url("../assets/img/dbsx.png") no-repeat left;
    }

    .dashboard .trends .title {
        background: url("../assets/img/dwdt.png") no-repeat left;
    }

    .dashboard .unit .list {
        display: flex;
        flex-direction: row;
    }

    .dashboard .unit .list .item {
        width: 100%;
        height: 124px;
        display: block;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 124px;
    }

    .dashboard .unit .list .item:last-child {
        margin-right: 0;
    }

    .dashboard .unit .list .item span {
        display: block;
        padding-left: 55px;
        margin: 0 auto;
    }

    .dashboard .unit .list .item:nth-child(1) span {
        background: url("../assets/img/mrfhxc.png") no-repeat left;
    }

    .dashboard .unit .list .item:nth-child(2) span {
        background: url("../assets/img/fhjc.png") no-repeat left;
    }

    .dashboard .unit .list .item:nth-child(3) span {
        background: url("../assets/img/zwpgba.png") no-repeat left;
    }

    .dashboard .unit .list .item:nth-child(4) span {
        background: url("../assets/img/xkszb.png") no-repeat left;
    }

    .dashboard .unit .list .item:nth-child(5) span {
        background: url("../assets/img/xkszb.png") no-repeat left;
    }

    .dashboard .unit .list .item:nth-child(6) span {
        background: url("../assets/img/xfpx.png") no-repeat left;
    }

    .dashboard .unit .list .blue {
        background: url("../assets/img/bg_yz.png") no-repeat left;
        background-size: contain;
    }

    .dashboard .unit .list .yellow {
        background: url("../assets/img/bg_wz.png") no-repeat left;
        background-size: contain;
    }

    .dashboard .table {
        background-color: #0E2E4E;
        border: 1px solid #114170;
        padding: 0 14px;
        margin-top: 6px;
    }

    .dashboard .table .table-header {
        padding: 16px 0 16px 26px;
        color: #FFFFFF;
        font-size: 18px;
        display: block;
        text-align: left;
        background: url("../assets/img/jt.png") no-repeat left;
    }

    .dashboard .table .ivu-table {
        background-color: #0D2D4B;
    }

    .dashboard .table .ivu-table:before {
        background-color: #0F4069;
    }

    .dashboard .table .ivu-table th {
        background-color: #193E85;
        border-bottom: none;
        color: #269FF8;
        text-align: center
    }

    .dashboard .table .ivu-table td {
        border-bottom: 1px solid #0F4069;
        background-color: #0D2D4B;
        color: #FFFFFF;
        text-align: center;
    }
    .dashboard .table .ivu-page li {
        background: none;
    }
</style>
