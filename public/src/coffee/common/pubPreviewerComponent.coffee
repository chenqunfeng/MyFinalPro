##
# 预览窗口核心组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"

class Previewer extends com.Components
    constructor: (url) ->
        super()
        @init(url)
    init: (url) ->
        @hasChangedUrl = false
        @setUrl(url)
        return @
    setUrl: (url) ->
        if url
            @url = url
            @hasChangedUrl = true
        return @
    preLoad: () ->
        if @hasChangedUrl
            @contain.setAttribute("src",@url)
            @hasChangedUrl = false
        return @
    reload: (url) ->
        @contain.setAttribute("src",@url)
        return @
    getPreHtml: () ->
        iframe = document.createElement("iframe")
        iframe.setAttribute("class","previewer")
        @contain = iframe
        @preLoad()
        return iframe

module.exports = Previewer
