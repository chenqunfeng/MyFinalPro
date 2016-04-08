##
# 预览组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
popUp = require "./pubPopUpComponent.coffee"
previewer = require "./pubPreviewerComponent.coffee"

class ReleaseWin extends com.Components
    constructor: (url) ->
        super()
        @init(url)
    init: (url) ->
        @setUrl(url)
            .render()
            .eventBind()
            .eventSubscribe()
        return @
    setUrl: (url) ->
        if url
            @preUrl = url
        return @
    render: () ->
        @popUp = new popUp()
        @previewer = new previewer(@preUrl)

        html = """
            <div class='innerRoll'>
                <div class="previewerContainer"></div>
                <div class="gameInfoContainer">
                    <div class="button editorGame">
                        发布
                    </div>
                </div>
                <div class="releaseSuccess">
                    <div class="button gameCenter">
                        个人中心
                    </div>
                </div>
            </div>
        """

        @popUp.setContent(html)
        @inner = @popUp.contain.querySelector(".innerRoll")
        @previewerContain = @popUp.contain.querySelector(".previewerContainer")
        @gameInfoContainer = @popUp.contain.querySelector(".gameInfoContainer")
        @releaseSuccess = @popUp.contain.querySelector(".releaseSuccess")
        @previewerContain.appendChild(@previewer.getPreHtml())

        # setTimeout () =>
        #     @open()
        # , 0
        return @
    eventBind: () ->
        release = @gameInfoContainer.querySelector(".editorGame")
        release.addEventListener "click", () =>
            $.ajax
                type: "post"
                url: "/game/releaseGame"
                data: ""
                dataType: "json"
                success: (data) =>
                    status = data.status
                    if "success" is status
                        @publish("releaseWin.release")
                error: (err) =>
                    console.log err
        gameCenter = @releaseSuccess.querySelector(".gameCenter")
        gameCenter.addEventListener "click", () =>
            location.href = "/game/gameCenter"
        return @
    eventSubscribe: () ->
        @subscribe "releaseWin.release", () =>
            console.log 1
            @switchPage("-900px")
        return @
    switchPage: (x) ->
        # if Math.abs(parseInt(x)) >= 900
        #     @popUp.setCommonEvent(false)
        # else
        #     @popUp.setCommonEvent(true) 
        style = @inner.style
        style.webkitTransition = "-webkit-transform 1s ease";
        style.MozTransition = "-moz-transform 1s ease";
        style.msTransition = "-ms-transform 1s ease";
        style.OTransition = "-o-transform 1s ease";
        style.transition = "transform 1s ease";

        style.webkitTransform = "translateX(#{x})";
        style.MozTransform = "translateX(#{x})";
        style.msTransform = "translateX(#{x})";
        style.OTransform = "translateX(#{x})";
        style.transform = "translateX(#{x})";

    open: () ->
        if @popUp
            @popUp.open()
            @previewer.reload()
            @publish("ReleaseWin.open")
        return @
    close: () ->
        if @popUp
            @popUp.close()
            @publish("ReleaseWin.close")
        return @
module.exports = ReleaseWin
