<template>
    <div class="container">
        <h1 class="title">详细教程</h1>

        <section class="mainBody">
            <div class="parentWrapper ">
                <h4 class="parent">注意事项：</h4>
                <ul class="itemList caution">
                    <li>限新用户， 一个手机只能注册一个号</li>
                </ul>
            </div>

            <div class="parentWrapper">
                <h4 class="parent">操作步骤</h4>
                <ul class="itemList">
                    <li>1、扫二维码下载APP，二维码如下：
                        <img src="../../assets/images/fenghuangzixun/erweima.jpg">
                    </li>
                    <li>2、点击底部菜单‘任务’，确认新手任务中的输入邀请码是否已经输入，没有输入的填写邀请码AAB4F2C3ZPAA</li>
                    <li>3、看新闻满150金币，提交任务</li>
                </ul>
            </div>

            <div class="parentWrapper">
                <h4 class="parent">审核要求</h4>
                <ul class="itemList">
                    <li>1、提交注册手机号</li>
                    <li>2、提交底部菜单‘我’的页面截图，如下：
                        <img src="../../assets/images/fenghuangzixun/wo.jpg">
                    </li>
                </ul>
            </div>

            <div class="parentWrapper">
                <h4 class="parent">权益发放</h4>
                <ul class="itemList">
                    <li>1、将审核要求中的相关资料发送到邮箱：447818666@qq.com，并附上自己的收款支付宝账号</li>
                    <li>2、后台确认提交无误后将在当天发放收益到指定支付宝账号。</li>
                    <li>3、交易结束</li>
                </ul>
            </div>

        </section>


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
    .parentWrapper{
        margin-bottom: 1em;
        padding:0.8em;
        box-shadow: black 2px 0px 1px 2px;
    }
    .parent{
        margin-bottom: 0.2em;
    }
    .caution{
        color:red;
    }
    .itemList{
        line-height: 1.6em;
    }

</style>

