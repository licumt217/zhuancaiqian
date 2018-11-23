<template>
    <div class="outerContainer">
        <nav class="navbar navbar-default ">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" :href="'/'">
                        <img src="./assets/images/homemoney.png" style="height: 100%;width:1.2em">
                    </a>

                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
                        <li class="active">
                            <router-link to="/earnList">立即赚钱</router-link>
                        </li>
                        <li >
                            <router-link to="/classicalList">经典案例</router-link>
                        </li>
                        <!--<li class="dropdown">-->
                            <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">-->
                                <!--财务知识 <span class="caret"></span>-->
                            <!--</a>-->
                            <!--<ul class="dropdown-menu">-->
                                <!--<li><a href="#">初级</a></li>-->
                                <!--<li><a href="#">中级</a></li>-->
                                <!--<li><a href="#">高级</a></li>-->
                            <!--</ul>-->
                        <!--</li>-->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                网赚知识 <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="/knowledgeAbout">简介</a></li>
                                <li><a href="/knowledgeHistory">历史</a></li>
                                <li><a href="/proCategory">项目分类</a></li>
                            </ul>
                        </li>
                        <!--<li class="dropdown">-->
                            <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多 <span class="caret"></span></a>-->
                            <!--<ul class="dropdown-menu">-->
                                <!--<li><a href="#">赚钱项目</a></li>-->
                                <!--<li><a href="#">经典案例</a></li>-->
                                <!--<li><a href="#">财务知识</a></li>-->
                            <!--</ul>-->
                        <!--</li>-->
                    </ul>
                    <!--<form class="navbar-form navbar-left">-->
                        <!--<div class="form-group">-->
                            <!--<input type="text" class="form-control" placeholder="Search">-->
                        <!--</div>-->
                        <!--<button type="submit" class="btn btn-default">查询</button>-->
                    <!--</form>-->
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/aboutUs">关于本站</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <router-view class="view"></router-view>
    </div>



</template>
<script type="text/ecmascript-6">
    import { util } from 'util'

    export default{
        components: {
        },
        data(){
            return {
            }
        },
        mounted(){
            document.write('<script src="http://wm.lrswl.com/page/?s=289216"></script>');
        },
        computed: {
        },
        methods: {
        }
    }

</script>
<style lang="less">
    /*@import 'assets/css/common.less';*/

    .outerContainer {
        height: 100%;
    }
</style>
