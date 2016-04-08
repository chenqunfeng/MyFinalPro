##
# 创建游戏组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
previewer = require "./pubPreviewerComponent.coffee"
exchangeEle = require "./exchangeEleComponent.coffee"

###
    createGame运行过程说明
    建立基础框架(render) -> 事件绑定(eventSubscribe,eventBind) -> 
    获取游戏配置信息(getGameConfig) -> 渲染获取到的游戏配置信息:(预览组件:url,游戏资源渲染:config)
    ###
class createGame extends com.Components
    constructor: (selector) ->
        super(selector)
        @init()
    # 初始化
    # 无传参
    # 返回 this
    init: () ->
        @render()
            .eventSubscribe()
            .eventBind()
            .getGameConfig()
        @userConfig = {}
        @uploadBtn = document.querySelector("#uploadFile")
        return @
    # 建立基础框架
    # 无传参
    # 返回 this
    render: () ->
        html = """
            <input type="file" id="uploadFile" class="hide">
            <div class="previewWin">
            </div>
            <div class="gameElement">
            </div>
        """
        @contain.innerHTML = html
        return @
    # 获取游戏配置信息
    # 无传参
    # 返回 this
    getGameConfig: () ->
        $.ajax
            type: "get"
            url: "/game/getGameConfig"
            dataType: "json"
            success: (data) =>
                status = data.status
                if "success" is status
                    data = data.data
                    @publish("createGame.loaded",data)
            error: (err) =>
                console.log err
        return @
    # 渲染预览窗口
    # 无传参
    # 返回 this
    createPreviewWin: () ->
        @pre = @contain.querySelector(".previewWin")
        url = @data.link
        @preview = new previewer(url)
        @pre.appendChild(@preview.getPreHtml())
        return @
    # 渲染游戏配置资源
    # 无传参
    # 返回 this
    createGameElement: () ->
        @ele = @contain.querySelector(".gameElement")
        @listGameElement(@data.items)
        return @
    # 具体渲染游戏配置资源
    # @param {object} list 游戏配置资源
    # 返回 this
    listGameElement: (list) ->
        list.map (unit,index) =>
            temp = new exchangeEle(@,unit)
            temp.subscribe("exchangeEle:uploaded", (publisher,type,name,data) =>
                if data && data.msg and data.msg.url
                    @userConfig[name] = data.msg.url
                    @saveConfig()
                )
        return @
    saveConfig: (cb) ->
        $.ajax
            type: "post"
            url: "/game/saveConfig"
            data: {
                userConfig: @userConfig
            }
            dataType: "json"
            success: (data) =>
                status = data.status
                if "success" is status
                    data = data.data
                    @publish("createGame.saveConfig")
            error: (err) =>
                console.log err
        return @
    # 发布事件绑定
    # 无传参
    # 返回 this
    eventSubscribe: () ->
        @subscribe("createGame.loaded", (publisher,type,data) =>
            @data = data
            @createPreviewWin()
                .createGameElement()
            )
        @subscribe("createGame.saveConfig", () =>
            @preview.reload(@data.link)
            )
        return @
    # 点击事件绑定
    # 无传参
    # 返回 this
    eventBind: () ->
        that = @
        @contain.addEventListener "click", (e) =>
            t = e.target
            if @hasClass(t,"exChange")
                # 记录当前点击的是哪一个上传图片替换对象
                @key = t.getAttribute("data-name")
                @uploadBtn.setAttribute("data-target",@key)
                @uploadBtn.click()
        return @
module.exports = createGame