##
# 预览组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
popUp = require "./pubPopUpComponent.coffee"
previewer = require "./pubPreviewerComponent.coffee"

class PreviewerWin extends com.Components
    constructor: (url) ->
        super()
        @init(url)
    init: (url) ->
        @setUrl(url)
            .render()
            .ReleaseWinEventBind()
        return @
    setUrl: (url) ->
        if url
            @preUrl = url
        return @
    render: () ->
        @popUp = new popUp()
        @previewer = new previewer(@preUrl)

        html = """
            <div class="previewerContainer"></div>
            <div class="gameInfoContainer">
                <div class="button editorGame">
                    开始制作
                </div>
            </div>
        """

        @popUp.setContent(html)
        @previewerContain = @popUp.contain.querySelector(".previewerContainer")
        @gameInfoContainer = @popUp.contain.querySelector(".gameInfoContainer")

        @previewerContain.appendChild(@previewer.getPreHtml())

        setTimeout () =>
            @open()
        , 0
        return @
    ReleaseWinEventBind: () ->
        editor = @gameInfoContainer.querySelector(".editorGame")
        editor.addEventListener "click", () =>
            location.href = "/game/editor"
    open: () ->
        if @popUp
            @popUp.open()
            @publish("PreviewerWin.open")
        return @
    close: () ->
        if @popUp
            @popUp.close()
            @publish("PreviewerWin.close")
        return @
module.exports = PreviewerWin
