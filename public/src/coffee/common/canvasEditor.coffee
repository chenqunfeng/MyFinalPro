##
# 创建游戏组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
previewer = require "./pubPreviewerComponent.coffee"
exchangeEle = require "./exchangeEleComponent.coffee"

###
    EditorCanvas运行过程说明
    建立基础框架(render) -> 事件绑定(eventSubscribe,eventBind) -> 
    获取游戏配置信息(getGameConfig) -> 渲染获取到的游戏配置信息:(预览组件:url,游戏资源渲染:config)
    ###
class EditorCanvas extends com.Components
    constructor: (selector) ->
        super(selector)
        @init()
        @tw = []
        # console.log @stageMoveOpen().toString().replace(/_this.stage/g,'this').replace(/_this.egret/g,'egret').replace(/_this/g,'this')
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
            <input type="file" id="uploadPicInGame" class="hide">
            <div class="previewWin">
            </div>
            <div class="gameElement">
            </div>
            <div class="editorGame">
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
                    @publish("EditorCanvas.loaded",data)
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
    editorCanvasElement: () ->
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
    # 游戏编辑组件渲染
    editorElement: () ->
        @editor = @contain.querySelector(".editorGame")
        @editor.innerHTML = """
            <div class="freeEditor">
                <button type="button" class="addPic pointer">增加一张图片</button>
                <button type="button" class="flyLeft pointer">从左飞入</button>
            </div>
        """
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
                    @publish("EditorCanvas.saveConfig")
            error: (err) =>
                console.log err
        return @
    # 发布事件绑定
    # 无传参
    # 返回 this
    eventSubscribe: () ->
        @subscribe("EditorCanvas.loaded", (publisher,type,data) =>
            @data = data
            @editorElement()
                .createPreviewWin()
                .editorCanvasElement()
                .bindGameEnvironment()
                
            )
        @subscribe("EditorCanvas.saveConfig", () =>
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
            else if @hasClass(t,"addPic")
                that = @

                o = @stage.createBitmapByName('egretIcon')
                @stage.addChild(o)
                o.x = o.width / 2
                o.y = o.height / 2
                o.anchorOffsetX = o.width / 2
                o.anchorOffsetY = o.height / 2

                f = false
            else if @hasClass(t, "flyLeft")
                
                @moveTarget.targetX = @moveTarget.x
                @moveTarget.targetY = @moveTarget.y
                @moveTarget.x = 0 - @moveTarget.width
                # @moveTarget.y = 0 - @moveTarget.height
                tw = @egret.Tween.get(@moveTarget, {loop:true})
                tw.to({x: @moveTarget.targetX}, 1000)
                tw.foreign_key = @moveTarget.foreign_key
                @tw.push(tw)
                console.log(@tw)
        return @
    stageMoveOpen: () ->
        stageMove = () =>
            that = this
            @stage.addEventListener(@egret.TouchEvent.TOUCH_BEGIN, (e) =>
                @canMove = true
                @moveTarget = null
                @stage.allSp.map (unit,index) ->
                    if unit.hitTestPoint(e.stageX,e.stageY)
                        that.moveTarget = unit
                if (@moveTarget)
                    @moveTarget.x = e.stageX
                    @moveTarget.y = e.stageY
            , @stage)
            @stage.addEventListener(@egret.TouchEvent.TOUCH_MOVE, (e) =>
                if @canMove and @moveTarget
                    @moveTarget.x = e.stageX
                    @moveTarget.y = e.stageY
            , @stage)
            @stage.addEventListener(@egret.TouchEvent.TOUCH_END, (e) =>
                @canMove = false
            , @stage)
            return
        return stageMove
    # 绑定游戏环境(后面要分离成一个单独的组件)
    bindGameEnvironment: () ->
        innerWindow = document.getElementsByTagName('iframe')[0].contentWindow
        innerWindow.gameOnloaded = () =>
            @stage = innerWindow.stage
            @egret = innerWindow.egret
            @stageMoveOpen(@stage,@egret)()
            @stage.allSp.map (unit,index) =>
                if unit.foreign_key is "editorIcon"
                    @editor = unit
    # 保存游戏所有更改
    saveCanvasConfig: () ->
        stage = @integrationObject()
        tw = @integrationTween()
        $.ajax
            type: "post"
            url: "/game/saveCanvasConfig"
            data: {
                stage: stage
                tw: tw
            }
            dataType: "json"
            success: (data) =>
                status = data.status
                if "success" is status
                    data = data.data
                    # @publish("EditorCanvas.saveConfig")
            error: (err) =>
                console.log err
        return @
    # 素材转换接口
    integrationObject: () ->
        stage = []
        @stage.allSp.map (unit,index) =>
            temp = {}
            _temp = {}
            temp.width = unit.width
            temp.height = unit.height
            temp.x = unit.x
            temp.y = unit.y
            temp.anchorOffsetX = unit.anchorOffsetX
            temp.anchorOffsetY = unit.anchorOffsetY
            temp.scaleX = unit.scaleX
            temp.scaleY = unit.scaleY
            temp.rotation = unit.rotation
            temp.textureName = unit.textureName
            temp.foreign_key = unit.foreign_key
            _temp.type = "gameObject"
            _temp.key_name = "gameObject,"+unit.foreign_key
            _temp.key_value = JSON.stringify(temp)
            stage.push(_temp)
        return stage
    # 动画转换接口
    integrationTween: () ->
        tw = []
        @tw.map (unit,index) =>
            temp = {}
            _temp = {}
            temp.loop = unit.loop
            temp.duration = unit.duration
            temp.foreign_key = unit.foreign_key
            temp._steps = unit._steps
            _temp.type = "tweenObject"
            _temp.key_name = "tweenObject,"+unit.foreign_key
            _temp.key_value = JSON.stringify(temp)
            tw.push(_temp)
        return tw
module.exports = EditorCanvas