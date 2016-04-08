##
# 弹出窗组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"
popUp = require "./pubPopUpComponent.coffee"

class PopUp extends com.Components
    constructor: () ->
        super()
        @init()
            .render()
            .popUpEventBind()
    init: () ->
        return @
    setContent: (html) ->
        if html
            @contain.innerHTML = html
        return @
    render: () ->
        pop = document.createElement("div")
        pop.setAttribute("id","popUpWin")
        pop.setAttribute("class","normalTransition realFadeOut")
        html = """
            <div class="popContainer fadeOut normalTransition">
                <div class="closeBtn">
                </div>
                <div class="popContent">
                </div>
            </div>
        """
        pop.innerHTML = html
        @greateContain = pop
        @secondaryContain = pop.querySelector(".popContainer")
        @contain = pop.querySelector(".popContent")
        document.querySelector("body").appendChild pop
        return @
    popUpEventBind: () ->
        close = @contain.parentNode.querySelector(".closeBtn")
        close.addEventListener "click", () =>
            @close()
    open: () ->
        @removeClass(@secondaryContain,"fadeOut")
        @addClass(@secondaryContain,"fadeIn")
        @removeClass(@greateContain,"realFadeOut")
        @addClass(@greateContain,"realFadeIn")
        @publish("popUp.open")
    close: () ->
        @removeClass(@secondaryContain,"fadeIn")
        @addClass(@secondaryContain,"fadeOut")
        @removeClass(@greateContain,"realFadeIn")
        @addClass(@greateContain,"realFadeOut")
        @publish("popUp.close")

module.exports = PopUp