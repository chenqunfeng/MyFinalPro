##
# 游戏盒子组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
release = require "./pubPreviewerWinComponent.coffee"

class gameBox extends com.Components
    constructor: (data) ->
        super()
        @init(data)
    init: (data) ->
        @setData(data)
    setData: (data) ->
        if data
            @data = data
        return @
    getGameBoxHtml: () ->
        gb = document.createElement "div"
        gb.setAttribute("data-id",@data._id)

        title = "无标题"

        config = @data.data.defaultConfig.items
        config.map (unit,index) =>
            name = unit.key_name
            if "game_name" is name
                title = unit.key_value
        @url = @data.data.defaultConfig.link   
        html = """
            <div class="proGameBox borderBox">
                <div class="gameBoxCover borderBox"></div>
                <div class="gameBoxDetail borderBox">
                    <div class="gameDetail">
                        <span class="gameTitle">#{title}</span>
                        <span class="linkButton">预览></span>
                    </div>
                    <div class="kind">
                        <span class="littleBlock">不限</span>
                    </div>
                    <button class="gameEditor button">开始制作</button>
                </div>
            </div>
        """
        gb.innerHTML = html
        @contain = gb
        return gb
    gameBoxEventBind: () ->
        linkBtn = @contain.querySelector(".linkButton")
        editorBtn = @contain.querySelector(".gameEditor")
        linkBtn.addEventListener "click", () =>
            id = @contain.getAttribute("data-id")
            $.ajax
                type: "post"
                url: "/game/setGameId"
                dataType: "json"
                data: {gameId: @data._id}
                success: (data) =>
                    status = data.status
                    if "success" is status
                        if @release
                            @release.open()
                        else
                            @release = new release(@url)
                error: (err) =>
                    console.log err
            
        editorBtn.addEventListener "click", () =>
            $.ajax
                type: "post"
                url: "/game/setGameId"
                dataType: "json"
                data: {gameId: @data._id}
                success: (data) =>
                    status = data.status
                    if "success" is status
                        location.href = "/game/editor"
                error: (err) =>
                    console.log err

module.exports = gameBox