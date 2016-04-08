##
# 游戏列表组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
gameBox = require "./gameBoxComponent.coffee"

class gameList extends com.Components
    constructor: (selector) ->
        super(selector)
        @init()
            .gameListEventSubscribe()
    init: () ->
        console.log "init gameList"
        @gBox = []
        return @
    getGameConfig: () ->
        $.ajax
            type: "get"
            url: "/game/list"
            dataType: "json"
            success: (data) =>
                @publish("gameList.getGameConfig", data.list)
            error: (err) =>
                console.log err
    gameListEventSubscribe: () ->
        @subscribe("gameList.getGameConfig", (publisher,type,data) =>
            data.map (unit,index) =>
                gB = new gameBox(unit)
                html = gB.getGameBoxHtml()
                if html
                    @contain.appendChild html
                @gBox.push(gB)
                gB.gameBoxEventBind()
            )
        return @
module.exports = gameList