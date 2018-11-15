<template>
    <div style="overflow: hidden" class="wrapper">

        <div class="row">
            <div class="col-md-2">
                &nbsp;
            </div>
            <div class="col-md-8 ">
                <h3>
                    <div style="line-height: 2em;">
                        <p>
                            互联网时代，尤其移动互联网时代，对我们每个人来说都是一次机遇。
                        </p>
                        <p>
                            世界上没有穷人，只有懒人。
                        </p>
                        <p>
                            本站给您介绍互联网上发生的奇迹般同时又是真真实实的故事。
                        </p>
                        <p>
                            本站也给您介绍一些切实可行的赚买菜钱的方法。
                        </p>
                        <p>
                            不积硅步无以至千里，不积小流无以成江海。
                        </p>
                        <p>
                            君，你我共勉！
                        </p>
                    </div>






                </h3>
            </div>
            <div class="col-md-3">
                &nbsp;
            </div>

        </div>


    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        },

        mounted(){
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .parentWrapper {
        margin-bottom: 1em;
        padding: 0.8em;
        box-shadow: black 2px 0px 1px 2px;
    }

    h4 {
        line-height: 1.8em;
    }
    h3{
        p{
            box-shadow: rgb(165, 165, 165) 0em 0em 0.8em;
            padding:5px;

        }
    }

    @media screen and (max-width:980px) {
        .wrapper{
            padding:1em;
        }
        h3{
            font-size: 16px!important;
            p{
                line-height: 24px!important;
                margin-bottom: 1.6em;
                box-shadow: rgb(165, 165, 165) 0em 0em 0.8em;
                padding:5px;
            }
        }


    }

</style>

