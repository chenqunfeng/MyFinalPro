// Module Ajax
Ajax = (function(window, document, undefined) {
    /**
     * 执行异步请求 
     * @param {object} opts 异步请求的选项
     */
    var req = function(opts) {
        /**
         * opts参数说明
         * {String}   method  'GET' or 'POST'
         * {String}   url     请求的URL
         * {Object}   data    发送的数据
         * {Function} success 请求成功回调
         * {Function} error   请求失败回调 
         */
        var xhr = null,
        random = String(Math.random() * 1e8).split('.')[0],
        method = opts.method.toUpperCase() || 'GET',
        url = opts.url,
        data = opts.data || '',
        successCallback = opts.success,
        errorCallback = opts.error || function(err) {
            console.log('AJAX_REQUEST_ERROR: ' + err);
        };

        // 创建ajax对象，兼容IE
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        // 格式化数据
        if (typeof data == 'object') {
            var str = '';
            for (var key in data) {
                str += (key + '=' + data[key] + '&');
            }
            // 去掉最后一个'&'
            data = str.replace(/&$/, '');
        }

        // GET Request
        if (method == 'GET') {
            if (data) {
                xhr.open('GET', url + '?' + data, true);
            } else {
                xhr.open('GET', url + '?' + random, true);
            }
            xhr.send();
        }
        // POST Request
        else if (method == 'POST') {
            xhr.open('POST', url, true);
            // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        }

        /**
         * 当readyState改变时，会触发onreadystatechange事件
         * 
         * [readyState]属性存储了XMLHttpRequest的状态信息
         * 0: 请求未初始化
         * 1: 服务器连接已建立
         * 2: 请求已接受
         * 3: 请求处理中
         * 4: 请求已完成，且相应就绪
         * 
         * [status]属性存储了Http状态码
         * 1xx: 信息展示
         * 2xx: 成功
         * 3xx: 重定向
         * 4xx: 客户端错误
         * 5xx: 服务器端错误
         */
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    successCallback(xhr.responseText);
                } else {
                    errorCallback(xhr.responseText);
                }
            }
        };
    };

    // 暴露公有方法
    return {
        req: req
    };
}(window, document));

//sdk
cqfSDK = (function(){
    var loadConfig = function(parseFn, callback){
        var xhr;
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.overrideMimeType("application/json");
        xhr.open('GET', '/game/getGameConfig', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == "200") {
                    parseFn(xhr.responseText, callback);
                } else {
                    console.log('游戏配置加载错误\n' + xhr.responseText);
                }
            }
        };
        xhr.send();
    }
    /**
     * 解析游戏配置
     * @param  {String}   configJSON 配置JSON
     * @param  {Function} callback   回调
     */
    var parseConfig = function(configJSON, callback) {
        var userConfig = {},
            configObj = JSON.parse(configJSON).data,
            key,
            value;

        var Resource = function( item ){
            var o = item.attributes || {};
            o.value = item.key_value;
            o.toString = function(){
                return this.value.toString();
            };
            return o;
        };

        var isNew = configObj && configObj.hasOwnProperty("scenes");
        var parse = isNew? function(item) {
            key = item.key_name;
            userConfig[key] = Resource(item);            
        } : function(item) {
            key = item.key_name;
            value = item.key_value;
            type = item.type
            userConfig[key] = {value:value,type:type};            
        };

        configObj.items.map(parse);
        callback(userConfig);
    };
    return {
        loadConfig: function(callback) {
            loadConfig(parseConfig, callback);
        }
    }
})()