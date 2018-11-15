<template>
    <div class="container">
        <h1 class="title">网赚项目分类</h1>



        <table class="table table-striped table-hover">
            <thead class="">
                <th class="col-xs-9">项目名称</th>
                <th class="col-xs-3">操作</th>
            </thead>
            <tbody id="content" >
                <tr>
                    <td class="col-xs-9">问卷调查，一个可以让你快速赚到零花钱的方法</td>
                    <td class="col-xs-3 link" >
                        <router-link to="/pc_wenjuandiaocha">查看详情</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="col-xs-9">靠谱的10大挂机网赚项目推荐</td>
                    <td class="col-xs-3 link" >
                        <router-link to="/pc_guaji">查看详情</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="col-xs-9">自媒体网赚新手必看，头条号变现引流方法</td>
                    <td class="col-xs-3 link" >
                        <router-link to="/pc_toutiao">查看详情</router-link>
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

