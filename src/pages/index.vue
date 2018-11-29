<template>
    <div class="container">
        <div class="jumbotron" style="padding-top: 1em;padding-bottom: 1em">
            <p class="indexTitle">你好哈发。</p>
            <h5 style="text-align: right">不积跬步无以至千里，不积小流无以成江海。</h5>
            <p class="quicklyEarnParent">
                <router-link to="/" class="btn btn-primary btn-lg quicklyEarn">想方设法</router-link>

            </p>
        </div>

        <div class="jumbotron mainContent">

            <div class="row ">
                <div class="col-md-6 row_item_parent">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/">fsfsfs？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="" alt="发送放松放松" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                发送放松放松的...</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 row_item_parent row_item_parent_bottom">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/">发送范围为？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="" alt="发送放松放松" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                fsfsfs搜房网而温儿翁...
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-6 row_item_parent">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/">发送方三房司法所？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="" alt="放松放松" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                fs市解放路是否结束雷锋精神...</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 row_item_parent row_item_parent_bottom">
                    <div class="row row_item">
                        <h4 class="mainItemTitle">
                            <router-link to="/">fsfs发送飞洒发三方？</router-link>
                        </h4>
                    </div>
                    <div class="row row_item">
                        <div class="col-md-4 imgParent">
                            <img class="itemImg" src="" alt="你在玩手机，别人却在用手机赚钱，如何用手机赚钱？" style="width:100%;max-height: 8em;">
                        </div>
                        <div class="col-md-8 jjParent">
                            <p style="font-size: 14px;">
                                lfsjl烦死了烦死了副教授积分是？...</p>
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

