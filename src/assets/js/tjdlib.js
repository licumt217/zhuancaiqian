

/**
 * 公用方法类，和具体业务无关，也不依赖其它库
 */
class BaseUtil{
    /**
     * 给指定参数编码
     * @param url
     * @returns {string}
     */
    static encodeUrl(url) {
        return encodeURIComponent(url)
    }

    /**
     * 取得url后边的参数
     * @param name
     * @returns
     */
    static getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substr(1).match(reg)
        if (r !== null) return unescape(r[2])
        return null
    }


    static isIosDevice () {
        var u = navigator.userAgent
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    }
    static isAndroidDevice () {
        var u = navigator.userAgent
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    }

    /**
     * 清空本地所有localStorage中的信息
     */
    static clearAllCookies () {
        localStorage.clear()
        sessionStorage.clear()
    }

    static isEmptyObject( obj ) {
        let name;
        for( name in obj ) {
            return false;
        }
        return true;
    }

    /**
     * 判断给定对象是否为空
     * @param str
     * @returns {Boolean}
     */
    static isEmpty (str) {
        var flag = false

        if (
            !str ||
            str === 'null' ||
            str === 'undefined' ||
            str === '0' ||
            str.length === 0 ||
            BaseUtil.isEmptyObject(str)
        ) {
            flag = true
        }
        return flag
    }


    /**
     * 当前页面是否在微信浏览器中打开的
     * @returns {boolean}
     */
    static isWeixinBrowserOnly () {
        var flag = false
        var ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) &&
            ua.match(/MicroMessenger/i)[0] === 'micromessenger'
        ) {
            flag = true
        }
        return flag
    }

    /**
     * 当前页面是否在支付宝浏览器中打开的
     * @returns {boolean}
     */
    static isAlipayBrowserOnly () {
        var flag = false
        var ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/alipay/i) &&
            ua.match(/alipay/i)[0] === 'alipay'
        ) {
            flag = true
        }
        return flag
    }

    /**
     * 检查当前网络是否可用
     */
    static isNetOnline () {
        return navigator.onLine
    }


    /**
     *判断url中是否包含给定字符串
     */
    static urlContains (str) {
        return window.location.href.indexOf(str) != -1
    }

    static getCookie (key) {
        return localStorage.getItem(key)
    }
    static getSession (key) {
        return sessionStorage.getItem(key)
    }
    static removeCookie (key) {
        if (key) {
            localStorage.removeItem(key)
        }
    }
    static setCookie (key, value) {
        if (localStorage) {
            try {
                if (value) {
                    localStorage.removeItem(key)
                    localStorage.setItem(key, value)
                }
            } catch (oException) {
                if (oException.name === 'QuotaExceededError') {
                    //console.log('超出本地存储限额！');
                    //如果历史信息不重要了，可清空后再设置
                    localStorage.clear()
                    localStorage.setItem(key, value)
                }
            }
        }
    }
    static setSession (key, value) {
        if (sessionStorage) {
            try {
                sessionStorage.removeItem(key)
                sessionStorage.setItem(key, value)
            } catch (oException) {
                if (oException.name === 'QuotaExceededError') {
                    //console.log('超出本地存储限额！');
                    //如果历史信息不重要了，可清空后再设置
                    sessionStorage.clear()
                    sessionStorage.setItem(key, value)
                }
            }
        }
    }
    static removeSession (key) {
        if (key) {
            sessionStorage.removeItem(key)
        }
    }

    static removeItem (key) {
        sessionStorage.removeItem(key)
    }

}


class TjdUtil extends BaseUtil{



    /**
     * 设置文档标题
     * @param title
     */
    static setTitle (title) {
        if (BaseUtil.isEmpty(title)) {
            title = ''
        }
        if (typeof AlipayJSBridge != 'undefined') {
            AlipayJSBridge.call('setTitle', {
                title: title
            })
        } else {
            document.title = title
        }
    }
    /**
     * 获取当前文档标题
     * @returns {*|string}
     */
    static getTitle () {
        return document.title
    }

    static clone (obj) {
        if (typeof obj === 'object') {
            var returnObj = null
            if (Array.isArray(obj)) {
                returnObj = []
                for (var i = 0; i < obj.length; i++) returnObj.push(obj[i])
            } else {
                returnObj = {}
                for (var key in obj) {
                    returnObj[key] = TjdUtil.clone(obj[key])
                }
            }
            return returnObj
        }
        return obj
    }



    static go2 (self, path, query) {
        let prefix='';
        prefix='/'

        if (query) {
            self.$router.push({
                path: prefix + path,
                query: query
            })
        } else {
            self.$router.push({ path: prefix + path })
        }
    }
    static freshMain () {
        location.reload()
    }

    static rmFromArray (arr, val) {
        arr.splice(arr.indexOf(val), 1)
    }




}


export {BaseUtil,TjdUtil}

