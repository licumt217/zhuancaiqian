<template>
    <div class="container">
        <h1 class="title">快速赚钱列表</h1>



        <table class="table table-striped table-hover">
            <thead class="">
                <th class="col-xs-6  leftTd">项目名称</th>
                <th class="col-xs-2">用时</th>
                <th class="col-xs-2">金额</th>
                <th class="col-xs-2">操作</th>
            </thead>
            <tbody id="content" >
                <tr>
                    <td class="col-xs-6 leftTd">下载支付宝app</td>
                    <td class="col-xs-2">10分钟</td>
                    <td class="col-xs-2">5元</td>
                    <td class="col-xs-2 link">
                        <router-link to="/proList/alipay">详情</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="col-xs-6 leftTd">下载注册淘新闻app</td>
                    <td class="col-xs-2">10分钟</td>
                    <td class="col-xs-2">1元</td>
                    <td class="col-xs-2 link" >
                        <router-link to="/proList/taoxinwen">详情</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="col-xs-6 leftTd">下载快头条APP</td>
                    <td class="col-xs-2">10分钟</td>
                    <td class="col-xs-2">1元</td>
                    <td class="col-xs-2 link" >
                        <router-link to="/proList/kuaitoutiao">详情</router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
            }
        },

        mounted(){
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .container{
        height:100%;
        overflow: auto;
        padding:0.8em;
    }
    .title{
        text-align: center;
        font-size: 30px;
        padding:0.8em;
    }

    .link{
        cursor: pointer;
    }


    @media screen and (max-width:980px) {

        .title{
            font-size: 20px;
            padding:0em;
        }
        .link{
            /*font-size: 12px;*/
        }
        th,td{
            text-align: center;
            padding-left:0!important;
            padding-right:0!important;
            font-size: 14px;
        }
        th{
            font-size: 16px;
        }
        .leftTd{
            text-align: left;
        }


    }


</style>

