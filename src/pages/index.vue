<template>
    <div class="container">
        <div class="jumbotron" style="padding-top: 1em;padding-bottom: 1em">
            <p class="indexTitle">本站提供一系列快速赚钱的方法、教程、分析等内容，让您每天花费一点时间赚个买菜钱。</p>
            <h5 style="text-align: right">不积跬步无以至千里，不积小流无以成江海。</h5>
            <p class="quicklyEarnParent">
                <router-link to="/earnList" class="btn btn-primary btn-lg quicklyEarn">立即赚钱</router-link>

            </p>
        </div>

        <div class="jumbotron mainContent">

            <div class="row ">
                <div class="col-md-6 row_item_parent">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/article001">朝九晚五的小白领应该怎样利用业务时间赚钱？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="../assets/images/articleList/bailing.jpg" alt="朝九晚五的小白领应该怎样利用业务时间赚钱" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                简单来说说正规的网络兼职，可以分两类，一类是你有一定的技能或者资源，比如你有平面设计的技术，可以到猪八戒网（威客-猪八戒网，中国最大的服务交易平台）上去接单...</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 row_item_parent row_item_parent_bottom">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/article002">女生如何利用业余时间赚钱？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="../assets/images/articleList/xianyu.jpg" alt="女生如何利用业余时间赚钱" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                以下内容可以轻松帮助你月入几千，无需成本，简单易行！
                                1下载闲鱼2淘宝搜索（cad教程，ps教程，鬼步教程，能想的都想，10-20块左右的销量好的选一个...
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-6 row_item_parent">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/article003">有哪些业余赚钱的途径？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="../assets/images/articleList/zhuanqian.jpg" alt="有哪些业余赚钱的途径" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                分享的方法一定可以赚钱，但是前提是如果你要在一个平台赚钱，首先要把平台规则搞清楚，好好阅读以下官方说明，至于网上的那些收费培训是没有必要参加的，自己用心比...</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 row_item_parent row_item_parent_bottom">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/article004">你在玩手机，别人却在用手机赚钱，如何用手机赚钱？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="../assets/images/articleList/shoujizhuanqian.jpg" alt="你在玩手机，别人却在用手机赚钱，如何用手机赚钱？" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                现实生活一帮低头族，有的低头族在用手机赚钱，有的低头族却沉迷于吃鸡或者王者荣耀又或者撩妹。那么如何用手机赚钱呢？...</p>
                        </div>
                    </div>
                </div>

            </div>


            <!--<div class="row prozone">-->
                <!--<div id="new">-->
                    <!--<dl>-->
                        <!--<dt>-->
                            <!--<h2><a href="http://vzhuan.cn/post/1035.html" target="_blank"></a></h2>-->
                        <!--</dt>-->
                        <!--<dd><span id="tu5">-->
<!--</span>-->
                            <!--<p>-->
                                <!---->
                        <!--</dd>-->
                    <!--</dl>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {util} from 'util';
    export default {
        data(){
            return {}
        },

        mounted(){


        },
        methods: {

            go2Detail(item){
                util.go2(this, item.link)
            },
            toggleMenu(){
                this.menuShow = !this.menuShow;
            }
        }
    }
</script>

<style lang="less" scoped>
.mainItemTitle{
    cursor: pointer;
}
@media screen and (max-width:980px) {

    .indexTitle{
        font-size: 1.2em!important;
    }
    .quicklyEarnParent{
        margin: 0 0 4px;
        .quicklyEarn{
            font-size: 0.5em!important;
            padding: 5px 8px;
        }
    }
    .mainContent{
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .row_item{
        padding:0 15px;
    }
    .row_item_parent{
        padding-right: 10px;
        padding-left: 10px;
        /*box-shadow: black 0px 0px 1px 0px;*/
    }
    .row_item_parent_bottom{
        padding-top:3px;
    }

    .mainItemTitle{
        font-size: 16px!important;
        margin: 0 0 2px!important;
    }
    .imgParent{
        padding-right: 0px;
        padding-left: 0px;
    }
    .jjParent{
        padding-right: 0px;
        padding-left: 0px;
        p{
            font-size: 11px!important;
        }
    }
    .itemImg{
        display: none;
    }


}

</style>

