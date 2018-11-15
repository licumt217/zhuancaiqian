<template>
    <div class="container">
        <h1 class="title">经典资本运作案例</h1>



        <table class="table table-striped table-hover">
            <thead class="">
                <th class="col-xs-9">案例名称</th>
                <th class="col-xs-3">操作</th>
            </thead>
            <tbody id="content" >
            <tr>
                <td class="col-xs-9">房价一步步攀升的真相</td>
                <td class="col-xs-3 link">
                    <router-link to="/classicalHouse">查看详情</router-link>
                </td>
            </tr>
            <tr>
                <td class="col-xs-9">解读大名鼎鼎的庞氏骗局</td>
                <td class="col-xs-3 link">
                    <router-link to="/classicalPangshipianju">查看详情</router-link>
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

</style>

