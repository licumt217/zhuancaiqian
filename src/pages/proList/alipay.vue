<template>
    <div style="overflow: hidden" class="wrapper">
        <div class="row header" style="text-align: center">
            <h1 class="title">详细教程</h1>
        </div>

        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 mainContent">
                <div class="parentWrapper ">
                    <h3>注意事项：</h3>
                    <ol>
                        <li>限新用户， 一个手机只能注册一个号</li>
                    </ol>
                </div>

                <div class="parentWrapper ">
                    <h3>操作步骤</h3>
                    <ol>
                        <li>扫下图二维码下载【支付宝】APP，按照页面提示完成注册，然后完成实名认证。</li>
                        <li>二维码如下<br/>
                            <img src="../../assets/images/alipay/alipay.jpg" class="img" style="max-height: 40em;">
                        </li>
                    </ol>
                </div>

                <div class="parentWrapper ">
                    <h3>审核要求</h3>
                    <ol>
                        <li>提交注册手机号</li>
                        <li>提交个人信息页面截图，如下<br/>
                            <img src="../../assets/images/alipay/gerenzhongxin.jpg" class="img" style="max-height: 40em;">
                        </li>
                    </ol>
                </div>

                <div class="parentWrapper ">
                    <h3>权益发放</h3>
                    <ol>
                        <li>将审核要求中的相关资料发送到邮箱：447818666@qq.com，并附上自己的收款支付宝账号</li>
                        <li>后台确认提交无误后将在当天发放收益到指定支付宝账号。</li>
                        <li>交易结束</li>
                    </ol>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>



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
    .parentWrapper{
        margin-bottom: 1em;
        font-size: 16px!important;
        line-height: 1.8em;
        box-shadow: rgb(165, 165, 165) 0em 0em 0.8em;
        padding:10px;
    }


    @media screen and (max-width:980px) {
        .wrapper{
            padding:15px;
        }
        .parentWrapper{
            padding:auto 25px!important;
        }
        .title{
            font-size: 30px!important;
            padding: 0;
            margin: 0 0 0.5em 0;
        }
        .img{
            max-height: 28em!important;
        }


    }

</style>

