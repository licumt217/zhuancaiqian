/**
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const index = r => require.ensure([], () => r(require('../pages/index')), 'index')

const taoxinwen = r => require.ensure([], () => r(require('../pages/proList/taoxinwen.vue')), 'taoxinwen')
const kuaitoutiao = r => require.ensure([], () => r(require('../pages/proList/kuaitoutiao.vue')), 'kuaitoutiao')
const alipay = r => require.ensure([], () => r(require('../pages/proList/alipay.vue')), 'alipay')


const fenghuangzixun = r => require.ensure([], () => r(require('../pages/proList/fenghuangzixun.vue')), 'fenghuangzixun')

// 立即赚钱列表
const earnList = r => require.ensure([], () => r(require('../pages/earnList.vue')), 'earnList')

const article001 = r => require.ensure([], () => r(require('../pages/articleList/article001.vue')), 'article001')
const article002 = r => require.ensure([], () => r(require('../pages/articleList/article002.vue')), 'article002')
const article003 = r => require.ensure([], () => r(require('../pages/articleList/article003.vue')), 'article003')
const article004 = r => require.ensure([], () => r(require('../pages/articleList/article004.vue')), 'article004')


// 经典案例
const classicalList = r => require.ensure([], () => r(require('../pages/classical/list.vue')), 'classicalList')
const classicalHouse = r => require.ensure([], () => r(require('../pages/classical/house.vue')), 'classicalHouse')
const classicalPangshipianju = r => require.ensure([], () => r(require('../pages/classical/pangshipianju.vue')), 'classicalPangshipianju')

// 网赚知识
const knowledgeAbout = r => require.ensure([], () => r(require('../pages/knowledge/about.vue')), 'knowledgeAbout')
const knowledgeHistory = r => require.ensure([], () => r(require('../pages/knowledge/history.vue')), 'knowledgeHistory')
const proCategory = r => require.ensure([], () => r(require('../pages/proCategory/index')), 'proCategory')
const pc_wenjuandiaocha = r => require.ensure([], () => r(require('../pages/proCategory/wenjuandiaocha')), 'pc_wenjuandiaocha')
const pc_guaji = r => require.ensure([], () => r(require('../pages/proCategory/guaji')), 'pc_guaji')
const pc_toutiao = r => require.ensure([], () => r(require('../pages/proCategory/toutiao')), 'pc_toutiao')

const aboutUs = r => require.ensure([], () => r(require('../pages/aboutUs')), 'aboutUs')








const router = new VueRouter({
    base: 'zhuancaiqian',
    mode: 'history',
    saveScrollPosition: true,
    routes: [
        {
            path: '*',
            component: index,
            meta: {
                title: ''
            }
        },
        {
            path: '/index',
            component: index,
            meta: {
                title: ''
            }
        },{
            path: '/proList/taoxinwen',
            component: taoxinwen,
            meta: {
                title: ''
            }
        },{
            path: '/proList/kuaitoutiao',
            component: kuaitoutiao,
            meta: {
                title: ''
            }
        },{
            path: '/proList/alipay',
            component: alipay,
            meta: {
                title: ''
            }
        },{
            path: '/proList/fenghuangzixun',
            component: fenghuangzixun,
            meta: {
                title: ''
            }
        },{
            path: '/earnList',
            component: earnList,
            meta: {
                title: ''
            }
        },{
            path: '/article001',
            component: article001,
            meta: {
                title: ''
            }
        },{
            path: '/article002',
            component: article002,
            meta: {
                title: ''
            }
        },{
            path: '/article003',
            component: article003,
            meta: {
                title: ''
            }
        },{
            path: '/article004',
            component: article004,
            meta: {
                title: ''
            }
        },{
            path: '/classicalList',          //近代经典案例
            component: classicalList,
            meta: {
                title: ''
            }
        },{
            path: '/classicalHouse',
            component: classicalHouse,
            meta: {
                title: ''
            }
        },{
            path: '/classicalPangshipianju',
            component: classicalPangshipianju,
            meta: {
                title: ''
            }
        },{
            path: '/knowledgeAbout',          //网赚知识
            component: knowledgeAbout,
            meta: {
                title: ''
            }
        },{
            path: '/knowledgeHistory',
            component: knowledgeHistory,
            meta: {
                title: ''
            }
        },{
            path: '/proCategory',
            component: proCategory,
            meta: {
                title: ''
            }
        },{
            path: '/pc_wenjuandiaocha',
            component: pc_wenjuandiaocha,
            meta: {
                title: ''
            }
        },{
            path: '/pc_guaji',
            component: pc_guaji,
            meta: {
                title: ''
            }
        },{
            path: '/pc_toutiao',
            component: pc_toutiao,
            meta: {
                title: ''
            }
        },{
            path: '/aboutUs',
            component: aboutUs,
            meta: {
                title: ''
            }
        },




    ]
})

// 路由跳转 Logger
router.beforeEach((to, from, next) => {
    // next();
    next()
})

router.afterEach((to, from, next) => {})

export default router
