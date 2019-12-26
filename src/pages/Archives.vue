<template>
    <div class="archives">
        <div class="tree-menu">
            <Tree :data="data5" :render="renderContent"></Tree>
        </div>
        <div class="info">
            <span class="title">单位基本信息</span>
            <table cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                    <td>单位编码:</td>
                    <td>6200100000014[建筑管辖单位]</td>
                    <td>组织机构代码:</td>
                    <td>43152621-5</td>
                </tr>
                <tr>
                    <td>单位名称:</td>
                    <td>XXX人民医院[拼音简称: xxxrmyy]</td>
                    <td>使用名称:</td>
                    <td>XXX人民医院</td>
                </tr>
                <tr>
                    <td>单位地址:</td>
                    <td>XX省XX市XX区XX街道XX号</td>
                    <td>火灾危险性:</td>
                    <td>火灾高危单位</td>
                </tr>
                <tr>
                    <td>单位类型:</td>
                    <td>事业</td>
                    <td>单位其他情况</td>
                    <td></td>
                </tr>
                <tr>
                    <td>上级单位:</td>
                    <td>XX省卫生厅</td>
                    <td>邮政编码:</td>
                    <td>710000</td>
                </tr>
                <tr>
                    <td>单位电话:</td>
                    <td>****_*******</td>
                    <td>单位传真:</td>
                    <td>****_*******</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>xxmyy0015@126.com</td>
                    <td>营业时最大人数</td>
                    <td>2000人</td>
                </tr>
                <tr>
                    <td>经济所有制:</td>
                    <td>其他</td>
                    <td>单位成立时间:</td>
                    <td>1958-12-25</td>
                </tr>
                <tr>
                    <td>行政区域:</td>
                    <td>XX区</td>
                    <td>消防管辖:</td>
                    <td>XX市公安消防支队</td>
                </tr>
                </tbody>
            </table>
            <table cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                    <td colspan="1"></td>
                    <td colspan="1" class="header">姓名</td>
                    <td colspan="1" class="header">身份证、其他证件</td>
                    <td colspan="1" class="header">联系电话</td>
                </tr>
                <tr>
                    <td>法定代表人:</td>
                    <td class="content">张某某</td>
                    <td class="content">6201151987****2541</td>
                    <td class="content">13811111111</td>
                </tr>
                <tr>
                    <td>消防安全管理人:</td>
                    <td class="content">张某某</td>
                    <td class="content">6201151987****2541</td>
                    <td class="content">13811111111</td>
                </tr>
                <tr>
                    <td>消防安全责任人:</td>
                    <td class="content">张某某</td>
                    <td class="content">6201151987****2541</td>
                    <td class="content">13811111111</td>
                </tr>
                </tbody>
            </table>
            <table cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                    <td>固定资产:</td>
                    <td>71000万元</td>
                    <td>职工人数:</td>
                    <td>1584人</td>
                </tr>
                <tr>
                    <td>占地面积:</td>
                    <td>65481平方米</td>
                    <td>建筑面积:</td>
                    <td>75124.5平方米</td>
                </tr>
                <tr>
                    <td>燃气类型:</td>
                    <td>天然气</td>
                    <td>单位专职(志愿)消防员数</td>
                    <td>5个</td>
                </tr>
                <tr>
                    <td>安全出口数:</td>
                    <td>7个</td>
                    <td>疏散电梯数:</td>
                    <td>12个</td>
                </tr>
                <tr>
                    <td>消防车道数:</td>
                    <td>1个</td>
                    <td>消防电梯数:</td>
                    <td>6个</td>
                </tr>
                <tr>
                    <td>消防车道位置:</td>
                    <td colspan="3">从大门至医院环形车道</td>
                </tr>
                <tr>
                    <td>避难层数:</td>
                    <td>1个</td>
                    <td>避难层总面积:</td>
                    <td>101平方米</td>
                </tr>
                <tr>
                    <td>避难层位置:</td>
                    <td colspan="3">门诊地下负一层,外科地下负一层</td>
                </tr>
                <tr>
                    <td>单位毗邻情况:</td>
                    <td>东——XXX卫生学校,西——XXX商业中心</td>
                    <td>自动消防设施:</td>
                    <td>有</td>
                </tr>
                <tr>
                    <td>毗邻单位东:</td>
                    <td colspan="3">XXX卫生学校</td>
                </tr>
                <tr>
                    <td>毗邻单位南:</td>
                    <td colspan="3">XXX商业中心</td>
                </tr>
                <tr>
                    <td>毗邻单位西:</td>
                    <td colspan="3">XXX商业中心</td>
                </tr>
                <tr>
                    <td>毗邻单位北:</td>
                    <td colspan="3">XXX商业中心</td>
                </tr>
                <tr>
                    <td>备注:</td>
                    <td colspan="3">市政消防栓有</td>
                </tr>
                <tr>
                    <td>单位属性:</td>
                    <td colspan="3">主类:人员密集场所;子类:医院门诊、住院楼</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Archives",
        data() {
            return {
                data5: [
                    {
                        title: '单位基本情况',
                        expand: true,
                        children: [
                            {
                                title: '单位基本情况',
                                expand: true,
                            },
                        ]
                    },
                    {
                        title: '巡查/备案情况',
                        expand: true,
                        children: [
                            {
                                title: '每日防火巡查',
                                expand: true,
                            },
                            {
                                title: '防火检查',
                                expand: true,
                            },
                            {
                                title: '消防室值班信息',
                                expand: true,
                            },
                            {
                                title: '人员备案',
                                expand: true,
                            },
                            {
                                title: '自我评估备案',
                                expand: true,
                            },
                            {
                                title: '消防培训',
                                expand: true,
                            }
                        ]
                    },
                    {
                        title: '维保情况',
                        expand: true,
                        children: [
                            {
                                title: '维保机构',
                                expand: true,
                            },
                            {
                                title: '维保合同',
                                expand: true,
                            },
                            {
                                title: '维保报告',
                                expand: true,
                            },
                        ]
                    },
                    {
                        title: '消防室情况',
                        expand: true,
                        children: [
                            {
                                title: '消防室控制人员',
                                expand: true,
                            },
                            {
                                title: '消防室值班记录',
                                expand: true,
                            },
                            {
                                title: '消防室视频',
                                expand: true,
                            },
                        ]
                    },
                    {
                        title: '消防物联网情况',
                        expand: true,
                        children: [
                            {
                                title: '自动火警报警系统',
                                expand: true,
                            },
                            {
                                title: '喷淋系统',
                                expand: true,
                                children: [
                                    {
                                        title: '自动喷水灭火系统',
                                        expand: true,
                                    },
                                ],
                            },
                            {
                                title: '消火栓系统',
                                expand: true,
                                children: [
                                    {
                                        title: '室内消火栓系统',
                                        expand: true,
                                    },
                                ],
                            },
                            {
                                title: '电气安全监控系统',
                                expand: true,
                            },
                            {
                                title: '消防水池水箱水位',
                                expand: true,
                            },
                        ]
                    },
                ],
            }
        },

        methods: {
            renderContent(h, {data}) {
                return h('span', [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    })
                ]);
            },
        }
    }
</script>

<style>
    .archives .tree-menu {
        width: 300px;
        box-shadow: 0 0 4px 1px #2482D9 inset;
        border: 2px solid #2482D9;
        padding: 18px;
        color: #327BC6;
        float: left;
        height: 990px;
    }

    .archives .tree-menu .ivu-tree ul li {
        text-align: left;
    }

    .archives .info {
        width: calc(100% - 314px);
        float: left;
        margin-left: 14px;
        border-bottom: 1px solid #2380D7;
    }

    .archives .info .title {
        width: 100%;
        color: #01EAff;
        border: 1px solid #2380D7;
        border-bottom: none;
        line-height: 36px;
        font-size: 18px;
        background-color: #003F8C;
        display: block;
    }

    .info table {
        width: 100%;
        border-right: 1px solid #2380D7;
        font-size: 12px;
    }

    .info table tbody tr td:nth-child(odd) {
        background-color: #093266;
        color: #3C8CF1;
        text-align: right;
        padding-right: 4px;
        width: 20%;
    }

    .info table tbody tr td:nth-child(even) {
        background-color: #003271;
        color: #FFFFFF;
        text-align: left;
        padding-left: 4px;
        width: 30%;
    }

    .info table tbody tr td {
        border: 1px solid #2380D7;
        border-right: none;
        border-bottom: none;
        line-height: 33px;
    }

    td.header {
        background-color: #093266 !important;
        color: #3C8CF1 !important;
        text-align: center !important;
        width: 26.66% !important;
    }

    td.content {
        text-align: center !important;
        width: 26.66% !important;
    }
</style>
